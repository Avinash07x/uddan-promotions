import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
export default function TiltCard({ children, className = "", intensity = 7, }) {
    const ref = useRef(null);
    const reduce = useReducedMotion();
    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);
    const sx = useSpring(x, { stiffness: 220, damping: 22, mass: 0.4 });
    const sy = useSpring(y, { stiffness: 220, damping: 22, mass: 0.4 });
    const rotateY = useTransform(sx, [0, 1], [intensity, -intensity]);
    const rotateX = useTransform(sy, [0, 1], [-intensity, intensity]);
    const spotX = useTransform(sx, (v) => `${v * 100}%`);
    const spotY = useTransform(sy, (v) => `${v * 100}%`);
    const [hovering, setHovering] = useState(false);
    const onMove = (e) => {
        if (reduce)
            return;
        const r = ref.current?.getBoundingClientRect();
        if (!r)
            return;
        x.set((e.clientX - r.left) / r.width);
        y.set((e.clientY - r.top) / r.height);
    };
    const onLeave = () => {
        x.set(0.5);
        y.set(0.5);
        setHovering(false);
    };
    const wrapperStyle = reduce
        ? undefined
        : {
            rotateX,
            rotateY,
            transformPerspective: 900,
            transformStyle: "preserve-3d",
        };
    const spotStyle = {
        opacity: hovering ? 1 : 0,
        background: "radial-gradient(420px circle at var(--mx) var(--my), hsl(var(--primary) / 0.22), transparent 55%)",
        "--mx": spotX,
        "--my": spotY,
    };
    return (<motion.div ref={ref} onMouseMove={onMove} onMouseEnter={() => setHovering(true)} onMouseLeave={onLeave} style={wrapperStyle} className={`relative ${className}`}>
      {!reduce && (<motion.div aria-hidden className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-10" style={spotStyle}/>)}
      {children}
    </motion.div>);
}
