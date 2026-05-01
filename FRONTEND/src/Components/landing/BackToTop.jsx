import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 50); // better trigger
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
          
          initial={{ opacity: 0, scale: 0.6, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 30 }}
          transition={{ duration: 0.3 }}

          whileHover={{ scale: 1.1, y: -3 }}
          whileTap={{ scale: 0.95 }}

          className="
            fixed bottom-6 right-6 z-50
            w-12 h-12 rounded-full
            bg-white text-black
            flex items-center justify-center
            shadow-lg
            hover:shadow-xl
            transition-all duration-300
          "
        >
          {/* Arrow Icon */}
          <ArrowUp className="w-5 h-5 text-black font-bold" />

          {/* Glow Effect */}
          <span className="
            absolute inset-0 rounded-full
            bg-gradient-to-tr from-orange-500 to-pink-500
            blur-xl opacity-50
            -z-10
          " />
        </motion.button>
      )}
    </AnimatePresence>
  );
}