import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import A1 from "../../assets/services1.webp";
import A2 from "../../assets/services2.webp";
import A3 from "../../assets/services3.webp";
import A4 from "../../assets/services4.webp";
import A5 from "../../assets/services5.webp";
import A6 from "../../assets/services6.webp";
import A7 from "../../assets/services7.webp";
import A8 from "../../assets/services8.webp";
import A9 from "../../assets/services9.webp";
import Servicesch1 from "./servicesch1";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Website Design & Development",
    desc: "Responsive, conversion-led websites and PWAs built on secure, scalable stacks.",
    img: A1,
    points: [
      "UX workshops, prototypes and CRO-backed interfaces",
      "Enterprise security, performance tuning and accessibility",
      "Managed hosting, analytics setup and 24/7 monitoring",
    ],
  },
  {
    title: "Mobile App Development",
    desc: "Native Android, iOS and cross-platform apps engineered for retention and revenue.",
    img: A2,
    points: [
      "Product discovery, user flows and UI kits",
      "Agile sprints, CI/CD pipelines and QA",
      "App store optimisation and growth analytics",
    ],
  },
  {
    title: "Custom Software Solutions",
    desc: "Tailor-made CRMs, ERPs and workflow tools that automate operations.",
    img: A3,
    points: [
      "Business analysis, architecture and roadmaps",
      "Secure API integrations and role-based access",
      "Cloud-native deployment and DR planning",
    ],
  },
  {
    title: "Performance Digital Marketing",
    desc: "SEO, paid media and content strategies that generate qualified demand.",
    img: A4,
    points: [
      "Keyword intelligence and schema optimisation",
      "PPC, social media and automation",
      "Attribution modelling and CRO experiments",
    ],
  },
  {
    title: "E-commerce Growth Management",
    desc: "Marketplace and D2C growth for Amazon, Flipkart, Shopify.",
    img: A5,
    points: [
      "Catalogue onboarding and product SEO",
      "Inventory forecasting and SLA tracking",
      "Advertising optimisation dashboards",
    ],
  },
  {
    title: "Enterprise IT Consulting",
    desc: "Technology roadmaps and modernisation aligned with KPIs.",
    img: A6,
    points: [
      "Architecture blueprints and governance",
      "Cloud migration and cybersecurity",
      "Managed IT operations and reporting",
    ],
  },
];

export default function Servicesc() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = containerRef.current;

      const getScrollAmount = () =>
        el.scrollWidth - window.innerWidth;

      gsap.to(el, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,

          start: "top top",

          // 👉 important: ensures full scroll completion
          end: () => `+=${getScrollAmount()}`,

          scrub: 1,

          pin: true,
          pinSpacing: true, //  allows next section to appear properly

          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      // Refresh fix for mobile resize issues
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Servicesch1 />

      <section
        ref={sectionRef}
        className="relative bg-[#020617] text-white overflow-hidden"
      >
        {/* PIN AREA */}
        <div className="h-screen flex items-center">
          <div className="w-full overflow-hidden">
            {/* HORIZONTAL TRACK */}
            <div
              ref={containerRef}
              className="
                flex gap-6 px-6 will-change-transform
                sm:gap-6 sm:px-6
                md:gap-7 md:px-8
                lg:gap-8 lg:px-10 lg:pr-40
              "
            >
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 18,
                  }}
                  className="
                    bg-white/5 rounded-2xl overflow-hidden
                    min-w-[260px]
                    sm:min-w-[300px]
                    md:min-w-[340px]
                    lg:min-w-[380px]
                  "
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-44 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-lg font-semibold">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 mt-2 text-sm">
                      {service.desc}
                    </p>

                    <ul className="mt-3 space-y-1 text-xs text-gray-300">
                      {service.points.map((p, idx) => (
                        <li key={idx}>✔ {p}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

          </div >
        </div >
      </section >
    </>
  );
}