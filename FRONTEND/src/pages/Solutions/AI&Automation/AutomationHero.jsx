import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Server, Activity, Zap } from "lucide-react";

const badges = [
  "10x faster release cycles",
  "Built-in DevSecOps controls",
  "99.9% availability benchmarks",
];

export default function AutomationHero() {
  const ref = useRef(null);

  //  Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#0B1220] text-white py-24 px-6 md:px-16"
    >
      {/*  Glow Background */}
      <motion.div
        style={{ y }}
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-500/20 blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/*  LEFT  */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Tag */}
          <p className="text-indigo-300 text-sm mb-4">
            Platform engineers • SREs • Automation architects
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            DevOps & Automation that{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              supercharges delivery
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-lg max-w-xl">
            Build high-velocity engineering systems with CI/CD pipelines,
            infrastructure as code and observability platforms that keep teams
            shipping faster with confidence.
          </p>

          {/*  Badges */}
          {/* <div className="flex flex-wrap gap-3 mt-6">
            {badges.map((b, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="px-4 py-2 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
              >
                {b}
              </motion.span>
            ))}
          </div> */}
          <ul className="mt-6 space-y-3 text-white/70 text-sm">
            {badges.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                ✔ {f}
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-110 transition shadow-lg">
              Plan a Pipeline Audit
            </button>

            <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
              Explore Reliability Wins
            </button>
          </div>
        </motion.div>

        {/*  RIGHT  */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-xl">

            <div className="flex items-center gap-2 mb-4">
              <Server className="text-indigo-400" size={20} />
              <h3 className="text-sm font-semibold">
                Unified delivery platform
              </h3>
            </div>

            {/*  Animated Dashboard */}
            <div className="bg-gradient-to-br from-indigo-200/20 to-blue-300/20 p-6 rounded-xl space-y-4">

              {/* Code Block */}
              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-black/60 p-3 rounded-lg text-xs font-mono"
              >
                deploy.pipeline.run()
              </motion.div>

              {/* Progress Bars */}
              <div className="space-y-2">
                {[70, 50, 90].map((w, i) => (
                  <motion.div
                    key={i}
                    initial={{ width: 0 }}
                    animate={{ width: `${w}%` }}
                    transition={{ duration: 1.5, delay: i * 0.3 }}
                    className="h-2 bg-green-400 rounded-full"
                  />
                ))}
              </div>

              {/* Floating Icons */}
              <div className="flex justify-between mt-4">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="text-yellow-400" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <Activity className="text-cyan-400" />
                </motion.div>
              </div>
            </div>

            {/* Floating Insight */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 text-xs text-indigo-300"
            >
              CI/CD + observability dashboards
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}