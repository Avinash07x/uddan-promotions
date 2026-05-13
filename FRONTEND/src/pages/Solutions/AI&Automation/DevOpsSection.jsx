import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  Search,
  GitBranch,
  Activity,
  Code,
  Server,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

//  DATA 
const phases = [
  {
    title: "Assess",
    desc: "Delivery audits, toolchain mapping and ROI modelling.",
    icon: Search,
  },
  {
    title: "Automate",
    desc: "CI/CD pipelines, IaC modules and security automation.",
    icon: GitBranch,
  },
  {
    title: "Operate",
    desc: "SRE playbooks, observability and continuous optimisation.",
    icon: Activity,
  },
];

const services = [
  {
    title: "CI/CD Implementation",
    desc: "Automated builds, tests and deployments using GitOps.",
    icon: Code,
  },
  {
    title: "Infrastructure as Code",
    desc: "Terraform, Pulumi and CloudFormation templates.",
    icon: Server,
  },
  {
    title: "Observability & SRE",
    desc: "Monitoring, alerting and SLO dashboards.",
    icon: BarChart3,
  },
  {
    title: "DevSecOps Automation",
    desc: "Security scanning and compliance automation.",
    icon: ShieldCheck,
  },
];

//  COMPONENT 
export default function DevOpsSection() {
  const sectionRef = useRef(null);
  const phaseRef = useRef([]);
  const serviceRef = useRef([]);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // phases animation
      phaseRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 70 },
          {
            opacity: 1,
            y: 0,
            delay: i * 0.15,
            duration: 0.7,
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });

      // pipeline line animation
      gsap.fromTo(
        lineRef.current,
        { width: "0%" },
        {
          width: "100%",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 90%",
          },
        }
      );

      // services animation
      serviceRef.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            delay: i * 0.12,
            duration: 0.7,
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020617] text-white py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* glow */}
      <div className="absolute top-[-100px] left-[30%] w-[500px] h-[350px] bg-green-500/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/*  HEADER  */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-green-400 text-sm mb-3">
            Performance-led automation frameworks
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            DevOps Enablement{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Blueprint
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            Accelerate delivery with cloud-native automation and reliability practices.
          </p>
        </div>

        {/*  PHASES  */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">

          {/* pipeline line */}
          <div
            ref={lineRef}
            className="hidden lg:block absolute top-[-25px] left-0 h-[2px] bg-gradient-to-r from-green-400 to-cyan-400"
          />

          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={i}
                ref={(el) => (phaseRef.current[i] = el)}
                whileHover={{ y: -6, scale: 1.03 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400/40 transition"
              >
                <Icon className="text-green-400 mb-4" size={28} />
                <h3 className="font-semibold text-lg">
                  {phase.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  {phase.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/*  SERVICES  */}
        <div className="mt-24">
          <h3 className="text-2xl md:text-4xl font-bold text-center">
            DevOps & Automation Services
          </h3>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  ref={(el) => (serviceRef.current[i] = el)}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400/40 transition"
                >
                  <Icon className="text-green-400 mb-4" size={26} />
                  <h4 className="font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm mt-2">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}