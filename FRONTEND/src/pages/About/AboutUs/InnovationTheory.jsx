import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Cpu, Zap, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const theories = [
  {
    title: "Systems Thinking",
    desc: "We don't just build apps; we architect ecosystems where every component works together seamlessly.",
    icon: Cpu,
  },
  {
    title: "Velocity through Automation",
    desc: "Automation replaces manual effort—ensuring faster delivery without compromising stability.",
    icon: Zap,
  },
  {
    title: "Human-Centric Engineering",
    desc: "We prioritise developer experience and user empathy to build software people actually love.",
    icon: Users,
  },
];

export default function InnovationTheory() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020617] text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Innovation{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Theory
          </span>
        </motion.h2>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Innovation is engineered, not accidental. We design resilient systems that evolve with your business and scale without friction.
        </p>

        {/* CARDS */}
        <div className="mt-14 grid md:grid-cols-3 gap-8">
          {theories.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 180 }}
                className="
                  group relative p-8 rounded-2xl
                  bg-white/5 border border-white/10
                  backdrop-blur-xl
                  hover:border-cyan-400/40
                  transition
                "
              >
                {/* Glow Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-cyan-400/20 to-transparent blur-xl rounded-2xl" />

                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-6">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                {/* Desc */}
                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM LINE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-gray-500 text-sm"
        >
          Powering experiences with best-in-class technology stacks and modern architecture.
        </motion.p>

      </div>
    </section>
  );
}