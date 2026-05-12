import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Shield,
  Radar,
  Bug,
  Lock,
  Server,
  FileCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ================= DATA =================
const capabilities = [
  {
    title: "Detection & Response",
    desc: "SOC build-out, MDR and SOAR automation across cloud environments.",
    icon: Radar,
  },
  {
    title: "Offensive Security",
    desc: "Pen testing, red teaming and breach simulations.",
    icon: Bug,
  },
  {
    title: "Governance",
    desc: "Policy frameworks, vendor risk and compliance automation.",
    icon: Shield,
  },
];

const services = [
  {
    title: "Penetration Testing",
    desc: "Identify vulnerabilities across web, mobile, APIs and networks.",
    icon: Bug,
  },
  {
    title: "Security Architecture",
    desc: "Zero-trust frameworks, IAM, PAM and data protection.",
    icon: Lock,
  },
  {
    title: "Managed SOC & MDR",
    desc: "24x7 monitoring with AI-assisted threat detection.",
    icon: Server,
  },
  {
    title: "Compliance & GRC",
    desc: "Policies, audits and certification-ready documentation.",
    icon: FileCheck,
  },
];

// ================= COMPONENT =================
export default function CyberSecurityCapabilities() {
  const sectionRef = useRef(null);
  const capRef = useRef([]);
  const servRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      capRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 70, scale: 0.95 },
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

      servRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            delay: i * 0.12,
            duration: 0.7,
            ease: "power3.out",
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
      <div className="absolute top-[-100px] left-[30%] w-[500px] h-[350px] bg-red-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* ================= HERO ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-red-400 text-sm mb-3">
            Actionable insights for security & SEO teams
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Cyber Security{" "}
            <span className="bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            From proactive risk reduction to rapid incident response, we protect
            your systems, reputation and growth.
          </p>
        </div>

        {/* ================= CAPABILITIES ================= */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (capRef.current[i] = el)}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-400/40 transition"
              >
                <Icon className="text-red-400 mb-4" size={28} />
                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ================= SERVICES ================= */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            Security Services Portfolio
          </h3>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  ref={(el) => (servRef.current[i] = el)}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-400/40 transition"
                >
                  <Icon className="text-red-400 mb-4" size={26} />
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