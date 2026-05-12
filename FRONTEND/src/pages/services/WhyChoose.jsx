import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import { PenTool, Megaphone, Users } from "lucide-react";

const features = [
  {
    title: "Strategic Discovery",
    desc: "Stakeholder workshops, audits and market research to align vision, KPIs and tech stack.",
    icon: PenTool,
  },
  {
    title: "Modular Delivery",
    desc: "Reusable component libraries, secure APIs and microservices that accelerate time-to-market.",
    icon: Megaphone,
  },
  {
    title: "Lifecycle Support",
    desc: "Monitoring, SLA-based support and growth optimisation to keep your experiences evolving.",
    icon: Users,
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#020617] text-white pt-8 py-28 px-6 md:px-16 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/20 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -60, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Why brands choose{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
              Uddan Promotions
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl">
            We combine proven playbooks with bespoke consulting to ensure 
            technology and marketing investments translate into sustainable 
            business outcomes.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {features.map((item, i) => (
            <ScrollCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollCard({ item, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "end 80%"], // smoother trigger
  });

  //  Smooth spring
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  //  Smooth transforms
  const x = useTransform(
    smoothProgress,
    [0, 1],
    [100 + index * 30, 0] // stagger entry
  );

  const opacity = useTransform(
    smoothProgress,
    [0, 0.6],
    [0, 1]
  );

  const scale = useTransform(
    smoothProgress,
    [0, 1],
    [0.9, 1]
  );

  // Avoid heavy blur (optional light)
  const blur = useTransform(
    smoothProgress,
    [0, 1],
    ["blur(6px)", "blur(0px)"]
  );

  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        opacity,
        scale,
        filter: blur,
        willChange: "transform, opacity",
      }}
      className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 transition"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-cyan-400/20 to-transparent blur-xl" />

      {/* Icon */}
      <motion.div
        className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-6"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <Icon size={24} />
      </motion.div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white">
        {item.title}
      </h3>

      {/* Desc */}
      <p className="mt-4 text-gray-400 text-sm leading-relaxed">
        {item.desc}
      </p>
    </motion.div>
  );
}

// import { motion } from "framer-motion";
// import { PenTool, Megaphone, Users, Target, Layers, LifeBuoy } from "lucide-react";

// const features = [
//   {
//     title: "Strategic Discovery",
//     desc: "Stakeholder workshops, audits and market research to align vision, KPIs and tech stack.",
//     icon: Target,
//   },
//   {
//     title: "Modular Delivery",
//     desc: "Reusable component libraries, secure APIs and microservices that accelerate time-to-market.",
//     icon: Layers,
//   },
//   {
//     title: "Lifecycle Support",
//     desc: "Monitoring, SLA-based support and growth optimisation to keep your experiences evolving.",
//     icon: LifeBuoy,
//   },
// ];

// export default function WhyChoose() {
//   return (
//     <section className="relative bg-[#020617] text-white py-24 px-6 md:px-16 overflow-hidden">

//       {/* Glow background */}
//       <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-500/10 blur-3xl rounded-full" />

//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center md:text-left"
//         >
//           <h2 className="text-3xl md:text-5xl font-bold leading-tight">
//             Why brands choose{" "}
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               Uddan Promotions
//             </span>
//           </h2>

//           <p className="mt-6 text-gray-400 max-w-2xl text-sm md:text-base">
//             Your growth partner across discovery, delivery and optimisation.
//             We combine proven playbooks with bespoke consulting to ensure
//             technology and marketing investments translate into sustainable
//             business outcomes.
//           </p>
//         </motion.div>

//         {/* GRID */}
//         <div className="grid md:grid-cols-3 gap-8 mt-14">
//           {features.map((item, i) => (
//             <FeatureCard key={i} item={item} index={i} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function FeatureCard({ item, index }) {
//   const Icon = item.icon;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 60, scale: 0.95 }}
//       whileInView={{ opacity: 1, y: 0, scale: 1 }}
//       transition={{
//         duration: 0.6,
//         delay: index * 0.15,
//         ease: "easeOut",
//       }}
//       viewport={{ once: true }}
//       whileHover={{ y: -6, scale: 1.02 }}
//       className="
//         relative p-7 rounded-2xl
//         bg-white/5 border border-white/10
//         backdrop-blur-xl
//         hover:border-cyan-400/40
//         transition-all duration-300
//       "
//     >
//       {/* soft glow */}
//       <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition bg-gradient-to-br from-cyan-400/10 to-transparent blur-xl" />

//       {/* Icon */}
//       <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-5">
//         <Icon size={22} />
//       </div>

//       {/* Title */}
//       <h3 className="text-lg md:text-xl font-semibold">
//         {item.title}
//       </h3>

//       {/* Desc */}
//       <p className="mt-3 text-gray-400 text-sm leading-relaxed">
//         {item.desc}
//       </p>
//     </motion.div>
//   );
// }

