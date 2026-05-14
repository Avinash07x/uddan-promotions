import React, {
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Lenis from "@studio-freight/lenis";

import { motion, AnimatePresence } from "framer-motion";

import {
  Bot,
  Code2,
  Rocket,
  Smartphone,
  BarChart3,
  Layers3,
  Activity,
  Cpu,
  Sparkles,
  Orbit,
  ShieldCheck,
  Bell,
  TrendingUp,
  Cloud,
  Zap,
  Database,
  Server,
  ArrowUpRight,
  Users,
  Home,
  User,
  Settings,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

/* =====================================================
   SLIDES
===================================================== */

const slides = [
  {
    title: "Premium",
    subtitle: "Software",
    desc: "Enterprise-grade software engineering with realtime systems, cloud infrastructure, scalable architecture and immersive UI experiences.",
    color:
      "from-sky-400 via-blue-500 to-indigo-900",
    icon: Code2,

    stats: [
      { label: "Projects", value: "320+" },
      { label: "Growth", value: "12x" },
    ],

    analytics: [45, 70, 55, 90, 65, 100],

    floating: {
      title: "Software Analytics",
      value: "+420%",
      icon: TrendingUp,
    },
  },

  {
    title: "Modern",
    subtitle: "Mobile Apps",
    desc: "Modern iOS and Android experiences with realtime sync, AI integrations and ultra smooth animations.",
    color:
      "from-cyan-300 via-blue-500 to-slate-900",
    icon: Smartphone,

    stats: [
      { label: "Downloads", value: "5M+" },
      { label: "Retention", value: "89%" },
    ],

    analytics: [55, 85, 70, 110, 95, 120],

    floating: {
      title: "Mobile Reach",
      value: "5M+",
      icon: Smartphone,
    },
  },

  {
    title: "Autonomous",
    subtitle: "AI Agents",
    desc: "AI-powered automation systems with predictive analytics, autonomous workflows and intelligent monitoring.",
    color:
      "from-blue-400 via-indigo-600 to-slate-950",
    icon: Bot,

    stats: [
      { label: "AI Requests", value: "12M" },
      { label: "Accuracy", value: "99%" },
    ],

    analytics: [65, 95, 75, 120, 90, 135],

    floating: {
      title: "AI Engine",
      value: "99%",
      icon: Cpu,
    },
  },

  {
    title: "Future Scale",
    subtitle: "SaaS",
    desc: "Cloud-native SaaS systems with realtime dashboards, scalable APIs and enterprise infrastructure.",
    color:
      "from-sky-300 via-blue-600 to-black",
    icon: Rocket,

    stats: [
      { label: "Revenue", value: "$84K" },
      { label: "Users", value: "120K" },
    ],

    analytics: [70, 100, 85, 130, 95, 140],

    floating: {
      title: "Cloud Revenue",
      value: "$84K",
      icon: Rocket,
    },
  },
];

/* =====================================================
   BG ICONS
===================================================== */

const bgIcons = [
  Bot,
  Code2,
  Rocket,
  Smartphone,
  Sparkles,
  BarChart3,
  Layers3,
  Activity,
  Cpu,
  Orbit,
  ShieldCheck,
  Database,
  Server,
  Cloud,
  Zap,
];

/* =====================================================
   COMPONENT
===================================================== */

export default function HeroSection() {
  const sectionRef = useRef(null);

  const phoneRef = useRef(null);

  const contentRef = useRef(null);

  const bgRef = useRef([]);

  const particlesRef = useRef([]);

  const [activeSlide, setActiveSlide] =
    useState(0);

  const current = slides[activeSlide];

  /* =====================================================
     BG POSITIONS
  ===================================================== */

  const bgPositions = useMemo(
    () =>
      bgIcons.map((_, i) => ({
        top: `${5 + (i % 6) * 15}%`,
        left: `${5 + (i % 5) * 18}%`,
      })),
    []
  );

  /* =====================================================
     LENIS
  ===================================================== */

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.08,
    });

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => lenis.destroy();
  }, []);

  /* =====================================================
     GSAP
  ===================================================== */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3200",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(phoneRef.current, {
        rotateY: 10,
        rotateX: -5,
        y: -40,
        scale: 1.04,
        ease: "none",
      })
        .to(phoneRef.current, {
          rotateY: -10,
          rotateX: 5,
          y: 20,
          scale: 0.96,
          ease: "none",
        })
        .to(phoneRef.current, {
          rotateY: 5,
          rotateX: -3,
          y: -10,
          scale: 1.02,
          ease: "none",
        })
        .to(phoneRef.current, {
          rotateY: 0,
          rotateX: 0,
          y: 0,
          scale: 1,
          ease: "none",
        });

      /* SLIDE CHANGE */

      let lastIndex = 0;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3200",
        scrub: true,

        onUpdate: (self) => {
          const progress = self.progress;

          const index = Math.min(
            slides.length - 1,
            Math.floor(
              progress * slides.length
            )
          );

          if (index !== lastIndex) {
            lastIndex = index;

            gsap.to(contentRef.current, {
              opacity: 0,
              y: 20,
              duration: 0.2,

              onComplete: () => {
                setActiveSlide(index);

                gsap.fromTo(
                  contentRef.current,
                  {
                    opacity: 0,
                    y: 20,
                  },
                  {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                  }
                );
              },
            });
          }
        },
      });

      /* BG FLOAT */

      bgRef.current.forEach((el, i) => {
        gsap.to(el, {
          y: gsap.utils.random(-40, 40),
          x: gsap.utils.random(-30, 30),
          rotate: gsap.utils.random(-20, 20),
          duration: 8 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      /* PARTICLES */

      particlesRef.current.forEach(
        (el, i) => {
          gsap.to(el, {
            y: gsap.utils.random(-40, 40),
            x: gsap.utils.random(-20, 20),
            opacity: gsap.utils.random(
              0.2,
              1
            ),
            duration: 2 + i * 0.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     JSX
  ===================================================== */

  return (
    <section
      ref={sectionRef}
      className="
      relative
      h-[100svh]
      overflow-hidden
      bg-gradient-to-b from-[#020617] to-[#1e3a8a] 
      text-white
    "
    >
      {/* =====================================================
          BG
      ===================================================== */}

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] rounded-full bg-blue-500/20 blur-[140px]" />

        <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* =====================================================
          BG ICONS
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">
        {bgIcons.map((Icon, i) => (
          <div
            key={i}
            ref={(el) =>
              (bgRef.current[i] = el)
            }
            className="absolute text-white/10"
            style={bgPositions[i]}
          >
            <Icon size={32} />
          </div>
        ))}
      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div
        className="
        relative
        z-10

        h-full

        max-w-7xl
        mx-auto

        px-4
        sm:px-6
        lg:px-8

        grid
        grid-cols-1
        lg:grid-cols-2

        items-center
        gap-10
      "
      >
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div
          ref={contentRef}
          className="
          pt-24
          lg:pt-0

          flex
          flex-col

          items-center
          lg:items-start

          text-center
          lg:text-left
        "
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.subtitle}
              initial={{
                opacity: 0,
                y: 60,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -60,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
              text-[42px]
              sm:text-6xl
              md:text-7xl
              lg:text-[88px]

              leading-[0.95]
              font-black
            "
            >
              <div>{current.title}</div>

              <div
                className={`
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                ${current.color}
              `}
              >
                {current.subtitle}
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={current.desc}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
              mt-6

              max-w-xl

              text-sm
              sm:text-base
              md:text-lg

              text-white/70
              leading-relaxed
            "
            >
              {current.desc}
            </motion.p>
          </AnimatePresence>

          <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className={`
              px-8
              py-4

              rounded-2xl

              bg-gradient-to-r
              ${current.color}

              font-bold

              shadow-[0_20px_60px_rgba(59,130,246,0.35)]
            `}
            >
              Start Project
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
              px-8
              py-4

              rounded-2xl

              bg-white/5
              border
              border-white/10

              backdrop-blur-xl
            "
            >
              Live Demo
            </motion.button>
          </div>
        </div>

        {/* =====================================================
            PHONE AREA
        ===================================================== */}

        <div className="relative flex justify-center items-center">
          <motion.div
            ref={phoneRef}
            whileHover={{
              rotateY: -5,
              rotateX: 4,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
            className="
            relative

            w-[200px]
            h-[76vh]

            sm:w-[280px]
            sm:h-[80vh]

            md:w-[330px]
            md:h-[82vh]

            lg:w-[360px]
            lg:h-[88vh]

            max-h-[720px]

            rounded-[48px]

            border-[8px]
            border-[#1e293b]

            bg-black

            shadow-[0_40px_120px_rgba(0,0,0,0.6)]
          "
            style={{
              transformPerspective: 1800,
              transformStyle:
                "preserve-3d",
            }}
          >
            {/* =====================================================
                FLOATING CARDS
            ===================================================== */}

            <div className="absolute inset-0">
              {/* CARD 1 */}

              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-4, 4, -4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 8,
                }}
                className="
                absolute

                left-[-30px]
                top-[70px]

                sm:left-[-40px]

                md:left-[-60px]

                w-[140px]
                sm:w-[160px]
                md:w-[180px]

                rounded-[26px]

                bg-white/85
                backdrop-blur-3xl

                border
                border-white/20

                shadow-[0_20px_80px_rgba(37,99,235,0.2)]

                overflow-hidden

                p-3
                sm:p-4

                z-40
              "
              >
                <motion.div
                  animate={{
                    x: [-100, 180, -100],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                    ease: "linear",
                  }}
                  className="
                  absolute
                  inset-y-0
                  left-0

                  w-12

                  bg-gradient-to-r
                  from-transparent
                  via-white/40
                  to-transparent

                  skew-x-[-20deg]
                "
                />

                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] text-black/50">
                      {current.floating.title}
                    </p>

                    <motion.h3
                      animate={{
                        scale: [1, 1.04, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                      }}
                      className="text-lg sm:text-2xl font-black text-black"
                    >
                      {current.floating.value}
                    </motion.h3>
                  </div>

                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 10,
                      ease: "linear",
                    }}
                    className={`
                    w-9
                    h-9

                    sm:w-10
                    sm:h-10

                    rounded-2xl

                    bg-gradient-to-r
                    ${current.color}

                    flex
                    items-center
                    justify-center

                    text-white
                  `}
                  >
                    <current.floating.icon
                      size={16}
                    />
                  </motion.div>
                </div>

                <div className="relative z-10 mt-4 flex items-end gap-1 h-12">
                  {current.analytics
                    .slice(0, 5)
                    .map((h, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: [
                            `${h}%`,
                            `${h + 10}%`,
                            `${h}%`,
                          ],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5 + i * 0.2,
                        }}
                        className={`
                        flex-1

                        rounded-full

                        bg-gradient-to-t
                        ${current.color}
                      `}
                      />
                    ))}
                </div>
              </motion.div>

              {/* CARD 2 */}

              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [4, -4, 4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 7,
                }}
                className="
                absolute

                right-[-20px]
                top-[180px]

                sm:right-[-35px]

                md:right-[-60px]

                w-[145px]
                sm:w-[170px]
                md:w-[190px]

                rounded-[26px]

                bg-white/85
                backdrop-blur-3xl

                border
                border-white/20

                shadow-[0_20px_80px_rgba(37,99,235,0.2)]

                overflow-hidden

                p-3
                sm:p-4

                z-50
              "
              >
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.15, 0.3, 0.15],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                  }}
                  className={`
                  absolute
                  -top-10
                  -right-10

                  w-28
                  h-28

                  rounded-full

                  bg-gradient-to-r
                  ${current.color}

                  blur-3xl
                `}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <div className="text-black font-black text-xs sm:text-sm">
                    {current.subtitle}
                  </div>

                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="
                    px-2
                    py-1

                    rounded-full

                    bg-green-100

                    text-[9px]
                    font-bold
                    text-green-600
                  "
                  >
                    LIVE
                  </motion.div>
                </div>

                <div className="relative z-10 mt-4 space-y-3">
                  <motion.div
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                    }}
                    className="
                    w-fit

                    rounded-2xl

                    bg-black/5

                    px-3
                    py-2

                    text-[10px]
                    text-black/70
                  "
                  >
                    AI synced 🚀
                  </motion.div>

                  <motion.div
                    animate={{
                      scale: [1, 1.04, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className={`
                    ml-auto
                    w-fit

                    rounded-2xl

                    bg-gradient-to-r
                    ${current.color}

                    px-3
                    py-2

                    text-[10px]
                    font-semibold
                    text-white
                  `}
                  >
                    {current.title}
                  </motion.div>
                </div>

                <div className="relative z-10 mt-4 space-y-2">
                  {current.stats.map((item, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        x: [0, 2, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 3 + i,
                      }}
                      className="
                      flex
                      items-center
                      justify-between

                      rounded-xl

                      bg-black/5

                      px-3
                      py-2
                    "
                    >
                      <span className="text-[10px] text-black/60">
                        {item.label}
                      </span>

                      <span className="text-[10px] font-black text-black">
                        {item.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CARD 3 */}

              <motion.div
                animate={{
                  y: [-8, 8, -8],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                }}
                className="
                absolute

                left-[-10px]
                bottom-[80px]

                sm:left-[-20px]

                md:left-[-35px]

                w-[140px]
                sm:w-[160px]
                md:w-[175px]

                rounded-[26px]

                bg-white/85
                backdrop-blur-3xl

                border
                border-white/20

                shadow-[0_20px_80px_rgba(37,99,235,0.2)]

                overflow-hidden

                p-3
                sm:p-4

                z-30
              "
              >
                <motion.div
                  animate={{
                    y: [-20, 20, -20],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5,
                  }}
                  className={`
                  absolute
                  bottom-[-40px]
                  left-[-40px]

                  w-32
                  h-32

                  rounded-full

                  bg-gradient-to-r
                  ${current.color}

                  blur-3xl
                `}
                />

                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm font-black text-black">
                      {current.title}
                    </div>

                    <div className="text-[9px] text-black/50 mt-1">
                      Workspace
                    </div>
                  </div>

                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                    }}
                    className={`
                    w-8
                    h-8

                    sm:w-9
                    sm:h-9

                    rounded-2xl

                    bg-gradient-to-r
                    ${current.color}

                    flex
                    items-center
                    justify-center

                    text-white
                  `}
                  >
                    <current.icon size={14} />
                  </motion.div>
                </div>

                <div className="relative z-10 mt-4 space-y-3">
                  {current.analytics
                    .slice(0, 3)
                    .map((item, i) => (
                      <div key={i}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[9px] text-black/50">
                            Task {i + 1}
                          </span>

                          <span className="text-[9px] font-bold text-black">
                            {item}%
                          </span>
                        </div>

                        <div className="h-2 rounded-full bg-black/10 overflow-hidden">
                          <motion.div
                            animate={{
                              width: [
                                "20%",
                                `${item}%`,
                                `${item - 10}%`,
                                `${item}%`,
                              ],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 4 + i,
                            }}
                            className={`
                            h-full

                            rounded-full

                            bg-gradient-to-r
                            ${current.color}
                          `}
                          />
                        </div>
                      </div>
                    ))}
                </div>

                <div className="relative z-10 mt-4 flex items-center justify-between">
                  {[Home, Bell, User].map(
                    (Icon, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          scale: 1.1,
                          y: -3,
                        }}
                        animate={{
                          y: [0, -2, 0],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2 + i,
                        }}
                        className="
                        w-8
                        h-8

                        rounded-xl

                        bg-black/5

                        flex
                        items-center
                        justify-center
                      "
                      >
                        <Icon
                          size={14}
                          className="text-black/70"
                        />
                      </motion.div>
                    )
                  )}
                </div>
              </motion.div>
            </div>

            {/* =====================================================
                PARTICLES
            ===================================================== */}

            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                ref={(el) =>
                  (particlesRef.current[i] =
                    el)
                }
                className="
                absolute

                w-2
                h-2

                rounded-full

                bg-white/70

                blur-[1px]
              "
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}

            {/* CAMERA */}

            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 rounded-full bg-black z-50 border border-white/5" />

            {/* =====================================================
                SCREEN
            ===================================================== */}

            <div
              className={`
              relative

              h-full

              rounded-[40px]

              overflow-hidden

              p-5

              bg-gradient-to-b
              ${current.color}
            `}
            >
              {/* LIGHT */}

              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    x: [-100, 200, -100],
                    y: [-50, 50, -50],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 12,
                  }}
                  className="
                  absolute
                  top-0
                  left-0

                  w-72
                  h-72

                  rounded-full

                  bg-white/20
                  blur-[90px]
                "
                />

                <motion.div
                  animate={{
                    x: [100, -100, 100],
                    y: [50, -50, 50],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 10,
                  }}
                  className="
                  absolute
                  bottom-0
                  right-0

                  w-72
                  h-72

                  rounded-full

                  bg-cyan-300/20
                  blur-[100px]
                "
                />
              </div>

              {/* HEADER */}

              <div className="relative z-10 mt-8 flex items-center justify-between">
                <div>
                  <div className="text-[10px] tracking-[4px] uppercase text-white/60">
                    Dashboard
                  </div>

                  <h2 className="mt-2 text-2xl sm:text-3xl font-black">
                    {current.subtitle}
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <Bell size={18} />

                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                </div>
              </div>

              {/* ICON */}

              <motion.div
                key={activeSlide}
                initial={{
                  scale: 0,
                  rotate: -90,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="
                relative
                z-10

                mt-6

                w-16
                h-16

                rounded-3xl

                bg-white/20
                backdrop-blur-xl

                flex
                items-center
                justify-center
              "
              >
                <current.icon size={30} />
              </motion.div>

              {/* STATS */}

              <div className="relative z-10 mt-6 grid grid-cols-2 gap-3">
                {current.stats.map(
                  (item, i) => (
                    <div
                      key={i}
                      className="
                      p-4

                      rounded-3xl

                      bg-white/15
                      backdrop-blur-xl

                      border
                      border-white/10
                    "
                    >
                      <div className="text-xs text-white/70">
                        {item.label}
                      </div>

                      <div className="mt-2 text-xl sm:text-2xl font-black">
                        {item.value}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* ANALYTICS */}

              <div className="relative z-10 mt-5 p-5 rounded-[30px] bg-black/20 border border-white/10 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-white/70">
                      Realtime Analytics
                    </div>

                    <div className="mt-1 text-xl font-black">
                      Live Data
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                    <span className="text-xs text-white/70">
                      Live
                    </span>
                  </div>
                </div>

                <div className="relative mt-6 h-[150px] flex items-end gap-2 overflow-hidden">
                  {current.analytics.map(
                    (h, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          height: [
                            `${h}%`,
                            `${h + 15}%`,
                            `${h}%`,
                          ],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration:
                            1.5 + i * 0.15,
                        }}
                        className="
                        flex-1

                        rounded-t-full

                        bg-white
                      "
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}