import { motion } from "framer-motion";
import {
  Megaphone,
  Users,
  BarChart3,
  Bot,
  ArrowUpRight,
} from "lucide-react";
import { useEffect, useState } from "react";

/* ---------------- TYPEWRITER ---------------- */
function Typewriter({ text = "", speed = 80 }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    setDisplay("");

    let i = 0;

    const interval = setInterval(() => {
      setDisplay(text.substring(0, i + 1));
      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="inline-block min-h-[1.2em]">
      {display}
    </span>
  );
}

/* ---------------- DATA ---------------- */
const features = [
  {
    icon: Megaphone,
    title: "Content & Creative Production",
    desc: "Scroll-stopping content, scripting, design and video production tailored for engagement and conversions.",
  },
  {
    icon: BarChart3,
    title: "Paid Social Campaigns",
    desc: "High-ROI campaigns with conversion-optimized funnels and precise audience targeting.",
  },
  {
    icon: Users,
    title: "Influencer & Community Growth",
    desc: "Build trust and authority with creators and communities that amplify your brand.",
  },
  {
    icon: Bot,
    title: "Automation & Lead Capture",
    desc: "Chatbots, CRM integrations and automated funnels that convert conversations into customers.",
  },
];

/* ---------------- MAIN ---------------- */
export default function SocialHero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] text-white py-24 px-6 md:px-16">

      {/*  GRID BG  */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/*  GLOW  */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-500/10 blur-3xl rounded-full animate-pulse" />

      <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/*  LEFT  */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-6 backdrop-blur-md">
            🚀 Local Service Spotlight
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              <Typewriter
                text="Social Media Marketing"
                speed={60}
              />
            </span>

            <br />

            <span className="text-white">
              <Typewriter
                text="Near You"
                speed={120}
              />
            </span>
          </h2>

          {/* Description */}
          <p className="mt-8 text-white/70 text-lg leading-relaxed max-w-xl">
            Start conversations, drive leads and build loyal
            communities across the platforms your audience
            already loves.
          </p>

          <p className="mt-5 text-white/60 leading-relaxed">
            Our strategists map customer personas and craft
            platform-specific narratives that deliver measurable
            results across Instagram, Facebook, LinkedIn,
            YouTube and emerging channels.
          </p>

          <p className="mt-5 text-white/60 leading-relaxed">
            We blend organic storytelling, paid amplification
            and influencer partnerships to keep your brand
            visible, trusted and conversion-focused.
          </p>
        </motion.div>

        {/*  RIGHT PREMIUM VISUAL  */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="relative flex items-end justify-end min-h-[700px]"
        >

          {/* Main Glow */}
          <div className="absolute bottom-[-100px] right-[-80px] w-[450px] h-[450px] bg-cyan-500/20 blur-3xl rounded-full" />

          <div className="absolute top-[80px] left-[40px] w-[280px] h-[280px] bg-purple-500/10 blur-3xl rounded-full" />

          {/*  MAIN IMAGE  */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.03,
              rotate: -1,
            }}
            className="relative z-20"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Marketing Team"
              className="w-[320px] sm:w-[420px] md:w-[500px] lg:w-[580px]
              rounded-[2rem] border border-white/10
              shadow-[0_35px_80px_rgba(0,0,0,0.6)]
              object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[#0B1220]/70 via-transparent to-transparent" />
          </motion.div>

          {/*  ANALYTICS CARD  */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            animate={{
              y: [0, -10, 0],
            }}
            className="absolute bottom-[40px] left-0 z-30
            bg-white/10 backdrop-blur-xl border border-white/10
            rounded-3xl p-5 w-[240px]"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/50 text-xs">
                  Engagement Growth
                </p>

                <h3 className="text-3xl font-bold text-cyan-400 mt-1">
                  +214%
                </h3>
              </div>

              <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 flex items-center justify-center">
                📈
              </div>
            </div>

            {/* Graph */}
            <div className="flex items-end gap-2 mt-5 h-16">
              {[30, 55, 42, 70, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                  }}
                  className="flex-1 rounded-full bg-gradient-to-t from-cyan-500 to-blue-400"
                />
              ))}
            </div>
          </motion.div>

          {/*  FLOATING REACH CARD  */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.5,
            }}
            className="absolute top-[80px] right-[20px] z-30
            bg-white/10 backdrop-blur-xl border border-white/10
            px-5 py-4 rounded-2xl"
          >
            <p className="text-white/50 text-xs">
              Monthly Reach
            </p>

            <h4 className="text-2xl font-bold text-white mt-1">
              12M+
            </h4>
          </motion.div>

          {/*  TRUST BADGE  */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1,
            }}
            className="absolute top-[250px] left-[40px] z-30
            bg-gradient-to-r from-cyan-400 to-blue-500
            text-black font-semibold px-5 py-3 rounded-2xl
            shadow-xl"
          >
            Trusted by 250+ Brands
          </motion.div>

          {/*  GLOW DOTS  */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute bottom-[120px] right-[120px] w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_20px_#22d3ee]"
          />

          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 1,
            }}
            className="absolute top-[180px] left-[180px] w-3 h-3 bg-purple-400 rounded-full shadow-[0_0_18px_#a855f7]"
          />
        </motion.div>
      </div>
                {/*  FEATURE LIST  */}
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {features.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.6,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                  }}
                  className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center mb-4">
                    <Icon
                      className="text-cyan-400"
                      size={24}
                    />
                  </div>

                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-sm mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
    </section>
  );
}