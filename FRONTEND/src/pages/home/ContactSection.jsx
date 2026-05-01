import {
  Phone,
  Mail,
  MapPin,
  Globe2,
  Send,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../../Components/landing/SectionHeading.jsx";

export default function ContactSection({ form, onSubmit }) {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden bg-[#0B1220]"
    >
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-purple-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
      </div>

      <div className="container mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Let's Build"
              title={
                <>
                  Have a project in mind? <br />
                  <span className="text-gradient-warm">
                    Get a free scope within 24 hours.
                  </span>
                </>
              }
              description="Custom SaaS, apps, or growth — our team is ready."
            />

            {/* Contact Info */}
            <div className="mt-10 space-y-4">
              {[
                {
                  icon: Phone,
                  label: "Hotline",
                  value: "+91-86190-36818",
                  href: "tel:+918619036818",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "contact@uddanpromotions.com",
                  href: "mailto:contact@uddanpromotions.com",
                },
                {
                  icon: MapPin,
                  label: "Locations",
                  isLocation: true,
                  locations: [
                    {
                      name: "Bikaner",
                      link: "https://www.google.com/maps?q=Bikaner+Rajasthan",
                    },
                    {
                      name: "Jaipur",
                      link: "https://www.google.com/maps?q=Jaipur+Rajasthan",
                    },
                    {
                      name: "Mumbai",
                      link: "https://www.google.com/maps?q=Mumbai+Maharashtra",
                    },
                    {
                      name: "Italy",
                      link: "https://www.google.com/maps?q=Italy",
                    },
                    {
                      name: "Global",
                      link: "https://www.google.com/maps",
                    },
                    {
                      name: "Serving Worldwide",
                      link: "https://www.google.com/maps",
                    },
                  ],
                },
                {
                  icon: Globe2,
                  label: "Working Hours",
                  value: "Mon–Fri 9AM–6PM",
                },
              ].map((c) => {
                const Icon = c.icon;

                return (
                  <div
                    key={c.label}
                    className="flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-400/40 transition group"
                  >
                    <div className="w-11 h-11 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div>
                      <p className="text-xs text-white/40 uppercase">
                        {c.label}
                      </p>

                      {/* ✅ Locations clickable */}
                      {c.isLocation ? (
                        <div className="flex flex-wrap gap-2 mt-1">
                          {c.locations.map((loc, i) => (
                            <a
                              key={i}
                              href={loc.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-white hover:text-cyan-400 transition"
                            >
                              {loc.name}
                              {i !== c.locations.length - 1 && " •"}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <a
                          href={c.href || "#"}
                          className="text-white text-sm font-medium hover:text-cyan-400"
                        >
                          {c.value}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918619036818"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-green-500 text-black font-semibold hover:scale-105 transition"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-10 shadow-2xl"
            >
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
              >
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <InputField label="Full Name" {...form.register("name")} />
                  <InputField label="Email" {...form.register("email")} />
                </div>

                {/* Company + Phone */}
                <div className="grid md:grid-cols-2 gap-5">
                  <InputField label="Company" {...form.register("company")} />
                  <InputField label="Phone" {...form.register("phone")} />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs text-white/50 uppercase mb-2 block">
                    Project Brief
                  </label>
                  <textarea
                    {...form.register("message")}
                    className="w-full min-h-[140px] rounded-xl bg-white/5 border border-white/10 p-4 text-white focus:border-cyan-400 outline-none transition"
                    placeholder="Describe your project..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>

                <p className="text-xs text-white/40 text-center">
                  We reply within 24 hours 🚀
                </p>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* 🔥 Reusable Input */
function InputField({ label, ...props }) {
  return (
    <div>
      <label className="text-xs text-white/50 uppercase mb-2 block">
        {label}
      </label>
      <input
        {...props}
        className="w-full h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-white focus:border-cyan-400 outline-none transition"
      />
    </div>
  );
}