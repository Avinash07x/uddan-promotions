import React, {
  useEffect,
  Suspense,
  lazy,
  useState,
  useCallback,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Lenis from "lenis";

/* =========================
   LAZY IMPORTS
========================= */

/* Layout */
const Footer = lazy(() =>
  import("./Components/Footer")
);

const Navbar1 = lazy(() =>
  import("./Components/Navbar1")
);

const BackToTop = lazy(() =>
  import("./Components/landing/BackToTop")
);

const FairyCursor = lazy(() =>
  import("./Components/CurlyCursor")
);

/* Home */
const Homepage = lazy(() =>
  import("./pages/Homepage")
);

/* Services */
const Services = lazy(() =>
  import("./pages/Services")
);

/* Solutions */
const WebPage = lazy(() =>
  import(
    "./pages/Solutions/WebDesign&Development/WebPage"
  )
);

const MobilePage = lazy(() =>
  import(
    "./pages/Solutions/MobileApps/MobilePage"
  )
);

const CustomSoftware = lazy(() =>
  import(
    "./pages/Solutions/CustomSoftware/CustomSoftware"
  )
);

const DigitalMarketing = lazy(() =>
  import(
    "./pages/Solutions/DigitalMarketing/DigitalMarketing"
  )
);

const CloudDevOps = lazy(() =>
  import(
    "./pages/Solutions/Cloud&DevOps/CloudDevOps"
  )
);

const CyberSecurity = lazy(() =>
  import(
    "./pages/Solutions/CyberSecurity/CyberSecurity"
  )
);

const CommerceRevOpsPods = lazy(() =>
  import(
    "./pages/Solutions/RevOpsPods/CommerceRevOpsPods"
  )
);

const Automation = lazy(() =>
  import(
    "./pages/Solutions/AI&Automation/Automation"
  )
);

/* Personal AI */
const Personal = lazy(() =>
  import("./pages/Personal")
);

/* Resources */
const Strategies = lazy(() =>
  import(
    "./pages/Resources/Strategies/Strategies"
  )
);

const Insights = lazy(() =>
  import(
    "./pages/Resources/Insights/Insights"
  )
);

const Playbooks = lazy(() =>
  import(
    "./pages/Resources/Playbookss/Playbooks"
  )
);

/* About */
const AboutUs = lazy(() =>
  import("./pages/About/AboutUs/AboutUs")
);

const Cyber = lazy(() =>
  import(
    "./pages/About/CyberAwareness/Cyber"
  )
);

const Startup = lazy(() =>
  import(
    "./pages/About/StartupIndia/Startup"
  )
);

const Careers = lazy(() =>
  import("./pages/About/Careers/Careers")
);

const Contact = lazy(() =>
  import("./pages/About/Contact/Contact")
);

/* Admin */
const AdminPage = lazy(() =>
  import("./pages/admin/AdminPage")
);

const AdminDashboard = lazy(() =>
  import("./pages/admin/AdminDashboard")
);

/* =========================
   GLOBAL LOADER
========================= */

const Loader = ({ logo }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617] overflow-hidden">

      {/* Glow */}
      <div className="absolute w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6">

        {/* Spinner */}
        <div className="relative flex items-center justify-center w-24 h-24">

          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-cyan-500/20" />

          {/* Animated Ring */}
          <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-cyan-400 border-r-blue-500 animate-spin" />

          {/* Inner Circle */}
          <div className="absolute inset-2 rounded-full bg-[#020617]" />

          {/* Logo */}
          {logo && (
            <img
              src={logo}
              alt="Company Logo"
              className="relative z-10 w-12 h-12 object-contain animate-pulse"
            />
          )}

        </div>

        {/* Brand */}
        <div className="text-center">

          <h1 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
            UDDAN
          </h1>

          <p className="mt-2 text-xs md:text-sm text-slate-400 tracking-[0.35em] uppercase">
            Loading Experience
          </p>

        </div>

        {/* Progress */}
        <div className="w-56 h-[3px] bg-slate-800 rounded-full overflow-hidden">

          <div className="loader-bar h-full w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500" />

        </div>

      </div>

      {/* Animation */}
      <style>
        {`
          .loader-bar {
            animation: loading 1.8s ease-in-out infinite;
          }

          @keyframes loading {
            0% {
              transform: translateX(-100%);
            }

            50% {
              transform: translateX(0%);
            }

            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>

    </div>
  );
};

/* =========================
   APP LAYOUT
========================= */

function AppLayout() {
  const location = useLocation();

  const [companyInfo, setCompanyInfo] =
    useState(null);

  const API =
    "http://localhost:5000";

  /* =========================
     FETCH COMPANY INFO
  ========================= */

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

  /* =========================
     HIDE NAVBAR + FOOTER
  ========================= */

  const hideLayout =
    location.pathname ===
      "/login-admin" ||
    location.pathname.startsWith(
      "/admin"
    );

  return (
    <>
      {/* Cursor */}
      <Suspense fallback={null}>
        <FairyCursor />
      </Suspense>

      {/* Navbar */}
      {!hideLayout && (
        <Suspense fallback={null}>
          <Navbar1 />
        </Suspense>
      )}

      {/* Back To Top */}
      {!hideLayout && (
        <Suspense fallback={null}>
          <BackToTop />
        </Suspense>
      )}

      {/* Main */}
      <main className="overflow-x-hidden min-h-screen">

        <Suspense
          fallback={
            <Loader
              logo={
                companyInfo?.logo
                  ? `${API}${companyInfo.logo}`
                  : "/placeholder.png"
              }
            />
          }
        >

          <Routes>

            {/* HOME */}
            <Route
              path="/"
              element={<Homepage />}
            />

            {/* SERVICES */}
            <Route
              path="/services"
              element={<Services />}
            />

            {/* SOLUTIONS */}
            <Route
              path="/solutions/web-design-development"
              element={<WebPage />}
            />

            <Route
              path="/solutions/mobile-apps-native-hybrid"
              element={<MobilePage />}
            />

            <Route
              path="/solutions/custom-web-software"
              element={<CustomSoftware />}
            />

            <Route
              path="/solutions/digital-marketing"
              element={<DigitalMarketing />}
            />

            <Route
              path="/solutions/commerce-revops-pods"
              element={
                <CommerceRevOpsPods />
              }
            />

            <Route
              path="/solutions/cloud-devops-engineering"
              element={<CloudDevOps />}
            />

            <Route
              path="/solutions/cyber-security-mdr"
              element={<CyberSecurity />}
            />

            <Route
              path="/solutions/ai-automation-pods"
              element={<Automation />}
            />

            {/* PERSONAL AI */}
            <Route
              path="/personal-ai"
              element={<Personal />}
            />

            {/* RESOURCES */}
            <Route
              path="/resources/strategies"
              element={<Strategies />}
            />

            <Route
              path="/resources/insights-blog"
              element={<Insights />}
            />

            <Route
              path="/resources/playbooks"
              element={<Playbooks />}
            />

            {/* ABOUT */}
            <Route
              path="/about/about-us"
              element={<AboutUs />}
            />

            <Route
              path="/about/cyber-awareness"
              element={<Cyber />}
            />

            <Route
              path="/about/startup-india"
              element={<Startup />}
            />

            <Route
              path="/about/careers"
              element={<Careers />}
            />

            <Route
              path="/about/contact-us"
              element={<Contact />}
            />

            {/* ADMIN */}
            <Route
              path="/login-admin"
              element={<AdminPage />}
            />

            <Route
              path="/admin/dashboard"
              element={
                <AdminDashboard />
              }
            />

          </Routes>

        </Suspense>

      </main>

      {/* Footer */}
      {!hideLayout && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </>
  );
}

/* =========================
   MAIN APP
========================= */

function App() {

  /* =========================
     LENIS SMOOTH SCROLL
  ========================= */

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    let frameId;

    const raf = (time) => {
      lenis.raf(time);

      frameId =
        requestAnimationFrame(raf);
    };

    frameId =
      requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);

      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;