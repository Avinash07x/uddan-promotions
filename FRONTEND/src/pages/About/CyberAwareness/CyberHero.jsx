import { motion } from "framer-motion";
import { ShieldCheck, Users, AlertTriangle, BookOpen } from "lucide-react";

const stats = [
  { value: "10K+", label: "Citizens Reached" },
  { value: "50+", label: "Awareness Campaigns" },
  { value: "24/7", label: "Support Guidance" },
];

const initiatives = [
  {
    icon: <Users size={18} />,
    title: "Community Awareness",
    desc: "Workshops, seminars and digital campaigns educating citizens about cyber threats and safe practices.",
  },
  {
    icon: <AlertTriangle size={18} />,
    title: "Threat Reporting",
    desc: "Encouraging proactive reporting of cyber crimes with simplified guidance and awareness.",
  },
  {
    icon: <BookOpen size={18} />,
    title: "Education Programs",
    desc: "School, college and business-level training to build cyber awareness at every level.",
  },
];

export default function CyberHero() {
  return (
    <section className="relative overflow-hidden bg-[#020617] text-white py-24 px-6 md:px-16">

      {/* 🔵 Soft Glow */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-200/40 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto text-center">

        {/* 🛡️ Official Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 mb-6"
        >
          <ShieldCheck size={16} className="text-blue-600" />
          <span className="text-sm font-medium text-gray-700">
            Official Awareness Initiative
          </span>
        </motion.div>

        {/* Tag */}
        <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
          Community Partnership
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Official Awareness Partner
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-600 mt-3">
          Bikaner Cyber Police
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          In collaboration with cyber law enforcement, we actively contribute to
          strengthening digital safety across Bikaner. Through awareness,
          education, and proactive reporting systems, we empower citizens and
          organizations to stay protected in an evolving digital landscape.
        </p>

        {/* 📊 Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className=" border border-gray-200 rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-blue-600">
                {s.value}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* 🧠 Initiatives */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 text-left">
          {initiatives.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="border border-gray-200 p-6 rounded-xl shadow-sm"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                {item.icon}
              </div>

              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* 🎯 CTA */}
        <div className="mt-16 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:scale-105 transition shadow-lg hover:shadow-blue-500/30">
            Report Cyber Issue
          </button>

          <button className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition">
            Learn Cyber Safety
          </button>
        </div>

        {/* 🏛️ Footer Trust Note */}
        <p className="mt-10 text-xs text-gray-400">
          Working alongside public authorities to promote responsible digital usage and cyber safety awareness.
        </p>
      </div>
    </section>
  );
}