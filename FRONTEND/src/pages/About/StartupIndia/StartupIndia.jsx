import { motion } from "framer-motion";
import { BadgeCheck, Shield, Rocket, Lightbulb } from "lucide-react";

const features = [
  {
    title: "Credibility & Trust",
    desc: "DPIIT recognition validates our compliant operations and sustainable business practices.",
    icon: Shield,
  },
  {
    title: "Access to Resources",
    desc: "We leverage government-backed networks and programs to deliver cutting-edge solutions.",
    icon: Rocket,
  },
  {
    title: "Quality Commitment",
    desc: "Our processes align with industry standards, ensuring reliability and long-term value.",
    icon: BadgeCheck,
  },
  {
    title: "Innovation Driven",
    desc: "We continuously push boundaries in web, app and digital marketing ecosystems.",
    icon: Lightbulb,
  },
];

export default function StartupIndia() {
  return (
    <section className="bg-[#020617] text-white py-24 px-6 md:px-16">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Empowering the{" "}
            <span className="bg-gradient-to-r from-orange-400 to-green-400 bg-clip-text text-transparent">
              Digital Economy
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            Recognized under the Government of India’s Startup India initiative,
            we are building scalable digital solutions with innovation, compliance and trust.
          </p>
        </div>

        {/* TRUST BADGE */}
        <div className="mt-10 flex justify-center">
          <div className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
            🇮🇳 DPIIT Recognized Startup • Startup India Initiative
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green-400/40 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-400/10 text-green-400 mb-4">
                  <Icon size={22} />
                </div>

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl md:text-2xl font-semibold">
            Partner with a DPIIT Recognized Startup
          </h3>

          <p className="text-gray-400 mt-3 max-w-xl mx-auto">
            Leverage our expertise and government-backed credibility to scale your digital presence.
          </p>

          <button className="
            mt-6 px-8 py-3 rounded-xl
            bg-gradient-to-r from-orange-400 to-green-400
            text-black font-semibold
            hover:scale-105 active:scale-95
            transition
          ">
            Start Your Project
          </button>
        </motion.div>

      </div>
    </section>
  );
}