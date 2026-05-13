import React, {
  useEffect,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Building2,
  Users,
  GraduationCap,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

export default function Careers() {

  // STATES
  const [jobs, setJobs] =
    useState([]);

  const [openIndex, setOpenIndex] =
    useState(null);

  const navigate =
    useNavigate();

  // FETCH JOBS
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/job"
      );

      const data =
        await res.json();

      if (data.success) {
        setJobs(data.jobs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // POSTED TIME
  const getPostedTime = (
    createdAt
  ) => {
    if (!createdAt)
      return "Today";

    const createdDate =
      new Date(createdAt);

    const currentDate =
      new Date();

    const diffTime =
      currentDate -
      createdDate;

    const diffDays =
      Math.floor(
        diffTime /
        (1000 *
          60 *
          60 *
          24)
      );

    if (diffDays === 0)
      return "Today";

    if (diffDays === 1)
      return "1 Day Ago";

    if (diffDays < 7)
      return `${diffDays} Days Ago`;

    const diffWeeks =
      Math.floor(
        diffDays / 7
      );

    if (diffWeeks === 1)
      return "1 Week Ago";

    if (diffWeeks < 5)
      return `${diffWeeks} Weeks Ago`;

    const diffMonths =
      Math.floor(
        diffDays / 30
      );

    if (diffMonths === 1)
      return "1 Month Ago";

    return `${diffMonths} Months Ago`;
  };

  return (
    <div className="bg-[#020617] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-16 overflow-hidden">

        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-3xl rounded-full" />

        <div className="relative max-w-5xl mx-auto text-center">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm">

              <Sparkles size={16} />

              We're Hiring Amazing Talent

            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

              Build Your Future

              <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                With Our Team
              </span>

            </h1>

            <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Join a fast-growing technology company where innovation,
              creativity, and growth come together.
            </p>

          </motion.div>

        </div>

      </section>

      {/* JOBS */}
      <section className="py-20 px-4 sm:px-6 lg:px-12">

        <div className="max-w-7xl mx-auto">

          <div className="text-center">

            <h2 className="text-4xl font-bold">
              Open Positions
            </h2>

            <p className="mt-4 text-gray-400">
              Explore exciting opportunities with us.
            </p>

          </div>

          {/* EMPTY */}
          {jobs.length === 0 ? (
            <div className="text-center text-white/50 py-20">
              No jobs available
            </div>
          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-14">

              {jobs.map(
                (job, i) => (
                  <motion.div
                    key={
                      job._id || i
                    }
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay:
                        i * 0.05,
                    }}
                    viewport={{
                      once: true,
                    }}
                    whileHover={{
                      y: -5,
                    }}
                    className="relative group rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-lg overflow-hidden"
                  >

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />

                    <div className="relative flex flex-col h-full p-5">

                      {/* TOP */}
                      <div className="flex items-center justify-between">

                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                          {job.type}
                        </span>

                        <span className="text-xs text-gray-500">
                          {
                            getPostedTime(
                              job.createdAt
                            )
                          }
                        </span>

                      </div>

                      {/* TITLE */}
                      <div className="mt-5">

                        <h3 className="text-2xl font-bold">
                          {job.title}
                        </h3>

                        <p className="mt-1 text-cyan-300 text-sm">
                          {
                            job.department
                          }
                        </p>

                      </div>

                      {/* INFO */}
                      <div className="mt-6 space-y-3 text-sm text-gray-400">

                        <div className="flex items-center gap-2">
                          <MapPin
                            size={15}
                            className="text-cyan-400"
                          />
                          {job.location}
                        </div>

                        <div className="flex items-center gap-2">
                          <DollarSign
                            size={15}
                            className="text-cyan-400"
                          />
                          {job.salary}
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock
                            size={15}
                            className="text-cyan-400"
                          />
                          {
                            job.experience
                          }
                        </div>

                        <div className="flex items-center gap-2">
                          <Briefcase
                            size={15}
                            className="text-cyan-400"
                          />
                          {job.mode}
                        </div>

                      </div>

                      {/* DESCRIPTION */}
                      <p className="mt-5 text-gray-400 text-sm leading-relaxed line-clamp-3">
                        {
                          job.description
                        }
                      </p>

                      {/* SKILLS */}
                      {job.skills
                        ?.length >
                        0 && (
                          <div className="flex flex-wrap gap-2 mt-5">

                            {job.skills
                              .slice(
                                0,
                                4
                              )
                              .map(
                                (
                                  skill,
                                  idx
                                ) => (
                                  <span
                                    key={
                                      idx
                                    }
                                    className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs text-gray-300"
                                  >
                                    {
                                      skill
                                    }
                                  </span>
                                )
                              )}

                          </div>
                        )}

                      {/* DETAILS BTN */}
                      <button
                        onClick={() =>
                          setOpenIndex(
                            openIndex ===
                              i
                              ? null
                              : i
                          )
                        }
                        className="mt-5 flex items-center justify-between w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition"
                      >

                        <span className="text-sm font-medium">
                          Details
                        </span>

                        {openIndex ===
                        i ? (
                          <ChevronUp
                            size={18}
                          />
                        ) : (
                          <ChevronDown
                            size={18}
                          />
                        )}

                      </button>

                      {/* DETAILS */}
                      <AnimatePresence>

                        {openIndex ===
                          i && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                              }}
                              animate={{
                                height:
                                  "auto",
                                opacity: 1,
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                              }}
                              transition={{
                                duration: 0.25,
                              }}
                              className="overflow-hidden"
                            >

                              <div className="pt-4 space-y-3 text-sm text-gray-300">

                                <div className="flex items-center gap-2">
                                  <Building2
                                    size={
                                      15
                                    }
                                    className="text-cyan-400"
                                  />
                                  {
                                    job.department
                                  }
                                </div>

                                <div className="flex items-center gap-2">
                                  <Users
                                    size={
                                      15
                                    }
                                    className="text-cyan-400"
                                  />
                                  {
                                    job.openings
                                  }{" "}
                                  Openings
                                </div>

                                <div className="flex items-center gap-2">
                                  <GraduationCap
                                    size={
                                      15
                                    }
                                    className="text-cyan-400"
                                  />
                                  {
                                    job.qualification
                                  }
                                </div>

                              </div>

                            </motion.div>
                          )}

                      </AnimatePresence>

                      {/* FOOTER */}
                      <div className="mt-auto pt-6 flex items-center justify-between">

                        <div>

                          <p className="text-xs text-gray-500">
                            Openings
                          </p>

                          <p className="text-lg font-bold">
                            {
                              job.openings
                            }
                          </p>

                        </div>

                        <button
                          onClick={() =>
                            navigate(
                              `/apply/${job._id}`,
                              {
                                state:
                                  {
                                    job,
                                  },
                              }
                            )
                          }
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-sm font-bold hover:scale-105 transition"
                        >
                          Apply
                        </button>

                      </div>

                    </div>

                  </motion.div>
                )
              )}

            </div>
          )}

        </div>

      </section>

    </div>
  );
}