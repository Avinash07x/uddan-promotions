import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// ─── Animations ─────────────────────────
const staggerParent = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// ─── Tilt Effect ─────────────────────────
function TiltCard({ children }) {
  const [style, setStyle] = useState({});

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y - rect.height / 2) / 18;
    const rotateY = (x - rect.width / 2) / 18;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  }

  function reset() {
    setStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
    });
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-300 will-change-transform h-full"
      style={style}
    >
      {children}
    </div>
  );
}

// ─── Component ─────────────────────────
export default function WorkSection({ work = [] }) {
  return (
    <section
      id="work"
      className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-b from-[#1e3a8a] to-[#020617]"
    >
      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[140px] -z-10" />

      <div className="container mx-auto px-5 md:px-10">

        {/* Heading */}
        <div className="mb-14 md:mb-20 text-center">
          <div className="container mx-auto px-5 md:px-10 mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-white" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/60 font-semibold text-center whitespace-nowrap">
              Selected Work
            </span>
            <span className="h-px flex-1 bg-white" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Systems driving{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              real impact
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
            A snapshot of projects our team has delivered recently.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {work.map((w, index) => {
            const Icon = w.icon;

            return (
              <motion.div
                key={w.name || index}
                variants={fadeUp}
                className="h-full"
              >
                <TiltCard>
                  <div className="group relative h-full rounded-3xl border border-white/10 bg-[#0F172A]/80 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-orange-400/30 hover:shadow-[0_0_40px_rgba(249,115,22,0.18)]">

                    {/* IMAGE */}
                    <div className="relative h-56 overflow-hidden">

                      {/* Gradient BG */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${w.gradient} transition duration-700 group-hover:scale-110`}
                      />

                      {/* Grid Overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />

                      {/* Shine Effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 overflow-hidden">
                        <div className="absolute -left-[120%] top-0 h-full w-[80%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-[1200ms] group-hover:left-[140%]" />
                      </div>

                      {/* Image */}
                      <img
                        src={Icon}
                        alt={w.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent" />

                      {/* Chips */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                        {w.chips?.map((c, i) => (
                          <span
                            key={i}
                            className="rounded-full border border-white/10 bg-white px-2.5 py-1 text-[11px] font-semibold text-black backdrop-blur"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="flex h-[calc(100%-14rem)] flex-col p-7">

                      {/* TAG */}
                      <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-orange-400">
                        {w.tag}
                      </p>

                      {/* TITLE */}
                      <h3 className="mb-3 text-2xl font-bold text-white leading-snug">
                        {w.name}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="text-sm leading-relaxed text-white/60">
                        {w.desc}
                      </p>

                      {/* CTA */}
                      <div className="mt-auto pt-6">
                        <Link
                          to="/about/contact-us#ContactForm"
                          className="group/link inline-flex items-center gap-2 text-sm font-medium text-white transition-all duration-300 hover:gap-3"
                        >
                          <span className="relative">
                            View case study

                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-orange-400 transition-all duration-300 group-hover/link:w-full" />
                          </span>

                          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/link:rotate-45 group-hover/link:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Hover Glow */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10" />
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}