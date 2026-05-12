import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HelpCircle,
  ChevronDown,
} from "lucide-react";

export default function FAQSection() {
  // ================= STATES =================
  const [faqs, setFaqs] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [openIndex, setOpenIndex] =
    useState(null);

  // ================= FETCH FAQS =================
  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/faq"
      );

      const data = await res.json();

      if (data.success) {
        setFaqs(data.faqs);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ================= TOGGLE =================
  const toggle = (i) => {
    setOpenIndex(
      openIndex === i ? null : i
    );
  };

  return (
    <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-[#020617] to-[#1e3a8a] relative overflow-hidden">

      {/* BG GLOW */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />

      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/10 blur-[120px]" />

      <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-4xl relative">

        {/* HEADING */}
        <div className="text-center mb-10 sm:mb-12">

          <div className="container mx-auto px-5 md:px-10 mb-6 flex items-center gap-3">

            <span className="h-px flex-1 bg-white" />

            <span className="text-[11px] uppercase tracking-[0.22em] text-white/60 font-semibold text-center whitespace-nowrap">
              FAQ
            </span>

            <span className="h-px flex-1 bg-white" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white leading-tight">
            SEO, web & app delivery
            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              questions.
            </span>
          </h2>

          <p className="text-white/60 mt-3 sm:mt-4 text-xs sm:text-sm max-w-xl mx-auto">
            Honest answers to what
            prospects ask us most so
            you can move faster with
            procurement and leadership
            approvals.
          </p>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-12 h-12 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" />
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4">

            {/* FAQ LIST */}
            {faqs.map((f, i) => {
              const isOpen =
                openIndex === i;

              return (
                <div
                  key={f._id}
                  className={`group rounded-xl border border-white/10 bg-white/5 backdrop-blur transition-all duration-300 ${
                    isOpen
                      ? "border-cyan-400/40 bg-white/10"
                      : "hover:border-cyan-400/30"
                  }`}
                >

                  {/* QUESTION */}
                  <button
                    onClick={() =>
                      toggle(i)
                    }
                    className="w-full flex items-center justify-between gap-3 text-left px-4 sm:px-5 py-4 sm:py-5"
                  >
                    <div className="flex items-center gap-3">

                      <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center">
                        <HelpCircle className="w-4 h-4 text-cyan-400" />
                      </div>

                      <span className="text-sm sm:text-base md:text-lg font-medium text-white group-hover:text-cyan-400 transition">
                        {f.question}
                      </span>
                    </div>

                    {/* ARROW */}
                    <motion.div
                      animate={{
                        rotate: isOpen
                          ? 180
                          : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <ChevronDown className="w-5 h-5 text-white/50" />
                    </motion.div>
                  </button>

                  {/* ANSWER */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease:
                            "easeInOut",
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-4 sm:pb-5 pl-11 text-white/60 text-xs sm:text-sm leading-relaxed">
                          {f.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}