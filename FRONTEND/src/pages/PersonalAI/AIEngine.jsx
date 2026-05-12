import { useLayoutEffect, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Brain, Database, Workflow } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Machine Learning (ML) Models",
    desc: "Advanced ML algorithms trained to recognize patterns, process natural language and make intelligent decisions based on historical data and your inputs.",
    icon: Brain,
  },
  {
    title: "Contextual Data Processing",
    desc: "Using RAG (Retrieval-Augmented Generation), we connect your databases, CRMs and documents to give AI real business context and accurate responses.",
    icon: Database,
  },
  {
    title: "Autonomous Workflow Orchestration",
    desc: "AI triggers events, updates systems, sends communications and routes tasks across platforms without human intervention.",
    icon: Workflow,
  },
];

const terminalLines = [
  "Initializing AI Core Protocol...",
  "Loading custom knowledge base... [OK]",
  "Establishing secure connection to CRM...",
  "Accessing API endpoints... [SUCCESS]",
];

export default function AIEngine() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const terminalRef = useRef(null);

  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // ================= GSAP =================
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.fromTo(
        terminalRef.current,
        { opacity: 0, x: 80, scale: 0.95 },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // ================= TYPEWRITER LOOP =================
  useEffect(() => {
    const typingSpeed = 25;

    const timeout = setTimeout(() => {
      if (lineIndex < terminalLines.length) {
        if (charIndex < terminalLines[lineIndex].length) {
          setCurrentLine(
            (prev) + terminalLines[lineIndex][charIndex]
          );
          setCharIndex(charIndex + 1);
        } else {
          setLines((prev) => [...prev, currentLine]);
          setCurrentLine("");
          setCharIndex(0);
          setLineIndex(lineIndex + 1);
        }
      } else {
        // restart loop after pause
        setTimeout(() => {
          setLines([]);
          setLineIndex(0);
          setCharIndex(0);
        }, 1500);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, currentLine]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020617] text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-[-120px] left-[30%] w-[500px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <div ref={leftRef}>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Engine of Automation:{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              How AI Works
            </span>
          </h2>

          <p className="mt-6 text-gray-400 text-sm md:text-base max-w-md">
            True automation isn’t just about scripts; it’s about intelligence that adapts.
            Understanding the core components of your Personal AI reveals its true power.
          </p>

          <div className="mt-10 space-y-6">
            {features.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="flex gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
                >
                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center text-cyan-400">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* RIGHT TERMINAL */}
        <motion.div
          ref={terminalRef}
          className="relative rounded-2xl bg-black/70 border border-white/10 p-6 font-mono text-sm backdrop-blur-xl overflow-hidden"
        >
          {/* header */}
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 bg-red-500 rounded-full" />
            <span className="w-3 h-3 bg-yellow-500 rounded-full" />
            <span className="w-3 h-3 bg-green-500 rounded-full" />
          </div>

          {/* content */}
          <div className="space-y-2 text-green-400">
            {lines.map((line, i) => (
              <p key={i}>{">"} {line}</p>
            ))}

            {/* current typing */}
            <p>
              {">"} {currentLine}
              <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse" />
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}