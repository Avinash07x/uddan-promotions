import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Brain, Bot, Sparkles, Cpu } from "lucide-react";

const stats = [
  { value: "10x", label: "Workflow Automation" },
  { value: "24/7", label: "AI Availability" },
  { value: "95%", label: "Efficiency Boost" },
];

const points = [
  "Custom AI trained on your business data",
  "Automate workflows, support and decision-making",
  "Secure, scalable and fully private AI systems",
];

export default function AIDevelopmentHero() {
  const ref = useRef(null);

  // 🔥 Scroll Parallax
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
      setVisible((prev) => [...prev, points[i]]);
      i++;
      if (i >= points.length) clearInterval(interval);
    }, 600);
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
        className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-500/20 blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          {/* Tag */}
          <p className="text-purple-400 text-sm mb-4">
            AI engineers • Automation experts • Data scientists
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build your own{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              personal AI assistant
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-lg max-w-xl">
            Imagine an intelligent assistant trained on your business that
            automates workflows, answers questions and drives decisions in real
            time.
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

          {/* ✨ Typing Points */}
          <div className="mt-6 space-y-3">
            {visible.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-2 text-white/70"
              >
                <span className="text-purple-400">✔</span>
                {text}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="px-6 py-3 rounded-full bg-purple-500 text-white font-semibold hover:scale-110 transition shadow-lg">
              Build Your AI
            </button>

            <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              Explore Capabilities
            </button>
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative flex justify-center"
        >
          {/* 🧠 AI Core */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl"
          >
            <Brain size={60} className="text-purple-400 mx-auto mb-4" />

            <div className="space-y-3">
              {/* Pulsing Bars */}
              {[80, 60, 90].map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ width: 0 }}
                  animate={{ width: `${w}%` }}
                  transition={{ duration: 1.5, delay: i * 0.3 }}
                  className="h-2 bg-purple-400 rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 left-0"
          >
            <Bot className="text-cyan-400" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-0 right-0"
          >
            <Cpu className="text-purple-400" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 right-0"
          >
            <Sparkles className="text-yellow-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}