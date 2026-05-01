import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../../assets/services5.jpg";

gsap.registerPlugin(ScrollTrigger);

// ================= DATA =================
const services = Array(6).fill({
  title: "Website Design & Development",
  desc: "Responsive, conversion-led websites built for growth.",
  img: img1,
  points: [
    "UX workshops and CRO",
    "Performance optimisation",
    "Analytics setup",
  ],
});

export default function Servicesc() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = containerRef.current;

      const getScrollAmount = () => {
        return el.scrollWidth - window.innerWidth;
      };

      gsap.to(el, {
        x: () => -getScrollAmount(),
        ease: "none",
        willChange: "transform",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1.2, // 🔥 smoother scroll (increase = smoother)
          pin: true,
          anticipatePin: 1, // 🔥 removes jump
          invalidateOnRefresh: true, // 🔥 responsive fix
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020617] text-white overflow-hidden"
    >
      {/* Heading */}
      <div className="px-10 py-20">
        <h2 className="text-4xl font-bold">Core Expertise</h2>
        <p className="text-gray-400 mt-4 max-w-xl">
          Digital services that deliver compounding ROI.
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-8 px-10 will-change-transform"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="min-w-[350px] bg-white/5 border border-white/10 rounded-2xl overflow-hidden transform-gpu hover:border-blue-500/40"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.img}
                  alt=""
                  className="w-full h-48 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold">
                  {service.title}
                </h3>

                <p className="text-gray-400 mt-2 text-sm">
                  {service.desc}
                </p>

                <ul className="mt-3 space-y-1 text-sm text-gray-300">
                  {service.points.map((p, idx) => (
                    <li key={idx}>✔ {p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}