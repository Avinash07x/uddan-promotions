import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BookOpen, Sparkles, Layers, ArrowRight } from "lucide-react";

const stats = [
  { value: "50+", label: "Actionable Playbooks" },
  { value: "10x", label: "Execution Speed" },
  { value: "100+", label: "Growth Experiments" },
];

const playbooks = [
  "SEO growth systems & content engines",
  "High-converting funnels & automation workflows",
  "Product-led growth & retention frameworks",
];

export default function PlaybooksHero() {
  const ref = useRef(null);

  // 🔥 Parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  // ✨ Typing Effect
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisible((prev) => [...prev, playbooks[i]]);
      i++;
      if (i >= playbooks.length) clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#020617] text-white py-24 px-6 md:px-16"
    >
      {/* 🌌 Glow */}
      <motion.div
        style={{ y }}
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full"
      />

      {/* 🔵 Floating dots */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 left-10 w-3 h-3 bg-cyan-400 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-4 h-4 bg-blue-400 rounded-full"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
            <Sparkles size={14} className="text-cyan-400" />
            Growth Playbooks
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Proven playbooks to{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
              scale faster
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-lg max-w-xl">
            Step-by-step frameworks, battle-tested strategies and execution
            systems designed to help teams launch, grow and dominate faster.
          </p>

          {/* 📊 Stats */}
          <div className="flex gap-8 mt-8 flex-wrap">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-2xl font-bold">{s.value}</h3>
                <p className="text-white/50 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* ✨ Typing Playbooks */}
          <div className="mt-6 space-y-3">
            {visible.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-2 text-white/70"
              >
                <span className="text-cyan-400">✔</span>
                {text}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-110 transition shadow-lg">
              <BookOpen size={18} />
              Browse Playbooks
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              View Case Studies <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative flex justify-center"
        >
          {/* Card */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl w-full max-w-md">

            <div className="flex items-center gap-2 mb-4">
              <Layers className="text-cyan-400" size={20} />
              <h3 className="text-sm font-semibold">
                Playbook Engine
              </h3>
            </div>

            {/* Animated Steps */}
            <div className="space-y-4">
              {["Research", "Strategy", "Execution", "Growth"].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: i * 0.3 }}
                  className="bg-gradient-to-r from-cyan-400/40 to-blue-400/40 p-3 rounded-lg text-sm"
                >
                  {step}
                </motion.div>
              ))}
            </div>

            {/* Floating Insight */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mt-4 text-xs text-cyan-300"
            >
              Systems that turn ideas into scalable growth
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ✨ Gradient Animation */}
      <style jsx>{`
        .animate-gradient {
          background-size: 200% auto;
          animation: gradientMove 4s linear infinite;
        }
        @keyframes gradientMove {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}