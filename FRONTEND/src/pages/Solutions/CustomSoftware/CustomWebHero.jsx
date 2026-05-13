import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  Globe2,
  TrendingUp,
} from "lucide-react";
import appImg from "../../../assets/2.webp";
import { Link } from "react-router-dom";

const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "3x", label: "Avg ROI Growth" },
];

const features = [
  {
    icon: TrendingUp,
    title: "Outcome-First Product Strategy",
    desc: "We align business goals, user journeys and KPIs before development—ensuring every feature drives measurable impact.",
  },
  {
    icon: ShieldCheck,
    title: "Modern Engineering Excellence",
    desc: "Scalable architecture, automation and reusable systems designed for long-term performance and stability.",
  },
  {
    icon: BarChart3,
    title: "Adoption & Growth Analytics",
    desc: "Track retention, funnels and engagement with real-time dashboards powered by data-driven insights.",
  },
];

export default function CustomWebHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] text-white py-24 px-6 md:px-16">

      {/* A Background Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/*  LEFT  */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 font-semibold mb-3 tracking-wide">
            CUSTOM WEB SOFTWARE DEVELOPMENT COMPANY IN INDIA
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Build resilient platforms that{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
              accelerate revenue and customer trust
            </span>
          </h1>

          <p className="mt-6 text-white/70 text-lg max-w-xl">
            Co-create secure, scalable, and human-centred digital platforms that streamline
            operations, delight users, and unlock new revenue streams across every
            stakeholder touchpoint.
          </p>

          {/* ✅ Stats */}
          <div className="flex gap-8 mt-8 flex-wrap">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <h3 className="text-2xl font-bold">{s.value}</h3>
                <p className="text-white/50 text-sm">{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* ✅ CTA */}
          <div className="mt-10 flex gap-4 flex-wrap">
            <Link to="/about/contact-us#contact-form" >
              <button className="px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-110 transition shadow-lg hover:shadow-cyan-400/40">
                Book a strategy call
              </button>
            </Link>
            <Link to="/services" >
              <button className="px-6 py-3 rounded-full border border-white/20 backdrop-blur-md hover:bg-white/10 hover:scale-105 transition">
                Explore all services
              </button>
            </Link>
          </div>

          {/* ✅ Trust Badges */}
          <div className="flex flex-wrap gap-6 mt-8 text-sm text-white/60">
            <span>✔ ISO-aligned delivery standards</span>
            <span>✔ Analytics-driven optimisation</span>
            <span>✔ Security-first engineering</span>
            <span>✔ Global delivery with local insight</span>
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

          {/* A BACKGROUND GLOW */}
          <div className="absolute -inset-10 bg-cyan-500/10 blur-3xl rounded-full" />

          {/* A FLOATING IMAGE (ANIMATED) */}
          <motion.img
            src={appImg}
            alt="Product Platform"
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            animate={{
              y: [0, -8, 0],
            }}
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-md mx-auto mb-6 drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative z-10"
          />

          {/* CARD */}
          <motion.div
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-xl relative overflow-hidden"
          >

            {/* animated shine overlay */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />

            {/* LIST */}
            <ul className="space-y-3 text-white/70 text-sm">
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
              >
                ⚡Rapid prototypes and MVPs to validate business cases early.
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 }}
              >
                🧩 Future-proof architecture built on modern, composable stacks.
              </motion.li>

              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.35 }}
              >
                👨‍💻 Dedicated scrum teams with product owners, UX, engineering, QA.
              </motion.li>
            </ul>

            {/* A FLOATING BADGE */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                boxShadow: [
                  "0px 0px 0px rgba(34,211,238,0)",
                  "0px 10px 30px rgba(34,211,238,0.2)",
                  "0px 0px 0px rgba(34,211,238,0)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-6 bg-cyan-400/20 text-cyan-300 px-4 py-2 rounded-lg text-xs inline-block"
            >
              📊 Live Analytics Enabled
            </motion.div>

          </motion.div>
        </motion.div>
      </div>

      {/*  FEATURES  */}
      <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-3 gap-6">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl hover:scale-105 hover:border-cyan-400/30 transition duration-300"
            >
              <Icon className="text-cyan-400 mb-4" size={28} />
              <h4 className="font-semibold text-lg">{f.title}</h4>
              <p className="text-white/60 mt-2 text-sm">{f.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}