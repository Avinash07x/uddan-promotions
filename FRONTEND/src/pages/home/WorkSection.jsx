import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

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
    transition: { duration: 0.6, ease: "easeOut" },
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
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  }

  function reset() {
    setStyle({ transform: "rotateX(0deg) rotateY(0deg)" });
  }

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-300 will-change-transform"
      style={style}
    >
      {children}
    </div>
  );
}

// ─── Component ─────────────────────────
export default function WorkSection({ work }) {
  return (
    <section id="work" className="py-24 bg-[#1A202C] md:py-32 relative overflow-hidden">

      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-500/10 blur-[140px] -z-10" />

      <div className="container mx-auto px-5 md:px-10">

        {/* Heading */}
        <div className="mb-14 md:mb-20 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Systems driving{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
              real impact
            </span>
          </h2>
          <p className="text-white/50 mt-4 max-w-2xl mx-auto text-sm">
            A snapshot of platforms our team has shipped across SaaS and growth systems.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {work.map((w) => {
            const Icon = w.icon;

            return (
              <motion.div key={w.name} variants={fadeUp}>
                <TiltCard>
                  <div className="group relative rounded-xl p-[1px] bg-[#2D374E] hover:from-orange-400/40 hover:to-pink-500/40 transition-all duration-300">

                    <div className="bg-[#0F172A]/80 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 relative h-full">

                      {/* IMAGE / TOP */}
                      <div className="relative h-52 overflow-hidden">

                        {/* Gradient BG */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${w.gradient} group-hover:scale-110 transition duration-700`} />

                        {/* Shine Sweep */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                          <div className="absolute -left-40 top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1200ms]" />
                        </div>

                        {/* Grid overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />

                        {/* Big image */}
                        <img src={Icon} alt={w.name} className="w-full h-full object-cover" />

                        {/* Chips */}
                        <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
                          {w.chips.map((c) => (
                            <span
                              key={c}
                              className="text-[12px] font-semibold text-black px-2 py-0.5 rounded bg-white border border-white/10  backdrop-blur"
                            >
                              {c}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="p-7">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-orange-400 mb-2">
                          {w.tag}
                        </p>

                        <h3 className="text-2xl font-bold text-white mb-3">
                          {w.name}
                        </h3>

                        <p className="text-sm text-white/60 mb-5 leading-relaxed">
                          {w.desc}
                        </p>

                        {/* CTA */}
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                          View case study
                          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition" />
                        </span>
                      </div>

                      {/* Hover Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-orange-500/10 to-pink-500/10" />
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