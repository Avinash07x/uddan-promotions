import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";

const ServicesSection = ({ services = [], industries = [] }) => {
  const [isPaused, setIsPaused] = useState(false);

  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    margin: "-100px",
    once: false,
  });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-[#020617] to-[#1e3a8a] py-14 sm:py-16 lg:py-24"
    >
      {/* BG BLUR */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADING */}
        <div className="mb-14 text-center">
          <div className="container mx-auto px-5 md:px-10 mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-white" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/60 font-semibold text-center whitespace-nowrap">
              Projects
            </span>
            <span className="h-px flex-1 bg-white" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Services that{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              compound growth
            </span>
          </h2>

          <p className="text-white/50 mt-5 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            From pixel-perfect UIs to reliable backends and campaigns that
            convert,
            <br />
            we ship outcomes—not just deliverables.
            <br />
            <br />
            Tap a CTA or tell us what you need to see tailored recommendations.
          </p>
        </div>

        {/* SERVICES GRID */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.55,
                    ease: "easeOut",
                  },
                },
              }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#020617]/90 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] flex flex-col h-full"
            >
              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.icon}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-1">

                {/* TITLE */}
                <Link
                  to={service.Serviceslink || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 w-fit group/title"
                >
                  <h3 className="text-xl font-semibold text-white transition duration-300 group-hover:text-cyan-400 leading-snug">
                    {service.title}
                  </h3>

                  <span className="text-cyan-400 mt-1 transition duration-300 group-hover/title:translate-x-1">
                    →
                  </span>
                </Link>

                {/* DESCRIPTION */}
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {service.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {service.tags?.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-sm transition duration-300 hover:border-cyan-400/20 hover:text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto pt-6">
                  <Link
                    to={service.Serviceslink || "/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-5 py-2.5 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
                  >
                    Learn More

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </div>

              {/* HOVER GLOW */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -top-24 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* INDUSTRIES */}
        <div className="mt-20 pt-10">
          <div className="container mx-auto px-5 md:px-10 mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-white" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/60 font-semibold text-center whitespace-nowrap">
              Industries we serve
            </span>
            <span className="h-px flex-1 bg-white" />
          </div>

          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className={`flex w-max gap-3 will-change-transform ${isPaused || !isInView ? "" : "animate-marquee"
                }`}
            >
              {[...industries, ...industries].map((item, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap rounded-full bg-[#0B1220] px-4 py-2 text-sm text-white/70 transition hover:border-cyan-400/20 hover:text-cyan-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default React.memo(ServicesSection);
