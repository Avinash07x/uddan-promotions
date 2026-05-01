import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ active, setActive }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
          onClick={() => setActive(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#0c1424] p-6 rounded-xl max-w-md w-full border border-blue-500/30"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h3 className="text-xl font-bold text-white">{active.title}</h3>
            <p className="text-slate-400">{active.desc}</p>
            <p className="text-sm mt-3 text-slate-300">
              {active.details}
            </p>

            <button
              onClick={() => setActive(null)}
              className="mt-4 px-4 py-2 bg-blue-500 rounded"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}