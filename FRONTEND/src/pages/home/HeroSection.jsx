import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, ChevronRight, CheckCircle2,
  LayoutGrid, Layers, Sparkles, ShieldCheck, Zap, Box,
} from "lucide-react";


const FEATURES     = ["ISO Security", "Agile MVP", "Global Delivery", "SEO Optimized", "High Performance"];
const ORBIT_ICONS  = [LayoutGrid, Layers, Sparkles, ShieldCheck, Zap, Box];

/* Floating background pills — scattered across whole section */
const ORB_DATA = [
  { Icon: LayoutGrid,  top: "12%",  left: "3%",   size: 50, tw: "bg-blue-500/15   border-blue-400/25   text-blue-400"   },
  { Icon: Layers,      top: "55%",  left: "1%",   size: 42, tw: "bg-green-500/15  border-green-400/25  text-green-400"  },
  { Icon: Sparkles,    top: "80%",  left: "6%",   size: 46, tw: "bg-violet-500/15 border-violet-400/25 text-violet-400" },
  { Icon: ShieldCheck, top: "8%",   right: "5%",  size: 38, tw: "bg-red-500/15    border-red-400/20    text-red-400"    },
  { Icon: Zap,         top: "75%",  right: "4%",  size: 52, tw: "bg-amber-500/15  border-amber-400/22  text-amber-400"  },
  { Icon: Box,         top: "38%",  right: "2%",  size: 40, tw: "bg-teal-500/15   border-teal-400/22   text-teal-400"   },
];

/* ═══════════════════════════════════════════════════════════
   ANIMATION VARIANTS
═══════════════════════════════════════════════════════════ */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const staggerParent = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const WORDS        = ["Software", "Mobile Apps", "AI Agents", "SaaS", "Platforms"];

function RotatingWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setText(currentWord.substring(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200); // pause before delete
        }
      } else {
        // Deleting
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span
      style={{
        display: "inline-block",
        minWidth: "140px",
        borderRight: "2px solid #f97316", // cursor
        paddingRight: "5px",
        whiteSpace: "nowrap",
        background:
          "linear-gradient(135deg,#f97316 0%,#ec4899 50%,#f59e0b 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {text}
    </span>
  );
}


function DashboardCard({ mode = "inline" }) {
  const reduce  = useReducedMotion();
  const isOrbit = mode === "orbit";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={reduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: [0, -10, 6, 0] }}
      transition={{ duration: 0.6, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
      className={
        isOrbit
          ? "absolute inset-0 m-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
          : "w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl"
      }
      style={
        isOrbit
          ? { width: "clamp(160px,68%,210px)", height: "fit-content", top: 0, bottom: 0, padding: "14px" }
          : { padding: "16px 20px" }
      }
    >
      {/* Header */}
      <p className={`text-white/50 tracking-[0.18em] uppercase mb-0.5 ${isOrbit ? "text-[8px]" : "text-[10px]"}`}>
        Social Growth
      </p>
      <h3 className={`text-white font-semibold mb-3 ${isOrbit ? "text-[12px]" : "text-sm sm:text-base"}`}>
        SEO + SMO Dashboard
      </h3>

      {/* Progress */}
      <div className="rounded-xl bg-white/5 border border-white/10 p-3 mb-3">
        <div className="h-1.5 bg-white/10 rounded-full mb-3 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "72%" }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="h-full bg-gradient-to-r from-blue-500 to-green-400 rounded-full"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 text-[9px] rounded-full bg-cyan-400 text-black font-bold">FREE AUDIT</span>
          {!isOrbit && <span className="text-white/40 text-[10px]">72% Complete</span>}
        </div>
      </div>

      {/* Stats */}
      <div className="flex justify-between text-center">
        {[{v:"+150%",l:"REACH"},{v:"+65%",l:"LEADS"},{v:"3.2x",l:"ENGAGE"}].map(s => (
          <div key={s.l}>
            <p className={`text-white font-semibold ${isOrbit ? "text-[11px]" : "text-sm sm:text-base"}`}>{s.v}</p>
            <span className={`text-white/50 tracking-widest ${isOrbit ? "text-[7px]" : "text-[9px] sm:text-[10px]"}`}>{s.l}</span>
          </div>
        ))}
      </div>

      {/* AI badge — inline only */}
      {!isOrbit && (
        <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-green-400/15 flex items-center justify-center flex-shrink-0">
            <Zap className="w-3 h-3 text-green-400" />
          </div>
          <div>
            <p className="text-white text-[11px] font-semibold leading-tight">AI Powered</p>
            <span className="text-green-400 text-[10px]">Core Web Vitals: 98 / 100</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ORBIT RING  (used in both mobile and desktop)
   Props: size (px number), orbitRadius (px), iconSize class
═══════════════════════════════════════════════════════════ */
function OrbitRing({ ringSize = 280, orbitRadius = 132, iconCls = "w-9 h-9" }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative" style={{ width: ringSize, height: ringSize }}>
      {/* Ring border */}
      <div className="absolute inset-0 rounded-full" />

      {/* Spinning icons */}
      {ORBIT_ICONS.map((Icon, i) => {
        const angle = (i / ORBIT_ICONS.length) * 360;
        return (
          <motion.div
            key={i}
            animate={reduce ? {} : { rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              style={{ transform: `rotate(${angle}deg) translateY(-${orbitRadius}px) rotate(-${angle}deg)` }}
              className={`${iconCls} rounded-full bg-white/10 border border-white/20 backdrop-blur-lg flex items-center justify-center`}
            >
              <Icon className="w-3.5 h-3.5 text-white" />
            </div>
          </motion.div>
        );
      })}

      {/* Center dashboard card */}
      <DashboardCard mode="orbit" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ANIM LAYER — floating pills + AI badge
   Absolutely fills the section, z-0, visible ALL devices
═══════════════════════════════════════════════════════════ */
function AnimLayer() {
  const reduce = useReducedMotion();

  const floatAnim = (i) =>
    reduce
      ? { opacity: 0.85, scale: 1 }
      : {
          opacity: 0.85, scale: 1,
          y: [0, -14, 7, 0], rotate: [0, 4, -4, 0],
          transition: { duration: 5 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.45 },
        };

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

      {/* Floating icon pills — scattered across full width */}
      {ORB_DATA.map((o, i) => {
        const Icon = o.Icon;
        const posStyle = {
          top: o.top,
          width: o.size,
          height: o.size,
          ...(o.left  ? { left:  o.left  } : {}),
          ...(o.right ? { right: o.right } : {}),
        };
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={floatAnim(i)}
            style={posStyle}
            className={`absolute rounded-2xl border backdrop-blur-lg grid place-items-center ${o.tw}`}
          >
            <Icon style={{ width: o.size * 0.44, height: o.size * 0.44 }} />
          </motion.div>
        );
      })}

      {/* AI Powered badge — bottom right, all devices */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -10, 6, 0] }}
        transition={{ duration: 0.7, delay: 0.5, y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } }}
        className="
          absolute bottom-5 right-4
          sm:bottom-7 sm:right-6
          flex items-center gap-2.5
          rounded-xl border border-green-400/20
          bg-slate-900/90 backdrop-blur-lg
          px-3 py-2.5 shadow-xl
        "
      >
        <div className="w-8 h-8 rounded-full bg-green-400/15 flex items-center justify-center flex-shrink-0">
          <Zap className="w-3.5 h-3.5 text-green-400" />
        </div>
        <div>
          <p className="text-white text-[12px] font-semibold leading-tight">AI Powered</p>
          <span className="text-green-400 text-[10px] leading-tight">Core Web Vitals: 98 / 100</span>
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HERO SECTION — main export
═══════════════════════════════════════════════════════════ */
export default function HeroSection() {
  return (
    <section className="
      relative overflow-hidden
      bg-gradient-to-br from-[#1A202C] via-[#2D374E] to-[#4A5568]
      min-h-[100dvh]
      flex flex-col justify-center
      px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 2xl:px-20
      pt-2 pb-10
      sm:pt-6 sm:pb-12
      lg:pt-10 lg:pb-6
    ">

      {/* ── BACKGROUND: blobs + dot-grid + vignette ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full bg-black/20 animate-blob"
          style={{ top:"-12%",left:"-8%", width:"clamp(180px,40vw,520px)", height:"clamp(180px,40vw,520px)", filter:"blur(clamp(40px,7vw,120px))" }} />
        <div className="absolute rounded-full bg-blue-500/20 animate-blob [animation-delay:-4s]"
          style={{ top:"28%",right:"-8%", width:"clamp(200px,45vw,560px)", height:"clamp(200px,45vw,560px)", filter:"blur(clamp(45px,8vw,130px))" }} />
        <div className="absolute rounded-full bg-violet-600/20 animate-blob [animation-delay:-8s]"
          style={{ bottom:"0%",left:"28%", width:"clamp(160px,36vw,480px)", height:"clamp(160px,36vw,480px)", filter:"blur(clamp(40px,7vw,120px))" }} />
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/80" />
      </div>

      {/* ── ANIM LAYER: floating pills + AI badge (ALL devices) ── */}
      <AnimLayer />

      {/* ── CONTENT GRID ── */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

        {/* LEFT: text content */}
        <motion.div
          variants={staggerParent}
          initial="hidden"
          animate="show"
          className="text-center lg:text-left mx-auto lg:mx-0 w-full max-w-xl"
        >
          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-bold tracking-tight leading-[1.08] mb-4 sm:mb-5"
            style={{ fontSize: "clamp(1.9rem, 6vw, 72px)" }}
          >
            <span className="text-blue-400 block ">Future-Ready</span>
            <span className="block"><RotatingWord /></span>
            <span className="text-white/70">&amp;</span>{" "}
            <span className="text-blue-400">Growth Engines.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-white/70 leading-relaxed mb-7 sm:mb-8 max-w-[480px] mx-auto lg:mx-0"
            style={{ fontSize: "clamp(0.85rem, 2vw, 1.1rem)" }}
          >
            We build high-performance digital systems that scale globally —
            combining engineering excellence with growth-driven SEO.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col min-[400px]:flex-row gap-3 justify-center lg:justify-start mb-7 sm:mb-8"
          >
            <a href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full font-semibold bg-cyan-400 text-black transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-95 h-10 px-5 text-[13px] sm:h-11 sm:px-6 sm:text-sm md:h-12 md:px-7 md:text-base"
            >
              Launch Project <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 text-white transition-all duration-200 hover:border-cyan-400/40 hover:bg-white/5 active:scale-95 h-10 px-5 text-[13px] sm:h-11 sm:px-6 sm:text-sm md:h-12 md:px-7 md:text-base"
            >
              View Work <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-x-3 gap-y-2 justify-center lg:justify-start text-white/60 text-[11px] sm:text-xs mb-10 lg:mb-0"
          >
            {FEATURES.map(p => (
              <span key={p} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                {p}
              </span>
            ))}
          </motion.div>

          {/* ── MOBILE / TABLET: dashboard card + orbit ring ── */}
          <motion.div
            variants={fadeUp}
            className="lg:hidden flex flex-col items-center gap-8"
          >
            {/* Orbit ring — centered, responsive size */}
            <div className="flex justify-center">
              <OrbitRing
                ringSize={260}
                orbitRadius={112}
                iconCls="w-8 h-8"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: desktop orbit visual (lg+) */}
        <motion.div
          className="hidden lg:flex items-center justify-center relative"
          style={{ height: "clamp(380px, 44vw, 520px)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Soft glow behind orbit */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20"
              style={{ width:"clamp(280px,36vw,440px)", height:"clamp(280px,36vw,440px)", filter:"blur(80px)" }} />
          </div>

          {/* Floating pills on desktop right side (z above glow) */}
          <div className="pointer-events-none absolute inset-0">
            {[
              { Icon: LayoutGrid,  top:"8%",  left:"4%",  size:52, tw:"bg-blue-500/15   border-blue-400/25   text-blue-400"   },
              { Icon: Layers,      top:"46%", left:"2%",  size:44, tw:"bg-green-500/15  border-green-400/25  text-green-400"  },
              { Icon: Sparkles,    top:"78%", left:"6%",  size:48, tw:"bg-violet-500/15 border-violet-400/25 text-violet-400" },
              { Icon: ShieldCheck, top:"14%", left:"58%", size:40, tw:"bg-red-500/15    border-red-400/20    text-red-400"    },
              { Icon: Box,         top:"70%", left:"52%", size:42, tw:"bg-teal-500/15   border-teal-400/22   text-teal-400"   },
            ].map((o, i) => {
              const reduce2 = false; // desktop always shows
              const Icon = o.Icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.4 }}
                  animate={{
                    opacity: 0.9, scale: 1,
                    y: [0, -14, 7, 0], rotate: [0, 4, -4, 0],
                    transition: { duration: 5.2 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.45 },
                  }}
                  style={{ top: o.top, left: o.left, width: o.size, height: o.size }}
                  className={`absolute rounded-2xl border backdrop-blur-lg grid place-items-center ${o.tw}`}
                >
                  <Icon style={{ width: o.size * 0.44, height: o.size * 0.44 }} />
                </motion.div>
              );
            })}
          </div>

          {/* Orbit ring */}
          <div className="relative z-10">
            <OrbitRing
              ringSize={300}
              orbitRadius={130}
              iconCls="w-10 h-10 xl:w-12 xl:h-12"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
