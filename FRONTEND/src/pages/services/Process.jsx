import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: 1, title: "Discovery", desc: "We analyze your business, audience, and goals." },
  { id: 2, title: "Strategy", desc: "We craft a data-driven roadmap for growth." },
  { id: 3, title: "Execution", desc: "We build, launch, and optimize your product." },
  { id: 4, title: "Scale", desc: "We continuously improve and scale results." },
];

export default function Process() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* 🔥 Heading */
      gsap.from(".process-heading", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      /* 📈 Timeline line */
      gsap.fromTo(
        lineRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 20%",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );

      /* 🧠 Cards reveal */
      cardsRef.current.forEach((card) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });

      /* 🎯 Active focus */
      cardsRef.current.forEach((card) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActive(card),
          onEnterBack: () => setActive(card),
        });
      });

      function setActive(active) {
        cardsRef.current.forEach((card) => {
          gsap.to(card, {
            scale: 0.95,
            opacity: 0.4,
            duration: 0.3,
          });
        });

        gsap.to(active, {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-16 py-32 text-white overflow-hidden
      bg-gradient-to-br from-[#1A202C] via-[#2D374E] to-[#4A5568]"
    >

      {/* 🌌 Glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(200,255,0,0.08),transparent)]" />
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Heading */}
      <div className="process-heading max-w-6xl mx-auto mb-20 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          Our <span className="text-accent">Process</span>
        </h2>
        <p className="text-gray-300 mt-4 max-w-xl">
          A proven system to turn ideas into scalable digital products.
        </p>
      </div>

      {/* Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[80px_1fr] gap-10 relative z-10">
        
        {/* 📈 Timeline */}
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 top-0 w-[2px] h-full bg-white/10 -translate-x-1/2">
            <div
              ref={lineRef}
              className="w-full h-0 bg-gradient-to-b from-accent via-lime-300 to-transparent"
            />
          </div>
        </div>

        {/* 🧠 Steps */}
        <div className="space-y-20">
          {steps.map((step, i) => (
            <div
              key={step.id}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative p-8 rounded-2xl border border-white/10
              bg-white/5 backdrop-blur-xl
              transition duration-500 hover:border-accent/50 hover:bg-white/10"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition 
              bg-[radial-gradient(circle,rgba(200,255,0,0.15),transparent)]" />

              {/* Number */}
              <div className="text-accent text-4xl font-extrabold mb-4 drop-shadow-[0_0_10px_rgba(200,255,0,0.6)]">
                0{step.id}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}