import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BookOpen, MessageCircle, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function TechStrategiesHero() {
  const [gradientX, setGradientX] = useState(0);

  //  Moving gradient effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGradientX((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#0B1220] text-white py-24 px-6 md:px-16">

      {/*  Glow Background */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="max-w-5xl mx-auto text-center">

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6"
        >
          <Zap size={14} className="text-cyan-400" />
          Knowledge Vault
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Tech Strategies &{" "}
          <span
            className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent"
            style={{
              backgroundPosition: `${gradientX}% 50%`,
              backgroundSize: "200% auto",
            }}
          >
            Growth Accelerators
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-white/70 text-lg max-w-2xl mx-auto"
        >
          Deep-dive playbooks, implementation roadmaps and proven frameworks
          engineered to help teams move faster, scale smarter and unlock
          compounding growth.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <Link to="#strategies" >
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-110 transition shadow-lg hover:shadow-cyan-400/40">
              <BookOpen size={18} />
              Browse Library
            </button>
          </Link>
          <Link to="/about/contact-us#contact-form" >
            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 hover:scale-105 transition">
              <MessageCircle size={18} />
              Consult an Expert
            </button>
          </Link>
        </motion.div>
      </div>

      {/*  Floating Knowledge Nodes */}
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
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/2 right-20 w-2 h-2 bg-teal-400 rounded-full"
      />
    </section>
  );
}