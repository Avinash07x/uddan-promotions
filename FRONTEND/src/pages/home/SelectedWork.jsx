import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/uddan1.png";

export function SelectedWork() {
  const projects = [
    { tags: ["PHP", "MySQL", "Bootstrap"], t: "DealZen — Property CRM SaaS", d: "A fast, role-based CRM with WhatsApp API, IVR & lead funnels for real-estate teams." },
    { tags: ["Flutter", "Node", "Meta Cloud API"], t: "Tuwix — WhatsApp Cloud API", d: "A messaging platform enabling templates, campaigns and reporting for SMEs." },
    { tags: ["SEO", "Meta Ads", "Analytics"], t: "Yavi Solar — Lead Engine", d: "High-intent solar leads via creative testing, landing pages & analytics." },
  ];
  return (
    <section className="bg-[#070d1a] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 mb-2">Selected work</h2>
            <p className="text-slate-400 text-sm sm:text-base">A snapshot of projects our team has delivered recently.</p>
          </div>
          <a href="#" className="text-blue-400 font-semibold text-sm hover:translate-x-1 transition-transform inline-block">View all →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div key={p.t} className="rounded-2xl overflow-hidden bg-[#0c1424] border border-blue-500/15 hover:border-blue-500/40 transition-colors group">
              <div className="h-40 bg-gradient-to-br from-blue-500/20 to-emerald-500/10 flex items-center justify-center text-4xl">
                <img src={logo} alt="Uddan Logo" className="h-full w-full object-contain p-2" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((tg) => <span key={tg} className="text-[10px] px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-slate-300">{tg}</span>)}
                </div>
                <h3 className="text-slate-100 font-bold mb-2">{p.t}</h3>
                <p className="text-slate-400 text-sm">{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}