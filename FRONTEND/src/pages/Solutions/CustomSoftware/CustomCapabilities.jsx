import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Building2,
  BarChart3,
  Workflow,
  Users,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

//  DATA 
const features = [
  {
    title: "Enterprise-grade portals",
    desc: "Partner, vendor, franchise, and employee portals with granular access controls and multilingual content management.",
    icon: Building2,
  },
  {
    title: "Analytics & reporting platforms",
    desc: "Real-time dashboards, predictive insights, and data visualisation across product, marketing, and operations.",
    icon: BarChart3,
  },
  {
    title: "Process automation workflows",
    desc: "Digitise complex approval chains, compliance checkpoints, and field-force activities with intelligent automation.",
    icon: Workflow,
  },
  {
    title: "Customer experience platforms",
    desc: "Responsive web and mobile experiences with personalisation, omnichannel support, and loyalty program integrations.",
    icon: Users,
  },
];

//  COMPONENT 
export default function CustomCapabilities() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // LEFT CONTENT
      gsap.fromTo(
        leftRef.current,
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
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            delay: i * 0.15,
            duration: 0.7,
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
      <div className="absolute top-[-120px] left-[30%] w-[500px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/*  LEFT  */}
        <div ref={leftRef}>
          <p className="text-cyan-400 text-sm mb-3">
            Custom Software Capabilities
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Tailored to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Your Vision
            </span>
          </h2>
        </div>

        {/*  RIGHT CARDS  */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 180 }}
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

                {/* icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-4">
                  <Icon size={24} />
                </div>

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

      </div>
    </section>
  );
}