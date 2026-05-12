import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function AIHero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".glow-1", {
        y: 60,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".glow-2", {
        y: -40,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
      relative
      min-h-[500px]
      flex items-start justify-center
      bg-[#020617] text-white
      px-4 sm:px-6 md:px-16
      overflow-hidden
      pt-12 sm:pt-14 md:pt-10
      pb-0 sm:pb-2 md:pb-0"
    >
      {/* GLOW BACKGROUND */}
      <div className="glow-1 absolute top-[-120px] left-[20%] w-[400px] sm:w-[500px] h-[300px] sm:h-[400px] bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="glow-2 absolute bottom-[-120px] right-[15%] w-[400px] sm:w-[500px] h-[300px] sm:h-[400px] bg-purple-500/20 blur-3xl rounded-full" />

      {/* GRID BG */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* CONTENT */}
      <div className="relative max-w-4xl text-center">

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, x: -120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
        >
          Next-Generation{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            AI Solutions
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.h2
          initial={{ opacity: 0, x: 120 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-gray-200"
        >
          Build Your Own Personal AI
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
        >
          Imagine having a brilliant, tireless assistant that knows your business inside and out.
          We build custom, secure Artificial Intelligence trained specifically on your data
          to automate your most complex workflows.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="
            px-6 py-3 rounded-xl
            bg-gradient-to-r from-cyan-400 to-purple-500
            text-black font-semibold
            hover:scale-105 active:scale-95
            transition
          ">
            Start Your AI Project
          </button>

          <button className="
            px-6 py-3 rounded-xl
            border border-white/20
            text-white
            hover:border-cyan-400 hover:text-cyan-400
            transition
          ">
            Explore Capabilities
          </button>
        </motion.div>

      </div>
    </section>
  );
}