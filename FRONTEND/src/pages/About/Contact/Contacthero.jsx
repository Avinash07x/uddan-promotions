import { motion } from "framer-motion";
import { Send, Calendar, ShieldCheck, Users } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="bg-[#0B1220] text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/*  LEFT  */}
        <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-10 shadow-xl">

          {/* Tag */}
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
            Response in under 24 hours
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Let’s co-create your next{" "}
            <span className="text-blue-400">growth leap</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-white/70 text-lg max-w-xl">
            Tell us about your product, marketing, or automation goals. Our
            senior consultants review every enquiry and craft a roadmap—
            strategy, timelines, resourcing, and investment clarity.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <Users className="text-blue-400 mb-2" />
              <h4 className="font-semibold">Dedicated success team</h4>
              <p className="text-white/60 text-sm">
                Founders + delivery lead on every kickoff call.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <ShieldCheck className="text-blue-400 mb-2" />
              <h4 className="font-semibold">Security-first delivery</h4>
              <p className="text-white/60 text-sm">
                Secure SDLC, NDA-ready, with compliance guidance.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition shadow-lg">
              <Send size={16} />
              Share your project
            </button>

            <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition">
              <Calendar size={16} />
              Book a 30-min call
            </button>
          </div>
        </div>

        {/*  RIGHT  */}
        <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-8 shadow-xl">

          <h3 className="text-lg font-semibold mb-6 text-white/80">
            What happens next?
          </h3>

          {/* Steps */}
          <div className="space-y-6">
            {[
              {
                title: "Discovery within 1 business day",
                desc: "A strategist connects to align on goals, timeline and stakeholders.",
              },
              {
                title: "Solution blueprint",
                desc: "Tailored execution plan with milestones, squads and commercials.",
              },
              {
                title: "Kickoff with next steps",
                desc: "Sprint zero, onboarding docs and implementation begins.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex gap-4"
              >
                {/* Number */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-sm font-bold">
                  {i + 1}
                </div>

                {/* Content */}
                <div>
                  <h4 className="font-semibold">{step.title}</h4>
                  <p className="text-white/60 text-sm mt-1">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            {[
              { value: "250+", label: "projects delivered" },
              { value: "94%", label: "client retention" },
              { value: "9 yrs", label: "digital growth" },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-lg p-4"
              >
                <h4 className="text-lg font-bold text-blue-400">
                  {s.value}
                </h4>
                <p className="text-xs text-white/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}