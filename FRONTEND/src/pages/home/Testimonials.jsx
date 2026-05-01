import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/uddan1.png";

export function Testimonials() {
  const items = [
    {
      logo,
      rating: 5,
      n: "Aparna Mishra",
      r: "CMO • Northwind Wellness",
      q: "Uddan completely transformed how we approach growth. Their team helped us build a consistent acquisition engine with clear strategy, execution, and measurable outcomes. We finally have predictable results.",
      c: "Gurugram",
    },
    {
      logo,
      rating: 4,
      n: "Harshvardhan Patel",
      r: "Founder • Meridian Infra",
      q: "Working with Uddan has been smooth and structured. They ensured every stakeholder stayed aligned while delivering on time. The reporting clarity and communication made a huge difference.",
      c: "Ahmedabad",
    },
    {
      logo,
      rating: 5,
      n: "Lina Capaldi",
      r: "VP Marketing • BluePeak",
      q: "Their localisation and SEO strategies helped us scale across multiple regions. We saw consistent growth in organic leads across three languages within months.",
      c: "Milan",
    },
    {
      logo,
      rating: 4,
      n: "Saurabh Jain",
      r: "Product Head • LedgerPay",
      q: "From security reviews to release automation, everything was handled professionally. The product improvements and UX refinements resulted in a much smoother user experience.",
      c: "Mumbai",
    },
    {
      logo,
      rating: 5,
      n: "Emily Carter",
      r: "Director • Harbor",
      q: "We experienced a significant increase in qualified enquiries after implementing their CRO strategies. The team brings both creativity and data-driven thinking.",
      c: "London",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 🔄 Auto slide (pause on hover)
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered, items.length]);

  return (
    <section className="bg-gradient-to-b from-[#070d1a] to-[#0a1020] py-24 text-center overflow-hidden">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
        What our clients say
      </h2>

      <p className="text-slate-400 mb-14">
        Rated <span className="text-emerald-400 font-bold">4.9/5</span>
      </p>

      {/* Cards */}
      <div
        className="relative flex justify-center items-center h-[420px] perspective-[1200px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence mode="wait">
          {items.map((item, i) => {
            const position = (i - index + items.length) % items.length;

            if (
              position !== 0 &&
              position !== 1 &&
              position !== items.length - 1
            ) return null;

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0.6,
                  rotateY: position === 1 ? 60 : -60,
                }}
                animate={{
                  opacity: position === 0 ? 1 : 0.6,
                  scale: position === 0 ? 1 : 0.85,
                  x: position === 0 ? 0 : position === 1 ? 320 : -320,
                  rotateY: position === 0 ? 0 : position === 1 ? -25 : 25,
                  z: position === 0 ? 100 : -100,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.6,
                  rotateY: position === 1 ? 60 : -60,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 0.8, 0.25, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 20px 50px rgba(59,130,246,0.4)",
                }}
                className="absolute w-[300px] h-[340px] p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl flex flex-col justify-between"
              >
                {/* Top */}
                <div className="flex items-center justify-between mb-3">
                  <img src={item.logo} alt="logo" className="w-10 h-10" />

                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="text-cyan-400 text-sm">★</span>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  “{item.q}”
                </p>

                {/* User */}
                <div className="mt-4">
                  <div className="text-white font-semibold">{item.n}</div>
                  <div className="text-slate-400 text-sm">{item.r}</div>
                  <div className="text-blue-400 text-xs">{item.c}</div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 gap-2">
        {items.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-blue-500 scale-125" : "bg-slate-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}