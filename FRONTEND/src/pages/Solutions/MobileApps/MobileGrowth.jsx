import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
  Users,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

//  DATA 
const steps = [
  {
    title: "Product Discovery",
    desc: "Stakeholder interviews, competitor analysis and KPI definition to anchor the roadmap.",
    icon: Search,
  },
  {
    title: "UX & UI Sprints",
    desc: "Wireframes, motion design and usability testing ensure intuitive user journeys.",
    icon: PencilRuler,
  },
  {
    title: "Agile Development",
    desc: "Two-week sprints with automated QA, security reviews and stakeholder demos.",
    icon: Code2,
  },
  {
    title: "Launch & Growth",
    desc: "Store approvals, analytics, marketing automation and retention campaigns.",
    icon: Rocket,
  },
];

const whyChoose = [
  {
    title: "Cross-functional Pods",
    desc: "Strategists, designers, engineers and marketers working as one team.",
    icon: Users,
  },
  {
    title: "Data-led Decisions",
    desc: "Cohort analysis, retention tracking and monetisation insights.",
    icon: BarChart3,
  },
  {
    title: "Security-first Approach",
    desc: "Encryption, compliance and automated testing built-in.",
    icon: ShieldCheck,
  },
];

//  COMPONENT 
export default function MobileProcess() {
  const sectionRef = useRef(null);
  const stepsRef = useRef([]);
  const whyRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // STEPS ANIMATION
      stepsRef.current.forEach((el, i) => {
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
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      // WHY CARDS
      whyRef.current.forEach((el, i) => {
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

        {/*  HEADER  */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            How We Build{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Winning Mobile Apps
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            A proven framework combining product thinking, engineering excellence
            and growth strategies.
          </p>
        </div>

        {/*  STEPS  */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">


          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (stepsRef.current[i] = el)}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative text-center"
              >
                {/* circle */}
                <div className="
                  mx-auto w-14 h-14 rounded-full
                  bg-cyan-400/10 border border-cyan-400/30
                  flex items-center justify-center
                  text-cyan-400 mb-4
                ">
                  <Icon size={24} />
                </div>

                {/* step number */}
                <div className="text-xs text-gray-500 mb-2">
                  Step {i + 1}
                </div>

                <h3 className="font-semibold text-lg">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/*  WHY CHOOSE  */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            Why Teams Choose{" "}
            <span className="text-cyan-400">Uddan Promotions</span>
          </h3>

          <p className="mt-6 text-center text-gray-400">
            From startups to enterprises, we accelerate launches with a proven growth playbook and senior 
            engineering leadership.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <Icon className="text-cyan-400 mb-4" size={28} />

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