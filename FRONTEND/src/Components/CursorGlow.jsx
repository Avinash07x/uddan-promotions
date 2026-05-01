import { useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) =>
        setPos({ x: e.clientX, y: e.clientY })
      }
      className="fixed inset-0 pointer-events-none z-40"
    >
      <motion.div
        className="w-72 h-72 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          x: pos.x - 150,
          y: pos.y - 150,
        }}
        transition={{ type: "spring", stiffness: 60 }}
      />
    </div>
  );
}