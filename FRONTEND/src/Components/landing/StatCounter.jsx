import { useEffect, useRef, useState } from "react";
import { useInView, motion, useReducedMotion } from "framer-motion";
export default function StatCounter({ value, prefix = "", suffix = "", label, duration = 1.6, decimals = 0, }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const reduce = useReducedMotion();
    const [display, setDisplay] = useState(reduce ? value : 0);
    useEffect(() => {
        if (!inView)
            return;
        if (reduce) {
            setDisplay(value);
            return;
        }
        const start = performance.now();
        let raf = 0;
        const tick = (now) => {
            const t = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(value * eased);
            if (t < 1)
                raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, value, duration, reduce]);
    const shown = decimals
        ? display.toFixed(decimals)
        : Math.round(display).toString();
    return (<motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }} className="flex flex-col gap-2">
      <span className="text-4xl md:text-6xl font-bold font-display text-gradient-warm leading-none tabular-nums">
        {prefix}
        {shown}
        {suffix}
      </span>
      <span className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.18em] font-medium">
        {label}
      </span>
    </motion.div>);
}
