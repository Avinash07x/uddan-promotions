import { motion } from "framer-motion";
import { BarChart3, Lightbulb, Rocket } from "lucide-react";

const features = [
  {
    icon: <BarChart3 size={18} />,
    title: "Benchmarked roadmaps",
    desc: "Battle-tested growth frameworks tailored for D2C, SaaS and services.",
  },
  {
    icon: <Lightbulb size={18} />,
    title: "Operator wisdom",
    desc: "Insights authored by practitioners running acquisition & retention daily.",
  },
  {
    icon: <Rocket size={18} />,
    title: "Actionable next steps",
    desc: "Every playbook ends with clear execution steps your team can deploy instantly.",
  },
];

export default function InsightsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#1e293b] text-white py-24 px-6 md:px-16">

      {/*  Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/*  LEFT  */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Tag */}
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
            Strategy Desk
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Insights engineered for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              ambitious teams
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-lg max-w-xl">
            Stay ahead with analyst-written playbooks spanning performance
            marketing, product launches, automation and experience design —
            crafted for teams scaling across India and beyond.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-110 transition shadow-lg">
              Book a Strategy Call
            </button>

            <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
              Download Agency Profile
            </button>
          </div>
        </motion.div>

        {/*  RIGHT  */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">

            {/* Title */}
            <h3 className="text-sm font-semibold mb-6 text-white/80">
              WHY LEADERS SUBSCRIBE
            </h3>

            {/* Features */}
            <div className="space-y-5">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="flex items-start gap-4"
                >
                  {/* Icon */}
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20">
                    {f.icon}
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-semibold">{f.title}</h4>
                    <p className="text-white/60 text-sm mt-1">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Insight */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-6 text-xs text-blue-300"
            >
              Weekly intelligence powering smarter decisions
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}