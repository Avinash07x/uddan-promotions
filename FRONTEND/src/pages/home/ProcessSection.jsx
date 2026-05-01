import { motion } from "framer-motion";

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
  return (
    <section
      id="process"
      className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-[#2D374E] border-y border-white/10 overflow-hidden"
    >
      {/*   Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220] via-[#0B1220]/90 to-[#0B1220]/60" />

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]"
        />
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 blur-[140px]"
        />
      </div>

      {/*   Responsive Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-start">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 text-center lg:text-left"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/40 mb-3">
            Methodology
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white leading-tight">
            A simple, effective process — <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              no surprises.
            </span>
          </h2>

          <p className="text-white/60 mt-3 sm:mt-4 max-w-md mx-auto lg:mx-0 text-xs sm:text-sm leading-relaxed">
            Ship faster with weekly demos, transparent communication, and ROI dashboards.
          </p>

          {/* Certifications */}
          <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap justify-center lg:justify-start gap-2">
            {certifications.map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="text-[10px] sm:text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-cyan-400/30 hover:bg-cyan-400/10 transition duration-300 cursor-pointer"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* RIGHT */}
        <div className="lg:col-span-7 relative">
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
                  key={p.num || i}
                  className="relative flex gap-4 sm:gap-5 md:gap-6 group"
                >
                  {/* ICON */}
                  <div className="relative shrink-0">
                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-300" />

                    <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] md:w-[56px] md:h-[56px] rounded-full bg-white/5 border border-white/10 grid place-items-center text-white relative z-10
                      group-hover:text-cyan-400 group-hover:border-cyan-400/40
                      transition-all duration-300
                      group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
                    >
                      {Icon && <Icon className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="pt-1 flex-1">

                    <div className="flex items-baseline gap-2 sm:gap-3 mb-1">
                      <span className="text-[9px] sm:text-xs font-mono text-white/40 tracking-widest">
                        {p.num}
                      </span>

                      <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition">
                        {p.title}
                      </h4>
                    </div>

                    <p className="text-white/60 leading-relaxed max-w-xl text-[11px] sm:text-xs md:text-sm group-hover:text-white/80 transition">
                      {p.desc}
                    </p>


                    <div className="mt-3 h-[2px] w-full 
                      bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 
                      origin-left scale-x-0 group-hover:scale-x-100 
                      transition-transform duration-[2000ms] ease-linear 
                      shadow-[0_0_8px_rgba(59,130,246,0.4)]"
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