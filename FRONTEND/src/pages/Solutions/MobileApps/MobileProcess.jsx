import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Smartphone,
  Zap,
  TrendingUp,
  Layers,
  Rocket,
  Settings,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ================= DATA =================
const pillars = [
  {
    title: "UX Research",
    desc: "User interviews, prototype testing and accessibility reviews.",
    icon: Smartphone,
  },
  {
    title: "Performance",
    desc: "Offline support, efficient caching and responsive animations.",
    icon: Zap,
  },
  {
    title: "Growth",
    desc: "ASO, referral systems, loyalty integrations and marketing automation.",
    icon: TrendingUp,
  },
];

const services = [
  {
    title: "Discovery & UX Strategy",
    desc: "Product vision workshops, persona mapping and clickable prototypes validate ideas before a single line of code is written.",
    icon: Layers,
  },
  {
    title: "Native & Cross-Platform Build",
    desc: "Kotlin, Swift, Flutter and React Native specialists craft high-performance apps with modular architecture and automated testing.",
    icon: Rocket,
  },
  {
    title: "Launch, DevOps & Support",
    desc: "CI/CD pipelines, store submissions, observability and release management keep your product stable as it scales.",
    icon: Settings,
  },
];

const techStack = [
  "Swift & SwiftUI",
  "Kotlin & Jetpack",
  "Flutter & React Native",
  "Firebase, AWS & GraphQL",
];

// ================= COMPONENT =================
export default function MobileGrowth() {
  const sectionRef = useRef(null);
  const pillarsRef = useRef([]);
  const servicesRef = useRef([]);
  const techRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // PILLARS
      pillarsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            delay: i * 0.15,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      // SERVICES
      servicesRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -80 },
          {
            opacity: 1,
            x: 0,
            delay: i * 0.2,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      // TECH STACK
      techRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            delay: i * 0.1,
            duration: 0.5,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
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
      <div className="absolute top-[-120px] left-[30%] w-[500px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* ================= HERO ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-cyan-400 text-sm mb-3">
            Designed to rank & retain
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Product-Led{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Mobile Growth
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            From onboarding flows to push campaigns, every screen is optimised for engagement. We
            combine qualitative research with analytics to craft journeys that drive revenue.
          </p>
        </div>

        {/* ================= PILLARS ================= */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (pillarsRef.current[i] = el)}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
              >
                <Icon className="text-cyan-400 mb-4" size={28} />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ================= SERVICES ================= */}
        <div className="mt-20 space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold">
              Full-Cyclen Mobile App{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Services
              </span>
            </h2>
          </div>

          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (servicesRef.current[i] = el)}
                whileHover={{ x: 6 }}
                className="flex gap-6 items-start"
              >
                <Icon className="text-cyan-400 mt-1" size={26} />

                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-400 text-sm mt-2 max-w-lg">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ================= TECH STACK ================= */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-4xl font-bold">
            Engineering Stack for{" "}
            <span className="text-cyan-400">Future-Ready Apps</span>
          </h3>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                ref={(el) => (techRef.current[i] = el)}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}