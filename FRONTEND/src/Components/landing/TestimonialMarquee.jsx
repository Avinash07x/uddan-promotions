import { Quote, MapPin } from "lucide-react";

export default function TestimonialMarquee({
  items = [],
  reverse = false,
  speed = "normal", // normal | slow
}) {
  // animation class selector
  const animationClass = reverse
    ? speed === "slow"
      ? "animate-marquee-right-slow"
      : "animate-marquee-right"
    : speed === "slow"
    ? "animate-marquee-left-slow"
    : "animate-marquee-left";

  return (
    <div className="group relative overflow-hidden">

      {/* Gradient edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0B1220] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0B1220] to-transparent z-10" />

      {/* Track */}
      <div
        className={`
          flex gap-5 w-max py-2 whitespace-nowrap
          ${animationClass}
          group-hover:[animation-play-state:paused]
        `}
      >
        {[...items, ...items].map((t, i) => (
          <article
            key={`${t.name}-${i}`}
            className="w-[340px] shrink-0 rounded-xl bg-white/5 border border-white/10 backdrop-blur p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
          >
            {/* Icon */}
            <Quote className="w-5 h-5 text-cyan-400/70 mb-3" />

            {/* Text */}
            <p className="text-sm text-white/80 leading-relaxed mb-5 line-clamp-5">
              “{t.quote}”
            </p>

            {/* Footer */}
            <div className="pt-3 border-t border-white/10">
              <p className="text-sm font-semibold text-white">
                {t.name}
              </p>

              <p className="text-xs text-white/50">
                {t.role} · {t.company}
              </p>

              <p className="text-[11px] text-white/40 mt-1 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {t.city}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}