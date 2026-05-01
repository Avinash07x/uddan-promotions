import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DATA = [
  {
    title: "Modern Web Stack Builds",
    desc: "Next.js • React • Laravel",
    details: "High-performance scalable web apps.",
  },
  {
    title: "Mobile Apps & Flutter",
    desc: "iOS • Android",
    details: "Cross-platform mobile apps.",
  },
  {
    title: "Cloud, DevOps & Security",
    desc: "AWS • CI/CD",
    details: "Secure cloud infrastructure.",
  },
  {
    title: "eCommerce Engineering",
    desc: "Shopify • WooCommerce",
    details: "Optimized eCommerce solutions.",
  },
  {
    title: "SEO & Marketing",
    desc: "SEO • Paid Ads",
    details: "Growth-focused marketing.",
  },
  {
    title: "AI & Automation",
    desc: "Workflows • AI",
    details: "Automate business processes.",
  },
];

export default function Navigator() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => {
    return DATA.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="bg-[#0a1020] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* SEARCH */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Explore Services
          </h2>

          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-5 py-3 rounded-xl bg-[#0c1424] border border-blue-500/20 text-white w-full max-w-md focus:border-blue-500"
          />
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActive(item)}
              className="cursor-pointer p-6 rounded-xl bg-[#0c1424] border border-blue-500/20 hover:border-blue-500/50"
            >
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="bg-[#0c1424] p-8 rounded-xl max-w-md w-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-white text-xl font-bold mb-3">
                {active.title}
              </h3>
              <p className="text-blue-400 mb-2">{active.desc}</p>
              <p className="text-slate-300 text-sm">{active.details}</p>

              <button
                onClick={() => setActive(null)}
                className="mt-5 w-full py-2 bg-blue-600 rounded-lg text-white"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}