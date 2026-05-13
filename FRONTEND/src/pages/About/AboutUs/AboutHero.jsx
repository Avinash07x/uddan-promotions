import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";

const stats = [
  { value: 120, label: "Projects Deployed", suffix: "+" },
  { value: 98, label: "Retention Rate", suffix: "%" },
  { value: 24, label: "DevOps Support", suffix: "/7" },
  { value: 15, label: "Global Partners", suffix: "+" },
];

export default function AboutHero() {
  const ref = useRef(null);

  //  Parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0B1220] text-white py-28 px-6 md:px-16"
    >
      {/* 🌌 Glow */}
      <motion.div
        style={{ y }}
        className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"
      />

      {/* 🔲 Grid Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/*  LEFT  */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Tag */}
          <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
            ⚙ Engineering Growth
          </span>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Architecting the{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              digital future
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-lg max-w-xl">
            We design and scale resilient digital systems—from high-frequency
            platforms to immersive D2C experiences—engineered for performance,
            reliability and long-term growth.
          </p>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <a href="/about/contact-us#contact-form">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:scale-110 transition shadow-lg hover:shadow-blue-500/40">
                <Zap size={16} />
                Initiate Project
              </button>
            </a>
            <a href="#evolution" >
              <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
                Our Protocol
              </button>
            </a>
          </div>
        </motion.div>
        {/*  RIGHT  */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}

// 🔢 Animated Counter Card
function StatCard({ value, label, suffix, delay }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(duration / value);

    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(interval);
    }, step);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl text-center"
    >
      <motion.h3
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-3xl md:text-4xl font-bold text-cyan-400"
      >
        {count}
        {suffix}
      </motion.h3>

      <p className="text-white/60 text-sm mt-2">{label}</p>
    </motion.div>
  );
}