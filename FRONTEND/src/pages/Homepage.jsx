import React, {
  useEffect,
  useState,
  Suspense,
  lazy,
} from "react";

import {
  useMotionValue,
  useTransform,
} from "framer-motion";

import { Compass, LayoutGrid, Code2, Rocket } from "lucide-react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";

/* 
   LAZY SECTIONS
 */

const HeroSection = lazy(() => import("./home/HeroSection.jsx"));

const TechStackSection = lazy(() =>
  import("./home/TechStackSection.jsx")
);

const ServicesSection = lazy(() =>
  import("./home/ServicesSection.jsx")
);

const WorkSection = lazy(() =>
  import("./home/WorkSection.jsx")
);

const ProcessSection = lazy(() =>
  import("./home/ProcessSection.jsx")
);

const FAQSection = lazy(() =>
  import("./home/FAQSection.jsx")
);

const ContactForm = lazy(() =>
  import("./About/Contact/ContactForm.jsx")
);

const ScrollProgress = lazy(() =>
  import("../Components/landing/ScrollProgress.jsx")
);

const TestimonialsSection = lazy(() =>
  import("./home/TestimonialsSection.jsx")
);

const IndustriesStackSection = lazy(() =>
  import("./home/IndustriesStackSection.jsx")
);

const StatCounter = lazy(() =>
  import("../Components/landing/StatCounter")
);

/* 
   ASSETS
 */

import heroBgPath from "../assets/hero-bg.webp";
import teamLabPath from "../assets/team-lab.webp";
import hero from "../assets/2.webp";

import services1 from "../assets/services1.webp";
import services2 from "../assets/services2.webp";
import services3 from "../assets/services3.webp";
import services4 from "../assets/services4.webp";
import services5 from "../assets/services5.webp";
import services6 from "../assets/services6.webp";
import services7 from "../assets/services7.webp";
import services8 from "../assets/services8.webp";
import services9 from "../assets/services9.webp";

import work1 from "../assets/work1.webp";
import work2 from "../assets/work2.webp";
import work3 from "../assets/work3.webp";

/* 
   LOADER
 */

const SectionLoader = () => {
  return (
    <div className="w-full flex items-center justify-center py-20">
      <div className="relative w-14 h-14">

        <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20" />

        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-blue-500 animate-spin" />

      </div>
    </div>
  );
};

/* 
   FORM SCHEMA
 */

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

/* 
   DATA
 */

const services = [
  {
    title: "Web & App Engineering",
    icon: services1,
    desc: "High-performance platforms on Next.js, React, and Laravel.",
    tags: ["Next.js", "React", "Laravel"],
  },

  {
    title: "Mobile Ecosystems",
    icon: services2,
    desc: "Native iOS, Android, and Flutter applications.",
    tags: ["Flutter", "iOS", "Android"],
  },

  {
    title: "eCommerce Engineering",
    icon: services3,
    desc: "Headless storefronts with speed and conversion optimization.",
    tags: ["Shopify", "Woo", "Magento"],
  },

  {
    title: "Growth & Performance",
    icon: services4,
    desc: "SEO, Meta Ads, Google Ads, and CRO systems.",
    tags: ["SEO", "Paid", "CRO"],
  },

  {
    title: "Cloud, DevOps & Security",
    icon: services5,
    desc: "AWS, Azure, Docker, Kubernetes, CI/CD pipelines.",
    tags: ["AWS", "K8s", "DevSecOps"],
  },

  {
    title: "Cyber Security & MDR",
    icon: services6,
    desc: "Managed SOC, penetration testing, and compliance.",
    tags: ["SOC", "Pen-Test", "GRC"],
  },

  {
    title: "AI & Automation Pods",
    icon: services7,
    desc: "AI copilots, automation workflows, and LLM systems.",
    tags: ["LLMs", "RPA", "Agents"],
  },

  {
    title: "Personal AI Development",
    icon: services8,
    desc: "Private AI assistants and RAG-based workflows.",
    tags: ["Assistants", "RAG", "Private"],
  },

  {
    title: "Custom Web Software",
    icon: services9,
    desc: "Enterprise dashboards, CRMs, and custom SaaS.",
    tags: ["CRM", "Dashboards", "Portals"],
  },
];

const work = [
  {
    name: "DealZen",
    tag: "Property CRM SaaS",
    desc: "Role-based property CRM with WhatsApp API.",
    chips: ["PHP", "MySQL", "Bootstrap"],
    icon: work3,
  },

  {
    name: "Tuwix",
    tag: "WhatsApp Cloud API",
    desc: "Messaging platform with campaigns and analytics.",
    chips: ["Flutter", "Node", "Meta API"],
    icon: work2,
  },

  {
    name: "Yavi Solar",
    tag: "Lead Engine",
    desc: "Solar lead engine with analytics dashboard.",
    chips: ["SEO", "Meta Ads", "Analytics"],
    icon: work1,
  },
];

const process = [
  {
    num: "01",
    title: "Discover",
    icon: Compass,
    desc: "Audit, KPIs, and lean execution roadmap.",
  },

  {
    num: "02",
    title: "Design",
    icon: LayoutGrid,
    desc: "UX flows, UI systems, and responsive design.",
  },

  {
    num: "03",
    title: "Build",
    icon: Code2,
    desc: "Agile sprints, CI/CD, and secure architecture.",
  },

  {
    num: "04",
    title: "Grow",
    icon: Rocket,
    desc: "SEO, ads, CRO, and analytics optimization.",
  },
];

const industries = [
  "SMBs",
  "Healthcare",
  "Energy",
  "EduTech",
  "Real Estate",
  "Retail",
  "D2C",
  "Manufacturing",
];

const certifications = [
  "ISO 9001:2015",
  "MSME Registered",
  "Google Partner",
  "Meta Business Partner",
];

/* 
   HOMEPAGE
 */

export default function Homepage() {
  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);

  const rotateX = useTransform(
    mouseY,
    [-300, 300],
    [10, -10]
  );

  const rotateY = useTransform(
    mouseX,
    [-300, 300],
    [-10, 10]
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(
        e.clientX - window.innerWidth / 2
      );

      mouseY.set(
        e.clientY - window.innerHeight / 2
      );
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);




  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* Scroll Progress */}
      <Suspense fallback={null}>
        <ScrollProgress />
      </Suspense>

      {/* Ambient Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grad-mesh" />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-noise opacity-[0.06]" />

      <main id="top">

        {/* HERO */}
        <Suspense fallback={<SectionLoader />}>
          <HeroSection
            heroBgPath={heroBgPath}
            hero={hero}
            teamLabPath={teamLabPath}
            rotateX={rotateX}
            rotateY={rotateY}
          />
        </Suspense>

        {/* TECH STACK */}
        <Suspense fallback={<SectionLoader />}>
          <TechStackSection />
        </Suspense>

        {/* STATS */}
        <section className="py-20 md:py-24 bg-[#1A202C] text-white relative">

          <div className="container mx-auto px-5 md:px-10">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-12">

              <Suspense fallback={<SectionLoader />}>
                <StatCounter
                  value={120}
                  suffix="+"
                  label="Digital Launches"
                />

                <StatCounter
                  value={98}
                  suffix="%"
                  label="On-Time Delivery"
                />

                <StatCounter
                  value={9}
                  suffix="+ Yrs"
                  label="Experience"
                />

                <StatCounter
                  value={4.9}
                  decimals={1}
                  suffix="/5"
                  label="Client Satisfaction"
                />
              </Suspense>

            </div>

          </div>

        </section>

        {/* SERVICES */}
        <Suspense fallback={<SectionLoader />}>
          <ServicesSection
            services={services}
            industries={industries}
          />
        </Suspense>

        {/* WORK */}
        <Suspense fallback={<SectionLoader />}>
          <WorkSection work={work} />
        </Suspense>

        {/* PROCESS */}
        <Suspense fallback={<SectionLoader />}>
          <ProcessSection
            certifications={certifications}
            process={process}
          />
        </Suspense>

        {/* INDUSTRIES */}
        <Suspense fallback={<SectionLoader />}>
          <IndustriesStackSection />
        </Suspense>

        {/* TESTIMONIALS */}
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
        </Suspense>

        {/* FAQ */}
        <Suspense fallback={<SectionLoader />}>
          <FAQSection />
        </Suspense>

        {/* CONTACT */}
        <Suspense fallback={<SectionLoader />}>
          <ContactForm/>
        </Suspense>

      </main>
    </div>
  );
}