import { motion } from "framer-motion";
export default function SectionHeading({ eyebrow, title, description, align = "left", className = "", }) {
    const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
    return (<motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }} className={`max-w-3xl ${alignClass} ${className}`}>
      <span className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-semibold text-[hsl(var(--cyan))] mb-5 ${align === "center" ? "justify-center w-full" : ""}`}>
        <span className="h-px w-8 bg-gradient-to-r from-[hsl(var(--cyan))] to-transparent"/>
        {eyebrow}
        <span className="h-px w-8 bg-gradient-to-l from-[hsl(var(--cyan))] to-transparent"/>
      </span>
      <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-[1.1]">
        {title}
      </h2>
      {description ? (<p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>) : null}
    </motion.div>);
}
