import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Compass, Code2, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Strategy & UX Research",
    desc: "Customer interviews, journey mapping and CRO workshops that align your website with high-intent buyer journeys.",
    icon: Compass,
  },
  {
    title: "Custom Development & Integrations",
    desc: "Headless CMS, CRM, ERP and marketing automation integrations to streamline operations and personalisation.",
    icon: Code2,
  },
  {
    title: "Security & Continuous Optimisation",
    desc: "Pen-testing, accessibility audits, performance tuning and proactive maintenance handled by dedicated specialists.",
    icon: ShieldCheck,
  },
];

export default function FullService() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // TITLE
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // CARDS
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
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
      ref={sectionRef}
      className="relative bg-[#020617] text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* glow */}
      <div className="absolute top-[-120px] left-[40%] w-[500px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div ref={titleRef} className="text-center max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Full-Service{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Web Development Capabilities
            </span>
          </h2>
        </div>

        {/* GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="
                  relative p-8 rounded-2xl
                  bg-white/5 border border-white/10
                  backdrop-blur-xl
                  hover:border-cyan-400/40
                  transition
                "
              >
                {/* glow hover */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-cyan-400/10 to-transparent blur-xl rounded-2xl" />

                {/* ICON */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-6">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400 text-sm leading-relaxed">
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