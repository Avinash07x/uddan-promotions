import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import Homepage from "./pages/Homepage";
import Services from "./pages/Services";
import Navbar1 from "./Components/Navbar1";
import Footer from "./Components/Footer";
import BackToTop from "./Components/landing/BackToTop";

import { lazy, Suspense } from "react";

// 🎯 Lazy Load Cursor (performance optimized)
const FairyCursor = lazy(() => import("./Components/CurlyCursor"));

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08, // smoothness (0.05–0.1 best)
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // cleanup (important)
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      {/* 🔥 Global Effects */}
      <Suspense fallback={null}>
        <FairyCursor />
      </Suspense>

      <BackToTop />
      <Navbar1 />

      <main className="overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;