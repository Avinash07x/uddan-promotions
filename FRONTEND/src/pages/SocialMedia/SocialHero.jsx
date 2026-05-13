import React, {
  useEffect,
  useState,
} from "react";

import { motion } from "framer-motion";

import {
  Megaphone,
  Users,
  BarChart3,
  Bot,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

/* ---------------- TYPEWRITER ---------------- */
function Typewriter({
  text = "",
  speed = 80,
}) {
  const [display, setDisplay] =
    useState("");

  useEffect(() => {
    setDisplay("");

    let i = 0;

    const interval = setInterval(() => {
      setDisplay(
        text.substring(0, i + 1)
      );

      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () =>
      clearInterval(interval);
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
    title:
      "Content & Creative Production",
    desc: "Scroll-stopping content, scripting, design and video production tailored for engagement and conversions.",
  },
  {
    icon: BarChart3,
    title:
      "Paid Social Campaigns",
    desc: "High-ROI campaigns with conversion-optimized funnels and precise audience targeting.",
  },
  {
    icon: Users,
    title:
      "Influencer & Community Growth",
    desc: "Build trust and authority with creators and communities that amplify your brand.",
  },
  {
    icon: Bot,
    title:
      "Automation & Lead Capture",
    desc: "Chatbots, CRM integrations and automated funnels that convert conversations into customers.",
  },
];

const plans = [
  {
    title: "Local Launch",
    duration: "TIMELINE: 3-4 WEEKS",
    desc: "Get market ready in weeks with focused social media marketing.",
    points: [
      "Discovery workshop & persona mapping",
      "Foundational social media marketing near me keyword plan",
      "Launch-ready assets with conversion tracking",
    ],
  },

  {
    title: "Growth Accelerator",
    duration: "TIMELINE: 6-8 WEEKS",
    desc: "Scale demand with multi-channel campaigns optimised for intent.",
    points: [
      "Quarterly roadmap & backlog prioritisation",
      "Multi-touch nurture journeys & remarketing",
      "A/B testing and CRO improvements every sprint",
    ],
  },

  {
    title: "Dominant Leader",
    duration:
      "TIMELINE: 3-MONTH INITIAL RETAINER",
    desc: "Own the category with ongoing optimisation, analytics and support.",
    points: [
      "Always on experimentation & technical enhancements",
      "Advanced automation, integrations and lead scoring",
      "Executive dashboards & revenue attribution modelling",
    ],
  },
];

const process = [
  {
    number: "01",
    title: "Discover & audit",
    desc: "Stakeholder interviews, competitor analysis and KPI alignment to scope the right social media marketing roadmap.",
  },
  {
    number: "02",
    title: "Design & prototype",
    desc: "Collaborative workshops turn research into prototypes, messaging and flows your customers love.",
  },
  {
    number: "03",
    title: "Build & launch",
    desc: "Agile sprints deliver polished assets, QA testing and seamless deployments without downtime.",
  },
  {
    number: "04",
    title: "Optimise & scale",
    desc: "Monthly reviews track KPIs, experiment with new ideas and scale what performs best.",
  },
];

const deliverables = [
  "Brand voice & social media playbook",
  "Monthly content calendar & asset production",
  "Short form video scripting & editing",
  "Paid social campaign setup & optimisation",
  "Influencer & creator collaboration programmes",
  "Social listening & reputation management",
  "Lead capture automations & CRM integration",
  "Performance dashboards & content experimentation",
];

/* ---------------- MAIN ---------------- */

export default function SocialHero() {
  return (
    <div className="bg-[#0B1220] overflow-hidden text-white">

      {/* =============== */}
      {/* HERO SECTION */}
      {/* =============== */}

      <section className="relative overflow-hidden pt-2 pb-24 px-6 md:px-16">

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* GLOW */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-500/10 blur-3xl rounded-full" />

        <div className="absolute bottom-[-120px] right-[-80px] w-[400px] h-[400px] bg-purple-600/10 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{ once: true }}
            className="pt-0"
          >
            {/* TAG */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-5 backdrop-blur-md">
              🚀 Local Service Spotlight
            </div>

            {/* HEADING */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">

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
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 text-white/70 text-lg leading-relaxed max-w-xl">
              Start conversations,
              drive leads and build
              loyal communities
              across the platforms
              your audience already
              loves.
            </p>

            <p className="mt-5 text-white/60 leading-relaxed">
              Our strategists map
              customer personas and
              craft platform-specific
              narratives that deliver
              measurable results
              across Instagram,
              Facebook, LinkedIn,
              YouTube and emerging
              channels.
            </p>

            <p className="mt-5 text-white/60 leading-relaxed">
              We blend organic
              storytelling, paid
              amplification and
              influencer partnerships
              to keep your brand
              visible, trusted and
              conversion-focused.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold flex items-center gap-2 hover:scale-105 transition">
                Get Free Strategy
                <ArrowUpRight size={18} />
              </button>

              <button className="px-7 py-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">
                View Case Studies
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              x: 120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="relative flex items-end justify-end min-h-[650px]"
          >
            {/* GLOW */}
            <div className="absolute bottom-[-100px] right-[-80px] w-[450px] h-[450px] bg-cyan-500/20 blur-3xl rounded-full" />

            <div className="absolute top-[80px] left-[40px] w-[280px] h-[280px] bg-purple-500/10 blur-3xl rounded-full" />

            {/* IMAGE */}
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
              }}
              className="relative z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Marketing Team"
                className="w-[320px] sm:w-[420px] md:w-[500px] lg:w-[560px]
                rounded-[2rem] border border-white/10
                shadow-[0_35px_80px_rgba(0,0,0,0.6)]
                object-cover"
              />

              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-t from-[#0B1220]/70 via-transparent to-transparent" />
            </motion.div>

            {/* CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
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

              <div className="flex items-end gap-2 mt-5 h-16">
                {[30, 55, 42, 70, 95].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      initial={{
                        height: 0,
                      }}
                      whileInView={{
                        height: `${h}%`,
                      }}
                      transition={{
                        delay: i * 0.1,
                        duration: 0.6,
                      }}
                      className="flex-1 rounded-full bg-gradient-to-t from-cyan-500 to-blue-400"
                    />
                  )
                )}
              </div>
            </motion.div>

            {/* FLOAT CARD */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
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

            {/* TRUST */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute top-[250px] left-[40px] z-30
              bg-gradient-to-r from-cyan-400 to-blue-500
              text-black font-semibold px-5 py-3 rounded-2xl
              shadow-xl"
            >
              Trusted by 250+ Brands
            </motion.div>
          </motion.div>
        </div>

        {/* FEATURES */}
        <div className="relative z-10 max-w-7xl mx-auto mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                }}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6"
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

      {/* =============== */}
      {/* PLANS SECTION */}
      {/* =============== */}

      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Engagement models built around your goals
            </h2>

            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Choose the partnership style
              that fits your timeline and ambition.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 50,
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
                  y: -8,
                }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
              >
                <h3 className="text-xl font-bold text-cyan-400">
                  {plan.title}
                </h3>

                <p className="text-white/60 text-sm mt-4 leading-relaxed">
                  {plan.desc}
                </p>

                <ul className="mt-6 space-y-4">
                  {plan.points.map(
                    (point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-sm text-white/70"
                      >
                        <CheckCircle2
                          size={18}
                          className="text-cyan-400 mt-0.5"
                        />

                        <span>
                          {point}
                        </span>
                      </li>
                    )
                  )}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 text-xs font-semibold tracking-wide text-white/50">
                  {plan.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============== */}
      {/* PROCESS */}
      {/* =============== */}

      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          <div>
            <h2 className="text-4xl font-bold">
              Our proven delivery process
            </h2>

            <p className="mt-6 text-white/60 leading-relaxed max-w-xl">
              Every engagement follows
              a transparent collaborative
              framework to keep stakeholders
              aligned and results measurable.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((item, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: i * 0.1,
                  duration: 0.6,
                }}
                className="flex gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 text-cyan-400 font-bold flex items-center justify-center shrink-0">
                  {item.number}
                </div>

                <div>
                  <h3 className="font-bold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-white/60 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =============== */}
      {/* DELIVERABLES */}
      {/* =============== */}

      <section className="pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              What you receive from our team
            </h2>

            <p className="text-white/60 mt-4">
              From strategy and execution to optimisation and reporting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-6">
            {deliverables.map(
              (item, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.5,
                  }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2
                    className="text-emerald-400 mt-1 shrink-0"
                    size={20}
                  />

                  <p className="text-white/70">
                    {item}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}