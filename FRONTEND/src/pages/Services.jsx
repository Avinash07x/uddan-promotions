import HeroServices from "../pages/services/HeroServices";
import Stats from "../pages/services/Stats";
import Servicesc from "../pages/services/Servicesc";
import Process from "../pages/services/Process";
import FAQSection from "./home/FAQSection";
import LocalServicePages from "./services/LocalServicePages";
import ServicesGrid from "./services/ServicesGrid";
import WhyChoose from "./services/WhyChoose";

export default function ServicesPage() {
  const faqs = [
  {
    q: "What makes Uddan a strong SEO partner in 2025?",
    a: "We pair technical SEO checks with schema, content velocity plans, and Core Web Vitals optimisation. Every sprint ships crawl-friendly builds, multilingual content options, and dashboards that document ranking wins instead of vanity metrics.",
  },
  {
    q: "Do you handle full digital delivery or just marketing?",
    a: "Full end-to-end delivery. We are equal parts engineering lab and growth agency — we architect backends, design UI, build web and mobile applications, and then execute go-to-market.",
  },
  {
    q: "How fast can you launch?",
    a: "Our agile pods move fast. Typical MVPs and corporate sites launch in 4–6 weeks. Complex SaaS platforms or enterprise mobile apps generally take 10–16 weeks. We maintain a 98% on-time delivery record.",
  },
  {
    q: "Can you support ongoing optimisation after go-live?",
    a: "Absolutely. We offer 24×7 retainer models with an average 15-minute critical-incident response. We continuously optimise code, conversion rates, and infrastructure post-launch.",
  },
  {
    q: "What is your project governance model?",
    a: "Every engagement gets a dedicated technical project manager, transparent sprint boards, weekly demos, and robust staging environments — so you always have full visibility into the codebase and timeline.",
  },
];
  return (
    <>
      <HeroServices />
      <Stats />
      <WhyChoose />
      <Servicesc />
      <ServicesGrid />
      <Process />
      <LocalServicePages />
      <FAQSection faqs={faqs} />
    </>
  );
}