import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import A1 from "../../assets/1.png";

export default function HeroServices() {
  const sectionRef = useRef(null);

  // ================= SCROLL SMOOTH =================
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  // Parallax BG
  const bgY = useTransform(smoothScroll, [0, 1], [0, 100]);

  // ================= TYPING =================
  const points = [
    "SEO-first delivery with Core Web Vitals",
    "Certified specialists across UX & marketing",
    "Transparent roadmap & dashboards",
  ];

  const [visiblePoints, setVisiblePoints] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisiblePoints((prev) => [...prev, points[i]]);
      i++;
      if (i >= points.length) clearInterval(interval);
    }, 400); // smoother timing

    return () => clearInterval(interval);
  }, []);

  // ================= ANIMATIONS =================
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const leftItem = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  const bottomItem = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80 },
    },
  };

  const rightItem = {
    hidden: { opacity: 0, x: 80, y: 80 },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 70 },
    },
  };

  // ================= FLOATING IMAGE =================
  const floatY = useTransform(smoothScroll, [0, 1], [0, -30]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1220] text-white pt-8 px-4 sm:px-6 md:px-16 py-20"
    >
      {/* PARALLAX BG */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0B1220] via-[#1E293B] to-[#020617]"
      />

      {/* Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/20 blur-3xl rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* ================= LEFT ================= */}
        <motion.div variants={container} initial="hidden" animate="show">
          {/* Heading */}
          <motion.h1
            variants={leftItem}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            End-to-end digital services engineered for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
              measurable growth
            </span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            variants={leftItem}
            className="mt-6 text-white/70 text-sm sm:text-base md:text-lg max-w-md"
          >
            We unify strategy, creativity and technology to help brands grow faster.
          </motion.p>

          {/* Typing Points */}
          <div className="mt-6 space-y-3">
            {visiblePoints.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="flex items-center gap-2 text-white/70 text-sm sm:text-base"
              >
                <span className="text-green-400">✔</span>
                {text}
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <motion.div
            variants={bottomItem}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button className="relative px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold 
              hover:scale-110 transition duration-300 shadow-lg hover:shadow-cyan-400/40">
              Book a strategy call
            </button>

            <button className="px-6 py-3 rounded-full border border-white/20 backdrop-blur-md 
              hover:bg-white/10 hover:scale-105 transition">
              Explore our approach
            </button>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          variants={rightItem}
          initial="hidden"
          animate="show"
          className="relative flex justify-center items-center perspective-[1000px]"
        >
          {/* Glow */}
          <div className="absolute w-[350px] h-[350px] bg-purple-500/20 blur-3xl rounded-full" />

          {/* 3D Tilt */}
          <motion.div
            style={{ y: floatY }}
            className="transition-transform duration-200 transform-gpu"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={A1}
              alt="hero"
              className="w-[260px] sm:w-[340px] md:w-[420px] lg:w-[480px] 
              drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            />
          </motion.div>

          {/* Floating Tags */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-0 left-0 text-xs bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl"
          >
            SEO ↑
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-0 right-0 text-xs bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl"
          >
            +35% Growth
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// 
// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import A1 from "../../assets/1.png";

// export default function HeroServices() {
//   const sectionRef = useRef(null);
//   const imgRef = useRef(null);
//   const cardsRef = useRef([]);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-gradient-to-br from-[#1A202C] via-[#2D374E] to-[#4A5568] pt-12  py-24 px-6 md:px-16 overflow-hidden"
//     >
//       <div
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[#4F46E5] rounded-[50%] blur-3xl opacity-30 -z-10"
//       />

//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//         {/* LEFT */}
//         <div>
//           <motion.h1
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-6xl font-extrabold text-blue-400 leading-tight"
//           >
//             End-to-end
//             <br />digital services engineered for{" "}
//             <br />
//             <span className="text-cyan-400">measurable growth</span>
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="mt-6 text-white/70 text-lg"
//           >
//             We unify strategy, creativity and technology to help brands grow faster.
//           </motion.p>

//           {/* Points */}
//           <div className="mt-6 space-y-3">
//             {[
//               "SEO-first delivery with Core Web Vitals",
//               "Certified specialists across UX & marketing",
//               "Transparent roadmap & dashboards",
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: i * 0.2 }}
//                 className="flex items-center gap-2 text-white/70"
//               >
//                 <span className="text-green-500 font-bold">✔</span>
//                 {item}
//               </motion.div>
//             ))}
//           </div>

//           {/* Buttons */}
//           <div className="mt-8 flex gap-4">
//             <button className="bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-110 transition duration-300 hover:shadow-purple-500/40">
//               Book a strategy call
//             </button>

//             <button className="border border-gray-300 px-6 py-3 rounded-full hover:bg-white/5 transition hover:scale-105">
//               Explore our approach
//             </button>
//           </div>
//         </div>
//         <div className="relative flex justify-center items-center">

//   {/* Main Image */}
//   <img
//     ref={imgRef}
//     src={A1}
//     alt="hero"
//     className="w-[260px] sm:w-[340px] md:w-[420px] z-10"
//   />

//   {/* Floating Card 1 */}
//   <div className="absolute top-0 left-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs animate-bounce">
//     SEO ↑
//   </div>

//   {/* Floating Card 2 */}
//   <div className="absolute bottom-0 right-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-xs animate-bounce delay-200">
//     +35% Growth
//   </div>

// </div>
//       </div>

//       {/* 🔥 CARDS */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mt-20">
//         {[
//           { num: "120+", text: "Digital launches delivered" },
//           { num: "35%", text: "Reduction in acquisition cost" },
//           { num: "4.9/5", text: "Client satisfaction score" },
//         ].map((item, i) => (
//           <div
//             key={i}
//             ref={(el) => (cardsRef.current[i] = el)}
//             className="bg-white p-6 rounded-2xl shadow-md text-center transition transform hover:-translate-y-3 hover:shadow-2xl"
//           >
//             <h2 className="text-3xl font-bold text-[#4F46E5]">
//               {item.num}
//             </h2>
//             <p className="text-gray-600 mt-2">{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }



// import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);



// /* 🚀 MAIN HERO */
// export default function HeroServices() {
//   const orbsRef = useRef([]);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     // 🌌 Floating Orbs
//     orbsRef.current.forEach((orb, i) => {
//       gsap.to(orb, {
//         y: "random(-80, 80)",
//         x: "random(-80, 80)",
//         duration: "random(8, 16)",
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//         delay: i * 0.2,
//       });
//     });

//     // 🎯 Parallax Mouse
//     const handleMove = (e) => {
//       const { clientX, clientY } = e;
//       gsap.to(orbsRef.current, {
//         x: (clientX - window.innerWidth / 2) * 0.02,
//         y: (clientY - window.innerHeight / 2) * 0.02,
//         stagger: 0.05,
//       });
//     };

//     sectionRef.current.addEventListener("mousemove", handleMove);

//     // 🚀 HERO ZOOM ON SCROLL
//     gsap.to(sectionRef.current, {
//       scale: 1.15,
//       ease: "none",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//       },
//     });

//     return () => {
//       sectionRef.current?.removeEventListener("mousemove", handleMove);
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="min-h-screen bg-gradient-to-br from-[#1A202C] via-[#2D374E] to-[#4A5568] flex flex-col justify-end px-6 md:px-16 pb-16 pt-24 relative overflow-hidden"
//     >
//       {/* 🌌 Floating Orbs */}
//       <div className="absolute inset-0 overflow-hidden -z-10">
//         {[...Array(7)].map((_, i) => (
//           <div
//             key={i}
//             ref={(el) => (orbsRef.current[i] = el)}
//             className="absolute w-48 h-48 bg-accent/10 blur-3xl rounded-full"
//             style={{
//               top: `${Math.random() * 80}%`,
//               left: `${Math.random() * 80}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* 🌟 Glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(200,255,0,0.15),transparent)]" />

//       {/* 🎨 Noise */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

//       <div className="max-w-6xl mx-auto w-full">
//         {/* Badge */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="inline-flex items-center gap-2 bg-s1 px-4 py-2 rounded-full text-sm text-muted mb-6 backdrop-blur-md border border-white/10"
//         >
//           <span className="bg-accent text-black px-2 py-1 rounded-full text-xs font-bold animate-pulse">
//             NEW
//           </span>
//           Growth engineered for results
//         </motion.div>

//         {/* Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 80 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="font-display text-5xl md:text-7xl font-extrabold leading-tight mb-8"
//         >
//           <span className="block">Outrank.</span>

//           <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
//             Convert
//           </span>

//           <span className="block text-accent italic drop-shadow-[0_0_20px_rgba(200,255,0,0.7)]">
//             Scale.
//           </span>
//         </motion.h1>

//         {/* Bottom */}
//         <div className="flex flex-col md:flex-row justify-between gap-10">
//           {/* LEFT */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="max-w-md text-muted"
//           >
//             <p className="mb-6 text-lg">
//               We build high-converting digital experiences that scale revenue.
//             </p>

//             <div className="flex gap-4">
//               <motion.button
//                 whileHover={{ scale: 1.1, rotate: 1 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-accent text-black px-6 py-3 rounded-full font-bold shadow-lg shadow-accent/30"
//               >
//                 Get Started
//               </motion.button>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 className="border border-white/20 px-6 py-3 rounded-full backdrop-blur-md"
//               >
//                 Case Studies
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* FLOATING CARDS */}
//           <div className="flex gap-6">
//             {[
//               { title: "SEO", desc: "Rank higher" },
//               { title: "Ads", desc: "Scale fast" },
//               { title: "Design", desc: "Convert more" },
//             ].map((card, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 60 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.2 + 0.5 }}
//                 whileHover={{
//                   rotateY: 10,
//                   rotateX: 10,
//                   scale: 1.05,
//                 }}
//                 className="bg-s1 p-6 rounded-xl border border-white/10 backdrop-blur-md w-36 text-center shadow-lg hover:shadow-accent/20"
//               >
//                 <h3 className="text-xl font-bold text-accent mb-2">
//                   {card.title}
//                 </h3>
//                 <p className="text-xs text-muted">{card.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }