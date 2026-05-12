import React from "react";
import FAQSection from "../../home/FAQSection.jsx";
import ContactHero from "./Contacthero.jsx";
import ContactForm from "./ContactForm.jsx";
import TeamHubs from "./TeamHubs.jsx";

export default function Contact() {

  return (
    <>
    <ContactHero />
    <ContactForm />
    <TeamHubs />
    <FAQSection />
    </>
  );
}