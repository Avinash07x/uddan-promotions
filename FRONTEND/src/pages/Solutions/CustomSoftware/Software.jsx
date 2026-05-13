import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Compass,
  PencilRuler,
  Code2,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Layers,
  Rocket,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);



//  DATA 
const capabilities = [
  {
    title: "Discovery & Product Strategy",
    desc: "Competitive benchmarking, SEO and content audits, and value proposition mapping that uncover opportunities to dominate search results.",
    icon: Compass,
  },
  {
    title: "Experience Design",
    desc: "Conversion-focused wireframes, prototypes, and design systems built for accessibility, localisation, and omnichannel consistency.",
    icon: PencilRuler,
  },
  {
    title: "Full-Stack Development",
    desc: "Modular architecture, API-first integrations, and cloud-native deployments that stand up to enterprise traffic and compliance needs.",
    icon: Code2,
  },
  {
    title: "Growth Optimisation",
    desc: "Structured A/B testing, Core Web Vitals improvements, and marketing automation that keep your platform discoverable long after launch.",
    icon: TrendingUp,
  },
];

const whyChoose = [
  {
    title: "Strategy to Success",
    desc: "Discovery workshops, stakeholder interviews, and data-backed roadmaps keep cross-functional teams aligned from kickoff to launch.",
    icon: Layers,
  },
  {
    title: "Secure by Design",
    desc: "Threat modelling, OWASP adherence, automated testing, and continuous monitoring protect your users and intellectual property.",
    icon: ShieldCheck,
  },
  {
    title: "Future-ready Foundations",
    desc: "Cloud-native, API-first, and microservices-ready architecture ensures integrations and enhancements happen without downtime.",
    icon: Rocket,
  },
  {
    title: "Measurable ROI",
    desc: "Product analytics, funnel benchmarking, and user research loops deliver clear insights into adoption, productivity, and revenue impact.",
    icon: BarChart3,
  },
];

//  COMPONENT 
export default function Software() {
  const sectionRef = useRef(null);
  const capRef = useRef([]);
  const whyRef = useRef([]);
  const statsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // CAPABILITIES
      capRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -80 },
          {
            opacity: 1,
            x: 0,
            delay: i * 0.15,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

      // STATS COUNT
      gsap.fromTo(
        ".stat",
        { innerText: 0 },
        {
          innerText: 62,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        }
      );

      // WHY
      whyRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            delay: i * 0.15,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020617] text-white py-24 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/*  HERO  */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              text-2xl
              min-[370px]:text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-6xl
              font-bold
              leading-tight
            "
          >
            Custom Web Software Development services tailored{" "}
            <span className="text-cyan-400">
              for Ambitious Brands
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
            className="
              mt-5
              sm:mt-6
              text-sm
              min-[370px]:text-base
              md:text-lg
              leading-7
              text-gray-400
              max-w-3xl
              mx-auto
            "
          >
            Whether you are modernising a legacy platform or launching a
            brand-new SaaS product, Uddan Promotions combines
            research-driven UX, scalable engineering, and airtight
            security to deliver web applications that rank well,
            convert better, and keep customers loyal.
          </motion.p>
        </div>

        {/*  CAPABILITIES  */}
        <div className="mt-16 space-y-8">
          {capabilities.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (capRef.current[i] = el)}
                whileHover={{ x: 6 }}
                className="flex gap-5"
              >
                <Icon className="text-cyan-400 mt-1" />

                <div>
                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/*  SEO BLOCK  */}
        <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10">
          <h3 className="text-xl font-semibold">
            What makes our custom software pages rank?
          </h3>

          <ul className="mt-4 space-y-2 text-gray-400 text-sm">
            <li>✔ Schema markup, page-speed best practices, and structured headings that signal relevance to search engines.</li>
            <li>✔ Content written by specialists who understand both user intent and industry regulations.</li>
            <li>✔ Continuous analytics reporting so you can track keyword positions, bounce rates, and conversion funnels.</li>
          </ul>
        </div>

        {/*  STATS  */}
        <div
          ref={statsRef}
          className="mt-20 grid sm:grid-cols-2 gap-10 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-cyan-400 stat">
              0
            </div>
            <p className="text-gray-400 mt-2">
              Increase in qualified leads
            </p>
          </div>

          <div>
            <div className="text-4xl font-bold text-purple-400">
              38%
            </div>
            <p className="text-gray-400 mt-2">
              Improved organic visibility
            </p>
          </div>
        </div>

        {/*  WHY  */}
                <div className="mt-20 sm:mt-24 text-center max-w-4xl mx-auto">
          <h2
            className="
              text-2xl
              min-[370px]:text-3xl
              sm:text-4xl
              md:text-5xl
              font-bold
              leading-tight
            "
          >
            Why organisations choose{" "}
            <span className="text-cyan-400">
              Uddan Promotions
            </span>
          </h2>

          <p className="mt-5 text-gray-400 text-sm sm:text-base md:text-lg leading-7">
            We combine strategic consulting with disciplined engineering
            to deliver custom platforms that scale with your business
            goals.
          </p>
        </div>

        {/*  WHY GRID  */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            min-[760px]:grid-cols-2
            lg:grid-cols-4
            gap-5
            sm:gap-6
          "
        >
          {whyChoose.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                ref={(el) => (whyRef.current[i] = el)}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="
                  p-5
                  sm:p-6
                  rounded-3xl
                  bg-white/5
                  border
                  border-white/10
                  hover:border-cyan-400/20
                  transition-all
                  duration-300
                  backdrop-blur-sm
                "
              >
                <Icon className="text-cyan-400 mb-4 w-6 h-6 sm:w-7 sm:h-7" />

                <h4 className="font-semibold text-base sm:text-lg">
                  {item.title}
                </h4>

                <p className="text-gray-400 text-sm sm:text-base leading-7 mt-3">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}