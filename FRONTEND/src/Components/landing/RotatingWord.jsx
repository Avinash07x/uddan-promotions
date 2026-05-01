import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
export default function RotatingWord({ words, interval = 2400, className = "", }) {
    const reduce = useReducedMotion();
    const [i, setI] = useState(0);
    useEffect(() => {
        if (reduce || words.length < 2)
            return;
        const id = setInterval(() => {
            setI((prev) => (prev + 1) % words.length);
        }, interval);
        return () => clearInterval(id);
    }, [interval, words.length, reduce]);
    const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");
    return (<span className="relative inline-block whitespace-nowrap align-baseline" style={{ verticalAlign: "baseline" }}>
      {/* Invisible spacer keeps layout stable — uses same className so width matches */}
      <span aria-hidden className={`invisible ${className}`}>
        {longest}
      </span>
      <motion.span key={words[i]} initial={reduce ? false : { opacity: 0, y: "0.4em", filter: "blur(6px)" }} animate={{ opacity: 1, y: "0em", filter: "blur(0px)" }} transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }} className={`absolute inset-0 inline-block ${className}`}>
        {words[i]}
      </motion.span>
    </span>);
}
