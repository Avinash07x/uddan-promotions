import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Shield,
  Cloud,
  Cpu,
  BarChart3,
  Code,
  Layers,
  Zap,
} from "lucide-react";

//  DATA 
const topics = [
  { title: "SaaS Pricing Strategies", cat: "Business", icon: BarChart3 },
  { title: "AI Chatbots for Support", cat: "AI", icon: Brain },
  { title: "Kubernetes at Scale", cat: "DevOps", icon: Cpu },
  { title: "Zero Trust Security", cat: "Security", icon: Shield },
  { title: "Serverless Cost Benefits", cat: "Cloud", icon: Cloud },
  { title: "React State Management", cat: "Dev", icon: Code },
  { title: "Microservices Design Patterns", cat: "Dev", icon: Layers },
  { title: "Voice Search Optimization", cat: "Marketing", icon: Zap },
  { title: "GraphQL vs REST", cat: "Dev", icon: Code },
  { title: "Legacy System Modernization", cat: "Cloud", icon: Cloud },
  { title: "Email Deliverability", cat: "Marketing", icon: Zap },
  { title: "Customer Retention Loops", cat: "Business", icon: BarChart3 },
];

// categories
const categories = ["All", "AI", "Dev", "Cloud", "Security", "Business", "Marketing"];

//  COMPONENT 
export default function TrendingTopics() {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(9);
  const [search, setSearch] = useState("");

  const filtered = topics.filter((item) => {
    return (
      (active === "All" || item.cat === active) &&
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <section className="bg-[#020617] text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Trending{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Topics
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            Explore high-impact guides across engineering, AI and growth.
          </p>
        </div>

        {/* SEARCH */}
        <div className="mt-10 flex justify-center">
          <input
            type="text"
            placeholder="Search topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* FILTER */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
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

        {/* GRID */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.slice(0, visible).map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  whileHover={{ y: -8, scale: 1.03 }}
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
                    Comprehensive strategy guide.
                  </p>

                  {/* footer */}
                  <div className="mt-4 flex justify-between text-sm">
                    <span className="text-gray-500">{item.cat}</span>
                    <span className="text-cyan-400">Read →</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* LOAD MORE */}
        {visible < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible((prev) => prev + 6)}
              className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}