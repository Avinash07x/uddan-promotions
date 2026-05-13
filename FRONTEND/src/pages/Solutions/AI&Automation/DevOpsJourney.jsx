import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Users,
  Rocket,
  Layers,
  RefreshCcw,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

//  DATA 
const journey = [
  {
    title: "Workshop",
    desc: "Discovery sessions to align goals, KPIs and governance.",
    icon: Users,
  },
  {
    title: "Pilot",
    desc: "Launch pipelines for a flagship product or campaign.",
    icon: Rocket,
  },
  {
    title: "Scale",
    desc: "Reusable modules, training and documentation rollout.",
    icon: Layers,
  },
  {
    title: "Optimise",
    desc: "Quarterly reviews, performance tuning and roadmap updates.",
    icon: RefreshCcw,
  },
];

const outcomes = [
  {
    title: "Reliable Releases",
    desc: "Error budgets protected with rollback and canary deployments.",
    icon: ShieldCheck,
  },
  {
    title: "Faster Time-to-Market",
    desc: "Automation and pipeline analytics speed up releases.",
    icon: TrendingUp,
  },
  {
    title: "SEO & Performance Boost",
    desc: "Faster deployments improve site speed and rankings.",
    icon: BarChart3,
  },
];

const why = [
  {
    title: "Full-Stack Enablement",
    desc: "Templates, playbooks and hands-on coaching.",
  },
  {
    title: "Business-Aligned Metrics",
    desc: "Dashboards tied to revenue, retention and conversions.",
  },
];

//  COMPONENT 
export default function DevOpsJourney() {
  const sectionRef = useRef(null);
  const stepRef = useRef([]);
  const outcomeRef = useRef([]);
  const whyRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      stepRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: i % 2 === 0 ? -80 : 80 },
          {
            opacity: 1,
            x: 0,
            delay: i * 0.2,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });

      outcomeRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            delay: i * 0.15,
            duration: 0.6,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

      whyRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
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
      className="relative bg-[#020617] text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* glow */}
      <div className="absolute top-[-120px] left-[30%] w-[500px] h-[350px] bg-green-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/*  HEADER  */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-green-400 text-sm mb-3">
            Automation to Adoption Journey
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            From Pipeline to{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Business Impact
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            We ensure DevOps adoption sticks with structured enablement and continuous optimisation.
          </p>
        </div>

        {/*  JOURNEY  */}
        <div className="mt-16 space-y-8">
          {journey.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (stepRef.current[i] = el)}
                className="
                  flex items-start gap-6
                  p-6 rounded-2xl
                  bg-white/5 border border-white/10
                "
              >
                <div className="p-3 rounded-xl bg-green-400/10">
                  <Icon className="text-green-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/*  OUTCOMES  */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            Reliability Outcomes
          </h3>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  ref={(el) => (outcomeRef.current[i] = el)}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
                >
                  <Icon className="text-green-400 mx-auto mb-3" />
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
            Why Partner with Uddan Promotions
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
            className="mt-10 px-8 py-3 rounded-xl bg-gradient-to-r from-green-400 to-cyan-400 text-black font-semibold flex items-center gap-2 mx-auto"
          >
            <Zap size={18} />
            Launch Your DevOps Sprint
          </motion.button>
        </div>

      </div>
    </section>
  );
}