import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Cloud,
  UploadCloud,
  Settings,
  Layers,
  Cpu,
  DollarSign,
  Activity,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ================= DATA =================
const phases = [
  {
    title: "Discover",
    desc: "Readiness assessment, TCO modelling and migration planning.",
    icon: Cloud,
  },
  {
    title: "Migrate",
    desc: "Rehost, replatform and refactor with DevOps pipelines.",
    icon: UploadCloud,
  },
  {
    title: "Optimise",
    desc: "Performance tuning, automation, FinOps and disaster recovery.",
    icon: Settings,
  },
];

const services = [
  {
    title: "Cloud Strategy",
    desc: "Workshops, roadmap and compliance-focused planning.",
    icon: Layers,
  },
  {
    title: "Modernisation",
    desc: "Containers, serverless and API-first architecture.",
    icon: Cpu,
  },
  {
    title: "FinOps & Optimisation",
    desc: "Cost governance, anomaly detection and dashboards.",
    icon: DollarSign,
  },
  {
    title: "Managed Operations",
    desc: "SRE monitoring, incident response and 24x7 support.",
    icon: Activity,
  },
];

// ================= COMPONENT =================
export default function CloudSection() {
  const sectionRef = useRef(null);
  const phaseRef = useRef([]);
  const serviceRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      phaseRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            delay: i * 0.15,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });

      serviceRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            delay: i * 0.12,
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
      <div className="absolute top-[-120px] right-[30%] w-[500px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-cyan-400 text-sm mb-3">
            Optimised for Core Web Vitals & Discoverability
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Cloud Adoption{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Framework
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            Our certified architects guide you through strategy, migration and
            optimisation to ensure scalability, compliance and performance.
          </p>
        </div>

        {/* ================= PHASES ================= */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (phaseRef.current[i] = el)}
                whileHover={{ y: -6, scale: 1.03 }}
                className="
                  relative p-6 rounded-2xl
                  bg-white/5 border border-white/10
                  backdrop-blur-xl
                  hover:border-cyan-400/40
                  transition
                "
              >
                <span className="text-xs text-gray-500">
                  Phase 0{i + 1}
                </span>

                <Icon className="text-cyan-400 my-3" size={26} />

                <h3 className="font-semibold text-lg">
                  {phase.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {phase.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ================= SERVICES ================= */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            Cloud Solutions Portfolio
          </h3>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  ref={(el) => (serviceRef.current[i] = el)}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="
                    p-6 rounded-2xl
                    bg-white/5 border border-white/10
                    hover:border-cyan-400/40
                    transition
                  "
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