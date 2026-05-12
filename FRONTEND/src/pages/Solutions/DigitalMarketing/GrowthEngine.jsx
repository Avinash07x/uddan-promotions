import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  BarChart3,
  Megaphone,
  LineChart,
  Layers,
  Rocket,
  Brain,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ================= DATA =================
const tools = [
  "Google Marketing Platform",
  "Meta & Instagram Ads",
  "LinkedIn Campaign Manager",
  "Looker Studio & GA4",
];

const steps = [
  {
    title: "Audit & Insights",
    desc: "Deep analytics review, CRM data and competitor benchmarking.",
    icon: BarChart3,
  },
  {
    title: "Launch & Optimise",
    desc: "Multi-channel campaigns with daily testing and optimisation.",
    icon: Megaphone,
  },
  {
    title: "Scale & Automate",
    desc: "Growth loops, remarketing and predictive budgeting.",
    icon: LineChart,
  },
];

const why = [
  {
    title: "Full-Funnel Attribution",
    desc: "Connect marketing performance directly to revenue.",
    icon: Layers,
  },
  {
    title: "Creative Lab",
    desc: "Scroll-stopping ads, landing pages and variations.",
    icon: Brain,
  },
  {
    title: "Always-on Optimisation",
    desc: "Daily monitoring and proactive opportunity alerts.",
    icon: Rocket,
  },
];

// ================= COMPONENT =================
export default function GrowthEngine() {
  const sectionRef = useRef(null);
  const toolRef = useRef([]);
  const stepRef = useRef([]);
  const whyRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // TOOLS
      toolRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            delay: i * 0.1,
            duration: 0.6,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      });

      // STEPS
      stepRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            delay: i * 0.15,
            duration: 0.7,
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      // WHY
      whyRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            delay: i * 0.15,
            duration: 0.7,
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
      {/* glow */}
      <div className="absolute top-[-100px] right-[30%] w-[500px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* ================= TOOLS ================= */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Platforms & Tool Stack
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {tools.map((tool, i) => (
              <motion.div
                key={i}
                ref={(el) => (toolRef.current[i] = el)}
                whileHover={{ scale: 1.1, y: -4 }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= FRAMEWORK ================= */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            Our Growth Framework
          </h3>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  ref={(el) => (stepRef.current[i] = el)}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
                >
                  <Icon className="text-cyan-400 mb-4" size={28} />
                  <h4 className="font-semibold text-lg">
                    {step.title}
                  </h4>
                  <p className="text-gray-400 text-sm mt-2">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= WHY ================= */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            Why High-Growth Brands Trust Us
          </h3>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {why.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  ref={(el) => (whyRef.current[i] = el)}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
                >
                  <Icon className="text-cyan-400 mb-4" size={26} />
                  <h4 className="font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm mt-2">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}