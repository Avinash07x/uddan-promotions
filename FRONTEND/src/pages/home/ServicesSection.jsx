import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const ServicesSection = ({ services, industries }) => {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <section
      id="services"
      className="bg-[#2D374E] py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">

        {/*   Heading */}
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-white/40 mb-3">
            Capabilities
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight">
            Capabilities designed for{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              scale & speed
            </span>
          </h2>

          <p className="text-white/50 mt-3 sm:mt-4 max-w-xl mx-auto text-xs sm:text-sm">
            From deeply technical web applications to high-conversion growth systems.
          </p>
        </div>

        {/*   Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden bg-[#0c1424] border border-blue-500/10 hover:border-blue-500/40 transition-all duration-500"
              >
                {/*  image */}
                <div className="h-36 sm:h-40 flex items-center justify-center relative">
                  <img
                    src={Icon}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />


                  {/*   Top subtle gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
                </div>

                {/*   Content */}
                <div className="p-4 sm:p-5 relative z-10">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/*  Tags */}
                <div className="flex flex-wrap gap-2 px-4 sm:px-5 pb-4 sm:pb-5 relative z-10">
                  {service.tags.map((tags, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-1 font-medium text-center text-cyan-400 rounded-md bg-white/5 border border-white text-white/50 hover:text-white hover:font-semibold hover:border-blue-500/40 transition"
                    >
                      {tags}
                    </span>
                  ))}
                </div>

                {/*   Bottom HALF Gradient Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-1/2 bg-gradient-to-t from-blue-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/*   Glow Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
              </motion.div>
            );
          })}
        </div>

        {/*   Industries */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-white/10">
          <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-white/40 mb-4 sm:mb-5">
            Industries we serve
          </p>

          <div
            className="overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Track */}
            <div
              className={`flex gap-3 w-max ${isPaused ? "" : "animate-marquee"
                }`}
            >
              {/* Duplicate for infinite loop */}
              {[...industries, ...industries].map((industry, index) => (
                <span
                  key={index}
                  className="text-xs sm:text-sm px-3 py-1 font-semibold whitespace-nowrap rounded-full bg-[#0c1424] border border-blue-500/10 hover:border-blue-500/40 hover:bg-blue-500/10 text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;


// import { motion } from "framer-motion";
// import { useState } from "react";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// function TiltCard({ children, className }) {
//   const [style, setStyle] = useState({});

//   function handleMove(e) {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     const rotateX = -(y - rect.height / 2) / 20;
//     const rotateY = (x - rect.width / 2) / 20;

//     setStyle({
//       transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
//     });
//   }

//   function reset() {
//     setStyle({ transform: "rotateX(0deg) rotateY(0deg)" });
//   }

//   return (
//     <div
//       onMouseMove={handleMove}
//       onMouseLeave={reset}
//       className={`transition-transform duration-300 will-change-transform ${className}`}
//       style={style}
//     >
//       {children}
//     </div>
//   );
// }

// // ─── Component ─────────────────────────
// export default function ServicesSection({ services, industries }) {
//   return (
//     <section
//       id="services"
//       className="bg-[#2D374E] py-24 md:py-32 relative overflow-hidden"
//     >
//       {/* Background Glow */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px]" />
//       </div>

//       <div className="container mx-auto px-5 md:px-10">
//         {/* Heading */}
//         <div className="mb-14 md:mb-20 text-center">
//           <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-3">
//             Capabilities
//           </p>
//           <h2 className="text-3xl md:text-5xl font-bold text-white">
//             Capabilities designed for{" "}
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
//               scale & speed
//             </span>
//           </h2>
//           <p className="text-white/50 mt-4 max-w-2xl mx-auto text-sm">
//             From deeply technical web applications to high-conversion growth systems.
//           </p>
//         </div>

//         {/* Cards */}
//         <motion.div
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         >
//           {services.map((s) => {
//             const Icon = s.icon;

//             return (
//               <motion.div key={s.title} variants={fadeUp}>
//                 <TiltCard className="h-full">
//                   <div className="group relative rounded-xl p-[1px] bg-gradient-to-br from-white/10 to-white/0 hover:from-cyan-400/40 hover:to-blue-500/40 transition-all duration-300">

//                     <div className="bg-[#0F172A]/80 backdrop-blur-xl rounded-xl p-7 h-full border border-white/10 relative overflow-hidden">

//                       {/* Glow on hover */}
//                       <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-blue-500/10" />

//                       {/* Icon */}
//                       <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 text-white group-hover:text-cyan-400 transition">
//                         <Icon className="w-5 h-5 group-hover:scale-110 group-hover:-rotate-6 transition" />
//                       </div>

//                       {/* Title */}
//                       <h3 className="text-lg font-semibold text-white mb-2">
//                         {s.title}
//                       </h3>

//                       {/* Desc */}
//                       <p className="text-sm text-white/60 mb-5">
//                         {s.desc}
//                       </p>

//                       {/* Tags */}
//                       <div className="flex flex-wrap gap-2">
//                         {s.tags.map((t) => (
//                           <span
//                             key={t}
//                             className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-cyan-400/40 transition"
//                           >
//                             {t}
//                           </span>
//                         ))}
//                       </div>

//                       {/* Hover Arrow */}
//                       <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition">
//                         →
//                       </div>
//                     </div>
//                   </div>
//                 </TiltCard>
//               </motion.div>
//             );
//           })}
//         </motion.div>

//         {/* Industries */}
//         <div className="mt-20 pt-10 border-t border-white/10">
//           <p className="text-xs tracking-[0.25em] uppercase text-white/40 mb-5">
//             Industries we serve
//           </p>

//           <div className="flex flex-wrap gap-3">
//             {industries.map((ind) => (
//               <span
//                 key={ind}
//                 className="px-4 py-1.5 text-sm rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-cyan-400/40 transition hover:scale-105"
//               >
//                 {ind}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }