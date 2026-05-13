import { motion } from "framer-motion";
import { Star, Smartphone, LineChart, Rocket } from "lucide-react";
import appImg from "../../../assets/1.webp";
import { Link } from "react-router-dom";

const stats = [
  { value: "1M+", label: "Secure Installs" },
  { value: "4.8★", label: "App Ratings" },
  { value: "6 Weeks", label: "MVP Delivery" },
];

const features = [
  {
    icon: Smartphone,
    title: "End-to-End App Development",
    desc: "From idea to launch with UX, development, testing and deployment.",
  },
  {
    icon: Star,
    title: "ASO & Store Growth",
    desc: "App Store Optimization strategies integrated into every sprint.",
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    desc: "Future-ready modular apps designed for performance and growth.",
  },
  {
    icon: LineChart,
    title: "Real-Time Analytics",
    desc: "Track retention, funnels and performance with live dashboards.",
  },
];

export default function Hero() {
  return (
    <section className="bg-[#0B1220] text-white py-20 px-6 md:px-16 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-cyan-400 font-semibold mb-3">
            Product strategists • Native & cross-platform engineers
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Mobile App Development Company Delivering{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
              5★ Experiences
            </span>
          </h2>

          <p className="mt-6 text-white/70 text-lg max-w-xl">
            Partner with a mobile team that blends UX research, engineering and growth
            marketing. We design, develop and scale Android and iOS apps that users love and
            algorithms recommend.
          </p>

          {/* Stats */}
          <div className="flex gap-6 mt-6 flex-wrap">
            {stats.map((s, i) => (
              <div key={i}>
                <h3 className="text-2xl font-bold">{s.value}</h3>
                <p className="text-white/50 text-sm">{s.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <Link to="/about/contact-us#contact-form" >
              <button className="px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold hover:scale-110 transition shadow-lg hover:shadow-cyan-400/40">
                Book a Product Workshop
              </button>
            </Link>
            <Link to="/" >
              <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
                View Success Stories
              </button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="relative"
        >

          {/* MAIN IMAGE */}
          <motion.img
            src={appImg}
            alt="Mobile App Development"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-md mx-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          />

          {/*  NEW: PRODUCT ANALYTICS CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="absolute top-10 left-0 bg-black/40 backdrop-blur-lg border border-white/10 p-4 rounded-xl w-[220px]"
          >
            <p className="text-cyan-400 font-semibold text-sm">
              Live Product Analytics
            </p>

            <p className="text-white/70 text-xs mt-2">
              Crash-free sessions, retention & funnel KPIs
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [-150, -200, -150] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 right-0 bg-white/10 backdrop-blur-md px-4 py-3 rounded-xl text-sm border border-white/10"
          >
            Developers Building App 📊
          </motion.div>
          {/*  NEW: INFO PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 bg-white/5 backdrop-blur-lg border border-white/10 p-5 rounded-2xl"
          >
            <h3 className="text-white font-semibold text-lg">
              Real-Time Mobile Intelligence
            </h3>

            <p className="text-white/60 text-sm mt-2 leading-relaxed">
              Real-time dashboards connect <span className="text-cyan-400">Mixpanel</span>,{" "}
              <span className="text-cyan-400">Firebase</span> and marketing automation
              so your team can iterate with confidence and ship faster.
            </p>
          </motion.div>

        </motion.div>
      </div>

      {/* FEATURES GRID */}
      <div className="max-w-7xl mx-auto mt-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-white/10 backdrop-blur-lg p-6 rounded-2xl hover:scale-105 transition"
            >
              <Icon className="text-cyan-400 mb-4" size={28} />
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-white/60 text-sm mt-2">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}