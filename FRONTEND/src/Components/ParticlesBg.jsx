import { motion } from "framer-motion";

export default function ParticlesBg() {
  return (
    <div className="fixed inset-0 z-0">
      {[...Array(40)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 60 - 30],
          }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}