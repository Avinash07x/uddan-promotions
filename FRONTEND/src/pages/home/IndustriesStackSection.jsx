import { motion } from "framer-motion";
import {
  Monitor,
  HeartPulse,
  Zap,
  Landmark,
  Building2,
  ShoppingBag,
} from "lucide-react";

const industries = [
  { icon: <Monitor size={16} />, name: "Media" },
  { icon: <HeartPulse size={16} />, name: "Healthcare" },
  { icon: <Zap size={16} />, name: "Energy" },
  { icon: <Landmark size={16} />, name: "FinTech" },
  { icon: <Building2 size={16} />, name: "Real Estate" },
  { icon: <ShoppingBag size={16} />, name: "Retail" },
];

const stacks = [
  {
    title: "Frontend & Mobile",
    tech: ["React", "Vue", "Next.js", "Flutter", "iOS", "Android"],
  },
  {
    title: "Backend & APIs",
    tech: ["Node.js", "Laravel", "Python", "GraphQL", "REST"],
  },
  {
    title: "Data & Intelligence",
    tech: ["PostgreSQL", "MySQL", "MongoDB", "BigQuery", "Power BI", "Looker"],
  },
  {
    title: "DevOps & Cloud",
    tech: ["AWS", "Azure", "DigitalOcean", "Docker", "Kubernetes", "GitHub Actions"],
  },
];

export default function IndustriesStackSection() {
  return (
    <section className="bg-[#1e3a8a] text-white py-20 px-6 md:px-16 relative overflow-hidden">

      {/*  Background Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/*  INDUSTRIES  */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Industries we{" "}
            <span className="text-blue-400">serve</span>
          </h2>

          <p className="text-white/60 mt-3 max-w-2xl">
            We tailor scalable digital ecosystems for ambitious brands across
            media, healthcare, commerce, fintech and enterprise operations.
          </p>

          {/* Industry Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10">
            {industries.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-[#0f172a] border border-white/10 rounded-xl p-5 flex items-center gap-3 hover:border-blue-500/40 transition-all duration-300 shadow-lg"
              >
                <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  {item.icon}
                </div>

                <span className="text-sm font-medium text-white/80">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/*  STACK  */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Battle-tested{" "}
                <span className="text-blue-400">
                  technology stack
                </span>
              </h2>

              <p className="text-white/60 mt-3 max-w-2xl">
                Modern frameworks, cloud-native infrastructure and scalable
                engineering systems powering high-performance digital products.
              </p>
            </div>

            {/* CTA */}
            <button className="px-5 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition text-sm font-medium">
              Meet the engineering leads
            </button>
          </div>

          {/* Stack Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {stacks.map((stack, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 shadow-xl"
              >
                <h3 className="text-lg font-semibold mb-5">
                  {stack.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {stack.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/70 hover:border-blue-400/40 hover:text-white transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}