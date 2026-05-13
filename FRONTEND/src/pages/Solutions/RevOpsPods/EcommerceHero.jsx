import { motion } from "framer-motion";
import {
  ShoppingCart,
  TrendingUp,
  BarChart3,
  Package,
} from "lucide-react";
import { Link } from "react-router-dom";

const badges = [
  "3x GMV growth",
  "Top seller badges earned",
  "99% on-time fulfillment",
];

const features = [
  "Marketplace onboarding, brand registry & compliance handled end-to-end",
  "SEO-rich listings, A+ content & creatives that convert",
  "Advertising, pricing automation & analytics to maximise margins",
];

export default function EcommerceHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e293b] via-[#1e3a8a] to-[#0B1220] text-white py-24 px-6 md:px-16">

      {/*  Glow */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/*  LEFT  */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Tag */}
          <p className="text-blue-300 text-sm mb-4">
            Marketplace strategists • Listing optimisation • Ad operations
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            E-commerce Management that{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              drives marketplace dominance
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-white/70 text-lg max-w-xl">
            Launch, scale and optimise your Amazon, Flipkart, Meesho and D2C
            sales with a data-driven growth engine. We manage catalogues, ads,
            fulfilment and analytics—so your products stay on top.
          </p>

          {/*  Badges */}
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

          {/* Features */}
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
            <Link to="/about/contact-us#contact-form" >
              <button className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-110 transition shadow-lg">
                Request a Marketplace Audit
              </button>
            </Link>
            <Link to="/" >
              <button className="px-6 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
                View Success Metrics
              </button>
            </Link>
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
              <ShoppingCart className="text-blue-400" size={20} />
              <h3 className="text-sm font-semibold">
                Marketplace control tower
              </h3>
            </div>

            {/*  ANIMATED IMAGE (CENTER) */}
            <motion.img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
              alt="Marketplace Dashboard"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              animate={{ y: [0, -10, 0] }}
              className="w-full max-w-xs mx-auto mb-6 rounded-xl shadow-2xl border border-white/10"
            />

            {/* DASHBOARD */}
            <div className="bg-gradient-to-br from-green-200/20 to-blue-300/20 p-6 rounded-xl">

              <div className="grid grid-cols-2 gap-4">

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-green-500/30 p-4 rounded-lg text-xs"
                >
                  Inventory 📦
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 p-4 rounded-lg text-xs"
                >
                  Buy Box 🛒
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-orange-500/30 p-4 rounded-lg text-xs"
                >
                  Top SKUs
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/20 p-4 rounded-lg text-xs"
                >
                  Ad Spend 📊
                </motion.div>

              </div>
            </div>

            {/*  FLOATING INSIGHT */}
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
              Inventory, buy box & ad spend visibility
            </motion.div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}