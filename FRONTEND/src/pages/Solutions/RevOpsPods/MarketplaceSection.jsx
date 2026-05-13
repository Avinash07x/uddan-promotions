import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  ShoppingCart,
  Package,
  BarChart3,
  Megaphone,
  ShieldCheck,
  Layers,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

//  DATA 
const features = [
  {
    title: "Listing Excellence",
    desc: "Keyword research, A+ content, images and conversion-focused optimisation.",
    icon: ShoppingCart,
  },
  {
    title: "Operations",
    desc: "Inventory planning, fulfilment coordination and SLA tracking.",
    icon: Package,
  },
  {
    title: "Analytics",
    desc: "Profit dashboards, cohort analysis and forecasting models.",
    icon: BarChart3,
  },
];

const services = [
  {
    title: "Launch & Compliance",
    desc: "Seller setup, brand registry and policy alignment.",
    icon: ShieldCheck,
  },
  {
    title: "Listing SEO & Creatives",
    desc: "High-converting product pages with visuals and storytelling.",
    icon: Layers,
  },
  {
    title: "Advertising & Promotions",
    desc: "Sponsored ads, deals and influencer campaigns.",
    icon: Megaphone,
  },
];

const platforms = [
  "Amazon & Amazon Ads",
  "Flipkart & Meesho",
  "Shopify & WooCommerce",
  "ERP, WMS & APIs",
];

//  COMPONENT 
export default function MarketplaceSection() {
  const sectionRef = useRef(null);
  const featureRef = useRef([]);
  const serviceRef = useRef([]);
  const platformRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      featureRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            delay: i * 0.15,
            duration: 0.7,
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });

      serviceRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            delay: i * 0.12,
            duration: 0.7,
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });

      platformRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            delay: i * 0.1,
            duration: 0.6,
            scrollTrigger: { trigger: el, start: "top 90%" },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020617] text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* glow */}
      <div className="absolute top-[-100px] left-[30%] w-[500px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/*  HERO  */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-cyan-400 text-sm mb-3">
            Optimised to win the buy box
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Data-Driven{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Marketplace Optimisation
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            We monitor keywords, pricing, competition and account health daily
            to improve listings, automate operations and maximise profitability.
          </p>
        </div>

        {/*  FEATURES  */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (featureRef.current[i] = el)}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
              >
                <Icon className="text-cyan-400 mb-4" size={28} />
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-400 text-sm mt-2">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/*  SERVICES  */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            Marketplace Management Services
          </h3>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  ref={(el) => (serviceRef.current[i] = el)}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
                >
                  <Icon className="text-cyan-400 mb-4" size={26} />
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-gray-400 text-sm mt-2">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/*  PLATFORMS  */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-4xl font-bold">
            Technology & Integrations
          </h3>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {platforms.map((item, i) => (
              <motion.div
                key={i}
                ref={(el) => (platformRef.current[i] = el)}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}