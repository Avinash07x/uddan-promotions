import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Discovery & Strategy",
    desc: "Stakeholder interviews, user research and competitive benchmarking to define goals, KPIs and success metrics.",
  },
  {
    title: "Experience & Architecture",
    desc: "Information architecture, wireframes and technical blueprints that prioritise usability, scalability and compliance.",
  },
  {
    title: "Build, Secure & Launch",
    desc: "Agile sprints with automated testing, DevSecOps and performance optimisation before go-live.",
  },
  {
    title: "Measure & Optimise",
    desc: "Continuous analytics, experimentation and growth loops to maximise lifetime value.",
  },
];

export default function HowWeWork() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ================= HEADING ================= */
      gsap.fromTo(
        ".how-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      /* ================= CARDS ================= */
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              toggleActions: "play none none reverse",
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
      className="
        relative bg-[#020617] text-white
        py-14 sm:py-20 md:py-24
        px-4 sm:px-6 md:px-12 lg:px-16
        overflow-hidden
      "
    >
      {/* GLOW */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] md:w-[700px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <div className="how-heading text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            How we work
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-400 max-w-3xl text-sm sm:text-base">
            A transparent delivery framework focused on long-term value.
            Our proven methodology keeps teams aligned and maximises results.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mt-10 sm:mt-14 md:mt-16">

          {/* vertical line */}
          <div className="
            hidden md:block
            absolute left-4 sm:left-5 top-0 bottom-0 w-[2px] bg-white/10
          " />

          <div className="space-y-6 sm:space-y-8 md:space-y-10">

            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="
                  relative
                  bg-white/5 border border-white/10
                  backdrop-blur-xl
                  rounded-xl sm:rounded-2xl
                  p-4 sm:p-6 md:p-8
                  pl-12 sm:pl-14 md:pl-16
                  transition
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.1)]
                "
              >

                {/* NUMBER BADGE (FIXED RESPONSIVE) */}
                <div className="
                  absolute left-0 sm:left-1 md:left-0 top-4 sm:top-5 md:top-6
                  w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10
                  text-cyan-400
                  flex items-center justify-center
                  font-semibold text-[10px] sm:text-xs md:text-sm
                ">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* TITLE */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  {step.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 sm:mt-3 text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}