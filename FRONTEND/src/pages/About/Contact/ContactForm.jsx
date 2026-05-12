import {
  Send,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

export default function ContactForm() {
  const [options, setOptions] =
    useState(null);

  const [companyInfo, setCompanyInfo] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      name: "",
      company: "",
      email: "",
      phone: "",
      helpType: "",
      budget: "",
      targetGoLive: "",
      preferredContact: "",
      bestTime: "",
      message: "",
      keepUpdated: false,
    });

  useEffect(() => {
    fetchOptions();
    fetchCompanyInfo();
  }, []);

  /* ================= FETCH OPTIONS ================= */

  const fetchOptions =
    async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/contact/options"
        );

        const data =
          await res.json();

        if (data.success) {
          setOptions(data.options);
        }
      } catch (error) {
        console.log(error);
      }
    };

  /* ================= FETCH COMPANY INFO ================= */

  const fetchCompanyInfo =
    async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/company-info"
        );

        const data =
          await res.json();

        if (data.success) {
          setCompanyInfo(data.info);
        }
      } catch (error) {
        console.log(error);
      }
    };

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    });
  };

  /* ================= SUBMIT ================= */

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        setLoading(true);

        const res = await fetch(
          "http://localhost:5000/api/contact",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              formData
            ),
          }
        );

        const data =
          await res.json();

        if (data.success) {
          alert(
            "Inquiry Submitted 🚀"
          );

          setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            helpType: "",
            budget: "",
            targetGoLive: "",
            preferredContact: "",
            bestTime: "",
            message: "",
            keepUpdated: false,
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <section
      id="ContactForm"
      className="bg-[#0B1220] text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-5xl font-bold">
            Tell us about your project
          </h2>

          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Fill in the form and
            we’ll return with a
            personalised action plan.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* ================= FORM ================= */}

          <form
            onSubmit={
              handleSubmit
            }
            className="md:col-span-2 bg-[#0f172a] border border-white/10 rounded-2xl p-8 shadow-xl"
          >

            <div className="grid md:grid-cols-2 gap-4">

              <Input
                label="Full Name"
                name="name"
                value={
                  formData.name
                }
                onChange={
                  handleChange
                }
              />

              <Input
                label="Company"
                name="company"
                value={
                  formData.company
                }
                onChange={
                  handleChange
                }
              />

              <Input
                label="Email"
                name="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
              />

              <Input
                label="Phone"
                name="phone"
                value={
                  formData.phone
                }
                onChange={
                  handleChange
                }
              />

              <Select
                label="How can we help?"
                name="helpType"
                value={
                  formData.helpType
                }
                onChange={
                  handleChange
                }
                options={
                  options?.helpOptions
                }
              />

              <Select
                label="Estimated Budget"
                name="budget"
                value={
                  formData.budget
                }
                onChange={
                  handleChange
                }
                options={
                  options?.budgetOptions
                }
              />

              <Select
                label="Target Go Live"
                name="targetGoLive"
                value={
                  formData.targetGoLive
                }
                onChange={
                  handleChange
                }
                options={
                  options?.goLiveOptions
                }
              />

              <Select
                label="Preferred Contact"
                name="preferredContact"
                value={
                  formData.preferredContact
                }
                onChange={
                  handleChange
                }
                options={
                  options?.preferredContactOptions
                }
              />

              <Select
                label="Best Time"
                name="bestTime"
                value={
                  formData.bestTime
                }
                onChange={
                  handleChange
                }
                options={
                  options?.bestTimeOptions
                }
              />

            </div>

            {/* MESSAGE */}

            <div className="mt-5">

              <label className="text-sm text-white/70">
                Project Details
              </label>

              <textarea
                name="message"
                value={
                  formData.message
                }
                onChange={
                  handleChange
                }
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full mt-2 p-4 rounded-xl bg-[#020617] border border-white/10 text-white outline-none focus:border-blue-400"
              />

            </div>

            {/* CHECKBOX */}

            <div className="mt-4 flex items-center gap-2 text-sm text-white/60">

              <input
                type="checkbox"
                name="keepUpdated"
                checked={
                  formData.keepUpdated
                }
                onChange={
                  handleChange
                }
              />

              Keep me updated with
              case studies

            </div>

            {/* BUTTON */}

            <button
              disabled={loading}
              className="mt-6 bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-xl flex items-center gap-2"
            >

              <Send size={18} />

              {loading
                ? "Submitting..."
                : "Submit Inquiry"}

            </button>

          </form>

          {/* ================= CONTACT CARD ================= */}

          <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-xl">

            <h3 className="text-lg font-semibold mb-6 text-white/80">
              Direct contact
            </h3>

            {/* PHONE */}

            <div className="flex gap-3 mb-5">

              <Phone
                className="text-blue-400"
                size={18}
              />

              <div>

                <p className="text-sm text-white/60">
                  Call
                </p>

                <a
                  href={`tel:${companyInfo?.phone}`}
                  className="font-semibold text-blue-400 hover:underline"
                >
                  {companyInfo?.phone}
                </a>

              </div>

            </div>

            {/* EMAIL */}

            <div className="flex gap-3 mb-5">

              <Mail
                className="text-blue-400"
                size={18}
              />

              <div>

                <p className="text-sm text-white/60">
                  Email
                </p>

                <a
                  href={`mailto:${companyInfo?.email}`}
                  className="text-blue-400 hover:underline"
                >
                  {companyInfo?.email}
                </a>

              </div>

            </div>

            {/* LOCATION */}

            <div className="flex gap-3 mb-5">

              <MapPin
                className="text-blue-400"
                size={18}
              />

              <div>

                <p className="text-sm text-white/60">
                  Presence
                </p>

                <div className="flex flex-wrap gap-2 mt-1">

                  {companyInfo?.locations?.map(
                    (
                      loc,
                      index
                    ) => (
                      <a
                        key={index}
                        href={
                          loc.mapLink
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/70 text-sm hover:text-blue-400 transition"
                      >
                        {loc.name}
                      </a>
                    )
                  )}

                </div>

              </div>

            </div>

            {/* ASSURANCE */}

            <div className="mt-6 text-sm text-white/60 space-y-2">

              <p>
                ✔ ISO-aligned
                security controls &
                NDAs
              </p>

              <p>
                ✔ Weekly demos with
                transparency
              </p>

              <p>
                ✔ Founders + experts
                on every project
              </p>

            </div>

            {/* HELP BOX */}

            <div className="mt-6 bg-white/5 border border-white/10 rounded-lg p-4 text-sm text-white/60">

              Need help with an
              ongoing project?

              <br />

              <a
                href={`mailto:${companyInfo?.email}`}
                className="text-blue-400 hover:underline"
              >
                {companyInfo?.email}
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= INPUT ================= */

function Input({
  label,
  name,
  value,
  onChange,
}) {
  return (
    <div>

      <label className="text-sm text-white/70">
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-2 p-3 rounded-lg bg-[#020617] border border-white/10 text-white placeholder:text-white/40 outline-none focus:border-blue-400"
      />

    </div>
  );
}

/* ================= SELECT ================= */

function Select({
  label,
  name,
  value,
  onChange,
  options = [],
}) {
  return (
    <div>

      <label className="text-sm text-white/70">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full mt-2 p-3 rounded-lg bg-[#020617] border border-white/10 text-white outline-none focus:border-blue-400"
      >

        <option value="">
          Select
        </option>

        {options.map(
          (item, index) => (
            <option
              key={index}
              value={item}
            >
              {item}
            </option>
          )
        )}

      </select>

    </div>
  );
}