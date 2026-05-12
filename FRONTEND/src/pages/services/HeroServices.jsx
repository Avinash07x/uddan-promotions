import { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import A1 from "../../assets/1.webp";

export default function HeroServices() {
  const sectionRef = useRef(null);

  // ================= POINT STATE =================
  const [currentPoint, setCurrentPoint] = useState(0);

  // ================= SCROLL =================
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  // ================= PARALLAX =================
  const bgY = useTransform(smoothScroll, [0, 1], [0, 100]);

  // ================= FLOAT =================
  const floatY = useTransform(smoothScroll, [0, 1], [0, -30]);

  // ================= POINTS =================
  const points = [
    "SEO-first delivery with Core Web Vitals, schema markup and conversion optimisation baked into every launch.",

    "Certified specialists spanning UX, engineering, marketing automation, analytics and marketplace management.",

    "Transparent roadmaps, sprint reviews and performance dashboards to keep stakeholders informed.",
  ];

  // ================= SHOW ONE POINT =================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoint((prev) =>
        prev === points.length - 1 ? 0 : prev + 1
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // ================= ANIMATIONS =================
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const leftItem = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const bottomItem = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  const rightItem = {
    hidden: {
      opacity: 0,
      x: 80,
      y: 80,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1220] text-white pt-10 pb-24 px-4 sm:px-6 md:px-16"
    >
      {/* ================= BACKGROUND ================= */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0B1220] via-[#111827] to-[#020617]"
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full -z-10" />

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Tag */}
          <motion.div
            variants={leftItem}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-white/70 mb-6"
          >
            🚀 Full-Stack Digital Growth Partner
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={leftItem}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          >
            End-to-end digital services engineered for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              measurable growth
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={leftItem}
            className="mt-6 text-white/70 text-base md:text-lg max-w-xl leading-relaxed"
          >
            From award-winning website builds to performance
            marketing, automation and e-commerce operations,
            Uddan Promotions unifies strategy, creativity and
            engineering to help ambitious brands scale faster,
            convert better and dominate digitally.
          </motion.p>

          {/* ================= SINGLE POINT ================= */}
          <div className="mt-8 min-h-[90px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPoint}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="flex items-start gap-3 text-white/80 text-sm sm:text-base"
              >
                {/* Check */}
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="flex items-center justify-center min-w-[24px] h-6 rounded-full bg-green-500/10 text-green-400 text-xs mt-1"
                >
                  ✔
                </motion.span>

                {/* Text */}
                <span className="leading-relaxed">
                  {points[currentPoint]}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================= BUTTONS ================= */}
          <motion.div
            variants={bottomItem}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button className="px-7 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition duration-300 shadow-lg hover:shadow-cyan-400/40">
              Book a strategy call
            </button>

            <button className="px-7 py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition duration-300">
              Explore our approach
            </button>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          variants={rightItem}
          initial="hidden"
          animate="show"
          className="relative flex justify-center items-center"
        >
          {/* Glow */}
          <div className="absolute w-[380px] h-[380px] bg-blue-500/20 blur-3xl rounded-full" />

          {/* Floating Image */}
          <motion.div
            style={{ y: floatY }}
            whileHover={{
              scale: 1.04,
              rotate: -1,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
            className="relative z-10"
          >
            <img
              src={A1}
              alt="Hero"
              className="w-[260px] sm:w-[340px] md:w-[430px] lg:w-[500px]
              drop-shadow-[0_35px_70px_rgba(0,0,0,0.7)]"
            />
          </motion.div>

          {/* Floating Tag */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute top-8 left-0 text-xs bg-white/10 border border-white/10 backdrop-blur-md px-4 py-2 rounded-xl"
          >
            SEO ↑
          </motion.div>

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 0.5,
            }}
            className="absolute bottom-10 right-0 text-xs bg-white/10 border border-white/10 backdrop-blur-md px-4 py-2 rounded-xl"
          >
            +35% Growth
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}