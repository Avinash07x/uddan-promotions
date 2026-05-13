import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  Target,
  Rocket,
} from "lucide-react";

const badges = [
  "150% avg. organic lift",
  "5.2x ROAS on paid media",
  "Google & Meta partners",
];

const features = [
  "Technical SEO, content clusters & digital PR for page-one dominance",
  "Performance media, remarketing & funnel automation to reduce CAC",
  "Marketing intelligence dashboards for leads, sales & attribution",
];

export default function MarketingHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#0B1220] text-white py-24 px-6 md:px-16">

      {/*  Glow Background */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/*  LEFT  */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Tag */}
          <p className="text-sm text-blue-300 mb-4">
            SEO scientists • Performance marketers • Automation experts
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Digital Marketing Agency that{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              engineers predictable growth
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-lg max-w-xl">
            Outpace competitors with integrated SEO, PPC, social media and
            automation campaigns. We blend creativity, data and technology to
            deliver marketing that ranks, converts and scales.
          </p>

          {/*  Stats Badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            {badges.map((b, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="px-4 py-2 text-sm rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
              >
                {b}
              </motion.span>
            ))}
          </div>

          {/* Features List */}
          <ul className="mt-6 space-y-3 text-white/70 text-sm">
            {features.map((f, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                ✔ {f}
              </motion.li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-110 transition shadow-lg">
              Request a Growth Audit
            </button>

            <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
              See Client Results
            </button>
          </div>
        </motion.div>

        {/*  RIGHT  */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 2 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="relative"
        >

          {/*  BACKGROUND GLOW */}
          <div className="absolute -inset-10 bg-blue-500/10 blur-3xl rounded-full" />

          {/*  FLOATING IMAGE (ONLINE DASHBOARD MOCK) */}
          <motion.img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
            alt="Analytics Dashboard"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            animate={{ y: [0, -10, 0] }}
            className="w-full max-w-sm mx-auto mb-6 rounded-xl shadow-2xl border border-white/10 relative z-10"
          />

          {/* CARD */}
          <motion.div
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl relative overflow-hidden"
          >

            {/* ✨ SHINE EFFECT */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />

            {/* HEADER */}
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="text-blue-400" size={20} />
              <h3 className="text-sm font-semibold">
                Live marketing command centre
              </h3>
            </div>

            {/* INNER DASHBOARD */}
            <div className="bg-gradient-to-br from-yellow-200/20 to-pink-300/20 p-6 rounded-xl">

              <div className="grid grid-cols-2 gap-4">

                {/* CARD 1 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-500/30 p-4 rounded-lg text-xs"
                >
                  Campaign ROI 📈
                </motion.div>

                {/* CARD 2 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 p-4 rounded-lg text-xs"
                >
                  Channel Mix 🎯
                </motion.div>

                {/* CARD 3 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-pink-500/30 p-4 rounded-lg text-xs"
                >
                  Top Keywords 
                </motion.div>

                {/* CARD 4 */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 p-4 rounded-lg text-xs"
                >
                  Performance ⚡
                </motion.div>

              </div>
            </div>

            {/*  FLOATING TAG (UPGRADED) */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-5 text-xs text-blue-300 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              Traffic, pipeline & ROI dashboards
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}