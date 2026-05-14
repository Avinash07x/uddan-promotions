import React, {
  useEffect,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

const API =
  "http://localhost:5000";

const Footer = () => {
  const location = useLocation();

  const [info, setInfo] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  /* FETCH COMPANY INFO */

  useEffect(() => {
    fetchCompanyInfo();
  }, []);

  const fetchCompanyInfo =
    async () => {
      try {
        const res = await fetch(
          `${API}/api/company-info`
        );

        const data =
          await res.json();

        if (data.success) {
          setInfo(data.info);
        }
      } catch (error) {
        console.log(
          "Footer API Error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

  /* ACTIVE LINK */

  const isActive = (path) =>
    location.pathname === path;

  const linkClass = (path) =>
    `group relative inline-block transition-all duration-300 pb-1 whitespace-nowrap
    ${
      isActive(path)
        ? "text-cyan-400 font-bold"
        : "text-white/60 hover:text-cyan-400"
    }`;

  /* SCROLL TOP */

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* LOADING */

  if (loading) {
    return (
      <footer className="bg-[#070d1a] py-20 text-center text-white">
        Loading Footer...
      </footer>
    );
  }

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-[#020617] to-[#1e3a8a]  relative overflow-hidden">
      {/* GLOW EFFECTS */}

      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />

      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/10 blur-[120px]" />

      {/* CONTAINER */}

      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-20 pb-10 relative">
        <div className="grid gap-12 lg:grid-cols-12 mb-14">
          {/* BRAND */}

          <div className="lg:col-span-5">
            {/* LOGO */}

            <div className="flex items-center gap-3 mb-5">
              <img
                src={
                  info?.logo
                    ? `${API}${info.logo}`
                    : "/placeholder.png"
                }
                alt="logo"
                className="w-10 h-10 rounded-md"
              />

              <div>
                <h3 className="text-white font-semibold text-lg leading-tight">
                  {info?.companyName ||
                    "Company Name"}

                  <span className="text-cyan-400">
                    {" "}
                    {info?.tagline ||
                      "Promotion"}
                  </span>
                </h3>
              </div>
            </div>

            {/* DESCRIPTION */}

            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-md">
              {info?.description ||
                "We design, build and scale modern digital experiences for ambitious brands."}
            </p>

            {/* COMPANY INFO */}

            <div className="text-xs text-white/40 space-y-2 mb-5">
              {info?.cin && (
                <p>
                  CIN: {info.cin}
                </p>
              )}

              {info?.workingHours && (
                <p>
                  {
                    info.workingHours
                  }
                </p>
              )}
            </div>

            {/* LOCATIONS */}

            <div className="flex flex-wrap gap-3 text-sm text-white/60 mb-5">
              {info?.locations &&
                info.locations.length >
                  0 ? (
                info.locations.map(
                  (
                    loc,
                    index
                  ) => (
                    <a
                      key={index}
                      href={
                        loc.mapLink
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-cyan-400 transition"
                    >
                      {loc.name}
                    </a>
                  )
                )
              ) : (
                <>
                  <span>
                    Jaipur
                  </span>

                  <span>
                    Mumbai
                  </span>

                  <span>
                    Global Delivery
                  </span>
                </>
              )}
            </div>

            {/* CERTIFICATIONS */}

            <div className="flex flex-wrap gap-2 mb-5">
              {info?.certifications &&
              info.certifications
                .length > 0 ? (
                info.certifications.map(
                  (
                    c,
                    index
                  ) => (
                    <span
                      key={index}
                      className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/50"
                    >
                      {c}
                    </span>
                  )
                )
              ) : (
                <>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/50">
                    ISO Certified
                  </span>

                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/50">
                    Startup India
                  </span>
                </>
              )}
            </div>

            {/* CONTACT */}

            <div className="text-sm text-white/60 space-y-2">
              {info?.phone && (
                <p>
                  📞{" "}
                  <a
                    href={`tel:${info.phone}`}
                    className="hover:text-cyan-400 transition"
                  >
                    {info.phone}
                  </a>
                </p>
              )}

              {info?.email && (
                <p>
                  ✉️{" "}
                  <a
                    href={`mailto:${info.email}`}
                    className="hover:text-cyan-400 transition"
                  >
                    {info.email}
                  </a>
                </p>
              )}
            </div>

            {/* SOCIAL LINKS */}

            <div className="flex flex-wrap items-center gap-4 mt-6">
              {info?.facebook && (
                <a
                  href={
                    info.facebook
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-cyan-400 transition"
                >
                  Facebook
                </a>
              )}

              {info?.instagram && (
                <a
                  href={
                    info.instagram
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-cyan-400 transition"
                >
                  Instagram
                </a>
              )}

              {info?.linkedin && (
                <a
                  href={
                    info.linkedin
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-cyan-400 transition"
                >
                  LinkedIn
                </a>
              )}

              {info?.youtube && (
                <a
                  href={
                    info.youtube
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-cyan-400 transition"
                >
                  YouTube
                </a>
              )}
            </div>
          </div>

          {/* NAVIGATION */}

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white font-semibold mb-4">
              Navigation
            </h4>

            <ul className="space-y-2 text-sm">
              {[
                {
                  name: "Home",
                  path: "/",
                },

                {
                  name: "Services",
                  path:
                    "/services",
                },

                {
                  name: "About",
                  path:
                    "/about/about-us",
                },

                {
                  name: "Insights",
                  path:
                    "/resources/insights-blog",
                },

                {
                  name:
                    "Industries",
                  path:
                    "/industries",
                },

                {
                  name:
                    "Playbooks",
                  path:
                    "/resources/playbooks",
                },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={
                      handleScrollTop
                    }
                    className={linkClass(
                      item.path
                    )}
                  >
                    {item.name}

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300
                      ${
                        isActive(
                          item.path
                        )
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CORE SOLUTIONS */}

          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white font-semibold mb-4">
              Core Solutions
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                {
                  name:
                    "Web Development",
                  path:
                    "/solutions/web-design-development",
                },

                {
                  name:
                    "Mobile Apps",
                  path:
                    "/solutions/mobile-apps-native-hybrid",
                },

                {
                  name:
                    "Custom Platforms",
                  path:
                    "/solutions/custom-web-software",
                },

                {
                  name:
                    "Digital Marketing",
                  path:
                    "/solutions/digital-marketing",
                },

                {
                  name:
                    "Commerce RevOps",
                  path:
                    "/solutions/commerce-revops-pods",
                },

                {
                  name:
                    "Cloud & DevOps",
                  path:
                    "/solutions/cloud-devops-engineering",
                },

                {
                  name:
                    "Cyber Security",
                  path:
                    "/solutions/cyber-security-mdr",
                },

                {
                  name:
                    "Automation & AI",
                  path:
                    "/solutions/ai-automation-pods",
                },

                {
                  name:
                    "Personal AI",
                  path:
                    "/personal-ai",
                },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={
                      handleScrollTop
                    }
                    className={`group relative inline-block transition-all duration-300 pb-1 whitespace-nowrap
                    ${
                      isActive(
                        item.path
                      )
                        ? "text-cyan-400 font-bold"
                        : "text-white/60 hover:text-cyan-400"
                    }`}
                  >
                    {item.name}

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-cyan-400 transition-all duration-300
                      ${
                        isActive(
                          item.path
                        )
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SECTION */}

          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-white font-semibold mb-4">
              Let’s Build Together
            </h4>

            <p className="text-sm text-white/60 mb-4 leading-relaxed">
              We craft modern
              digital experiences,
              scalable web
              solutions, and
              growth-driven
              strategies for
              ambitious brands.
            </p>

            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Creative UI/UX
                Design
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Modern Web
                Development
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                SEO & Growth
                Marketing
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                AI Automation
                Solutions
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}

        <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-4 text-sm text-white/50 text-center">
          <p>
            © 2026{" "}
            {info?.companyName ||
              "Company"}
            . All Rights
            Reserved.
          </p>

          <div className="flex items-center justify-center gap-5 flex-wrap">
            <Link
              to="/privacy"
              onClick={
                handleScrollTop
              }
              className={linkClass(
                "/privacy"
              )}
            >
              Privacy

              <span className="absolute left-0 -bottom-1 h-[2px] bg-cyan-400 w-0 group-hover:w-full transition-all duration-300" />
            </Link>

            <Link
              to="/terms"
              onClick={
                handleScrollTop
              }
              className={linkClass(
                "/terms"
              )}
            >
              Terms

              <span className="absolute left-0 -bottom-1 h-[2px] bg-cyan-400 w-0 group-hover:w-full transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;