import { motion } from "framer-motion";
import {
  Cloud,
  Server,
  Zap,
  DollarSign,
} from "lucide-react";

const badges = [
  "200+ workloads migrated",
  "40% faster deployments",
  "30% cost savings via FinOps",
];

// const features = [
//   "Multi-cloud architecture across AWS, Azure & GCP",
//   "CI/CD pipelines, DevOps automation & infrastructure as code",
//   "Observability, monitoring & performance optimisation at scale",
// ];

export default function CloudHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#0B1220] text-white py-24 px-6 md:px-16">

      {/* 🔥 Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Tag */}
          <p className="text-blue-300 text-sm mb-4">
            Cloud architects • SREs • FinOps strategists
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Cloud solutions that power{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              always-on experiences
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-lg max-w-xl">
            Design, migrate and optimise your infrastructure with secure,
            scalable multi-cloud systems. We build automation pipelines,
            observability stacks and cost-efficient architectures that scale
            with your business.
          </p>

          {/* 🔥 Badges */}
          {/* <div className="flex flex-wrap gap-3 mt-6">
            {features.map((b, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="px-4 py-2 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
              >
                {b}
              </motion.span>
            ))}
          </div> */}

          {/* Features */}
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
              Plan Your Migration
            </button>

            <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
              Explore Cloud Wins
            </button>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Card */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">

            <div className="flex items-center gap-2 mb-4">
              <Cloud className="text-cyan-400" size={20} />
              <h3 className="text-sm font-semibold">
                Multi-cloud control tower
              </h3>
            </div>

            {/* Dashboard */}
            <div className="bg-gradient-to-br from-blue-200/20 to-cyan-300/20 p-6 rounded-xl">

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500/30 p-4 rounded-lg text-xs">
                  Compute ⚡
                </div>
                <div className="bg-white/20 p-4 rounded-lg text-xs">
                  Storage 💾
                </div>
                <div className="bg-green-500/30 p-4 rounded-lg text-xs">
                  Monitoring 📊
                </div>
                <div className="bg-white/20 p-4 rounded-lg text-xs">
                  Cost 💰
                </div>
              </div>
            </div>

            {/* Floating Insight */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 text-xs text-cyan-300"
            >
              Unified observability & automation
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}