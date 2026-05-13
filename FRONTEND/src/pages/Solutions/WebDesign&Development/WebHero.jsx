import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  TrendingUp,
  LayoutGrid,
  Code2,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function WebDevelopmentHero() {
  const stats = [
    {
      icon: <Rocket size={18} />,
      text: "95+ Core Web Vitals",
    },
    {
      icon: <TrendingUp size={18} />,
      text: "3x faster organic growth",
    },
    {
      icon: <ShieldCheck size={18} />,
      text: "OWASP-secured builds",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0B1220] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-14">


      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="hidden lg:block absolute right-[18%] top-[22%] w-[240px] lg:w-[300px] h-[240px] lg:h-[300px] rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex flex-wrap items-center gap-2 bg-white/10 border border-white/10 px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm text-white/90 backdrop-blur-xl"
          >
            <Code2 size={15} className="text-cyan-400" />
            Full-stack web engineering • CRO & SEO specialists
          </motion.div>

          {/* HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-6 sm:mt-8 text-[2.2rem] leading-[1.08] sm:text-5xl lg:text-7xl font-black"
          >
            Top Web Development Company{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              in India
            </span>{" "}
            for High-Speed Growth
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-white/65 max-w-2xl"
          >
            Launch a website engineered to dominate search results,
            convert visitors and scale with your business. Our India-based
            development team blends UX, engineering and marketing to deliver
            measurable growth with lightning-fast performance.
          </motion.p>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4"
          >
            {stats.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  y: -4,
                  scale: 1.03,
                }}
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 rounded-full border border-cyan-500/30 bg-white/5 backdrop-blur-xl text-xs sm:text-sm font-medium text-white/90 shadow-lg shadow-cyan-500/5"
              >
                <span className="text-cyan-400">
                  {item.icon}
                </span>
                {item.text}
              </motion.div>
            ))}
          </motion.div>

          {/* BULLETS */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-8 sm:mt-10 space-y-4 text-white/60 text-sm sm:text-[15px]"
          >
            <li className="flex gap-3">
              <Globe size={18} className="text-cyan-400 mt-1 min-w-[18px]" />
              SEO-ready information architecture with schema markup baked in.
            </li>

            <li className="flex gap-3">
              <LayoutGrid size={18} className="text-cyan-400 mt-1 min-w-[18px]" />
              Headless CMS, Laravel & Jamstack expertise for enterprise scalability.
            </li>

            <li className="flex gap-3">
              <TrendingUp size={18} className="text-cyan-400 mt-1 min-w-[18px]" />
              Conversion optimisation, analytics and automation from day one.
            </li>
          </motion.ul>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5"
          >
            <Link to="/about/contact-us#contact-form" >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative overflow-hidden bg-white text-black px-6 sm:px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-2xl w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Rocket size={20} />
                  Request a proposal
                </span>

                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
                />
              </motion.button>
            </Link>
            <Link to="/services" >
              <motion.button
                whileHover={{
                  scale: 1.04,
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
                className="border border-white/20 bg-white/5 backdrop-blur-xl px-6 sm:px-8 py-4 rounded-2xl text-base sm:text-lg font-medium w-full sm:w-auto"
              >
                Explore all services
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-6 lg:mt-0"
        >

          {/* MAIN CARD */}
          <motion.div
            whileHover={{
              rotateX: 4,
              rotateY: -4,
              scale: 1.02,
            }}
            transition={{ duration: 0.4 }}
            className="relative rounded-[24px] sm:rounded-[34px] border border-white/10 bg-[#EAEAF3] p-4 sm:p-6 lg:p-8 shadow-[0_40px_120px_rgba(0,0,0,0.45)]"
          >

            {/* HEADER */}
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                <Code2 className="text-blue-600" size={24} />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111827]">
                  Growth Dashboard
                </h3>

                <p className="text-gray-500 mt-1 text-xs sm:text-sm lg:text-base">
                  Live traffic, leads & Core Web Vitals monitoring
                </p>
              </div>
            </div>

            {/* DASHBOARD */}
            <div className="mt-6 sm:mt-8 relative rounded-[20px] sm:rounded-[28px] bg-[#DCE5F4] p-4 sm:p-6 overflow-hidden min-h-[350px] sm:min-h-[450px]">

              {/* FLOATING DOTS */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute top-10 left-10 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-cyan-400"
              />

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute bottom-10 right-10 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-orange-300"
              />

              {/* SCREEN */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="bg-[#111827] rounded-[22px] sm:rounded-[28px] p-4 sm:p-6 w-full sm:w-[68%] shadow-2xl"
              >
                <div className="flex gap-2 mb-5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>

                <div className="space-y-3 text-[10px] sm:text-sm font-mono">
                  <div className="text-cyan-300">
                    {"<section class='hero'>"}
                  </div>

                  <div className="text-blue-300">
                    {"<h1>Next-gen digital products</h1>"}
                  </div>

                  <div className="text-green-300">
                    {"<p>Build faster with Uddan</p>"}
                  </div>

                  <div className="text-yellow-300">
                    {"<button>Launch</button>"}
                  </div>

                  <div className="text-gray-500">
                    {"// Responsive grid system"}
                  </div>

                  <div className="text-indigo-300">
                    {"deployPipeline.trigger();"}
                  </div>
                </div>
              </motion.div>

              {/* MOBILE UI */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute right-4 sm:right-8 top-[170px] sm:top-16 w-[90px] sm:w-[120px] h-[180px] sm:h-[240px] rounded-[22px] sm:rounded-[28px] bg-[#3B2FA8] shadow-2xl border border-white/10 flex items-center justify-center"
              >
                <div className="w-[60px] sm:w-[78px] h-[120px] sm:h-[150px] bg-[#111827] rounded-[18px] sm:rounded-[20px] p-3 sm:p-4">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="h-2 rounded-full bg-cyan-400" />
                    <div className="h-2 rounded-full bg-blue-300 w-8 sm:w-10" />
                    <div className="h-2 rounded-full bg-gray-500 w-10 sm:w-12" />

                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="mt-6 sm:mt-10 w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-blue-500 flex items-center justify-center"
                    >
                      <ShieldCheck className="text-yellow-300" size={20} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* FLOATING CARDS */}
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute bottom-20 sm:bottom-8 left-6 sm:left-16 bg-blue-100 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg"
              >
                <div className="w-12 sm:w-16 h-2 rounded-full bg-blue-400" />
              </motion.div>

              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute bottom-16 sm:bottom-10 right-28 sm:right-36 bg-green-100 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg"
              >
                <div className="w-12 sm:w-16 h-2 rounded-full bg-green-400" />
              </motion.div>

              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute bottom-6 right-6 sm:right-10 bg-orange-100 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg"
              >
                <div className="w-12 sm:w-16 h-2 rounded-full bg-orange-400" />
              </motion.div>
            </div>

            {/* FOOTER TEXT */}
            <p className="mt-6 sm:mt-8 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Weekly optimisation sprints keep your website fresh,
              crawlable and conversion-focused so you stay ahead of
              competitors.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section >
  );
}