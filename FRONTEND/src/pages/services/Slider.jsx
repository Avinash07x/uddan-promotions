import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

/* 🔥 DATA */
const slides = [
  {
    title: "Lossless Youths",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg",
  },
  {
    title: "Estrange Bond",
    desc: "Tempore fuga voluptatum, iure corporis inventore praesentium.",
    img: "https://i.redd.it/tc0aqpv92pn21.jpg",
  },
  {
    title: "The Gate Keeper",
    desc: "Id laboriosam ipsam enim. Lorem ipsum dolor sit amet.",
    img: "https://wharferj.files.wordpress.com/2015/11/bio_north.jpg",
  },
  {
    title: "Last Trace Of Us",
    desc: "Tempore fuga voluptatum, iure corporis inventore praesentium.",
    img: "https://images7.alphacoders.com/878/878663.jpg",
  },
  {
    title: "Urban Decay",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg",
  },
  {
    title: "The Migration",
    desc: "Tempore fuga voluptatum, iure corporis inventore praesentium.",
    img: "https://da.se/app/uploads/2015/09/simon-december1994.jpg",
  },
];

export default function Slider() {
  const [items, setItems] = useState(slides);

  /* 👉 NEXT */
  const next = () => {
    setItems((prev) => [...prev.slice(1), prev[0]]);
  };

  /* 👉 PREV */
  const prev = () => {
    setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  return (
    <section className="w-full h-screen overflow-hidden relative bg-black">
      
      {/* 🔥 SLIDER */}
      <div className="relative w-full h-full">
        {items.map((item, i) => {
          const isActive = i === 1;

          return (
            <motion.div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-xl"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              animate={{
                width: i < 2 ? "100%" : 200,
                height: i < 2 ? "100%" : 300,
                left:
                  i === 0
                    ? 0
                    : i === 1
                    ? 0
                    : `calc(50% + ${(i - 2) * 220}px)`,
                top: i < 2 ? 0 : "50%",
                borderRadius: i < 2 ? "0px" : "20px",
                opacity: i > 4 ? 0 : 1,
              }}
              transition={{ duration: 0.7 }}
            >
              {/* 🌑 Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* ✨ CONTENT */}
              {isActive && (
                <div className="absolute top-1/2 left-10 -translate-y-1/2 max-w-md text-white z-10">
                  <h2 className="text-4xl font-bold uppercase mb-4">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-300 mb-6">
                    {item.desc}
                  </p>

                  <button className="border border-white px-5 py-2 rounded hover:bg-white hover:text-black transition">
                    Read More
                  </button>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* 🔥 NAV */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-50">
        <button
          onClick={prev}
          className="p-3 rounded-full bg-white/60 hover:bg-white"
        >
          <FiArrowLeft />
        </button>

        <button
          onClick={next}
          className="p-3 rounded-full bg-white/60 hover:bg-white"
        >
          <FiArrowRight />
        </button>
      </div>
    </section>
  );
}