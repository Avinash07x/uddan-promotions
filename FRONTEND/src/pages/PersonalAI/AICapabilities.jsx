import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Bot, Workflow, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Custom Chatbots & Assistants",
    desc: "Engage customers or assist employees with a chatbot that understands your brand voice and accesses your knowledge base.",
    icon: Bot,
  },
  {
    title: "Workflow Automation",
    desc: "Automate repetitive tasks like data entry, email sorting and report generation so you can focus on strategy.",
    icon: Workflow,
  },
  {
    title: "Secure Data Processing",
    desc: "Built in isolated, secure environments ensuring your proprietary data stays private and protected.",
    icon: ShieldCheck,
  },
];

export default function AICapabilities() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // LEFT TEXT ANIMATION
      gsap.fromTo(
        ".ai-left",
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // CARDS STAGGER
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
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
      id="ai-Capabilities"
      ref={sectionRef}
      className="relative bg-[#020617] text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* glow */}
      <div className="absolute top-[-120px] left-[30%] w-[500px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="ai-left">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            What Can Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Personal AI
            </span>{" "}
            Do?
          </h2>

          <p className="mt-6 text-gray-400 max-w-md text-sm md:text-base">
            Tailored artificial intelligence designed to solve your specific challenges.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="
                  relative p-6 rounded-2xl
                  bg-white/5 border border-white/10
                  backdrop-blur-xl
                  hover:border-cyan-400/40
                  transition
                "
              >
                {/* glow hover */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-cyan-400/10 to-transparent blur-xl rounded-2xl" />

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-4">
                  <Icon size={22} />
                </div>

                <h3 className="text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-400 text-sm leading-relaxed">
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