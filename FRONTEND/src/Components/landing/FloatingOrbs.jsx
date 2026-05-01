import { useReducedMotion, motion } from "framer-motion";
import {
  LayoutGrid,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  Box,
} from "lucide-react";

// ─── Floating background orbs ─────────────────────────
const orbs = [
  { Icon: LayoutGrid, top: "18%", left: "8%", size: 56, tint: "blue" },
  { Icon: Layers, top: "48%", left: "22%", size: 48, tint: "green" },
  { Icon: Sparkles, top: "68%", left: "5%", size: 52, tint: "violet" },
  { Icon: ShieldCheck, top: "30%", left: "50%", size: 44, tint: "red" },
  { Icon: Zap, top: "72%", left: "42%", size: 60, tint: "amber" },
  { Icon: Box, top: "12%", left: "60%", size: 46, tint: "teal" },
];

// ─── Colors ───────────────────────────────────────────
const tintClass = {
  blue: "bg-blue-500/15 border-blue-400/25 text-blue-400",
  green: "bg-green-500/15 border-green-400/25 text-green-400",
  violet: "bg-violet-500/15 border-violet-400/25 text-violet-400",
  red: "bg-red-500/15 border-red-400/20 text-red-400",
  amber: "bg-amber-500/15 border-amber-400/22 text-amber-400",
  teal: "bg-teal-500/15 border-teal-400/22 text-teal-400",
};

// ─── Floating animation ───────────────────────────────
const floatVariants = (i) => ({
  animate: {
    y: [0, -18, 10, 0],
    rotate: [0, 4, -4, 0],
    transition: {
      duration: 5 + i * 0.7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: i * 0.4,
    },
  },
});

// ─── Orbit icons ──────────────────────────────────────
const orbitIcons = [
  LayoutGrid,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap,
  Box,
];

// ─── Component ────────────────────────────────────────
export default function FloatingOrbs() {
  const reduce = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden md:block">

      {/* ───────── FLOATING BACKGROUND ORBS ───────── */}
      {orbs.map((o, i) => {
        const Icon = o.Icon;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              reduce
                ? { opacity: 0.9, scale: 1 }
                : floatVariants(i).animate
            }
            style={{
              top: o.top,
              left: o.left,
              width: o.size,
              height: o.size,
            }}
            className={`absolute rounded-2xl border backdrop-blur-lg grid place-items-center ${tintClass[o.tint]}`}
          >
            <Icon
              style={{
                width: o.size * 0.45,
                height: o.size * 0.45,
              }}
            />
          </motion.div>
        );
      })}

      {/* ───────── RIGHT SIDE ORBIT SYSTEM ───────── */}
      <div className="absolute right-[6%] top-[18%] w-[320px] h-[260px]">

        {/* ORBIT RING (optional glow) */}
        <div className="absolute inset-0 rounded-full border border-white/10" />

        {/* ───── ORBITING ICONS ───── */}
        {orbitIcons.map((Icon, i) => {
          const angle = (i / orbitIcons.length) * 360;

          return (
            <motion.div
              key={i}
              animate={
                reduce ? {} : { rotate: 360 }
              }
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                style={{
                  transform: `rotate(${angle}deg) translateY(-200px) rotate(-${angle}deg)`,
                }}
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg flex items-center justify-center shadow-lg hover:scale-110 transition"
              >
                <Icon className="w-5 h-5 text-white" />
              </div>
            </motion.div>
          );
        })}

        {/* ───── CENTER CARD ───── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            reduce
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, scale: 1, y: [0, -10, 6, 0] }
          }
          transition={{
            duration: 0.6,
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute inset-0 m-auto w-[260px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-2xl"
        >
          {/* Header */}
          <div className="mb-4">
            <p className="text-[10px] text-white/50 tracking-[0.18em] uppercase mb-1">
              Social Growth
            </p>
            <h3 className="text-white font-semibold text-base">
              SEO + SMO Dashboard
            </h3>
          </div>

          {/* Progress */}
          <div className="rounded-xl bg-white/5 border border-white/10 p-4 mb-4">
            <div className="h-1.5 bg-white/10 rounded-full mb-4 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "72%" }}
                transition={{ duration: 1.2 }}
                className="h-full bg-gradient-to-r from-blue-500 to-green-400"
              />
            </div>

            <span className="px-3 py-1 text-xs rounded-full bg-yellow-400 text-black font-bold">
              FREE AUDIT
            </span>
          </div>

          {/* Stats */}
          <div className="flex justify-between text-center">
            {[
              { value: "+150%", label: "REACH" },
              { value: "+65%", label: "LEADS" },
              { value: "3.2x", label: "ENGAGE" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-white font-semibold text-sm">
                  {s.value}
                </p>
                <span className="text-white/50 text-[10px] tracking-widest">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ───────── BOTTOM BADGE ───────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={
          reduce
            ? { opacity: 1, y: 0 }
            : { opacity: 1, y: [0, -12, 6, 0] }
        }
        transition={{
          duration: 0.6,
          y: {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute right-[8%] bottom-[18%] flex items-center gap-3 rounded-xl border border-green-400/20 bg-slate-900/90 px-4 py-3 shadow-xl backdrop-blur-lg"
      >
        <div className="w-9 h-9 rounded-full bg-green-400/15 flex items-center justify-center">
          <Zap className="w-4 h-4 text-green-400" />
        </div>
        <div>
          <p className="text-white text-[13px] font-semibold">
            AI Powered
          </p>
          <span className="text-green-400 text-[11px]">
            Core Web Vitals: 98 / 100
          </span>
        </div>
      </motion.div>
    </div>
  );
}