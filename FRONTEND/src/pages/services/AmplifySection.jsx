import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Search Engine Optimisation (SEO)",
    desc: "Technical SEO, link outreach, local listings and content programmes to dominate organic visibility.",
  },
  {
    title: "Product & Marketing Analytics",
    desc: "CDP implementation, dashboarding and predictive insights to drive profitable decisions.",
  },
  {
    title: "Marketing Automation",
    desc: "CRM integrations, nurturing workflows and personalisation across email, SMS and WhatsApp.",
  },
  {
    title: "Brand & Creative Studio",
    desc: "Visual systems, campaign assets and storytelling that resonate with modern buyers.",
  },
];

const industries = [
  "D2C & Retail",
  "Manufacturing & Industrial",
  "Fintech & BFSI",
  "Healthcare & Wellness",
  "Education & eLearning",
  "Travel, Hospitality & Real Estate",
];

export default function AmplifySection() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 60,
            scale: 0.96,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // heading animation
      gsap.fromTo(
        ".amplify-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020617] text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-purple-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="amplify-heading">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Amplify your digital roadmap with{" "}
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              specialised capabilities
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl text-sm md:text-base">
            Beyond our flagship services, we provide modular retainers and squads
            that fill capability gaps or accelerate in-house teams. Every engagement
            includes reporting, compliance-ready documentation and knowledge transfer.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-14">
          {services.map((item, i) => (
            <motion.div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="
                relative p-7 rounded-2xl
                bg-white/5 border border-white/10
                backdrop-blur-xl
                hover:border-cyan-400/40
                transition-all duration-300
                overflow-hidden
              "
            >
              {/* glow hover */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition bg-gradient-to-br from-cyan-400/10 to-transparent blur-xl" />

              <h3 className="text-lg md:text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* INDUSTRIES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            Industries we accelerate
          </h3>

          <div className="flex flex-wrap gap-3">
            {industries.map((ind, i) => (
              <span
                key={i}
                className="
                  px-4 py-2 text-sm
                  bg-white/5 border border-white/10
                  rounded-full text-gray-300
                  hover:border-cyan-400/40 hover:text-white
                  transition
                "
              >
                {ind}
              </span>
            ))}
          </div>

          <p className="mt-8 text-gray-400 text-sm max-w-3xl">
            Need a sector-specific playbook? Our consultants customise benchmarks,
            compliance and localisation plans for each market we serve.
          </p>
        </motion.div>

      </div>
    </section>
  );
}