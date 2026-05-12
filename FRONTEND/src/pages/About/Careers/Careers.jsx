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

export default function Careers() {
  //  STATES 
  const [jobs, setJobs] =
    useState([]);

  const [openIndex, setOpenIndex] =
    useState(null);

  //  FETCH JOBS 
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

  //  AUTO POSTED DATE 
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
      currentDate - createdDate;

    const diffDays =
      Math.floor(
        diffTime /
        (1000 *
          60 *
          60 *
          24)
      );

    if (diffDays === 0) {
      return "Today";
    }

    if (diffDays === 1) {
      return "1 Day Ago";
    }

    if (diffDays < 7) {
      return `${diffDays} Days Ago`;
    }

    const diffWeeks =
      Math.floor(
        diffDays / 7
      );

    if (diffWeeks === 1) {
      return "1 Week Ago";
    }

    if (diffWeeks < 5) {
      return `${diffWeeks} Weeks Ago`;
    }

    const diffMonths =
      Math.floor(
        diffDays / 30
      );

    if (diffMonths === 1) {
      return "1 Month Ago";
    }

    return `${diffMonths} Months Ago`;
  };

  return (
    <div className="bg-[#020617] text-white overflow-hidden">

      {/*  HERO  */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 md:px-16 overflow-hidden">

        {/* GLOW */}
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

            <div className="flex flex-wrap justify-center gap-4 mt-10">

              <button className="px-8 py-4 rounded-xl bg-cyan-400 text-black font-bold hover:scale-105 transition">
                Explore Jobs
              </button>

              <button className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                Life at Company
              </button>

            </div>

          </motion.div>
        </div>
      </section>

      {/*  JOBS  */}
      <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden">

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center max-w-2xl mx-auto">

            <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
              Careers
            </span>

            <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Open Positions
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
              Explore exciting career opportunities and grow with our innovative team.
            </p>

          </div>

          {/* EMPTY */}
          {jobs.length === 0 ? (
            <div className="text-center text-white/50 py-20">
              No jobs available
            </div>
          ) : (

            /* GRID */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6 mt-12 sm:mt-14">

              {jobs.map((job, i) => (
                <motion.div
                  key={job._id || i}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.06,
                  }}
                  viewport={{
                    once: true,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                  className="relative group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-lg overflow-hidden"
                >

                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" />

                  {/* content */}
                  <div className="relative flex flex-col h-full p-4 sm:p-5">

                    {/* top */}
                    <div className="flex items-center justify-between gap-2">

                      <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                        {job.type}
                      </span>

                      <span className="text-[10px] text-gray-500">
                        {getPostedTime(job.createdAt)}
                      </span>

                    </div>

                    {/* title */}
                    <div className="mt-4">

                      <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                        {job.title}
                      </h3>

                      <p className="mt-1 text-cyan-300 text-xs sm:text-sm">
                        {job.department}
                      </p>

                    </div>

                    {/* info */}
                    <div className="mt-5 space-y-2.5 text-xs sm:text-sm text-gray-400">

                      <div className="flex items-center gap-2">
                        <MapPin
                          size={14}
                          className="text-cyan-400 shrink-0"
                        />
                        <span className="truncate">
                          {job.location}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <DollarSign
                          size={14}
                          className="text-cyan-400 shrink-0"
                        />
                        <span>{job.salary}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Clock
                          size={14}
                          className="text-cyan-400 shrink-0"
                        />
                        <span>{job.experience}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Briefcase
                          size={14}
                          className="text-cyan-400 shrink-0"
                        />
                        <span>{job.mode}</span>
                      </div>

                    </div>

                    {/* description */}
                    <p className="mt-5 text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {job.description}
                    </p>

                    {/* skills */}
                    {job.skills?.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-5">

                        {job.skills
                          .slice(0, 3)
                          .map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] sm:text-[11px] text-gray-300"
                            >
                              {skill}
                            </span>
                          ))}

                      </div>
                    )}

                    {/* expand */}
                    <button
                      onClick={() =>
                        setOpenIndex(
                          openIndex === i
                            ? null
                            : i
                        )
                      }
                      className="mt-5 flex items-center justify-between w-full px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition"
                    >

                      <span className="text-xs sm:text-sm font-medium">
                        Details
                      </span>

                      {openIndex === i ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}

                    </button>

                    {/* details */}
                    <AnimatePresence>

                      {openIndex === i && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
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

                          <div className="pt-4 space-y-3 text-xs sm:text-sm text-gray-300">

                            <div className="flex items-center gap-2">
                              <Building2
                                size={14}
                                className="text-cyan-400"
                              />
                              {job.department}
                            </div>

                            <div className="flex items-center gap-2">
                              <Users
                                size={14}
                                className="text-cyan-400"
                              />
                              {job.openings}
                            </div>

                            <div className="flex items-center gap-2">
                              <GraduationCap
                                size={14}
                                className="text-cyan-400"
                              />
                              {job.qualification}
                            </div>

                          </div>

                        </motion.div>
                      )}

                    </AnimatePresence>

                    {/* footer */}
                    <div className="mt-auto pt-6 flex items-center justify-between gap-3">

                      <div>

                        <p className="text-[10px] text-gray-500">
                          Openings
                        </p>

                        <p className="text-sm font-semibold">
                          {job.openings}
                        </p>

                      </div>

                      <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-xs sm:text-sm font-semibold hover:scale-105 transition">
                        Apply
                      </button>

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>
          )}

        </div>
      </section>

      {/*  CTA  */}
      <section className="relative py-24 px-6 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />

        <div className="relative max-w-4xl mx-auto text-center">

          <h3 className="text-4xl font-bold">
            Didn’t Find Your Role?
          </h3>

          <p className="mt-6 text-gray-400 text-lg">
            Send us your resume and we’ll contact you when a suitable
            opportunity becomes available.
          </p>

          <button className="mt-10 px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold hover:scale-105 transition">
            Submit Resume
          </button>

        </div>

      </section>

    </div>
  );
}