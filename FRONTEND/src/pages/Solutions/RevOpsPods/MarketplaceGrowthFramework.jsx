import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Search,
  FileText,
  TrendingUp,
  BarChart3,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

//  DATA 
const steps = [
  {
    title: "Audit & Strategy",
    desc: "Account health, competition analysis and SKU prioritisation.",
    icon: Search,
  },
  {
    title: "Optimise Listings",
    desc: "Enhanced content, reviews programme and pricing optimisation.",
    icon: FileText,
  },
  {
    title: "Scale Advertising",
    desc: "Sponsored ads, retargeting and omnichannel promotions.",
    icon: TrendingUp,
  },
  {
    title: "Analyse & Expand",
    desc: "Profit tracking, catalogue expansion and global launches.",
    icon: BarChart3,
  },
];

const why = [
  {
    title: "Dedicated Growth Team",
    desc: "Category managers, designers, copywriters and ad specialists.",
    icon: Users,
  },
  {
    title: "Compliance Monitoring",
    desc: "Protect account health, ratings and marketplace policies.",
    icon: ShieldCheck,
  },
  {
    title: "Automation Systems",
    desc: "Repricing, replenishment and competitor alerts.",
    icon: Zap,
  },
];

//  COMPONENT 
export default function MarketplaceGrowthFramework() {
  const sectionRef = useRef(null);
  const stepRef = useRef([]);
  const whyRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // STEP ANIMATION
      stepRef.current.forEach((el, i) => {
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

      // WHY ANIMATION
      whyRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
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
      <div className="absolute top-[-120px] left-[40%] w-[500px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/*  HEADER  */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-cyan-400 text-sm mb-3">
            Marketplace Growth Framework
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Scale Your Marketplace{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Revenue Engine
            </span>
          </h2>
        </div>

        {/*  STEPS  */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (stepRef.current[i] = el)}
                whileHover={{ y: -6, scale: 1.03 }}
                className="
                  relative p-6 rounded-2xl
                  bg-white/5 border border-white/10
                  backdrop-blur-xl
                  hover:border-cyan-400/40
                  transition
                "
              >
                {/* step number */}
                <span className="text-xs text-gray-500">
                  0{i + 1}
                </span>

                <Icon className="text-cyan-400 my-3" size={26} />

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

        {/*  WHY  */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            Why Sellers Partner with Us
          </h3>

          <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
            We operate as an extension of your revenue team—combining
            operational excellence with marketing intelligence.
          </p>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {why.map((item, i) => {
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
                  <h4 className="font-semibold">
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