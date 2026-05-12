import React from "react";
import CyberSecurityHero from "./CyberSecurityHero";
import CyberSecurityCapabilities from "./CyberSecurityCapabilities";
import SecurityLifecycle from "./SecurityLifecycle";
import FAQSection from "../../home/FAQSection";



export default function CyberSecurity() {

  return (
    <>
    <CyberSecurityHero />
    <CyberSecurityCapabilities />
    <SecurityLifecycle />
    <FAQSection />
    </>
  );
}