import React from "react";
import WebHero from "./WebHero";
import SEOSection from "./SEOSection";
import FullService from "./FullService";
import Stack from "./Stack";
import FAQSection from "../../home/FAQSection";


export default function WebPage() {

  return (
    <>
    <WebHero />
    <SEOSection />
    <FullService />
    <Stack />
    <FAQSection />
    </>
  );
}