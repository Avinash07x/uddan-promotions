import { motion } from "framer-motion";
import {
  Megaphone,
  Smartphone,
  Layers,
  ShoppingCart,
  Cloud,
  Code,
  MapPin,
  Globe,
  BarChart3,
} from "lucide-react";

// ================= DATA =================
const frameworks = [
  {
    category: "Digital Marketing",
    title: "Ultimate Enterprise SEO Strategy Guide",
    desc: "Scale organic traffic using AI, schema and Core Web Vitals.",
    read: "12 min read",
    icon: Megaphone,
  },
  {
    category: "App Development",
    title: "Complete Mobile App Launch Checklist",
    desc: "From beta testing to ASO for strong launch and retention.",
    read: "15 min read",
    icon: Smartphone,
  },
  {
    category: "App Development",
    title: "React Native vs Flutter",
    desc: "CTO-level comparison for performance and scalability.",
    read: "11 min read",
    icon: Layers,
  },
  {
    category: "E-commerce",
    title: "E-commerce CRO Blueprint",
    desc: "Increase revenue with checkout UX and personalization.",
    read: "14 min read",
    icon: ShoppingCart,
  },
  {
    category: "Cloud Solutions",
    title: "Enterprise Cloud Migration Roadmap",
    desc: "Secure AWS/Azure migration with FinOps optimisation.",
    read: "13 min read",
    icon: Cloud,
  },
  {
    category: "Custom Software",
    title: "Modern SDLC: Agile vs DevOps",
    desc: "Ship faster with CI/CD, automation and security.",
    read: "12 min read",
    icon: Code,
  },
  {
    category: "Digital Marketing",
    title: "Local SEO Map Pack Domination",
    desc: "Rank #1 in 'near me' searches across cities.",
    read: "10 min read",
    icon: MapPin,
  },
  {
    category: "Web Development",
    title: "Headless CMS Explained",
    desc: "Build scalable omnichannel platforms with headless.",
    read: "11 min read",
    icon: Globe,
  },
  {
    category: "Data Analytics",
    title: "Analytics Maturity Model",
    desc: "From descriptive to predictive & prescriptive insights.",
    read: "13 min read",
    icon: BarChart3,
  },
];

// ================= COMPONENT =================
export default function CoreFrameworks() {
  return (
    <section className="bg-[#020617] text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Core{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Frameworks
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            Proven playbooks for growth, engineering and digital transformation.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="
                  group relative p-6 rounded-2xl
                  bg-white/5 border border-white/10
                  hover:border-cyan-400/40
                  overflow-hidden
                "
              >
                {/* glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-br from-cyan-400/20 to-transparent blur-xl" />

                {/* CATEGORY */}
                <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300">
                  {item.category}
                </span>

                {/* ICON */}
                <div className="mt-4 w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <Icon size={22} />
                </div>

                {/* TITLE */}
                <h3 className="mt-4 font-semibold text-lg leading-snug">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-gray-400 text-sm">
                  {item.desc}
                </p>

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="text-gray-500">{item.read}</span>

                  <span className="text-cyan-400 group-hover:translate-x-1 transition">
                    Read Playbook →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}