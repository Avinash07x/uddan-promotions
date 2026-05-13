import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Activity,
  Radar,
  ShieldAlert,
  RefreshCcw,
  TrendingDown,
  FileCheck,
  Globe,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

//  DATA 
const lifecycle = [
  {
    title: "Monitor",
    desc: "Unified logging, behavioural analytics and threat intelligence.",
    icon: Activity,
  },
  {
    title: "Detect",
    desc: "Real-time correlation, anomaly scoring and alert prioritisation.",
    icon: Radar,
  },
  {
    title: "Respond",
    desc: "Automated containment and guided remediation workflows.",
    icon: ShieldAlert,
  },
  {
    title: "Improve",
    desc: "Post-incident reviews and continuous security upgrades.",
    icon: RefreshCcw,
  },
];

const outcomes = [
  {
    title: "Faster Threat Detection",
    desc: "Reduce mean time to detect by up to 60%.",
    icon: TrendingDown,
  },
  {
    title: "Compliance Acceleration",
    desc: "Automated evidence and audit-ready reporting.",
    icon: FileCheck,
  },
  {
    title: "SEO & Trust Boost",
    desc: "Transparent communication improves brand authority.",
    icon: Globe,
  },
];

const why = [
  {
    title: "Threat-Led Strategy",
    desc: "Continuous threat hunting and purple teaming.",
  },
  {
    title: "Human-Centric Culture",
    desc: "Security awareness and secure-by-design practices.",
  },
];

//  COMPONENT 
export default function SecurityLifecycle() {
  const sectionRef = useRef(null);
  const lifeRef = useRef([]);
  const outRef = useRef([]);
  const whyRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      lifeRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            delay: i * 0.15,
            duration: 0.7,
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });

      outRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            delay: i * 0.12,
            duration: 0.6,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

      whyRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            delay: i * 0.15,
            duration: 0.7,
            scrollTrigger: { trigger: el, start: "top 85%" },
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
      <div className="absolute top-[-100px] right-[30%] w-[500px] h-[350px] bg-red-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/*  HEADER  */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-red-400 text-sm mb-3">
            Security Operations Lifecycle
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Continuous Protection{" "}
            <span className="bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
              Framework
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            Rapid detection, automated response and continuous improvement
            across your entire digital ecosystem.
          </p>
        </div>

        {/*  LIFECYCLE  */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {lifecycle.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (lifeRef.current[i] = el)}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-400/40 transition"
              >
                <span className="text-xs text-gray-500">0{i + 1}</span>
                <Icon className="text-red-400 my-3" size={26} />
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/*  OUTCOMES  */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            Security Outcomes
          </h3>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  ref={(el) => (outRef.current[i] = el)}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                >
                  <Icon className="text-red-400 mx-auto mb-3" />
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-400 text-sm mt-2">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/*  WHY + CTA  */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-4xl font-bold">
            Why Choose Uddan Promotions for Cyber Security
          </h3>

          <div className="mt-10 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {why.map((item, i) => (
              <motion.div
                key={i}
                ref={(el) => (whyRef.current[i] = el)}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-2">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-10 px-8 py-3 rounded-xl bg-gradient-to-r from-red-400 to-cyan-400 text-black font-semibold flex items-center gap-2 mx-auto"
          >
            <Zap size={18} />
            Schedule a Breach Readiness Review
          </motion.button>
        </div>

      </div>
    </section>
  );
}