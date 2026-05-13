import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Shield,
  Brain,
  Database,
  ShoppingCart,
  Cpu,
  BarChart3,
  Code,
} from "lucide-react";

//  DATA 
const categories = [
  "All",
  "Cloud",
  "AI",
  "Security",
  "Data",
  "DevOps",
  "Business",
];

const articles = [
  {
    title: "Enterprise Cloud Migration Checklist 2025",
    category: "Cloud",
    icon: Cloud,
  },
  {
    title: "AI Adoption Roadmap for SMEs",
    category: "AI",
    icon: Brain,
  },
  {
    title: "Cybersecurity for Remote Teams",
    category: "Security",
    icon: Shield,
  },
  {
    title: "Modern Data Stack Guide",
    category: "Data",
    icon: Database,
  },
  {
    title: "DevOps Maturity for CTOs",
    category: "DevOps",
    icon: Cpu,
  },
  {
    title: "Predictive Analytics for SaaS",
    category: "Data",
    icon: BarChart3,
  },
  {
    title: "Headless Commerce Strategy",
    category: "Business",
    icon: ShoppingCart,
  },
  {
    title: "API-First Microservices",
    category: "DevOps",
    icon: Code,
  },
];

//  COMPONENT 
export default function StrategiesServices() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? articles
      : articles.filter((a) => a.category === active);

  return (
    <section id="strategies" className="bg-[#020617] text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/*  HEADER  */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Knowledge{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Hub
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            Explore enterprise-grade playbooks across cloud, AI, DevOps and growth.
          </p>
        </div>

        {/*  FILTER  */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm transition ${
                active === cat
                  ? "bg-cyan-400 text-black"
                  : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/*  GRID  */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="
                    group relative p-6 rounded-2xl
                    bg-white/5 border border-white/10
                    hover:border-cyan-400/40
                    overflow-hidden
                  "
                >
                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-cyan-400/20 to-transparent blur-xl" />

                  {/* icon */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-4">
                    <Icon size={22} />
                  </div>

                  {/* title */}
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2">
                    Comprehensive guide covering strategy, implementation and ROI.
                  </p>

                  {/* CTA */}
                  <div className="mt-4 text-sm text-cyan-400 flex items-center gap-1">
                    Read Guide →
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/*  FOOTER  */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold">
            Why we open-source our strategy
          </h3>

          <p className="mt-4 text-gray-400">
            These are real frameworks used in production. Vendor-agnostic, scalable and built for growth.
          </p>

          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            <div className="p-4 bg-white/5 rounded-xl">
              <h4 className="font-semibold">Proven</h4>
              <p className="text-sm text-gray-400">Used in real enterprise deployments</p>
            </div>

            <div className="p-4 bg-white/5 rounded-xl">
              <h4 className="font-semibold">Flexible</h4>
              <p className="text-sm text-gray-400">Works with AWS, Azure & GCP</p>
            </div>

            <div className="p-4 bg-white/5 rounded-xl">
              <h4 className="font-semibold">Customisable</h4>
              <p className="text-sm text-gray-400">Tailored to your business goals</p>
            </div>
          </div>

          <button className="mt-10 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:scale-105 transition">
            Get Custom Roadmap
          </button>
        </div>

      </div>
    </section>
  );
}