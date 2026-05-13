import React, {
  useEffect,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Search,
  RefreshCcw,
  Mail,
  Phone,
  Briefcase,
  MapPin,
  Clock,
  SendHorizontal,
  Trash2,
  Send,
  X,
  Download,
  GraduationCap,
  User2,
  BadgeCheck,
} from "lucide-react";

const API =
  "http://localhost:5000";

export default function AdminApplications() {
  const [applications, setApplications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [
    selectedApplication,
    setSelectedApplication,
  ] = useState(null);

  const [replyMessage, setReplyMessage] =
    useState("");

  const [replyLoading, setReplyLoading] =
    useState(false);

  /*  FETCH  */

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications =
    async () => {
      try {
        setLoading(true);

        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await fetch(
            `${API}/api/application`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        const data =
          await res.json();

        if (
          data.success
        ) {
          setApplications(
            data.applications ||
            []
          );
        }
      } catch (error) {
        console.log(error);

        alert(
          "Failed to fetch applications"
        );
      } finally {
        setLoading(false);
      }
    };

  /*  DELETE  */

  const deleteApplication =
    async (id) => {
      const confirmDelete =
        window.confirm(
          "Delete this application?"
        );

      if (
        !confirmDelete
      )
        return;

      try {
        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await fetch(
            `${API}/api/application/${id}`,
            {
              method:
                "DELETE",

              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        const data =
          await res.json();

        if (
          data.success
        ) {
          setApplications(
            (prev) =>
              prev.filter(
                (
                  item
                ) =>
                  item._id !==
                  id
              )
          );

          setSelectedApplication(
            null
          );

          alert(
            "Deleted Successfully"
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

  /*  OPEN  */

  const openApplication =
    (application) => {
      setSelectedApplication(
        application
      );

      setReplyMessage(
        ""
      );
    };

  /*  SEND REPLY  */

  const sendReply =
    async () => {
      if (
        !replyMessage.trim()
      ) {
        return alert(
          "Please write reply"
        );
      }

      try {
        setReplyLoading(
          true
        );

        const token =
          localStorage.getItem(
            "token"
          );

        const res =
          await fetch(
            `${API}/api/application/reply/${selectedApplication._id}`,
            {
              method:
                "POST",

              headers: {
                "Content-Type":
                  "application/json",

                Authorization: `Bearer ${token}`,
              },

              body: JSON.stringify(
                {
                  message:
                    replyMessage,
                }
              ),
            }
          );

        const data =
          await res.json();

        if (
          data.success
        ) {
          const updated =
          {
            ...selectedApplication,

            status:
              "replied",

            adminReply:
            {
              message:
                replyMessage,

              repliedAt:
                new Date(),
            },
          };

          setSelectedApplication(
            updated
          );

          setApplications(
            (
              prev
            ) =>
              prev.map(
                (
                  item
                ) =>
                  item._id ===
                    updated._id
                    ? updated
                    : item
              )
          );

          setReplyMessage(
            ""
          );

          alert(
            "Reply Sent Successfully"
          );
        }
      } catch (error) {
        console.log(error);

        alert(
          "Reply failed"
        );
      } finally {
        setReplyLoading(
          false
        );
      }
    };

  /*  FILTER  */

  const filteredApplications =
    applications.filter(
      (item) => {
        const value =
          search.toLowerCase();

        return (
          item.fullName
            ?.toLowerCase()
            .includes(
              value
            ) ||
          item.email
            ?.toLowerCase()
            .includes(
              value
            ) ||
          item.jobTitle
            ?.toLowerCase()
            .includes(
              value
            )
        );
      }
    );

  return (
    <section className="min-h-screen bg-[#020617] text-white p-4 sm:p-6 lg:p-10">

      {/*  HEADER  */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>

          <h1 className="text-3xl sm:text-4xl font-black">
            Job Applications
          </h1>

          <p className="text-white/50 mt-2">
            Manage job
            applications &
            replies
          </p>

        </div>

        <div className="flex flex-col sm:flex-row gap-3">

          {/* SEARCH */}

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            />

            <input
              type="text"
              value={search}
              onChange={(
                e
              ) =>
                setSearch(
                  e.target
                    .value
                )
              }
              placeholder="Search..."
              className="w-full sm:w-[300px] bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 outline-none focus:border-cyan-400"
            />

          </div>

          {/* REFRESH */}

          <button
            onClick={
              fetchApplications
            }
            className="px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold flex items-center justify-center gap-2"
          >

            <RefreshCcw
              size={18}
            />

            Refresh

          </button>

        </div>

      </div>

      {/*  TABLE  */}

      <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden">

        {/* TABLE HEAD */}

        <div className="hidden lg:grid grid-cols-12 gap-4 p-5 border-b border-white/10 text-sm text-white/50 font-semibold">

          <div className="col-span-3">
            Candidate
          </div>

          <div className="col-span-3">
            Job
          </div>

          <div className="col-span-2">
            Experience
          </div>

          <div className="col-span-2">
            Status
          </div>

          <div className="col-span-2 text-right">
            Actions
          </div>

        </div>

        {/* BODY */}

        {loading ? (
          <div className="py-24 text-center text-white/50">
            Loading...
          </div>
        ) : filteredApplications.length ===
          0 ? (
          <div className="py-24 text-center text-white/40">
            No Applications
            Found
          </div>
        ) : (
          <div className="divide-y divide-white/10">

            {filteredApplications.map(
              (
                item,
                index
              ) => (
                <motion.div
                  key={
                    item._id
                  }
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index *
                      0.04,
                  }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 hover:bg-white/[0.03] transition"
                >

                  {/* USER */}

                  <div className="lg:col-span-3">

                    <h3 className="font-semibold">
                      {
                        item.fullName
                      }
                    </h3>

                    <p className="text-sm text-white/50 mt-1 break-all">
                      {
                        item.email
                      }
                    </p>

                  </div>

                  {/* JOB */}

                  <div className="lg:col-span-3">

                    <h3 className="font-medium">
                      {
                        item.jobTitle
                      }
                    </h3>

                    <p className="text-sm text-cyan-400 mt-1">
                      {
                        item.department
                      }
                    </p>

                  </div>

                  {/* EXPERIENCE */}

                  <div className="lg:col-span-2 flex items-center text-white/70">
                    {
                      item.experience ||
                      "N/A"
                    }
                  </div>

                  {/* STATUS */}

                  <div className="lg:col-span-2 flex items-center">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border capitalize
                    ${item.status ===
                          "pending"
                          ? "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
                          : item.status ===
                            "replied"
                            ? "bg-green-500/10 text-green-400 border-green-500/20"
                            : "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                        }`}
                    >
                      {
                        item.status
                      }
                    </span>

                  </div>

                  {/* ACTIONS */}

                  <div className="lg:col-span-2 flex lg:justify-end gap-3">

                    <button
                      onClick={() =>
                        openApplication(
                          item
                        )
                      }
                      className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center hover:bg-cyan-500/20 transition"
                    >

                      <SendHorizontal
                        size={18}
                      />

                    </button>

                    <button
                      onClick={() =>
                        deleteApplication(
                          item._id
                        )
                      }
                      className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center hover:bg-red-500/20 transition"
                    >

                      <Trash2
                        size={18}
                      />

                    </button>

                  </div>

                </motion.div>
              )
            )}

          </div>
        )}

      </div>

      {/*  MODAL  */}

      <AnimatePresence>

        {selectedApplication && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          >

            <div className="h-screen w-screen overflow-hidden">

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  y: 20,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="h-screen w-screen bg-[#111827] border border-white/10 overflow-hidden flex flex-col"
              >

                {/* HEADER */}

                <div className="flex items-center justify-between px-5 sm:px-8 py-5 border-b border-white/10">

                  <div>

                    <h2 className="text-2xl sm:text-3xl font-black text-white">
                      Application Details
                    </h2>

                    <p className="text-white/50 mt-1 text-sm sm:text-base">
                      Candidate information & resume
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      setSelectedApplication(null)
                    }
                    className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-white/10 transition flex items-center justify-center"
                  >

                    <X size={20} />

                  </button>

                </div>

                {/* BODY */}

                <div className="flex-1 overflow-hidden">

                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

                    {/* LEFT SIDE */}

                    <div className="overflow-y-auto border-r border-white/10 p-2 sm:p-4">

                      {/* GRID */}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">

                        <InfoCard
                          icon={<User2 size={18} />}
                          title="Full Name"
                          value={
                            selectedApplication.fullName
                          }
                        />

                        <InfoCard
                          icon={<Mail size={18} />}
                          title="Email"
                          value={
                            selectedApplication.email
                          }
                        />

                        <InfoCard
                          icon={<Phone size={18} />}
                          title="Phone"
                          value={
                            selectedApplication.phone
                          }
                        />

                        <InfoCard
                          icon={<Briefcase size={18} />}
                          title="Job Title"
                          value={
                            selectedApplication.jobTitle
                          }
                        />

                        <InfoCard
                          icon={<Clock size={18} />}
                          title="Experience"
                          value={
                            selectedApplication.experience ||
                            "N/A"
                          }
                        />

                        <InfoCard
                          icon={
                            <GraduationCap size={18} />
                          }
                          title="Department"
                          value={
                            selectedApplication.department
                          }
                        />

                      </div>

                      {/* COVER LETTER */}

                      <div className="mb-8">

                        <h3 className="font-semibold mb-2 text-white">
                          Cover Letter
                        </h3>

                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-white/80 leading-relaxed break-words">

                          {
                            selectedApplication.coverLetter
                          }

                        </div>

                      </div>

                      {/* RESUME */}

                      {selectedApplication.resume && (
                        <div className="mb-4">

                          <a
                            href={`${API}/uploads/${selectedApplication.resume}`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
                          >

                            <Download size={18} />

                            Download Resume

                          </a>

                        </div>
                      )}

                    </div>

                    {/* RIGHT SIDE */}

                    <div className="overflow-y-auto p-2 sm:p-4 flex flex-col">

                      {/* OLD REPLY */}

                      {selectedApplication
                        .adminReply?.message && (
                          <div className="mb-4">

                            <div className="flex items-center gap-2 mb-2 text-green-400">

                              <BadgeCheck size={18} />

                              <h3 className="font-semibold">
                                Previous Reply
                              </h3>

                            </div>

                            <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-white/80 break-words">

                              {
                                selectedApplication
                                  .adminReply
                                  .message
                              }

                              <p className="text-xs text-white/40 mt-2">

                                Replied on{" "}

                                {new Date(
                                  selectedApplication
                                    .adminReply
                                    .repliedAt
                                ).toLocaleString()}

                              </p>

                            </div>

                          </div>
                        )}

                      {/* SEND REPLY */}

                      <div className="mt-4">

                        <h3 className="font-semibold mb-2 text-white">
                          Send Reply
                        </h3>

                        <textarea
                          rows="8"
                          value={replyMessage}
                          onChange={(e) =>
                            setReplyMessage(
                              e.target.value
                            )
                          }
                          placeholder="Write your reply..."
                          className="w-full rounded-2xl border border-white/10 bg-white/5 p-2 outline-none focus:border-cyan-400 resize-none text-white"
                        />

                        <div className="flex flex-col sm:flex-row gap-2 mt-4">

                          <button
                            onClick={sendReply}
                            disabled={replyLoading}
                            className="px-3 py-2 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                          >

                            <Send size={18} />

                            {replyLoading
                              ? "Sending..."
                              : "Send Reply"}

                          </button>

                          <button
                            onClick={() =>
                              setSelectedApplication(
                                null
                              )
                            }
                            className="px-3 py-2 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition text-white"
                          >
                            Close
                          </button>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}

/*  INFO CARD  */

function InfoCard({
  icon,
  title,
  value,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">

      <div className="flex items-center gap-2 text-cyan-400 mb-2">

        {icon}

        <span className="text-sm">
          {title}
        </span>

      </div>

      <p className="text-white/80 break-words">
        {value}
      </p>

    </div>
  );
}