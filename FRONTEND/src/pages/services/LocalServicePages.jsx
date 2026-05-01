import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cities = [
  "Amsterdam",
  "Copenhagen",
  "Dubai",
  "Dublin",
  "Frankfurt",
  "Geneva",
  "Hong Kong",
  "London",
  "Luxembourg City",
  "Munich",
  "New York City",
  "Oslo",
  "Paris",
  "San Francisco",
  "Singapore",
  "Stockholm",
  "Sydney",
  "Thailand",
  "Tokyo",
  "Toronto",
  "Zurich",
];

const services = ["App Dev", "Marketing", "Software", "Web Design"];

export default function LocalServicePages() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current;

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.05,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".section-title",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B1220] text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16 section-title">
          <h2 className="text-4xl md:text-5xl font-bold">
            Local Service <span className="text-cyan-400">Landing Pages</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Explore deep-dive pages tailored to each market’s search behaviour,
            regulations and customer expectations. Every location page includes
            city-specific SEO research, case studies and testimonials.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cities.map((city, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="group bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              {/* City Name */}
              <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition">
                {city}
              </h3>

              {/* Services */}
              <div className="mt-3 flex flex-wrap gap-2">
                {services.map((s, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Hover Line */}
              <div className="mt-4 h-[2px] w-0 group-hover:w-full bg-cyan-400 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        {/* <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Cities we serve globally
          </h3>
          <p className="text-gray-400 mt-2">
            Don’t see your city? We work globally—let’s talk.
          </p>

          <button className="mt-6 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 transition font-medium shadow-lg shadow-cyan-500/20">
            Contact Us
          </button>
        </div> */}
      </div>
    </section>
  );
}