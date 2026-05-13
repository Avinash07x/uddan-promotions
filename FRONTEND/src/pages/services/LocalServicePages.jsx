import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cities = [
  "Amsterdam","Copenhagen","Dubai","Dublin","Frankfurt","Geneva",
  "Hong Kong","London","Luxembourg City","Munich","New York City",
  "Oslo","Paris","San Francisco","Singapore","Stockholm",
  "Sydney","Thailand","Tokyo","Toronto",
];

const services = ["App Dev", "Marketing", "Software", "Web Design"];

export default function LocalServicePages() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const serviceRefs = useRef([]);

  // reset refs
  cardRefs.current = [];
  serviceRefs.current = [];

  /*  SCROLL  */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.07,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /*  HOVER  */
  const handleEnter = (i) => {
    const data = serviceRefs.current[i];
    if (!data) return;

    const { container, items } = data;

    gsap.killTweensOf([container, items]);

    // expand height
    gsap.to(container, {
      height: 85,
      duration: 0.35,
      ease: "power2.out",
    });

    // items bottom -> up
    gsap.fromTo(
      items,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.4,
        ease: "power3.out",
        delay: 0.1,
      }
    );
  };

  const handleLeave = (i) => {
    const data = serviceRefs.current[i];
    if (!data) return;

    const { container, items } = data;

    gsap.killTweensOf([container, items]);

    // items down
    gsap.to(items, {
      opacity: 0,
      y: 40,
      duration: 0.25,
      ease: "power2.inOut",
    });

    // collapse
    gsap.to(container, {
      height: 0,
      duration: 0.3,
      ease: "power2.inOut",
      delay: 0.1,
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-[#0B1220] text-white relative overflow-hidden"
    >
      {/* glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto px-5">

        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Global <span className="text-cyan-400">Service Cities</span>
          </h2>
        </div>

        {/* grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {cities.map((city, i) => (
            <div
              key={city}
              ref={(el) => el && cardRefs.current.push(el)}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={() => handleLeave(i)}
              className="group h-[400px] relative rounded-2xl overflow-hidden cursor-pointer bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="absolute inset-0">
                <img
                  src={`https://source.unsplash.com/600x800/?${city}`}
                  alt={city}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              {/* CITY BADGE */}
              <div className="absolute top-4 left-4 z-10 text-xs bg-black/40 px-3 py-1 rounded">
                🌍 {city}
              </div>

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-5 z-10">

                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400">
                  {city}
                </h3>

                {/* SERVICES */}
                <div
                  ref={(el) => {
                    if (!serviceRefs.current[i]) {
                      serviceRefs.current[i] = { items: [], container: null };
                    }
                    serviceRefs.current[i].container = el;
                  }}
                  className="overflow-hidden h-[0px]"
                >
                  {services.map((s, idx) => (
                    <p
                      key={idx}
                      ref={(el) => {
                        if (!serviceRefs.current[i]) {
                          serviceRefs.current[i] = { items: [], container: null };
                        }
                        serviceRefs.current[i].items[idx] = el;
                      }}
                      className="text-sm text-gray-300 opacity-0 translate-y-10"
                    >
                      • {s}
                    </p>
                  ))}
                </div>

              </div>

              {/* glow border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 border border-cyan-400/20" />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}