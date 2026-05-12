import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import A1 from "../../assets/services4.webp"; // replace with AI image

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Knowledge Integration",
    desc: "We connect your AI to your existing tools like CRM, databases, Notion and Google Drive, training it on your real data and workflows.",
  },
  {
    title: "Behavior & Tone Prompting",
    desc: "We craft system prompts and guardrails so your AI behaves reliably, follows business rules and speaks in your brand’s voice.",
  },
  {
    title: "Testing & Deployment",
    desc: "We rigorously test for accuracy and hallucinations before deploying seamlessly into your workflows, websites or internal systems.",
  },
];

export default function AIBuildProcess() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const stepsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // IMAGE REVEAL
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: -80, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // STEPS ANIMATION
      stepsRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 60,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            delay: i * 0.15,
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
      <div className="absolute top-[-120px] right-[20%] w-[500px] h-[350px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE */}
        <div ref={imgRef} className="relative">
          <img
            src={A1}
            alt="AI Engineers"
            className="rounded-2xl w-full h-[400px] md:h-[500px] object-cover"
          />

          {/* overlay glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-cyan-400/10 to-transparent" />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            How We Build Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-sm md:text-base max-w-md">
            Engineers collaborating on an AI model to design, train and deploy intelligent systems tailored to your business.
          </p>

          {/* STEPS */}
          <div className="mt-10 space-y-8 relative">

            {/* vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white/10 hidden md:block" />

            {steps.map((step, i) => (
              <motion.div
                key={i}
                ref={(el) => (stepsRef.current[i] = el)}
                whileHover={{ scale: 1.02, y: -3 }}
                transition={{ type: "spring", stiffness: 160 }}
                className="relative pl-12"
              >
                {/* number */}
                <div className="
                  absolute left-0 top-1
                  w-8 h-8 rounded-full
                  bg-cyan-400/10 text-cyan-400
                  flex items-center justify-center
                  text-sm font-semibold
                  border border-cyan-400/20
                ">
                  {i + 1}
                </div>

                <h3 className="text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}