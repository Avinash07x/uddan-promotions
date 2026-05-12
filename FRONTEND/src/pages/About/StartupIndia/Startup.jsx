import React from "react";
import FAQSection from "../../home/FAQSection.jsx";
import { Star } from "lucide-react";
import StartupIndia from "./StartupIndia.jsx";
import StartupHero from "./StartupHero.jsx";

export default function Startup() {

  return (
    <>
    <StartupHero />
    <StartupIndia />
    <FAQSection />
    </>
  );
}