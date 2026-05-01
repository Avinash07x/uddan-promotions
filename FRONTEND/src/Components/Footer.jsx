import React from "react";
import { Send } from "lucide-react";
import Logo from "../assets/uddan1.png";

/* 🔥 Reusable underline class */
const linkClass =
  "relative inline-block text-white/60 hover:text-cyan-400 transition duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[1px] after:bg-cyan-400 after:scale-x-0 after:origin-left after:transition-transform after:duration-[2000ms] hover:after:scale-x-100";

const certifications = [
  "ISO 9001:2015",
  "MSME Registered",
  "NASSCOM Community",
  "Startup India",
];

const locations = [
  {
    name: "Bikaner",
    link: "https://www.google.com/maps?q=Bikaner+Rajasthan",
  },
  {
    name: "Jaipur",
    link: "https://www.google.com/maps?q=Jaipur+Rajasthan",
  },
  {
    name: "Mumbai",
    link: "https://www.google.com/maps?q=Mumbai+Maharashtra",
  },
  {
    name: "EU (Italy)",
    link: "https://www.google.com/maps?q=Italy",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#070d1a] relative overflow-hidden">

      {/* 🌌 Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/10 blur-[120px]" />

      <div className="container mx-auto px-5 md:px-10 pt-20 pb-10 relative">

        {/* GRID */}
        <div className="grid lg:grid-cols-12 gap-10 mb-14">

          {/* BRAND */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg border border-cyan-400/30 flex items-center justify-center bg-cyan-400/10">
                <img src={Logo} alt="logo" className="w-8 h-8" />
              </div>
              <div>
                <p className="text-white font-semibold text-lg">
                  Uddan <span className="text-cyan-400">Promotions</span>
                </p>
                <p className="text-xs text-white/40 uppercase">
                  Digital Growth Agency
                </p>
              </div>
            </div>

            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-md">
              We design, build and grow digital experiences that help ambitious
              teams outperform their targets across India & EU.
            </p>

            <p className="text-xs text-white/40 mb-3">
              CIN: U72900RJ2017PTC059869
            </p>

            <p className="text-xs text-white/40 mb-3">
              Mon–Fri: 9:00–18:00 IST · 24×7 support for retainers
            </p>

            {/* 📍 Locations */}
            <div className="flex flex-wrap gap-2 text-sm mb-5">
              {locations.map((loc, i) => (
                <a
                  key={i}
                  href={loc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {loc.name}
                  {i !== locations.length - 1 && " •"}
                </a>
              ))}
              <span className="text-white/40"> • Global Delivery</span>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2 mb-6">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/50"
                >
                  {c}
                </span>
              ))}
            </div>

            {/* Contact */}
            <div className="text-sm text-white/60 space-y-1">
              <p>
                📞{" "}
                <a href="tel:+918619036818" className={linkClass}>
                  +91-8619036818
                </a>
              </p>
              <p>
                ✉️{" "}
                <a
                  href="mailto:contact@uddanpromotions.com"
                  className={linkClass}
                >
                  contact@uddanpromotions.com
                </a>
              </p>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Home",
                "Solutions",
                "About",
                "Insights",
                "Industries",
                "Playbooks",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className={linkClass}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white font-semibold mb-4">
              Core Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                "Web Development",
                "Custom Platforms",
                "Mobile Apps",
                "Digital Marketing",
                "E-commerce Growth",
                "Automation & DevOps",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className={linkClass}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white font-semibold mb-4">
              Stay Ahead
            </h4>

            <p className="text-sm text-white/60 mb-4">
              Get the latest digital growth strategies and tech insights.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed 🚀");
                e.target.reset();
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="Email address..."
                className="h-11 w-full rounded-lg bg-white/5 border border-white/10 px-4 text-white outline-none focus:border-cyan-400"
              />

              <button
                type="submit"
                className="h-11 px-4 rounded-lg bg-cyan-400 text-black flex items-center justify-center hover:scale-105 transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 border-t border-white/10 flex justify-center items-center gap-4 text-sm text-white/50">
          <p>© 2026 Uddan Promotions Pvt. Ltd.</p>

          <div className="flex items-center justify-center gap-5">
            <a href="#" className={linkClass}>Privacy</a>
            <a href="#" className={linkClass}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;