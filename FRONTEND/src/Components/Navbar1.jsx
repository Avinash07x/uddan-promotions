import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaBullhorn,
  FaBook,
  FaUser,
} from "react-icons/fa";

import {
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import Cnav from "./Cnav";

/*  NAV DATA  */

const NAV_ITEMS = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },

  {
    id: 2,
    title: "Services",
    link: "/services",
  },

  {
    id: 3,
    title: "Solutions",
    mega: true,

    categories: [
      {
        id: 1,
        title:
          "Web Design & Development",
        icon: <FaCode />,
        link: "/solutions/web-design-development",
      },

      {
        id: 2,
        title: "Mobile Apps",
        icon: <FaMobileAlt />,
        link: "/solutions/mobile-apps-native-hybrid",
      },

      {
        id: 3,
        title: "Custom Software",
        icon: <FaCode />,
        link: "/solutions/custom-web-software",
      },

      {
        id: 4,
        title: "Digital Marketing",
        icon: <FaBullhorn />,
        link: "/solutions/digital-marketing",
      },

      {
        id: 5,
        title:
          "Commerce & RevOps Pods",
        icon: <FaBullhorn />,
        link: "/solutions/commerce-revops-pods",
      },

      {
        id: 6,
        title: "Cloud & DevOps",
        icon: <FaCloud />,
        link: "/solutions/cloud-devops-engineering",
      },

      {
        id: 7,
        title: "Cyber Security",
        icon: <FaShieldAlt />,
        link: "/solutions/cyber-security-mdr",
      },

      {
        id: 8,
        title: "AI & Automation",
        icon: <FaRobot />,
        link: "/solutions/ai-automation-pods",
      },
    ],
  },

  {
    id: 4,
    title: "Personal AI",
    link: "/personal-ai",
    highlight: true,
  },

  {
    id: 5,
    title: "Resources",
    mega: true,

    categories: [
      {
        id: 1,
        title: "Strategies",
        icon: <FaBook />,
        link: "/resources/strategies",
      },

      {
        id: 2,
        title: "Insights",
        icon: <FaBook />,
        link: "/resources/insights-blog",
      },

      {
        id: 3,
        title: "Playbooks",
        icon: <FaBook />,
        link: "/resources/playbooks",
      },
    ],
  },

  {
    id: 6,
    title: "About",
    mega: true,

    categories: [
      {
        id: 1,
        title: "About Us",
        icon: <FaUser />,
        link: "/about/about-us",
      },

      {
        id: 2,
        title: "Cyber Awareness",
        icon: <FaShieldAlt />,
        link: "/about/cyber-awareness",
      },

      {
        id: 3,
        title: "Startup India",
        icon: <FaUser />,
        link: "/about/startup-india",
      },

      {
        id: 4,
        title: "Careers",
        icon: <FaUser />,
        link: "/about/careers",
      },

      {
        id: 5,
        title: "Contact",
        icon: <FaUser />,
        link: "/about/contact-us",
      },
    ],
  },
];

const Navbar1 = () => {
  const location = useLocation();

  const navRef = useRef(null);

  const [companyInfo, setCompanyInfo] =
    useState(null);

  const [activeMega, setActiveMega] =
    useState(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [mobileDrop, setMobileDrop] =
    useState(null);

  const [scrolled, setScrolled] =
    useState(false);

    const API =
  "http://localhost:5000";
  /*  FETCH COMPANY INFO  */

  const fetchCompanyInfo =
    useCallback(async () => {
      try {
        const res = await fetch(
          `${API}/api/company-info`
        );

        const data =
          await res.json();

        if (data.success) {
          setCompanyInfo(data.info);
        }
      } catch (error) {
        console.log(error);
      }
    }, []);

  useEffect(() => {
    fetchCompanyInfo();
  }, [fetchCompanyInfo]);

  /*  ACTIVE CHECK  */

  const isActive = useCallback(
    (path) =>
      location.pathname === path,
    [location.pathname]
  );

  /*  SCROLL TOP ON ROUTE  */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setMobileOpen(false);
    setActiveMega(null);
    setMobileDrop(null);
  }, [location.pathname]);

  /*  BODY SCROLL LOCK  */

  useEffect(() => {
    document.body.style.overflow =
      mobileOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [mobileOpen]);

  /*  CLICK OUTSIDE  */

  useEffect(() => {
    const handleClickOutside = (
      e
    ) => {
      if (
        navRef.current &&
        !navRef.current.contains(
          e.target
        )
      ) {
        setActiveMega(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /*  SCROLL EFFECT  */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(
        window.scrollY > 40
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);



  return (
    <>
      <Cnav />

      <nav
        ref={navRef}
        className={`sticky top-0 z-50 border-b border-blue-500/20
        backdrop-blur-lg transition-all duration-300
        
        ${
          scrolled
            ? "bg-[#0f172a]/95 shadow-2xl"
            : "bg-[#0f172a]/85"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">

          {/*  LOGO  */}

          <Link
            to="/"
            className="flex items-center gap-3 whitespace-nowrap"
          >
            <img
              src={
                  companyInfo?.logo
                    ? `${API}${companyInfo.logo}`
                    : "/placeholder.png"
                }
              alt="logo"
              className="w-10 h-10 object-contain rounded-lg"
            />

            <div className="flex items-center gap-1 text-lg font-bold">
              <span className="text-white">
                {companyInfo?.companyName?.split(
                  " "
                )[0] || "Uddan"}
              </span>

              <span className="text-blue-300">
                {companyInfo?.companyName
                  ?.split(" ")
                  ?.slice(1)
                  ?.join(" ") ||
                  "Promotions"}
              </span>
            </div>
          </Link>

          {/*  DESKTOP  */}

          <div className="hidden lg:flex items-center gap-4 xl:gap-6">

            {NAV_ITEMS.map((item) => (
              <div
                key={item.id}
                className="relative"
              >
                {!item.mega ? (
                  <Link
                    to={item.link}
                    className={`group relative pb-1 whitespace-nowrap transition-all duration-300
                      
                      ${
                        isActive(
                          item.link
                        )
                          ? "text-blue-300 font-bold"
                          : "text-white hover:text-blue-300"
                      }

                      ${
                        item.highlight
                          ? "bg-blue-400 text-black px-3 py-1.5 rounded-lg font-semibold"
                          : ""
                      }`}
                  >
                    {item.title}

                    {!item.highlight && (
                      <span
                        className={`absolute left-0 -bottom-1 h-[2px] bg-blue-300 transition-all duration-300
                        
                        ${
                          isActive(
                            item.link
                          )
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }`}
                      />
                    )}
                  </Link>
                ) : (
                  <button
                    onClick={() =>
                      setActiveMega(
                        activeMega ===
                          item.id
                          ? null
                          : item.id
                      )
                    }
                    className="flex items-center gap-1 text-white hover:text-blue-300 transition"
                  >
                    {item.title}

                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-300
                      
                      ${
                        activeMega ===
                        item.id
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                )}
              </div>
            ))}

            {/* CTA */}

            <Link
              to="/about/contact-us"
              className="bg-blue-400 text-black px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap hover:scale-105 transition"
            >
              Request Proposal ✦
            </Link>
          </div>

          {/*  MOBILE BUTTON  */}

          <button
            className="lg:hidden text-white"
            onClick={() =>
              setMobileOpen(
                !mobileOpen
              )
            }
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/*  MEGA MENU  */}

        {activeMega && (
          <div
            className="absolute left-0 w-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a8a]
            border border-blue-500/20 p-8 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">

              {NAV_ITEMS.find(
                (n) =>
                  n.id === activeMega
              )?.categories.map(
                (cat) => (
                  <Link
                    key={cat.id}
                    to={cat.link}
                    onClick={() =>
                      setActiveMega(
                        null
                      )
                    }
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition"
                  >
                    <span className="text-blue-300 text-lg">
                      {cat.icon}
                    </span>

                    <span className="text-white text-sm">
                      {cat.title}
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>
        )}

        {/*  MOBILE OVERLAY  */}

        <div
          onClick={() =>
            setMobileOpen(false)
          }
          className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300
            
            ${
              mobileOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible"
            }`}
        />

        {/*  MOBILE MENU  */}

        <div
          className={`lg:hidden fixed top-0 left-0 h-[95vh] w-[85%] max-w-[340px]
          bg-gray-900/95 backdrop-blur-md z-[999]
          flex flex-col transition-transform duration-300 ease-in-out
          
          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >

          {/* MOBILE HEADER */}

          <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">

            <div className="flex items-center gap-3">

              <img
                src={
                  companyInfo?.logo
                    ? `${API}${companyInfo.logo}`
                    : "/placeholder.png"
                }
                alt="logo"
                className="w-11 h-11 object-contain rounded-lg"
              />

              <h2 className="text-xl font-bold text-white leading-tight">
                {companyInfo?.companyName ||
                  "Uddan Promotions"}
              </h2>
            </div>

            <button
              onClick={() =>
                setMobileOpen(false)
              }
              className="w-10 h-10 rounded-xl border border-blue-400 flex items-center justify-center text-white"
            >
              ✕
            </button>
          </div>

          {/* MOBILE NAV */}

          <div className="flex-1 overflow-y-auto px-6 py-6">

            {NAV_ITEMS.map((item) => (
              <div
                key={item.id}
                className="border-b border-white/10 py-4"
              >
                {!item.mega ? (
                  <Link
                    to={item.link}
                    onClick={() =>
                      setMobileOpen(
                        false
                      )
                    }
                    className={`block text-[18px] transition-all duration-200
                      
                      ${
                        isActive(
                          item.link
                        )
                          ? "text-blue-400 font-semibold"
                          : "text-white hover:text-blue-300"
                      }`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <>
                    <button
                      onClick={() =>
                        setMobileDrop(
                          mobileDrop ===
                            item.id
                            ? null
                            : item.id
                        )
                      }
                      className="flex items-center justify-between w-full text-[18px] text-white"
                    >
                      <span>
                        {item.title}
                      </span>

                      <ChevronDown
                        className={`transition-transform duration-300
                        
                        ${
                          mobileDrop ===
                          item.id
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {/* MOBILE DROPDOWN */}

                    <div
                      className={`overflow-hidden transition-all duration-300
                      
                      ${
                        mobileDrop ===
                        item.id
                          ? "max-h-[500px] mt-4"
                          : "max-h-0"
                      }`}
                    >
                      <div className="space-y-4 pl-2">

                        {item.categories.map(
                          (cat) => (
                            <Link
                              key={
                                cat.id
                              }
                              to={
                                cat.link
                              }
                              onClick={() =>
                                setMobileOpen(
                                  false
                                )
                              }
                              className={`flex items-center gap-3 text-[16px]
                              
                              ${
                                isActive(
                                  cat.link
                                )
                                  ? "text-blue-400 font-medium"
                                  : "text-gray-300 hover:text-blue-300"
                              }`}
                            >
                              <span className="text-lg">
                                {
                                  cat.icon
                                }
                              </span>

                              {
                                cat.title
                              }
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* MOBILE CTA */}

          <div className="p-5 pt-0 border-t border-white/10 bg-gray-900">

            <Link
              to="/about/contact-us"
              onClick={() =>
                setMobileOpen(false)
              }
              className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-500 text-white py-4 rounded-2xl text-lg font-semibold shadow-lg"
            >
              Request Proposal
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;