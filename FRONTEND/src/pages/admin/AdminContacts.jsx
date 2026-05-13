import {
  Mail,
  Phone,
  Trash2,
  Eye,
  Search,
  RefreshCcw,
  Send,
  Building2,
  Briefcase,
  Clock3,
  BadgeDollarSign,
  MessageSquare,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const API = "http://localhost:5000";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedContact, setSelectedContact] =
    useState(null);

  const [replyMessage, setReplyMessage] =
    useState("");

  const [replyLoading, setReplyLoading] =
    useState(false);

  /*  FETCH CONTACTS  */

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);

      const token =
        localStorage.getItem("token");

      const res = await fetch(
        `${API}/api/contact`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      let data = {};
      try {
        data = await res.json();
      } catch (err) {
        console.log("Invalid JSON response");
      }

      if (!res.ok) {
        return alert(
          data.message ||
            "Failed to fetch contacts"
        );
      }

      if (data.success) {
        setContacts(data.contacts || []);
      }
    } catch (error) {
      console.log(error);

      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  /*  DELETE  */

  const deleteContact = async (id) => {
    const confirmDelete = window.confirm(
      "Delete this contact?"
    );

    if (!confirmDelete) return;

    try {
      const token =
        localStorage.getItem("token");

      const res = await fetch(
        `${API}/api/contact/${id}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      let data = {};
      try {
        data = await res.json();
      } catch (err) {
        console.log("Invalid JSON response");
      }

      if (!res.ok) {
        return alert(
          data.message || "Delete failed"
        );
      }

      if (data.success) {
        setContacts((prev) =>
          prev.filter(
            (item) => item._id !== id
          )
        );

        if (
          selectedContact?._id === id
        ) {
          setSelectedContact(null);
        }

        alert(
          "Contact deleted successfully"
        );
      }
    } catch (error) {
      console.log(error);

      alert("Server Error");
    }
  };

  /*  MARK READ  */

  const markAsRead = async (id) => {
    try {
      const token =
        localStorage.getItem("token");

      const res = await fetch(
        `${API}/api/contact/read/${id}`,
        {
          method: "PUT",

          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      try {
        await res.json();
      } catch (err) {
        console.log("Invalid JSON response");
      }
    } catch (error) {
      console.log(error);
    }
  };

  /*  OPEN CONTACT  */

  const openContact = async (
    contact
  ) => {
    setReplyMessage("");

    if (
      contact.status === "unread"
    ) {
      await markAsRead(contact._id);

      const updatedContact = {
        ...contact,
        status: "read",
      };

      setSelectedContact(
        updatedContact
      );

      setContacts((prev) =>
        prev.map((item) =>
          item._id === contact._id
            ? updatedContact
            : item
        )
      );
    } else {
      setSelectedContact(contact);
    }
  };

  /*  SEND REPLY  */

  const sendReply = async () => {
    if (
      !replyMessage.trim()
    ) {
      return alert(
        "Please write reply message"
      );
    }

    if (!selectedContact?._id) {
      return alert(
        "Contact not selected"
      );
    }

    try {
      setReplyLoading(true);

      const token =
        localStorage.getItem("token");

      const res = await fetch(
        `${API}/api/contact/reply/${selectedContact._id}`,
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",

            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            message:
              replyMessage.trim(),
          }),
        }
      );

      /* ===== FIX JSON ERROR ===== */

      let data = {};

      try {
        data = await res.json();
      } catch (err) {
        console.log(
          "Invalid JSON response"
        );
      }

      /* ===== ERROR ===== */

      if (!res.ok) {
        return alert(
          data.message ||
            `Server Error (${res.status})`
        );
      }

      /* ===== SUCCESS ===== */

      if (data.success) {
        const updatedContact = {
          ...selectedContact,

          status: "replied",

          reply: {
            message:
              replyMessage,

            repliedAt:
              new Date(),
          },
        };

        setSelectedContact(
          updatedContact
        );

        setContacts((prev) =>
          prev.map((item) =>
            item._id ===
            selectedContact._id
              ? updatedContact
              : item
          )
        );

        setReplyMessage("");

        alert(
          "Reply Sent Successfully 🚀"
        );
      }
    } catch (error) {
      console.log(error);

      alert(
        "Server Error while sending reply"
      );
    } finally {
      setReplyLoading(false);
    }
  };

  /*  FILTER  */

  const filteredContacts =
    contacts.filter((item) => {
      const value =
        search.toLowerCase();

      return (
        item.name
          ?.toLowerCase()
          .includes(value) ||
        item.email
          ?.toLowerCase()
          .includes(value) ||
        item.phone
          ?.toLowerCase()
          .includes(value)
      );
    });

  return (
    <section className="min-h-screen bg-[#0B1120] text-white p-4 sm:p-6 lg:p-10">

      {/*  HEADER  */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>

          <h2 className="text-3xl sm:text-4xl font-black">
            Contact Messages
          </h2>

          <p className="text-white/50 mt-2">
            Manage enquiries, replies &
            contact status
          </p>

        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

          {/* SEARCH */}

          <div className="relative w-full sm:w-[320px]">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search contacts..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 outline-none focus:border-cyan-400 transition"
            />

          </div>

          {/* REFRESH */}

          <button
            onClick={fetchContacts}
            className="bg-cyan-500 hover:bg-cyan-400 transition text-black px-5 py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold"
          >

            <RefreshCcw size={18} />

            Refresh

          </button>

        </div>

      </div>

      {/*  TABLE  */}

      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

        {/* TABLE HEADER */}

        <div className="hidden lg:grid grid-cols-12 gap-4 p-5 border-b border-white/10 text-white/50 text-sm font-semibold">

          <div className="col-span-3">
            User
          </div>

          <div className="col-span-3">
            Email
          </div>

          <div className="col-span-2">
            Phone
          </div>

          <div className="col-span-2">
            Status
          </div>

          <div className="col-span-2 text-right">
            Actions
          </div>

        </div>

        {/* LOADING */}

        {loading ? (
          <div className="py-24 text-center text-white/50">
            Loading contacts...
          </div>
        ) : filteredContacts.length ===
          0 ? (
          <div className="py-24 text-center text-white/40">
            No contacts found
          </div>
        ) : (
          <div className="divide-y divide-white/10">

            {filteredContacts.map(
              (contact, index) => (
                <motion.div
                  key={contact._id}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay:
                      index * 0.03,
                  }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-5 p-5 hover:bg-white/5 transition"
                >

                  {/* USER */}

                  <div className="lg:col-span-3">

                    <h3 className="font-semibold break-words">
                      {contact.name}
                    </h3>

                    <p className="text-xs text-white/40 mt-1">
                      {new Date(
                        contact.createdAt
                      ).toLocaleDateString()}
                    </p>

                  </div>

                  {/* EMAIL */}

                  <div className="lg:col-span-3 flex items-center gap-2 text-white/70 break-all">

                    <Mail size={16} />

                    {contact.email}

                  </div>

                  {/* PHONE */}

                  <div className="lg:col-span-2 flex items-center gap-2 text-white/70">

                    <Phone size={16} />

                    {contact.phone ||
                      "N/A"}

                  </div>

                  {/* STATUS */}

                  <div className="lg:col-span-2 flex items-center">

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold capitalize border
                      ${
                        contact.status ===
                        "unread"
                          ? "bg-red-500/20 text-red-400 border-red-500/20"
                          : contact.status ===
                            "read"
                          ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/20"
                          : "bg-green-500/20 text-green-400 border-green-500/20"
                      }`}
                    >
                      {contact.status}
                    </span>

                  </div>

                  {/* ACTIONS */}

                  <div className="lg:col-span-2 flex lg:justify-end gap-3">

                    <button
                      onClick={() =>
                        openContact(
                          contact
                        )
                      }
                      className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center hover:bg-cyan-500/20 transition"
                    >

                      <Eye size={18} />

                    </button>

                    <button
                      onClick={() =>
                        deleteContact(
                          contact._id
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

        {selectedContact && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm overflow-y-auto"
          >

            <div className="min-h-screen flex items-center justify-center p-3 sm:p-5">

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                className="w-full max-w-4xl rounded-3xl border border-white/10 bg-[#111827] p-4 sm:p-6 lg:p-8 max-h-[95vh] overflow-y-auto"
              >

                {/* TOP */}

                <div className="flex items-start justify-between gap-4 mb-8">

                  <div>

                    <h2 className="text-2xl sm:text-3xl font-black">
                      Contact Details
                    </h2>

                    <p className="text-white/50 mt-2 text-sm sm:text-base">
                      Inquiry &
                      conversation
                      details
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      setSelectedContact(
                        null
                      )
                    }
                    className="w-11 h-11 rounded-2xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition flex-shrink-0"
                  >

                    <X size={20} />

                  </button>

                </div>

                {/* INFO GRID */}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

                  <InfoCard
                    icon={
                      <Mail size={18} />
                    }
                    title="Email"
                    value={
                      selectedContact.email
                    }
                  />

                  <InfoCard
                    icon={
                      <Phone size={18} />
                    }
                    title="Phone"
                    value={
                      selectedContact.phone ||
                      "N/A"
                    }
                  />

                  <InfoCard
                    icon={
                      <Building2 size={18} />
                    }
                    title="Company"
                    value={
                      selectedContact.company ||
                      "N/A"
                    }
                  />

                  <InfoCard
                    icon={
                      <Briefcase size={18} />
                    }
                    title="Help Type"
                    value={
                      selectedContact.helpType ||
                      "N/A"
                    }
                  />

                  <InfoCard
                    icon={
                      <BadgeDollarSign size={18} />
                    }
                    title="Budget"
                    value={
                      selectedContact.budget ||
                      "N/A"
                    }
                  />

                  <InfoCard
                    icon={
                      <Clock3 size={18} />
                    }
                    title="Best Time"
                    value={
                      selectedContact.bestTime ||
                      "N/A"
                    }
                  />

                </div>

                {/* MESSAGE */}

                <div className="mb-8">

                  <div className="flex items-center gap-2 mb-3">

                    <MessageSquare
                      size={18}
                      className="text-cyan-400"
                    />

                    <h3 className="font-semibold">
                      User Message
                    </h3>

                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/80 leading-relaxed break-words">

                    {
                      selectedContact.message
                    }

                  </div>

                </div>

                {/* PREVIOUS REPLY */}

                {selectedContact.reply
                  ?.message && (
                  <div className="mb-8">

                    <div className="flex items-center gap-2 mb-3">

                      <Send
                        size={18}
                        className="text-green-400"
                      />

                      <h3 className="font-semibold text-green-400">
                        Previous Reply
                      </h3>

                    </div>

                    <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-5 text-white/80 break-words">

                      {
                        selectedContact
                          .reply.message
                      }

                      <p className="text-xs text-white/40 mt-3">
                        Replied on{" "}
                        {new Date(
                          selectedContact
                            .reply
                            .repliedAt
                        ).toLocaleString()}
                      </p>

                    </div>

                  </div>
                )}

                {/* REPLY */}

                <div>

                  <h3 className="font-semibold mb-3">
                    Send Reply
                  </h3>

                  <textarea
                    rows="6"
                    value={
                      replyMessage
                    }
                    onChange={(e) =>
                      setReplyMessage(
                        e.target
                          .value
                      )
                    }
                    placeholder="Write your reply here..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none resize-none focus:border-cyan-400 text-sm sm:text-base"
                  />

                  <div className="flex flex-col sm:flex-row gap-3 mt-4">

                    <button
                      onClick={
                        sendReply
                      }
                      disabled={
                        replyLoading
                      }
                      className="bg-cyan-500 hover:bg-cyan-400 transition text-black px-6 py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold disabled:opacity-60"
                    >

                      <Send
                        size={18}
                      />

                      {replyLoading
                        ? "Sending..."
                        : "Send Reply"}

                    </button>

                    <button
                      onClick={() =>
                        setSelectedContact(
                          null
                        )
                      }
                      className="bg-white/5 border border-white/10 hover:bg-white/10 transition px-6 py-3 rounded-2xl"
                    >
                      Close
                    </button>

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

      <p className="text-white/80 break-words text-sm sm:text-base">
        {value}
      </p>

    </div>
  );
}