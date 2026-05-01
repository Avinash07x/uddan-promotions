import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Bot,
  ChevronRight,
  Cloud,
  Code2,
  Compass,
  Globe2,
  LayoutGrid,
  Mail,
  MapPin,
  Menu,
  Phone,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Smartphone,
  TrendingUp,
  X,
  CheckCircle2,
  Send,
  Contact,
} from "lucide-react";
import services1 from "../assets/services1.jpg";
import services2 from "../assets/services2.jpg";
import services3 from "../assets/services3.jpg";
import services4 from "../assets/services4.jpg";
import services5 from "../assets/services5.jpg";
import services6 from "../assets/services6.jpg";
import services7 from "../assets/services7.jpg";
import services8 from "../assets/services8.jpg";
import services9 from "../assets/services9.jpg";
import work1 from "../assets/work1.jpg";
import work2 from "../assets/work2.webp";
import work3 from "../assets/work3.jpg";
import { useMotionValue, useTransform } from "framer-motion";
import { Button } from "../Components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card.jsx";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "../Components/ui/accordion.jsx";
import { Badge } from "../components/ui/badge.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "../components/ui/form";
import { useToast } from "@/hooks/use-toast";
import heroBgPath from "../assets/hero-bg.png";
import teamLabPath from "../assets/team-lab.png";
import hero from "../assets/2.png";
import ScrollProgress from "../components/landing/ScrollProgress";
import StatCounter from "../components/landing/StatCounter";
import SectionHeading from "../components/landing/SectionHeading";
import RotatingWord from "../components/landing/RotatingWord";
import TiltCard from "../components/landing/TiltCard";
import TestimonialMarquee from "../components/landing/TestimonialMarquee";
import FloatingOrbs from "../Components/landing/FloatingOrbs.jsx";
import WorkSection from "../pages/home/WorkSection.jsx";
import ServicesSection from "../pages/home/ServicesSection.jsx";
import ProcessSection from "../pages/home/ProcessSection.jsx";
import FAQSection from "../pages/home/FAQSection.jsx";
import ContactSection from "../pages/home/ContactSection.jsx";
import Footer from "../Components/Footer.jsx";
import HeroSection from "../pages/home/HeroSection.jsx";
import TechStackSection from "./home/TechStackSection.jsx";

const formSchema = z.object({
  name: z.string().min(2, "Please share your name"),
  email: z.string().email("Enter a valid work email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Tell us a bit more (10+ characters)"),
});

const services = [
  {
    title: "Web & App Engineering",
    icon: services1,
    desc: "High-performance platforms on Next.js, React, and Laravel — architected for scale, observability, and a measurable lift in Core Web Vitals.",
    tags: ["Next.js", "React", "Laravel"],
  },
  {
    title: "Mobile Ecosystems",
    icon: services2,
    desc: "Native iOS, Android, and cross-platform Flutter apps with offline sync, deep linking, and an App/Play Store launch playbook.",
    tags: ["Flutter", "iOS", "Android"],
  },
  {
    title: "eCommerce Engineering",
    icon: services3,
    desc: "Headless storefronts on Shopify, WooCommerce, and Magento — speed, conversion, and global payments engineered into every pixel.",
    tags: ["Shopify", "Woo", "Magento"],
  },
  {
    title: "Growth & Performance",
    icon:services4,
    desc: "Technical SEO, Meta and Google Ads, and CRO sprints. We engineer customer acquisition like a product, not a campaign.",
    tags: ["SEO", "Paid", "CRO"],
  },
  {
    title: "Cloud, DevOps & Security",
    icon: services5,
    desc: "AWS, Azure, Docker, Kubernetes — landing zones, CI/CD, observability, FinOps, and zero-trust security baselines from day one.",
    tags: ["AWS", "K8s", "DevSecOps"],
  },
  {
    title: "Cyber Security & MDR",
    icon: services6,
    desc: "Managed SOC playbooks, pen tests, and zero-trust roadmaps. Compliance automation that survives real audits, not just checklists.",
    tags: ["SOC", "Pen-Test", "GRC"],
  },
  {
    title: "AI & Automation Pods",
    icon: services7,
    desc: "Generative copilots, chatbots, process orchestration, and secure data pipelines that compound your team's operational output.",
    tags: ["LLMs", "RPA", "Agents"],
  },
  {
    title: "Personal AI Development",
    icon: services8,
    desc: "Custom AI assistants tuned to your knowledge base, workflows, and tone — private by default, surprising in capability.",
    tags: ["Assistants", "RAG", "Private"],
  },
  {
    title: "Custom Web Software",
    icon: services9,
    desc: "From CRMs to dashboards: secure, role-based, multi-tenant systems built to be lived in, not just delivered.",
    tags: ["CRM", "Dashboards", "Portals"],
  },
];
const techStack = [
  "React",
  "Next.js",
  "Vue",
  "Flutter",
  "iOS",
  "Android",
  "Laravel",
  "Node.js",
  "NestJS",
  "Python",
  "GraphQL",
  "REST",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "BigQuery",
  "Power BI",
  "Looker",
  "AWS",
  "Azure",
  "DigitalOcean",
  "Docker",
  "Kubernetes",
];
const work = [
  {
    name: "DealZen",
    tag: "Property CRM SaaS",
    desc: "Role-based property CRM with WhatsApp API, IVR, and lead funnels powering high-velocity real-estate teams.",
    chips: ["PHP", "MySQL", "Bootstrap"],
    gradient: "from-[hsl(var(--violet))]/35 via-[hsl(var(--primary))]/20 to-transparent",
    icon: work3,
  },
  {
    name: "Tuwix",
    tag: "WhatsApp Cloud API",
    desc: "Messaging platform built on Meta Cloud API with templated campaigns, broadcast queues, and delivery analytics.",
    chips: ["Flutter", "Node", "Meta API"],
    gradient: "from-[hsl(var(--cyan))]/30 via-[hsl(var(--violet))]/20 to-transparent",
    icon: work2,
  },
  {
    name: "Yavi Solar",
    tag: "Lead Engine",
    desc: "High-intent solar lead engine via creative testing, landing pages, and a closed-loop analytics dashboard.",
    chips: ["SEO", "Meta Ads", "Analytics"],
    gradient: "from-[hsl(var(--primary))]/35 via-[hsl(20_95%_60%)]/20 to-transparent",
    icon: work1,
  },
];
const process = [
  {
    num: "01",
    title: "Discover",
    icon: Compass,
    desc: "Audit, goals, KPIs, and a lean roadmap. Alignment before execution — never the other way around.",
  },
  {
    num: "02",
    title: "Design",
    icon: LayoutGrid,
    desc: "UX flows, wireframes, and a UI library. Accessibility and responsiveness baked in, not bolted on.",
  },
  {
    num: "03",
    title: "Build",
    icon: Code2,
    desc: "Agile sprints, CI/CD, code reviews, and security best practices. Engineered to handle real load.",
  },
  {
    num: "04",
    title: "Grow",
    icon: Rocket,
    desc: "SEO, ads, and CRO with dashboards so you see ROI clearly — and we keep optimising long after go-live.",
  },
];
const testimonials = [
  {
    name: "Aparna Mishra",
    role: "CMO",
    company: "Northwind Wellness",
    city: "Gurugram, India",
    quote: "Uddan translated our growth targets into a patient acquisition engine. Dashboards, automations, and landing pages were delivered ahead of schedule.",
  },
  {
    name: "Lina Capaldi",
    role: "VP Marketing",
    company: "BluePeak Mobility",
    city: "Milan, Italy",
    quote: "The localisation and SEO playbooks lifted organic leads in three languages. Weekly stand-ups made collaboration across time zones effortless.",
  },
  {
    name: "Saurabh Jain",
    role: "Product Head",
    company: "LedgerPay",
    city: "Mumbai, India",
    quote: "Security reviews, release automation, and UX polish — everything we needed for our RBI audit was handled with zero escalations.",
  },
  {
    name: "Emily Carter",
    role: "Director of Digital",
    company: "Harbor & Co.",
    city: "London, United Kingdom",
    quote: "We saw a 46% jump in qualified enquiries after the CRO sprints. Their documentation empowered our internal team to stay agile.",
  },
  {
    name: "Yashveer Singh",
    role: "CTO",
    company: "AgriGrid",
    city: "Hyderabad, India",
    quote: "Their engineers embedded with our squad to deliver a resilient farmer app with offline sync. Code reviews and DevOps pipelines were top-notch.",
  },
  {
    name: "Thomas Müller",
    role: "Digital Director",
    company: "Schloss & Bauer",
    city: "Munich, Germany",
    quote: "Headless commerce migration delivered zero downtime and a 28% uplift in mobile conversions. Their QA discipline is impressive.",
  },
  {
    name: "Fatima Noor",
    role: "Head of Growth",
    company: "Saffron Commerce",
    city: "Dubai, UAE",
    quote: "Dynamic merchandising, marketplace integrations, and retention flows increased our repeat purchase rate by 38%.",
  },
  {
    name: "Dmitri Orlov",
    role: "CIO",
    company: "Baltic Logistics",
    city: "Riga, Latvia",
    quote: "We modernised legacy portals without downtime. Cloud cost governance and observability dashboards keep our ops team proactive.",
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
  "Hospitality",
  "SaaS",
];
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
const certifications = [
  "ISO 9001:2015",
  "MSME Registered",
  "NASSCOM Community",
  "Google Partner",
  "Meta Business Partner",
  "Trustpilot 4.9",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};
const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
export default function Homepage() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Rotate based on mouse
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });
  function onSubmit(_values) {
    toast({
      title: "Brief received",
      description: "Thanks — we'll reply with a tailored scope and timeline within 24 hours.",
    });
    form.reset();
  }
  return (<div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans relative">
    <ScrollProgress />

    {/* Ambient background ornaments */}
    <div className="pointer-events-none fixed inset-0 -z-10 bg-grad-mesh" />
    <div className="pointer-events-none fixed inset-0 -z-10 bg-noise opacity-[0.06]" />
    <main id="top">
      {/* ===== Hero ===== */}
      <HeroSection heroBgPath={heroBgPath} hero={hero} teamLabPath={teamLabPath} />

      <TechStackSection />

      {/* ===== Stats ===== */}
      <section id="stats" className="py-20 md:py-24 bg-[#1A202C] text-white relative">
        <div className="container mx-auto px-5 md:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-12">
            <StatCounter value={120} suffix="+" label="Digital Launches" />
            <StatCounter value={98} suffix="%" label="On-Time Delivery" />
            <StatCounter value={9} suffix="+ Yrs" label="Of Building Together" />
            <StatCounter value={4.9} decimals={1} suffix="/5" label="Client Satisfaction" />
            <StatCounter value={93} suffix="%" label="Client Retention YoY" />
            <StatCounter value={64} prefix="+" label="Net Promoter Score" />
            <StatCounter value={15} suffix="M" label="Avg Incident Response" />
            <StatCounter value={18} label="Industries Served" />
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}

      <ServicesSection services={services} industries={industries} />

      {/* ===== Selected Work ===== */}

      <WorkSection work={work} />

      {/* ===== Process ===== */}

      <ProcessSection certifications={certifications} process={process} />

      {/* ===== Testimonials ===== */}
      <section className="py-24 md:py-32 bg-[#0F172A] overflow-hidden">
        <div className="container mx-auto px-5 md:px-10">

          <SectionHeading
            eyebrow="What Partners Say"
            title={
              <>
                Trusted by ambitious teams <br />
                <span className="text-gradient-warm">
                  across India & EU.
                </span>
              </>
            }
            description="4.9 average rating across 23 verified partner reviews · 99% projects delivered on time."
            align="center"
            className="mb-14 md:mb-20"
          />

          <div className="space-y-6">

            {/* LEFT → RIGHT */}
            <TestimonialMarquee
              items={testimonials.slice(0, 4)}
            />

            {/* RIGHT → LEFT (FIXED) */}
            <TestimonialMarquee
              items={testimonials.slice(4)}
              reverse={true}
            />

          </div>

        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FAQSection faqs={faqs} />

      {/* ===== Contact ===== */}
      <ContactSection toast={toast} form={form} onSubmit={onSubmit} />
    </main>
  </div>);
}
