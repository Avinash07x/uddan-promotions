import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Search,
  ShieldCheck,
  UploadCloud,
  Settings,
  CheckCircle,
  BarChart3,
  Globe,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ================= DATA =================
const steps = [
  {
    title: "Assess",
    desc: "Application discovery, dependency mapping and risk analysis.",
    icon: Search,
  },
  {
    title: "Mobilise",
    desc: "Landing zones, security baselines and automation setup.",
    icon: ShieldCheck,
  },
  {
    title: "Migrate",
    desc: "Wave-based execution with continuous testing.",
    icon: UploadCloud,
  },
  {
    title: "Optimise",
    desc: "FinOps reviews, performance tuning and innovation backlog.",
    icon: Settings,
  },
];

const value = [
  {
    title: "Reduced Migration Risk",
    desc: "Automated testing and rollback plans ensure safe transitions.",
    icon: CheckCircle,
  },
  {
    title: "Improved SEO Performance",
    desc: "Faster load times and global delivery boost rankings.",
    icon: Globe,
  },
  {
    title: "Governance Visibility",
    desc: "Dashboards for IT, finance and marketing stakeholders.",
    icon: BarChart3,
  },
];

const why = [
  {
    title: "SRE & DevOps DNA",
    desc: "Automation, IaC and observability in every deployment.",
  },
  {
    title: "Growth-Focused Architecture",
    desc: "Edge, CDN and caching strategies for better conversions.",
  },
];

// ================= COMPONENT =================
export default function CloudMigration() {
  const sectionRef = useRef(null);
  const stepRef = useRef([]);
  const valueRef = useRef([]);
  const whyRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      stepRef.current.forEach((el, i) => {
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

      valueRef.current.forEach((el, i) => {
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
      <div className="absolute top-[-120px] left-[35%] w-[500px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-cyan-400 text-sm mb-3">
            Migration Playbook
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Accelerate Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Cloud Journey
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            A proven migration methodology that minimises downtime and maximises value.
          </p>
        </div>

        {/* ================= STEPS ================= */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (stepRef.current[i] = el)}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
              >
                <span className="text-xs text-gray-500">0{i + 1}</span>
                <Icon className="text-cyan-400 my-3" size={26} />
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ================= VALUE ================= */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            Value Delivered
          </h3>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {value.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  ref={(el) => (valueRef.current[i] = el)}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                >
                  <Icon className="text-cyan-400 mx-auto mb-3" />
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-400 text-sm mt-2">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= WHY + CTA ================= */}
        <div className="mt-24 text-center">
          <h3 className="text-2xl md:text-4xl font-bold">
            Why Choose Uddan Promotions for Cloud Solutions
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
            className="mt-10 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold flex items-center gap-2 mx-auto"
          >
            <Rocket size={18} />
            Book a Discovery Call
          </motion.button>
        </div>

      </div>
    </section>
  );
}