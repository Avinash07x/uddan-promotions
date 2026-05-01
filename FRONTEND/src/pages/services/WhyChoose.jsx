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
    title: "Content studio",
    desc: "Copywriters, designers and video producers collaborate to publish scroll-stopping stories.",
    icon: PenTool,
  },
  {
    title: "Paid amplification",
    desc: "We build custom audiences, run experiments and optimise budgets across Meta, LinkedIn and YouTube.",
    icon: Megaphone,
  },
  {
    title: "Community building",
    desc: "Influencer outreach, creator partnerships and community management nurture advocates.",
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
            We combine hyperlocal insights with enterprise-grade delivery to help you win every "near me" search.
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