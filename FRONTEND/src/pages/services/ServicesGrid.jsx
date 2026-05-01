import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import img1 from "../../assets/services1.jpg";
import img2 from "../../assets/services3.jpg";
import img3 from "../../assets/services2.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesGrid() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const bgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 85%",
        },
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    { title: "Website Design & Development", desc: "Responsive, conversion-led websites and PWAs.", img: img1 },
    { title: "Mobile App Development", desc: "Android, iOS and cross-platform apps.", img: img2 },
    { title: "Custom Software Solutions", desc: "CRM, ERP and workflow automation tools.", img: img3 },
    { title: "Performance Digital Marketing", desc: "SEO, paid media and CRO strategies.", img: img2 },
    { title: "E-commerce Growth", desc: "Marketplace and D2C scaling systems.", img: img3 },
    { title: "Enterprise IT Consulting", desc: "Modernization and managed services.", img: img1 },
    { title: "Cyber Security & MDR", desc: "Threat detection and SOC services.", img: img2 },
    { title: "Cloud & FinOps", desc: "DevOps pipelines and cost optimization.", img: img3 },
    { title: "Data Analytics & BI", desc: "Dashboards and predictive insights.", img: img1 },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0B1220] text-white py-16 px-4 sm:px-6 md:px-12"
    >
      {/* 🌌 PARALLAX BG */}
      <div
        ref={bgRef}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0B1220] via-[#1E293B] to-[#020617]"
      />

      {/* 🔮 Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/20 blur-3xl rounded-full -z-10" />

      {/* HEADER */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-14"
      >
        <motion.h2
          variants={item}
          className="text-2xl sm:text-3xl md:text-4xl font-bold"
        >
          Digital services that deliver{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-orange-500 bg-clip-text text-transparent">
            compounding ROI
          </span>
        </motion.h2>

        <motion.p
          variants={item}
          className="text-white/70 mt-4 text-sm sm:text-base"
        >
          Every engagement is led by senior strategists and backed by specialists.
        </motion.p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            whileHover={{ y: -12, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group relative rounded-2xl overflow-hidden backdrop-blur-xl 
            bg-white/5 border border-white/10 shadow-lg transition duration-300"
          >
            
            <div className="h-44 overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            {/* ✨ CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:underline">
                {service.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300
            bg-gradient-to-tr from-purple-500/10 to-blue-500/10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}