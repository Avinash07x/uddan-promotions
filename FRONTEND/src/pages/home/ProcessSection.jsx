import { useEffect, useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProcessSection({ certifications = [], process = [] }) {
  const sectionRef = useRef(null);
  const lineRefs = useRef([]);

  /* ================= SCROLL + RESPONSIVE ANIMATION ================= */
  useEffect(() => {
    const mm = gsap.matchMedia();

    // 🔥 MOBILE + TABLET (scroll animation)
    mm.add("(max-width: 1023px)", () => {
      lineRefs.current.forEach((line) => {
        if (!line) return;

        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: line,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="
        py-16 sm:py-20 md:py-24 lg:py-32
        relative bg-gradient-to-b from-[#020617] to-[#1e3a8a]
        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/90 to-[#0B1220]/60" />
      </div>

      {/* CONTAINER */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 text-center lg:text-left"
        >
          <div className="container mx-auto px-5 md:px-10 mb-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-white" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/60 font-semibold text-center whitespace-nowrap">
              Methodology
            </span>
            <span className="h-px flex-1 bg-white" />
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
            A simple, effective process — <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              no surprises.
            </span>
          </h2>

          <p className="text-white/60 mt-3 sm:mt-4 max-w-md mx-auto lg:mx-0 text-xs sm:text-sm">
            Ship faster with weekly demos, transparent communication, and ROI dashboards.
          </p>

          {/* CERTIFICATIONS */}
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap justify-center lg:justify-start gap-2">
            {certifications.map((c, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-cyan-400/30 hover:bg-cyan-400/10 transition"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className="lg:col-span-7">
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 md:space-y-10"
          >
            {process.map((p, i) => {
              const Icon = p.icon;

              return (
                <motion.li
                  variants={item}
                  key={i}
                  className="relative flex gap-4 sm:gap-5 md:gap-6 group"
                >
                  {/* ICON */}
                  <div className="relative shrink-0">
                    <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-full bg-white/5 border border-white/10 grid place-items-center group-hover:border-cyan-400/40 group-hover:text-cyan-400 transition">
                      {Icon && <Icon className="w-5 h-5" />}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-[10px] text-white/40 font-mono">
                        {p.num}
                      </span>

                      <h4 className="text-base sm:text-lg md:text-xl font-bold group-hover:text-cyan-400 transition">
                        {p.title}
                      </h4>
                    </div>

                    <p className="text-white/60 text-xs sm:text-sm">
                      {p.desc}
                    </p>

                    {/* LINE ANIMATION */}
                    <div
                      ref={(el) => (lineRefs.current[i] = el)}
                      className="
                        mt-3 h-[2px] w-full
                        bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500
                        origin-left
                        scale-x-0
                        lg:group-hover:scale-x-100
                        transition-transform duration-1000 ease-out
                        shadow-[0_0_8px_rgba(59,130,246,0.4)]
                      "
                    />
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}