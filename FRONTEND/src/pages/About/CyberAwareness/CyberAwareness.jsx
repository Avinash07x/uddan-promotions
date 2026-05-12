import { motion } from "framer-motion";
import { ShieldAlert, Lock, CreditCard, Users, Smartphone } from "lucide-react";

const items = [
  {
    title: "Identity Protection",
    desc: "Never share OTPs, passwords or sensitive documents with unverified sources to prevent identity theft and fraud.",
    icon: Lock,
  },
  {
    title: "Secure Transactions",
    desc: "Verify HTTPS and trusted payment gateways before making online transactions. Avoid phishing links.",
    icon: CreditCard,
  },
  {
    title: "Social Engineering",
    desc: "Be cautious of urgent calls, fake offers and manipulation tactics used to steal your confidential data.",
    icon: Users,
  },
  {
    title: "Device Security",
    desc: "Keep your devices updated with antivirus, firewall protection and strong unique passwords.",
    icon: Smartphone,
  },
];

export default function CyberAwareness() {
  return (
    <section className="bg-[#020617] text-white py-24 px-6 md:px-16">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why{" "}
            <span className="text-red-400">
              Cyber Awareness
            </span>{" "}
            Matters
          </h2>

          <p className="mt-6 text-gray-400">
            In today’s interconnected world, digital safety is as crucial as physical security.
            Awareness is your first line of defence against evolving cyber threats.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-400/40 transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-red-400/10 text-red-400 mb-4">
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

        {/* ALERT BOX */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-6 rounded-2xl bg-red-500/10 border border-red-500/30 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-red-400 font-semibold">
            <ShieldAlert size={20} />
            Report a Cyber Crime Immediately
          </div>

          <p className="mt-3 text-gray-300 text-sm">
            If you are a victim of cyber fraud or harassment, do not delay.
            Immediate reporting increases chances of recovery and action.
          </p>

          <a
            href="https://cybercrime.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 rounded-xl bg-red-400 text-black font-semibold hover:scale-105 transition"
          >
            Report on National Portal
          </a>
        </motion.div>

        {/* FOOTER NOTE */}
        <p className="text-center text-gray-500 text-sm mt-10">
          Connect with Cyber Police. Help us keep your city safe — vigilance is the key.
        </p>

      </div>
    </section>
  );
}