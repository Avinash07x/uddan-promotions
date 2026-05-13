import React, {
  useEffect,
  useState,
} from "react";

/*  CARD  */
const TestimonialCard = ({
  item,
}) => {
  return (
    <div
      className="
        min-w-[300px]
        max-w-[300px]
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-6
        mx-3
      "
    >
      <p className="text-sm text-gray-300 leading-relaxed">
        “{item.quote}”
      </p>

      <div className="border-t border-white/10 pt-4 mt-5">
        <h4 className="text-white font-semibold">
          {item.name}
        </h4>

        <p className="text-xs text-gray-400">
          {item.role} ·{" "}
          {item.company}
        </p>

        <p className="text-xs text-cyan-400 mt-1">
          {item.city}
        </p>
      </div>
    </div>
  );
};

/*  MARQUEE  */
const MarqueeRow = ({
  items,
  reverse,
}) => {
  return (
    <div className="overflow-hidden py-5">

      <div
        className={`
          flex w-max
          ${
            reverse
              ? "animate-marquee-reverse"
              : "animate-marquee"
          }
        `}
      >
        {items.map((item) => (
          <TestimonialCard
            key={item._id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

/*  MAIN  */
export default function TestimonialsSection() {
  const [testimonials, setTestimonials] =
    useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials =
    async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/testimonial"
        );

        const data =
          await res.json();

        if (data.success) {
          setTestimonials(
            data.testimonials
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

  // ROW FILTER
  const row1 =
    testimonials.filter(
      (item) =>
        Number(item.row) === 1
    );

  const row2 =
    testimonials.filter(
      (item) =>
        Number(item.row) === 2
    );

  return (
    <section className="py-20 bg-gradient-to-b from-[#1e3a8a] to-[#020617] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Testimonials
        </h2>

        <p className="text-white/60 mt-4">
          Trusted by clients worldwide
        </p>

        {/* ROW 1 */}
        {row1.length > 0 && (
          <MarqueeRow
            items={row1}
          />
        )}

        {/* ROW 2 */}
        {row2.length > 0 && (
          <MarqueeRow
            items={row2}
            reverse
          />
        )}
      </div>

      <style >{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee 10s linear infinite reverse;
        }
      `}</style>
    </section>
  );
}