import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Search, LineChart, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Technical SEO",
    desc: "XML sitemaps, robots best practices, canonical strategy and schema markup to ensure crawlability and index dominance.",
    icon: Search,
  },
  {
    title: "Conversion Design",
    desc: "UX workshops, micro-interactions and persuasive copywriting engineered to increase engagement and enquiries.",
    icon: Zap,
  },
  {
    title: "Analytics Setup",
    desc: "GA4, Tag Manager, Mixpanel and heatmaps configured before launch for full funnel visibility.",
    icon: LineChart,
  },
];

export default function SEOSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // LEFT
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

      // CARDS
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.96 },
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
      <div className="absolute top-[-120px] right-[25%] w-[500px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div ref={leftRef}>
          <p className="text-cyan-400 text-sm mb-3">
            Engineered to rank on page one
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            SEO-First Websites Built{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              for Revenue
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
            Every build begins with a deep technical audit and keyword blueprint.
            We deliver lightning-fast experiences, structured data and content hubs
            that search engines and customers love.
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
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 180, damping: 18 }}
                className="
                  relative flex gap-4 p-6 rounded-2xl
                  bg-white/5 border border-white/10
                  backdrop-blur-xl
                  hover:border-cyan-400/40
                  transition
                "
              >
                {/* glow hover */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-cyan-400/10 to-transparent blur-xl rounded-2xl" />

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center text-cyan-400">
                  <Icon size={22} />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}