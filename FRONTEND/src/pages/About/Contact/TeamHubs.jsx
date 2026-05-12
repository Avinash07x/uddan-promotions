import { motion } from "framer-motion";
import {
  Cpu,
  BarChart3,
  Handshake,
  MapPin,
  ExternalLink,
} from "lucide-react";

/* ================= DATA ================= */

const squads = [
  {
    title: "Product & Engineering",
    desc: "Solution architects and tech leads for platform builds, integrations and scaling roadmaps.",
    points: [
      "Architecture audit & rescue missions",
      "Dedicated agile squads",
      "DevOps, QA & security reviews",
    ],
    icon: Cpu,
  },
  {
    title: "Growth & Marketing",
    desc: "Performance marketers, SEO specialists and strategists focused on acquisition & conversion.",
    points: [
      "Full-funnel paid media programs",
      "SEO, content ops & automation",
      "Analytics, CRO & experiments",
    ],
    icon: BarChart3,
  },
  {
    title: "Partnerships & Support",
    desc: "Agencies, startups and enterprises partner with us for scalable delivery.",
    points: [
      "Channel & reseller collaboration",
      "Co-marketing & venture support",
      "24×7 managed support retainers",
    ],
    icon: Handshake,
  },
];

const locations = [
  {
    city: "Bikaner HQ",
    address: "Rani Bazar, Rajasthan 334001",
    desc: "Primary delivery centre & support operations.",
  },
  {
    city: "Mumbai",
    address: "BKC, Maharashtra",
    desc: "Enterprise consulting, product & marketing strategy.",
  },
  {
    city: "Milan",
    address: "Via Vittor Pisani, Italy",
    desc: "EU partnerships, multilingual delivery.",
  },
];

/* ================= COMPONENT ================= */

export default function TeamHubsMap() {
  return (
    <section className="bg-[#020617] text-white py-20 px-4 sm:px-6 md:px-12 lg:px-16">

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            The right squad for every{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              conversation
            </span>
          </h2>

          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Whether you're exploring a retainer, building an MVP, or scaling growth —
            we connect you with specialists who move fast.
          </p>
        </div>

        {/* ================= SQUADS ================= */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {squads.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group p-5 sm:p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400 mb-4">
                  <Icon size={20} />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-2 text-sm">
                  {item.desc}
                </p>

                <ul className="mt-3 space-y-1 text-sm text-gray-300">
                  {item.points.map((p, idx) => (
                    <li key={idx}>✔ {p}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* ================= GLOBAL HUBS ================= */}
        <div className="mt-20">

          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-center">
            Global Delivery Hubs
          </h3>

          <p className="text-gray-400 text-center mt-3 text-sm sm:text-base">
            Remote-first, with on-ground presence for enterprise engagements.
          </p>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/40 transition"
              >
                <div className="flex items-center gap-2 text-purple-400 mb-2">
                  <MapPin size={16} />
                  <span className="font-semibold text-sm sm:text-base">
                    {loc.city}
                  </span>
                </div>

                <p className="text-gray-300 text-sm">
                  {loc.address}
                </p>

                <p className="text-gray-400 text-xs mt-1">
                  {loc.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* ================= GOOGLE MAP ================= */}
        <div className="mt-20">

          <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-center">
            Visit Our Location
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="mt-8 rounded-2xl overflow-hidden border border-white/10"
          >
            <div className="w-full h-[250px] sm:h-[350px] md:h-[500px]">

              <iframe
                src="https://www.google.com/maps?q=Rani+Bazar+Bikaner&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                className="w-full h-full"
              ></iframe>

            </div>
          </motion.div>

          {/* ADDRESS + BUTTON */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4">

            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <MapPin size={16} className="text-cyan-400" />
              Rani Bazar, Bikaner, Rajasthan 334001
            </div>

            <a
              href="https://maps.app.goo.gl/LHNUf8Jye8K7yP7o7"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2
                px-5 py-2.5 rounded-xl
                bg-gradient-to-r from-cyan-400 to-purple-500
                text-black text-sm font-semibold
                hover:scale-105 transition
              "
            >
              Open Map
              <ExternalLink size={16} />
            </a>

          </div>

        </div>

        {/* ================= CTA ================= */}
        <div className="mt-16 text-center">
          <h4 className="text-lg sm:text-xl font-semibold">
            Need a team in your city?
          </h4>

          <p className="text-gray-400 mt-2 text-sm">
            We travel globally for discovery workshops & enterprise engagements.
          </p>

          <button className="
            mt-5 px-6 py-3 rounded-xl
            bg-gradient-to-r from-cyan-400 to-purple-500
            text-black font-semibold
            hover:scale-105 transition
          ">
            Schedule a Discovery Call
          </button>
        </div>

      </div>
    </section>
  );
}