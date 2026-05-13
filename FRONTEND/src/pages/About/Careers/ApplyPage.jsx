import React, {
  useState,
} from "react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import {
  ArrowLeft,
  Upload,
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  GraduationCap,
  Building2,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const API =
  "http://localhost:5000";

export default function ApplyPage() {
  const navigate =
    useNavigate();

  const location =
    useLocation();

  const job =
    location.state?.job;

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      phone: "",
      experience: "",
      coverLetter: "",
      resume: null,
    });

  /*  REDIRECT IF NO JOB  */

  if (!job) {
    return (
      <div className="min-h-screen bg-[#020617] text-white flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            Job Not Found
          </h2>

          <button
            onClick={() =>
              navigate("/careers")
            }
            className="mt-6 px-6 py-3 rounded-2xl bg-cyan-500 text-black font-semibold"
          >
            Back To Careers
          </button>
        </div>
      </div>
    );
  }

  /*  INPUT CHANGE  */

  const handleChange = (
    e
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  /*  FILE CHANGE  */

  const handleFileChange = (
    e
  ) => {
    const file =
      e.target.files[0];

    if (!file) return;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (
      !allowedTypes.includes(
        file.type
      )
    ) {
      return alert(
        "Only PDF/DOC/DOCX files allowed"
      );
    }

    if (
      file.size >
      5 * 1024 * 1024
    ) {
      return alert(
        "File size must be below 5MB"
      );
    }

    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  /*  SUBMIT  */

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    if (
      !formData.resume
    ) {
      return alert(
        "Please upload resume"
      );
    }

    try {
      setLoading(true);

      const data =
        new FormData();

      data.append(
        "fullName",
        formData.fullName
      );

      data.append(
        "email",
        formData.email
      );

      data.append(
        "phone",
        formData.phone
      );

      data.append(
        "experience",
        formData.experience
      );

      data.append(
        "coverLetter",
        formData.coverLetter
      );

      data.append(
        "resume",
        formData.resume
      );

      data.append(
        "jobId",
        job._id
      );

      const res =
        await fetch(
          `${API}/api/application`,
          {
            method: "POST",
            body: data,
          }
        );

      const result =
        await res.json();

      if (!res.ok) {
        return alert(
          result.message ||
            "Application failed"
        );
      }

      if (
        result.success
      ) {
        setSuccess(true);

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          experience: "",
          coverLetter: "",
          resume: null,
        });

        setTimeout(() => {
          navigate(
            "/careers"
          );
        }, 2500);
      }
    } catch (error) {
      console.log(error);

      alert(
        "Server Error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden relative">

      {/* BG EFFECT */}

      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative px-4 py-10 sm:px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          {/* BACK */}

          <button
            onClick={() =>
              navigate(-1)
            }
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition mb-8"
          >
            <ArrowLeft size={18} />

            Back
          </button>

          {/* SUCCESS */}

          {success && (
            <motion.div
              initial={{
                opacity: 0,
                y: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="mb-8 rounded-3xl border border-green-500/20 bg-green-500/10 p-6 flex items-center gap-4"
            >
              <CheckCircle2 className="text-green-400" />

              <div>
                <h3 className="font-bold text-green-400">
                  Application Submitted
                </h3>

                <p className="text-white/70 text-sm">
                  Your application
                  has been sent
                  successfully.
                </p>
              </div>
            </motion.div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">

            {/*  LEFT  */}

            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 h-fit sticky top-10"
            >

              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
                <Sparkles size={15} />

                Apply Now
              </span>

              <h1 className="mt-6 text-4xl sm:text-5xl font-black leading-tight">
                {job.title}
              </h1>

              <p className="mt-4 text-gray-400 leading-relaxed">
                {
                  job.description
                }
              </p>

              {/* INFO */}

              <div className="mt-8 space-y-4">

                <InfoItem
                  icon={
                    <Building2
                      size={18}
                    />
                  }
                  text={
                    job.department
                  }
                />

                <InfoItem
                  icon={
                    <MapPin
                      size={18}
                    />
                  }
                  text={
                    job.location
                  }
                />

                <InfoItem
                  icon={
                    <DollarSign
                      size={18}
                    />
                  }
                  text={
                    job.salary
                  }
                />

                <InfoItem
                  icon={
                    <Clock
                      size={18}
                    />
                  }
                  text={
                    job.experience
                  }
                />

                <InfoItem
                  icon={
                    <Briefcase
                      size={18}
                    />
                  }
                  text={job.type}
                />

                <InfoItem
                  icon={
                    <Users
                      size={18}
                    />
                  }
                  text={`${job.openings} Openings`}
                />

                <InfoItem
                  icon={
                    <GraduationCap
                      size={18}
                    />
                  }
                  text={
                    job.qualification
                  }
                />

              </div>

              {/* SKILLS */}

              {job.skills
                ?.length >
                0 && (
                  <div className="mt-8">

                    <h3 className="font-semibold mb-4">
                      Required Skills
                    </h3>

                    <div className="flex flex-wrap gap-2">

                      {job.skills.map(
                        (
                          skill,
                          index
                        ) => (
                          <span
                            key={
                              index
                            }
                            className="px-3 py-2 rounded-full bg-white/[0.04] border border-white/10 text-sm text-gray-300"
                          >
                            {skill}
                          </span>
                        )
                      )}

                    </div>

                  </div>
                )}

            </motion.div>

            {/*  RIGHT  */}

            <motion.form
              initial={{
                opacity: 0,
                x: 40,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
              }}
              onSubmit={
                handleSubmit
              }
              className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 space-y-5"
            >

              {/* NAME */}

              <InputField
                label="Full Name"
                name="fullName"
                type="text"
                value={
                  formData.fullName
                }
                onChange={
                  handleChange
                }
                placeholder="Enter your full name"
                required
              />

              {/* EMAIL */}

              <InputField
                label="Email"
                name="email"
                type="email"
                value={
                  formData.email
                }
                onChange={
                  handleChange
                }
                placeholder="Enter your email"
                required
              />

              {/* PHONE */}

              <InputField
                label="Phone"
                name="phone"
                type="text"
                value={
                  formData.phone
                }
                onChange={
                  handleChange
                }
                placeholder="Enter phone number"
                required
              />

              {/* EXPERIENCE */}

              <InputField
                label="Experience"
                name="experience"
                type="text"
                value={
                  formData.experience
                }
                onChange={
                  handleChange
                }
                placeholder="2 Years"
              />

              {/* RESUME */}

              <div>

                <label className="block mb-3 text-sm text-gray-300">
                  Upload Resume
                </label>

                <label className="flex items-center justify-center gap-3 border border-dashed border-cyan-400/30 rounded-3xl p-6 cursor-pointer hover:bg-cyan-400/5 transition">

                  <Upload
                    size={22}
                    className="text-cyan-400"
                  />

                  <span className="text-gray-300 text-center break-all">
                    {formData
                      .resume
                      ?.name ||
                      "Upload PDF/DOC Resume"}
                  </span>

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    hidden
                    onChange={
                      handleFileChange
                    }
                  />

                </label>

              </div>

              {/* COVER LETTER */}

              <div>

                <label className="block mb-3 text-sm text-gray-300">
                  Cover Letter
                </label>

                <textarea
                  rows="6"
                  name="coverLetter"
                  value={
                    formData.coverLetter
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Write your cover letter..."
                  className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 resize-none"
                />

              </div>

              {/* BUTTON */}

              <button
                type="submit"
                disabled={
                  loading
                }
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold hover:scale-[1.01] transition disabled:opacity-60"
              >

                {loading
                  ? "Submitting..."
                  : "Submit Application"}

              </button>

            </motion.form>

          </div>

        </div>

      </div>

    </div>
  );
}

/*  INPUT FIELD  */

function InputField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
}) {
  return (
    <div>

      <label className="block mb-3 text-sm text-gray-300">
        {label}
      </label>

      <input
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-cyan-400 transition"
      />

    </div>
  );
}

/*  INFO ITEM  */

function InfoItem({
  icon,
  text,
}) {
  return (
    <div className="flex items-center gap-3 text-gray-300">

      <div className="text-cyan-400">
        {icon}
      </div>

      <span>{text}</span>

    </div>
  );
}