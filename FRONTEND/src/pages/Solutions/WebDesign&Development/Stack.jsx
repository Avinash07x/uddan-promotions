import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Layers,
  Rocket,
  BarChart3,
  Users,
  ShieldCheck,
  Activity,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ================= DATA =================
const techStack = [
  "PHP 8+ & Laravel",
  "React & Vue",
  "Tailwind & Bootstrap",
  "AWS & DigitalOcean",
];

const agilePoints = [
  "Dedicated product manager and sprint burndown dashboards.",
  "Interactive prototypes and usability testing before every release.",
  "Post-launch growth playbooks covering SEO, CRO and automation.",
];

const whyChoose = [
  {
    title: "Local-first strategies",
    desc: "Tailored for Indian metros and tier-2 cities with hyperlocal insights.",
    icon: Layers,
  },
  {
    title: "Data-backed CRO",
    desc: "Experimentation frameworks with documented uplift reports.",
    icon: BarChart3,
  },
  {
    title: "Cross-functional pods",
    desc: "UX, development, analytics and content working together.",
    icon: Users,
  },
  {
    title: "24x7 SLA Support",
    desc: "Proactive monitoring and rapid rollback systems.",
    icon: ShieldCheck,
  },
];

export default function Stack() {
  const sectionRef = useRef(null);
  const techRef = useRef([]);
  const agileRef = useRef(null);
  const whyRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // TECH STACK FLOAT IN
      techRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            delay: i * 0.1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      });

      // AGILE SECTION
      gsap.fromTo(
        agileRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: agileRef.current,
            start: "top 75%",
          },
        }
      );

      // WHY CARDS
      whyRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
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
      {/* GLOBAL GLOW */}
      <div className="absolute top-[-120px] left-[40%] w-[500px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* ================= TECH STACK ================= */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Technology Stack that Keeps You{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Future-Ready
            </span>
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                ref={(el) => (techRef.current[i] = el)}
                whileHover={{ scale: 1.1, y: -4 }}
                className="
                  px-6 py-3 rounded-full
                  bg-white/5 border border-white/10
                  backdrop-blur-xl
                  hover:border-cyan-400/40
                  transition
                "
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= AGILE DELIVERY ================= */}
        <div
          ref={agileRef}
          className="mt-24 grid lg:grid-cols-2 gap-14 items-center"
        >
          <div>
            <h3 className="text-2xl md:text-4xl font-bold">
              Agile Delivery, Transparent Reporting
            </h3>

            <p className="mt-6 text-gray-400">
              Weekly sprint reviews, shared project boards and live analytics
              ensure you always see progress. We collaborate as an extension of
              your team.
            </p>

            <ul className="mt-6 space-y-3 text-gray-300">
              {agilePoints.map((p, i) => (
                <li key={i}>✔ {p}</li>
              ))}
            </ul>
          </div>

          {/* RIGHT VISUAL CARD */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="
              p-8 rounded-2xl
              bg-white/5 border border-white/10
              backdrop-blur-xl
            "
          >
            <div className="flex items-center gap-4 mb-4">
              <Rocket className="text-cyan-400" />
              <span>Live Sprint Dashboard</span>
            </div>

            <div className="h-40 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-xl flex items-center justify-center text-gray-400">
              Analytics + Progress UI
            </div>
          </motion.div>
        </div>

        {/* ================= WHY CHOOSE ================= */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            Why Brands Choose{" "}
            <span className="text-cyan-400">Uddan Promotions</span>
          </h3>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  ref={(el) => (whyRef.current[i] = el)}
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