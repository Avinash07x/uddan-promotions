import React from "react";
import AIHero from "./PersonalAI/AIHero";
import AICapabilities from "./PersonalAI/AICapabilities";
import AIBuildProcess from "./PersonalAI/AIBuildProcess";
import AIEngine from "./PersonalAI/AIEngine";
import FAQSection from "./home/FAQSection";

export default function Personal() {

  return (
    <>
    <AIHero />
    <AICapabilities />
    <AIBuildProcess />
    <AIEngine />
    <FAQSection />
    </>
  );
}