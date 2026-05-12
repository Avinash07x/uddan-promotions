import { motion } from "framer-motion";
import { Award, ShieldCheck } from "lucide-react";

export default function StartupHero() {
  return (
    <section className="relative overflow-hidden bg-[#020617] text-white py-24 px-6 md:px-16 text-center">

      {/* 🔵 Soft Glow */}
      <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-200/40 blur-3xl rounded-full" />

      <div className="max-w-4xl mx-auto">

        {/* 🏛️ DPIIT Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 border border-yellow-300 mb-6 shadow-sm"
        >
          <ShieldCheck size={16} />
          DPIIT Recognized Startup
        </motion.div>

        {/* 🎖️ Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight text-[#924e7b]"
        >
          Startup India{" "}
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Recognition
          </span>
        </motion.h1>

        {/* 📄 Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto"
        >
          We are proud to be officially recognized under the{" "}
          <span className="font-semibold text-blue-600">
            Startup India initiative
          </span>{" "}
          by the Government of India, validating our innovation, scalability,
          and commitment to building impactful digital solutions.
        </motion.p>

        {/* 📊 Trust Highlights */}
        <div className="flex justify-center gap-6 flex-wrap mt-8 text-sm text-gray-500">
          <span>✔ Government Verified</span>
          <span>✔ DPIIT Certified</span>
          <span>✔ Innovation Driven</span>
        </div>

        {/* 🏆 Certificate Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 border border-gray-200 rounded-2xl shadow-lg p-8 max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="text-blue-600" size={28} />
          </div>

          <h3 className="text-lg font-semibold text-[#924e7b]">
            Startup India Certificate
          </h3>

          <p className="text-gray-500 text-sm mt-2">
            Official recognition issued by DPIIT under the Government of India
            Startup India program.
          </p>

          {/* CTA */}
          <button className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:scale-105 transition shadow-lg hover:shadow-blue-500/30">
            View Certificate
          </button>
        </motion.div>

        {/* 🏛️ Footer Note */}
        <p className="mt-10 text-xs text-gray-400">
          Recognized under the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India.
        </p>
      </div>
    </section>
  );
}