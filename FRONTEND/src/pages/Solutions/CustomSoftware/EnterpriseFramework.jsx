import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
  Factory,
  ShoppingCart,
  HeartPulse,
  Landmark,
  Layers,
  ShieldCheck,
  Users,
  Activity,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ================= DATA =================
const steps = [
  {
    title: "Discover & Align",
    desc: "Vision workshops, success metrics, user personas, and technical audit to build a clear delivery plan.",
    icon: Search,
  },
  {
    title: "Design & Validate",
    desc: "UX/UI design systems, clickable prototypes, usability testing, and stakeholder walkthroughs.",
    icon: PencilRuler,
  },
  {
    title: "Build & Integrate",
    desc: "Agile sprints, automated QA, CI/CD pipelines, and secure integrations with your existing ecosystem.",
    icon: Code2,
  },
  {
    title: "Launch & Evolve",
    desc: "Go-live readiness, enablement training, analytics instrumentation, and long-term optimisation support.",
    icon: Rocket,
  },
];

const industries = [
  { title: "Fintech & BFSI", icon: Landmark },
  { title: "Manufacturing", icon: Factory },
  { title: "Retail & D2C", icon: ShoppingCart },
  { title: "Healthcare", icon: HeartPulse },
];

const tech = [
  "React, Vue, Next.js",
  "Laravel, Node.js, Django",
  "PostgreSQL, MongoDB",
  "AWS, Azure, Docker",
  "SSO, OAuth, GDPR",
  "ERP, CRM APIs",
];

const extras = [
  {
    title: "Performance Engineering",
    desc: "Load testing, CDN optimisation and observability dashboards.",
    icon: Activity,
  },
  {
    title: "Compliance Ready",
    desc: "Encryption, RBAC, audit trails and regulatory frameworks.",
    icon: ShieldCheck,
  },
  {
    title: "User Adoption",
    desc: "Onboarding flows, training and change management.",
    icon: Users,
  },
  {
    title: "Dedicated Pods",
    desc: "Cross-functional teams with sprint dashboards.",
    icon: Layers,
  },
];

// ================= COMPONENT =================
export default function EnterpriseFramework() {
  const sectionRef = useRef(null);
  const stepRef = useRef([]);
  const industryRef = useRef([]);
  const extraRef = useRef([]);

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

      industryRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            delay: i * 0.1,
            duration: 0.6,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

      extraRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
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
      className="bg-[#020617] text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= DELIVERY FRAMEWORK ================= */}
        <h2 className="text-3xl md:text-5xl font-bold text-center">
          Proven Delivery Framework
        </h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (stepRef.current[i] = el)}
                whileHover={{ y: -6 }}
                className="text-center"
              >
                <Icon className="mx-auto text-cyan-400 mb-4" />
                <h3 className="font-semibold">{step.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ================= INDUSTRIES ================= */}
        <h3 className="mt-24 text-2xl md:text-4xl font-bold text-center">
          Industries We Empower
        </h3>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (industryRef.current[i] = el)}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 text-center"
              >
                <Icon className="mx-auto text-cyan-400 mb-3" />
                <p>{item.title}</p>
              </motion.div>
            );
          })}
        </div>

        {/* ================= IMPACT ================= */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 text-center">
          <p className="text-gray-300">
            A manufacturing client reduced manual reporting time by{" "}
            <span className="text-cyan-400 font-bold"> 63% </span>
            after launching a custom analytics hub built by Uddan Promotions.
          </p>

          <button className="mt-6 px-6 py-3 bg-cyan-400 text-black rounded-xl font-semibold hover:scale-105 transition">
            Schedule a discovery call
          </button>
        </div>

        {/* ================= TECH STACK ================= */}
        <h3 className="mt-24 text-2xl md:text-4xl font-bold text-center">
          Technology Stack & Integrations
        </h3>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {tech.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-5 py-2 rounded-full bg-white/5 border border-white/10"
            >
              {t}
            </motion.div>
          ))}
        </div>

        {/* ================= EXTRA ================= */}
        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {extras.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (extraRef.current[i] = el)}
                whileHover={{ y: -6 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <Icon className="text-cyan-400 mb-4" />
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-2">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}