import { useState, useEffect, useRef } from "react";
import Logo from "../assets/uddan1.png"; // uncomment when asset is present

/* ─── NAV DATA ─────────────────────────────────────────── */
const NAV = [
  {
    id: "services",
    label: "Services",
  },
  {
    id: "solutions",
    label: "Solutions",
    mega: true,
    categories: [
      {
        cat: "Web & Mobile",
        items: [
          { icon: "🌐", title: "Website Design & Development", desc: "Corporate & eCommerce" },
          { icon: "📱", title: "Mobile Apps (Native & Hybrid)", desc: "Flutter & Dart" },
          { icon: "🔧", title: "Custom Web Software",           desc: "PHP / Node / MySQL" },
        ],
      },
      {
        cat: "Growth & Commerce",
        items: [
          { icon: "📣", title: "Digital Marketing",      desc: "Meta / Google Ads" },
          { icon: "🛒", title: "Commerce & RevOps Pods", desc: "Marketplace integrations & OMS" },
        ],
      },
      {
        cat: "Cloud & Security",
        items: [
          { icon: "☁️", title: "Cloud & DevOps Engineering", desc: "Landing zones & security baselines" },
          { icon: "🛡️", title: "Cyber Security & MDR",       desc: "Managed SOC & MDR playbooks" },
        ],
      },
      {
        cat: "AI & Automation",
        items: [
          { icon: "🤖", title: "AI & Automation Pods",    desc: "Generative AI copilots" },
          { icon: "🧠", title: "Personal AI Development", desc: "Personal AI Assistants" },
        ],
      },
    ],
  },
  { id: "personalai", label: "Personal AI", ai: true },
  {
    id: "resources",
    label: "Resources",
    mega: true,
    items: [
      { icon: "📚", title: "Blog & Insights", desc: "Latest articles & trends" },
      { icon: "📄", title: "Case Studies",    desc: "Client success stories" },
      { icon: "🎓", title: "Webinars",        desc: "Live & recorded sessions" },
      { icon: "📊", title: "Whitepapers",     desc: "Deep-dive research" },
    ],
  },
  {
    id: "about",
    label: "About",
    mega: true,
    items: [
      { icon: "🏢", title: "About Us",        desc: "Our story, mission & vision." },
      { icon: "🚔", title: "Cyber Awareness", desc: "Partner with Bikaner Police." },
      { icon: "🚀", title: "Startup India",   desc: "DPIIT Recognized Startup." },
      { icon: "👥", title: "Careers",         desc: "Join our growing team." },
      { icon: "📩", title: "Contact",         desc: "Get in touch with our experts." },
    ],
  },
];

/* Heights — keep in sync with actual DOM */
const TOP_BAR_H   = 40;  // sm:h-10
const NAV_BAR_H   = 64;  // h-16
const TOTAL_OFFSET = TOP_BAR_H + NAV_BAR_H; // 104px

/* ─── DROP ITEM ────────────────────────────────────────── */
function DropItem({ icon, title, desc }) {
  const testId = `drop-item-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      data-testid={testId}
      className={[
        "flex items-center gap-3 px-3 py-2.5 rounded-xl pt-0",
        "border border-transparent",
        "hover:bg-[#1a2744] hover:border-[#2563EB]/30",
        "active:scale-[0.98]",
        "transition-all duration-150 group cursor-pointer",
      ].join(" ")}
    >
      {/* Icon tile */}
      <div
        className={[
          "w-9 h-9 rounded-lg flex-shrink-0",
          "flex items-center justify-center text-[15px]",
          "transition-all duration-150",
        ].join(" ")}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="min-w-0">
        <div className="text-[13px] font-semibold text-slate-200 leading-snug group-hover:text-white transition-colors truncate">
          {title}
        </div>
        <div className="text-[11px] text-slate-500 mt-0.5 leading-tight group-hover:text-slate-400 transition-colors">
          {desc}
        </div>
      </div>
    </a>
  );
}

/* ─── DROPDOWN ─────────────────────────────────────────── */
function Dropdown({ item }) {
  if (!item.items && !item.categories) return null;

  if (item.mega) {
    return (
      <div
        data-testid={`mega-dropdown-${item.id}`}
        style={{ top: TOTAL_OFFSET }}
        className="fixed top-0 left-0 right-0 w-screen z-[998] animate-fadeDown"
      >
        {/* Blue gradient accent line at top */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />

        {/* Main panel — dark gradient bg */}
        <div className="w-full bg-gradient-to-b from-[#0d1627] to-[#0a1020] border-b border-blue-500/20 shadow-[0_24px_60px_rgba(0,0,0,0.7)]">
          <div className="max-w-7xl mx-auto px-8 md:px-14 pt-6 pb-8">

            {item.categories ? (
              /* Solutions-style: 4-column category grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {item.categories.map((col, ci) => (
                  <div key={ci}>
                    {/* Category label */}
                    <div className="flex items-center gap-2 mb-3 px-3">
                      <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#2563EB]">
                        {col.cat}
                      </span>
                      <div className="flex-1 h-px bg-gradient-to-r from-[#2563EB]/40 to-transparent" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      {col.items.map((it, ii) => <DropItem key={ii} {...it} />)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Regular mega: 4-column flat grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
                {item.items.map((it, i) => <DropItem key={i} {...it} />)}
              </div>
            )}

          </div>
        </div>
      </div>
    );
  }

  /* Small dropdown */
  return (
    <div
      data-testid={`dropdown-${item.id}`}
      className={[
        "absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2",
        "w-[min(92vw,300px)]",
        "bg-gradient-to-b from-[#0d1627] to-[#0a1020]",
        "border border-blue-500/25 rounded-2xl overflow-hidden",
        "shadow-[0_20px_50px_rgba(0,0,0,0.7)]",
        "z-[998] animate-fadeDown",
      ].join(" ")}
    >
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />
      <div className="p-2">
        {item.items.map((it, i) => <DropItem key={i} {...it} />)}
      </div>
    </div>
  );
}

/* ─── NAV ITEM (desktop) ───────────────────────────────── */
function NavItem({ item, activeLink, setActiveLink }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const hasDropdown = Boolean(item.items || item.categories);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = activeLink === item.id;

  const btnClass = [
    "flex items-center gap-1 px-2 xl:px-3.5 py-2 rounded-lg",
    "text-[13px] xl:text-[13.5px] font-medium",
    "border border-transparent transition-all duration-200 whitespace-nowrap cursor-pointer relative",
    item.ai
      ? "text-emerald-500 border-emerald-400/20 bg-emerald-400/10 hover:bg-emerald-400/15 hover:border-emerald-400/40"
      : isActive
        ? "text-[#2563EB] font-semibold border-blue-500/20 bg-blue-500/8"
        : "text-slate-600 hover:text-[#3F4A8A] hover:border-blue-500/20 hover:bg-blue-500/8",
  ].join(" ");

  return (
    <li
      ref={ref}
      className="relative flex items-center h-full top-0"
      onMouseEnter={() => hasDropdown && setOpen(true)}
      onMouseLeave={() => hasDropdown && setOpen(true)}
    >
      <button
        data-testid={`nav-${item.id}`}
        onClick={() => {
          if (!hasDropdown) setActiveLink(item.id);
          else setOpen((o) => !o);
        }}
        className={btnClass}
      >
        {item.label}

        {hasDropdown && (
          <span
            className="text-[9px] transition-transform duration-200 inline-block"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ▾
          </span>
        )}

        {/* Active underline */}
        {isActive && !item.ai && (
          <span className="absolute bottom-[-1px] left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#22C55E]" />
        )}
      </button>

      {hasDropdown && open && <Dropdown item={item} />}
    </li>
  );
}

/* ─── MOBILE ACCORDION ─────────────────────────────────── */
function MobAccordion({ item }) {
  const [open, setOpen] = useState(false);
  const allItems = item.items || (item.categories?.flatMap((c) => c.items) ?? []);
  const hasItems = allItems.length > 0;

  return (
    <div className="border-b border-blue-500/10">
      <button
        data-testid={`mob-nav-${item.id}`}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center justify-between w-full px-3 py-3.5
          text-slate-100 font-semibold text-sm
          hover:bg-blue-500/10 rounded-lg transition-colors"
      >
        <span className={item.ai ? "text-emerald-400" : ""}>{item.label}</span>
        {hasItems && (
          <span
            className="text-[10px] transition-transform duration-200 inline-block"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            ▾
          </span>
        )}
      </button>

      {hasItems && open && (
        <div className="flex flex-col gap-0.5 pb-3 px-2">
          {allItems.map((it, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg
                hover:bg-[#1a2744] cursor-pointer transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-[#131d30] border border-[#1e2d4a] flex items-center justify-center text-sm flex-shrink-0 group-hover:bg-[#2563EB]/20 group-hover:border-[#2563EB]/40 transition-all">
                {it.icon}
              </div>
              <div className="min-w-0">
                <div className="text-[13px] font-semibold text-slate-200 leading-tight truncate">{it.title}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── MAIN NAVBAR ──────────────────────────────────────── */
export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Keyframes */}
      <style>{`
        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeDown { animation: fadeDown 0.18s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>

      {/* ── TOP BAR ── */}
      <div
        data-testid="top-bar"
        className="relative z-[1000] bg-[#F5F7FA]
          flex flex-col sm:flex-row items-center justify-between
          px-4 sm:px-6 md:px-8
          py-1.5 sm:py-0 sm:h-10
          border-b border-[#3F4A8A]/15"
      >
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-1
          text-[12px] text-[#3F4A8A] font-semibold">
          <a href="tel:+918619036818" className="hover:text-[#0F6F8F] transition-colors">
            📞 +91-8619036818
          </a>
          <a
            href="mailto:contact@uddanpromotions.com"
            className="hidden sm:inline hover:text-[#0F6F8F] transition-colors"
          >
            ✉️ contact@uddanpromotions.com
          </a>
        </div>

        <select
          data-testid="lang-select"
          className="bg-[#F5F7FA] border border-[#3F4A8A]/25 text-[#3F4A8A]
            text-sm px-2 py-1 rounded-md cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-[#0F6F8F]/40"
        >
          <option value="en">EN</option>
          <option value="hi">HI</option>
        </select>
      </div>

      {/* ── MAIN NAV ── */}
      <nav
        data-testid="main-navbar"
        className={[
          "sticky top-0 left-0 w-full z-[999] h-16",
          "flex items-center justify-between px-5 md:px-8",
          "bg-[#F5F7FA]/96 backdrop-blur-xl",
          "border-b border-[#0F6F8F]/35",
          "transition-all duration-300",
          scrolled ? "shadow-[0_4px_20px_rgba(63,74,138,0.12)]" : "",
        ].join(" ")}
      >
        {/* LOGO */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <div className="w-10 h-10 rounded-full border-2 border-[#0F6F8F]
            flex items-center justify-center bg-white overflow-hidden">
            <img src={Logo} alt="Uddan Promotions" className="w-full h-full object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-bold text-[#3F4A8A] text-sm tracking-tight">
              Uddan <span className="text-[#0F6F8F]">Promotions</span>
            </div>
            <div className="text-[10px] text-[#3F4A8A]/50 tracking-wide hidden sm:block">
              Digital Growth Agency
            </div>
          </div>
        </a>

        {/* DESKTOP LINKS */}
        <ul className="hidden lg:flex items-center gap-0.5 h-full">
          <li>
            <button
              data-testid="nav-home"
              onClick={() => setActiveLink("home")}
              className={[
                "px-3 py-2 rounded-lg text-[13.5px] font-medium relative",
                "transition-all duration-200",
                activeLink === "home"
                  ? "text-[#2563EB] font-bold"
                  : "text-slate-500 hover:text-[#3F4A8A] hover:bg-blue-500/8",
              ].join(" ")}
            >
              Home
              {activeLink === "home" && (
                <span className="absolute bottom-[-1px] left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-[#2563EB] to-[#22C55E]" />
              )}
            </button>
          </li>

          {NAV.map((item) => (
            <NavItem
              key={item.id}
              item={item}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          ))}
        </ul>

        {/* RIGHT: CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <button
            data-testid="cta-request-proposal"
            className="hidden lg:flex items-center gap-1.5 px-5 py-2.5
              bg-gradient-to-br from-[#2563EB] to-[#1d4ed8]
              hover:from-[#1d4ed8] hover:to-[#1e40af]
              text-white text-sm font-semibold rounded-xl
              shadow-md hover:shadow-blue-500/25
              transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Request Proposal
            <span className="text-yellow-300 text-base">✦</span>
          </button>

          {/* Animated hamburger */}
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="lg:hidden flex flex-col justify-center items-center
              w-10 h-10 rounded-xl border border-[#3F4A8A]/20
              hover:bg-blue-500/10 transition-colors gap-[5px]"
          >
            <span
              className="block w-5 h-[1.5px] bg-[#3F4A8A] rounded-full transition-all duration-300"
              style={{ transform: mobileOpen ? "rotate(45deg) translate(3.5px,3.5px)" : "none" }}
            />
            <span
              className="block w-5 h-[1.5px] bg-[#3F4A8A] rounded-full transition-all duration-300"
              style={{ opacity: mobileOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-[1.5px] bg-[#3F4A8A] rounded-full transition-all duration-300"
              style={{ transform: mobileOpen ? "rotate(-45deg) translate(3.5px,-3.5px)" : "none" }}
            />
          </button>
        </div>
      </nav>

      {/* ── MOBILE MENU ── */}
      <div
        data-testid="mobile-menu"
        className={[
          "lg:hidden fixed inset-x-0 bottom-0 z-[997]",
          "bg-gradient-to-b from-[#0d1627] to-[#0a1020]",
          "backdrop-blur-xl overflow-y-auto",
          "transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{ top: TOTAL_OFFSET }}
      >
        {/* Gradient accent top */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />

        <div className="p-4 pb-10 max-w-lg mx-auto">
          {/* Home */}
          <button
            data-testid="mob-nav-home"
            onClick={() => { setActiveLink("home"); setMobileOpen(false); }}
            className="w-full text-left px-3 py-3.5 text-white font-semibold text-sm
              hover:bg-blue-500/10 rounded-xl transition-colors border-b border-blue-500/10 mb-1"
          >
            Home
          </button>

          {NAV.map((item) => (
            <MobAccordion key={item.id} item={item} />
          ))}

          <button
            onClick={() => setMobileOpen(false)}
            className="w-full mt-5 py-3.5
              bg-gradient-to-br from-[#2563EB] to-[#1d4ed8]
              hover:from-[#1d4ed8] hover:to-[#1e40af]
              text-white font-semibold rounded-xl
              transition-all duration-200 shadow-lg shadow-blue-500/20"
          >
            Request Proposal ✦
          </button>
        </div>
      </div>

      {/* Backdrop — closes menu on outside tap */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[996] bg-black/50"
          style={{ top: TOTAL_OFFSET }}
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}


// navbar //
// <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled
//       ? "py-3 bg-background/75 backdrop-blur-xl border-b border-border/60"
//       : "py-5 bg-transparent border-b border-transparent"}`}>
//   <div className="container mx-auto px-5 md:px-10 flex items-center justify-between gap-4">
//     <a href="#top" className="flex items-center gap-2.5 group">
//       <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-grad-warm grid place-items-center text-primary-foreground font-bold text-lg shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.6)] group-hover:scale-105 transition-transform">
//         U
//         <span className="absolute inset-0 bg-grad-cool opacity-0 group-hover:opacity-100 transition-opacity duration-500 grid place-items-center">
//           U
//         </span>
//       </div>
//       <div className="leading-tight">
//         <span className="font-display font-bold text-[17px] tracking-tight block">
//           Uddan Promotions
//         </span>
//         <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
//           Growth Engineering Lab
//         </span>
//       </div>
//     </a>

//     <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-muted-foreground">
//       {navLinks.map((l) => (<a key={l.href} href={l.href} className="nav-link">
//           {l.label}
//         </a>))}
//     </nav>

//     <div className="hidden md:flex items-center gap-3">
//       <a href="tel:+918619036818" className="text-[13px] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
//         <Phone className="w-3.5 h-3.5"/>
//         +91-86190-36818
//       </a>
//       <Button asChild className="btn-shine text-primary-foreground font-semibold rounded-full h-10 px-5 border-0">
//         <a href="#contact" className="flex items-center gap-1.5">
//           Start a Project <ArrowRight className="w-4 h-4"/>
//         </a>
//       </Button>
//     </div>

//     <button className="md:hidden p-2 -m-2 text-foreground" onClick={() => setMobileMenuOpen((v) => !v)} aria-label="Toggle menu">
//       {mobileMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
//     </button>
//   </div>
// </header>

{/* ===== Mobile Menu ===== */ }
// <AnimatePresence>
//   {mobileMenuOpen && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }} className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-xl pt-24 px-6">
//       <motion.nav variants={staggerParent} initial="hidden" animate="show" className="flex flex-col gap-1 text-2xl font-display font-semibold">
//         {navLinks.map((l) => (<motion.a key={l.href} variants={fadeUp} href={l.href} onClick={() => setMobileMenuOpen(false)} className="border-b border-border/60 py-4 flex items-center justify-between hover:text-primary transition-colors">
//             {l.label}
//             <ArrowUpRight className="w-5 h-5 text-muted-foreground"/>
//           </motion.a>))}
//         <motion.div variants={fadeUp} className="pt-6">
//           <Button asChild className="btn-shine text-primary-foreground w-full h-12 rounded-full border-0 font-semibold">
//             <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
//               Start a Project
//             </a>
//           </Button>
//           <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground">
//             <a href="tel:+918619036818" className="flex items-center gap-2">
//               <Phone className="w-4 h-4"/> +91-86190-36818
//             </a>
//             <a href="mailto:contact@uddanpromotions.com" className="flex items-center gap-2">
//               <Mail className="w-4 h-4"/> contact@uddanpromotions.com
//             </a>
//           </div>
//         </motion.div>
//       </motion.nav>
//     </motion.div>)}
// </AnimatePresence>