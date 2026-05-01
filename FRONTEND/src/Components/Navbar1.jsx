import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/uddan1.png";
import { Link, useLocation } from "react-router-dom";
import {
  FaCode, FaMobileAlt, FaCloud, FaShieldAlt,
  FaRobot, FaBullhorn, FaBook, FaUser
} from "react-icons/fa";
import { ChevronDown, Menu, X } from "lucide-react";
import Cnav from "./Cnav";

/* ================= NAV DATA ================= */
const Nav = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Services", link: "/services" },
  {
    id: 3,
    title: "Solutions",
    mega: true,
    categories: [
      { id: 1, title: "Web Design & Development", icon: <FaCode />, link: "/solutions/web-design-development" },
      { id: 2, title: "Mobile Apps", icon: <FaMobileAlt />, link: "/solutions/mobile-apps-native-hybrid" },
      { id: 3, title: "Custom Software", icon: <FaCode />, link: "/solutions/custom-web-software" },
      { id: 4, title: "Digital Marketing", icon: <FaBullhorn />, link: "/solutions/digital-marketing" },
      { id: 5, title: "Cloud & DevOps", icon: <FaCloud />, link: "/solutions/cloud-devops-engineering" },
      { id: 6, title: "Cyber Security", icon: <FaShieldAlt />, link: "/solutions/cyber-security-mdr" },
      { id: 7, title: "AI & Automation", icon: <FaRobot />, link: "/solutions/ai-automation-pods" },
      { id: 8, title: "Personal AI", icon: <FaRobot />, link: "/solutions/personal-ai-development" },
    ],
  },
  { id: 4, title: "Personal AI", link: "/personal-ai", highlight: true },
  {
    id: 5,
    title: "Resources",
    mega: true,
    categories: [
      { id: 1, title: "Strategies", icon: <FaBook />, link: "/resources/strategies" },
      { id: 2, title: "Blog", icon: <FaBook />, link: "/resources/insights-blog" },
      { id: 3, title: "Playbooks", icon: <FaBook />, link: "/resources/playbooks" },
    ],
  },
  {
    id: 6,
    title: "About",
    mega: true,
    categories: [
      { id: 1, title: "About Us", icon: <FaUser />, link: "/about/about-us" },
      { id: 2, title: "Cyber Awareness", icon: <FaShieldAlt />, link: "/about/cyber-awareness" },
      { id: 3, title: "Startup India", icon: <FaUser />, link: "/about/startup-india" },
      { id: 4, title: "Careers", icon: <FaUser />, link: "/about/careers" },
      { id: 5, title: "Contact", icon: <FaUser />, link: "/about/contact-us" },
    ],
  },
];

const Navbar1 = () => {
  const [activeMega, setActiveMega] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrop, setMobileDrop] = useState(null);

  const location = useLocation();
  const navRef = useRef();

  const isActive = (path) => location.pathname === path;

  /* 🔥 CLOSE MENU ON ROUTE CHANGE */
  useEffect(() => {
    setMobileOpen(false);
    setActiveMega(null);
    setMobileDrop(null);
  }, [location.pathname]);

  /* 🔥 BODY SCROLL LOCK */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  /* 🔥 CLICK OUTSIDE TO CLOSE MEGA */
  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMega(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <Cnav />

      <nav ref={navRef} className="sticky top-0 bg-gray-700 backdrop-blur-md text-white z-50 shadow-lg">
        <div className="flex justify-between items-center px-6 h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-8 h-8" />
            <span className="font-bold">Uddan</span>
            <span className="text-cyan-400 font-bold">Promotions</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex gap-6 items-center">
            {Nav.map((item) => (
              <div key={item.id} className="relative">
                {!item.mega ? (
                  <Link
                    to={item.link}
                    className={`transition-colors duration-200 ${isActive(item.link)
                        ? "text-cyan-400"
                        : "hover:text-cyan-400"
                      } ${item.highlight
                        ? "bg-cyan-400 text-black px-3 py-1 rounded-lg font-semibold"
                        : ""
                      }`}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <button
                    onClick={() =>
                      setActiveMega(activeMega === item.id ? null : item.id)
                    }
                    className="flex items-center gap-1 hover:text-cyan-400"
                  >
                    {item.title}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${activeMega === item.id ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden"
            onClick={() => {
              setMobileOpen(!mobileOpen);
              setActiveMega(null);
            }}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
          <Link
            to="/request-proposal"
            className="hidden lg:block bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold"
          >
            Request Proposal ✦
          </Link>
        </div>

        {/* MEGA MENU */}
        {activeMega && (
          <div className="absolute left-0 w-full bg-[#0d1627] p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 shadow-xl">
            {Nav.find((n) => n.id === activeMega)?.categories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.link}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition"
              >
                <span className="text-cyan-400">{cat.icon}</span>
                <span>{cat.title}</span>
              </Link>
            ))}
          </div>
        )}

        {/* 🔥 SMOOTH MOBILE MENU */}
        <div
          className={`lg:hidden fixed top-[90px] left-0 w-full bg-gray-900 px-6 pb-6 transition-all duration-300 ease-in-out
          ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"}`}
          style={{ willChange: "transform, opacity" }}
        >
          {Nav.map((item) => (
            <div key={item.id} className="py-3 border-b border-gray-700">
              {!item.mega ? (
                <Link to={item.link}>{item.title}</Link>
              ) : (
                <>
                  <button
                    onClick={() =>
                      setMobileDrop(mobileDrop === item.id ? null : item.id)
                    }
                    className="flex justify-between w-full"
                  >
                    {item.title}
                    <ChevronDown
                      className={`transition-transform ${mobileDrop === item.id ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${mobileDrop === item.id ? "max-h-96 mt-2" : "max-h-0"
                      }`}
                  >
                    <div className="pl-4 space-y-2">
                      {item.categories.map((cat) => (
                        <Link key={cat.id} to={cat.link} className="flex gap-2 text-gray-300 hover:text-cyan-400">
                          {cat.icon}
                          {cat.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar1;