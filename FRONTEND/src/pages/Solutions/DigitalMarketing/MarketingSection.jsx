import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Search,
  Megaphone,
  Workflow,
  BarChart3,
  Users,
  TrendingUp,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ================= DATA =================
const pillars = [
  {
    title: "SEO & Content",
    desc: "Topic clusters, schema, Core Web Vitals and digital PR.",
    icon: Search,
  },
  {
    title: "PPC & Paid Social",
    desc: "Full-funnel targeting, audience segmentation and budget optimisation.",
    icon: Megaphone,
  },
  {
    title: "Automation",
    desc: "CRM integrations, drip campaigns and CRO optimisation.",
    icon: Workflow,
  },
];

const services = [
  {
    title: "SEO & Content Marketing",
    desc: "Technical audits, keyword research, link-building and conversion copywriting.",
    icon: TrendingUp,
  },
  {
    title: "Paid Media Management",
    desc: "Google, Meta and LinkedIn ads optimised for maximum ROAS.",
    icon: BarChart3,
  },
  {
    title: "Social Media & Creatives",
    desc: "Storytelling, video production and engagement strategies.",
    icon: Users,
  },
  {
    title: "Automation & Analytics",
    desc: "CRM workflows, dashboards and attribution modelling.",
    icon: Workflow,
  },
];

// ================= COMPONENT =================
export default function MarketingSection() {
  const sectionRef = useRef(null);
  const pillarRef = useRef([]);
  const serviceRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // PILLARS
      pillarRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
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
      serviceRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            delay: i * 0.12,
            duration: 0.7,
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
      {/* glow */}
      <div className="absolute top-[-100px] left-[35%] w-[500px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* ================= HERO ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-cyan-400 text-sm mb-3">
            Built to dominate SERPs
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Search & Social Strategies{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              that Convert
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            We align SEO, content, paid media and automation around your revenue
            goals—combining creativity with data-driven optimisation.
          </p>
        </div>

        {/* ================= PILLARS ================= */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (pillarRef.current[i] = el)}
                whileHover={{ y: -6, scale: 1.03 }}
                className="
                  p-6 rounded-2xl
                  bg-white/5 border border-white/10
                  backdrop-blur-xl
                  hover:border-cyan-400/40
                  transition
                "
              >
                <Icon className="text-cyan-400 mb-4" size={28} />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ================= SERVICES ================= */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            End-to-End Digital Marketing Services
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
                  <h4 className="font-semibold">{item.title}</h4>
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