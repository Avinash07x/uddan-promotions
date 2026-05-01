import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
export function CursorGlow() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
    return (<motion.div className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300" style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(35, 200, 255, 0.05), transparent 40%)`,
        }}/>);
}
