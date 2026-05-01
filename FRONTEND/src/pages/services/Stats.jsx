import {
  motion,
  useInView,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: 4.2,
    suffix: "x",
    label: "Average engagement uplift",
  },
  {
    number: 2500,
    display: "2.5k+",
    label: "Qualified leads generated monthly",
  },
  {
    number: 38,
    suffix: "%",
    label: "Cost per lead reduction",
  },
];

export default function Stats() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
  });

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] py-16 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />

      <div className="max-w-6xl w-full grid md:grid-cols-3 gap-8 px-6">
        {stats.map((item, i) => (
          <StatCard key={i} item={item} isInView={isInView} index={i} />
        ))}
      </div>
    </section>
  );
}

// ================= CARD =================
function StatCard({ item, isInView, index }) {
  const [value, setValue] = useState(0);

  const spring = useSpring(0, {
    stiffness: 60,
    damping: 15,
  });

  // trigger animation
  useEffect(() => {
    if (isInView) {
      spring.set(item.number);
    }
  }, [isInView, item.number, spring]);

  // sync MotionValue → React state (IMPORTANT FIX)
  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setValue(latest);
    });

    return () => unsubscribe();
  }, [spring]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
        delay: index * 0.15,
      }}
      whileHover={{
        scale: 1.05,
        rotateX: 4,
        rotateY: -4,
      }}
      className="group relative p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg transform-gpu"
    >
      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-blue-500/20 to-transparent blur-xl" />

      {/* Number */}
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
        {item.display
          ? item.display
          : item.number % 1 !== 0
          ? value.toFixed(1)
          : Math.floor(value)}
        {!item.display && item.suffix}
      </h2>

      {/* Label */}
      <p className="text-gray-400 mt-3 text-base">
        {item.label}
      </p>
    </motion.div>
  );
}

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// /* 🔥 Data */
// const statsData = [
//   { id: 1, value: 120, suffix: "+", label: "Digital Launches" },
//   { id: 2, value: 35, suffix: "%", label: "CAC Reduction" },
//   { id: 3, value: 4.9, suffix: "/5", label: "Client Satisfaction" },
//   { id: 4, value: 80, suffix: "%", label: "Conversion Boost" },
//   { id: 5, value: 24, suffix: "/7", label: "Support Availability" },
//   { id: 6, value: 15, suffix: "+", label: "Global Clients" },
// ];
// /* 🔢 Counter */
// function Counter({ value, suffix, trigger }) {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (!trigger) return;

//     let start = 0;
//     const duration = 1200;
//     const increment = value / (duration / 16);

//     const counter = setInterval(() => {
//       start += increment;
//       if (start >= value) {
//         setCount(value);
//         clearInterval(counter);
//       } else {
//         setCount(parseFloat(start.toFixed(1)));
//       }
//     }, 16);

//     return () => clearInterval(counter);
//   }, [trigger, value]);

//   return (
//     <span>
//       {count}
//       {suffix}
//     </span>
//   );
// }

// export default function Stats() {
//   const sectionRef = useRef(null);
//   const [startCount, setStartCount] = useState(false);

//   useEffect(() => {
//     const el = sectionRef.current;

//     gsap.fromTo(
//       el.children,
//       { opacity: 0, y: 80, scale: 0.9 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 1,
//         stagger: 0.15,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: el,
//           start: "top 80%",
//           once: true,
//           onEnter: () => setStartCount(true),
//         },
//       }
//     );
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative py-20 px-6 md:px-16 bg-gradient-to-br from-[#1A202C] via-[#2D374E] to-[#4A5568]"
//     >
//       {/* 🔥 GRID */}
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

//         {statsData.map((item) => (
//           <motion.div
//             key={item.id}
//             whileHover={{
//               y: -12,
//               scale: 1.04,
//               rotateX: 6,
//               rotateY: 6,
//             }}
//             className="relative group"
//           >
//             {/* 💎 Glass Card */}
//             <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden">

//               {/* 🔥 Hover Glow */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(200,255,0,0.15),transparent)]" />

//               {/* ✨ Edge Glow */}
//               <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-accent/40 transition" />

//               {/* 🔢 Number */}
//               <h2 className="text-4xl md:text-5xl font-extrabold text-accent drop-shadow-[0_0_15px_rgba(200,255,0,0.6)]">
//                 <Counter
//                   value={item.value}
//                   suffix={item.suffix}
//                   trigger={startCount}
//                 />
//               </h2>

//               {/* 📄 Label */}
//               <p className="text-gray-400 mt-3 text-sm tracking-wide">
//                 {item.label}
//               </p>

//               {/* 💡 Bottom Light Line */}
//               <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500" />

//             </div>
//           </motion.div>
//         ))}

//       </div>
//     </section>
//   );
// }

