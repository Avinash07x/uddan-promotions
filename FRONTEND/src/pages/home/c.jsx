// import React from "react";

// export default function Contact() {
//   return (
//     <section className="bg-[#070d1a] py-20 px-6 border-y border-blue-500/10">
//       <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

//         {/* LEFT */}
//         <div>
//           <span className="text-[11px] font-bold tracking-widest uppercase text-emerald-400">
//             Have a project in mind?
//           </span>

//           <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3 mb-4">
//             Get a free scope & timeline{" "}
//             <span className="text-blue-400">within 24 hours</span>
//           </h2>

//           <p className="text-slate-400 mb-6">
//             We'll reply with a tailored plan. Prefer WhatsApp? Just ping us.
//           </p>

//           <div className="space-y-4 text-sm">
//             <a href="tel:+918619036818" className="flex gap-3 text-slate-300 hover:text-blue-400">
//               📞 +91-8619036818
//             </a>

//             <a href="mailto:contact@uddanpromotions.com" className="flex gap-3 text-slate-300 hover:text-blue-400">
//               ✉️ contact@uddanpromotions.com
//             </a>

//             <div className="flex gap-3 text-slate-400">
//               📍 Bikaner • Jaipur • Mumbai • Italy • Worldwide
//             </div>
//           </div>
//         </div>

//         {/* FORM */}
//         <form className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-7 space-y-5 shadow-xl">
//           <div className="grid sm:grid-cols-2 gap-4">
//             <Input label="Full name" />
//             <Input label="Company" />
//             <Input label="Email" type="email" />
//             <Input label="Phone" type="tel" />
//           </div>

//           <div>
//             <label className="text-xs text-slate-400">What do you need?</label>
//             <select className="w-full mt-1 bg-[#070d1a] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-blue-500">
//               <option>Website / Web App</option>
//               <option>Mobile App</option>
//               <option>SEO / Marketing</option>
//               <option>Cloud / DevOps</option>
//               <option>AI Automation</option>
//             </select>
//           </div>

//           <div>
//             <label className="text-xs text-slate-400">Project brief</label>
//             <textarea
//               rows="4"
//               className="w-full mt-1 bg-[#070d1a] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-blue-500"
//             />
//           </div>

//           <button className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold transition">
//             Send project brief →
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// function Input({ label, type = "text" }) {
//   return (
//     <div>
//       <label className="text-xs text-slate-400">{label}</label>
//       <input
//         type={type}
//         className="w-full mt-1 bg-[#070d1a] border border-white/10 rounded-lg px-3 py-2 text-white focus:border-blue-500"
//       />
//     </div>
//   );
// }