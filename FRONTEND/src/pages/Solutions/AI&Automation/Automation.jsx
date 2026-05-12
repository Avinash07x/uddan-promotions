import React from "react";
import FAQSection from "../../home/FAQSection";
import AutomationHero from "./AutomationHero";
import DevOpsSection from "./DevOpsSection";
import DevOpsJourney from "./DevOpsJourney";

export default function Automation() {

  return (
    <>
    <AutomationHero />
    <DevOpsSection />
    <DevOpsJourney />
    <FAQSection />
    </>
  );
}