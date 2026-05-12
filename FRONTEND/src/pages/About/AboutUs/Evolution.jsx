import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Code2,
  TrendingUp,
  ShieldCheck,
  Globe,
  Eye,
  RefreshCw,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ================= TIMELINE =================
const timeline = [
  {
    year: "2015",
    title: "The Kernel",
    desc: "Founded in Bikaner as a boutique PHP & WordPress dev shop.",
  },
  {
    year: "2018",
    title: "Scaling the Stack",
    desc: "Expanded into React, Node and mobile apps. Jaipur hub launched.",
  },
  {
    year: "2020",
    title: "Global Integration",
    desc: "UK & Dubai clients onboarded. DevOps & Security divisions formed.",
  },
  {
    year: "2024",
    title: "AI & Future Tech",
    desc: "GenAI integration. 100+ team across 4 cities. Certified partners.",
  },
  {
    year: "2026",
    title: "Autonomous Ecosystems",
    desc: "Expanding to US & Australia with autonomous digital operations.",
  },
];

// ================= PROTOCOLS =================
const protocols = [
  {
    title: "Clean Code First",
    desc: "Maintainable, scalable and debt-free engineering.",
    icon: Code2,
  },
  {
    title: "ROI Obsessed",
    desc: "Every decision tied to measurable business growth.",
    icon: TrendingUp,
  },
  {
    title: "Security by Design",
    desc: "ISO-aligned processes with enterprise-grade protection.",
    icon: ShieldCheck,
  },
  {
    title: "Global, Local",
    desc: "World-class tech adapted to regional markets.",
    icon: Globe,
  },
  {
    title: "Radical Transparency",
    desc: "Live dashboards and honest delivery timelines.",
    icon: Eye,
  },
  {
    title: "Continuous Evolution",
    desc: "Always upgrading skills, tools and architecture.",
    icon: RefreshCw,
  },
];

// ================= COMPONENT =================
export default function Evolution() {
  const sectionRef = useRef(null);
  const itemRef = useRef([]);
  const protocolRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // timeline animation
      itemRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -80 : 80 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });

      // protocol animation
      protocolRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            delay: i * 0.15,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#020617] text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            The{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Evolution
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            From a garage in Bikaner to a global digital consultancy.
          </p>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="mt-16 relative">

          {/* vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div
                key={i}
                ref={(el) => (itemRef.current[i] = el)}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* content */}
                <div className="w-full md:w-1/2">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-cyan-400 font-semibold">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold mt-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* dot */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-cyan-400" />

                <div className="w-full md:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* ================= PROTOCOLS ================= */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            Core Protocols
          </h3>

          <p className="text-center text-gray-400 mt-4">
            The operating system of our culture.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {protocols.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  ref={(el) => (protocolRef.current[i] = el)}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="
                    group relative p-6 rounded-2xl
                    bg-white/5 border border-white/10
                    hover:border-cyan-400/40
                  "
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-4">
                    <Icon size={22} />
                  </div>

                  <h4 className="font-semibold text-lg">
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