export default function TechStackSection() {
  const techStack = [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Tailwind",
    "TypeScript",
    "AWS",
    "Docker",
    "Firebase",
    "GraphQL",
  ];

  return (
    <section className="py-12 bg-[#1A202C] text-white overflow-hidden">

      {/* Heading */}
      <div className="container mx-auto px-5 md:px-10 mb-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-[11px] uppercase tracking-[0.22em] text-white/60 font-semibold text-center whitespace-nowrap">
          Engineered with a battle-tested stack
        </span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      {/* Marquee Wrapper */}
      <div className="relative overflow-hidden">

        {/* Left Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#1A202C] to-transparent z-10 pointer-events-none" />

        {/* Right Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#1A202C] to-transparent z-10 pointer-events-none" />

        {/* Track */}
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused]">

          {/* Duplicate for seamless loop */}
          {[...techStack, ...techStack].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="inline-flex items-center px-4 py-2 mx-2 rounded-full
              border border-white/10 text-xs sm:text-sm
              text-white/70 bg-white/5
              hover:bg-white/10 hover:text-white
              hover:border-cyan-400/40
              transition-all whitespace-nowrap"
            >
              {item}
            </span>
          ))}

        </div>
      </div>
    </section>
  );
}