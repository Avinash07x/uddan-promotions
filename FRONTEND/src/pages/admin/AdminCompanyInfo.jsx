// AdminCompanyInfo.jsx

import {
  useEffect,
  useState,
} from "react";

import {
  Save,
  Plus,
  Trash2,
  Upload,
} from "lucide-react";

export default function AdminCompanyInfo() {
  const [loading, setLoading] =
    useState(false);

  const [uploading, setUploading] =
    useState(false);

  const [formData, setFormData] =
    useState({
      companyName: "",
      tagline: "",
      logo: "",
      phone: "",
      email: "",
      facebook: "",
      instagram: "",
      linkedin: "",
      youtube: "",
      cin: "",
      workingHours: "",
      description: "",
      certifications: [""],
      locations: [
        {
          name: "",
          mapLink: "",
        },
      ],
    });

  /*  FETCH  */

  useEffect(() => {
    fetchCompanyInfo();
  }, []);

  const fetchCompanyInfo =
    async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/company-info"
        );

        const data =
          await res.json();

        if (
          data.success &&
          data.info
        ) {
          setFormData({
            companyName:
              data.info.companyName ||
              "",

            tagline:
              data.info.tagline || "",

            logo:
              data.info.logo || "",

            phone:
              data.info.phone || "",

            email:
              data.info.email || "",

            facebook:
              data.info.facebook ||
              "",

            instagram:
              data.info.instagram ||
              "",

            linkedin:
              data.info.linkedin ||
              "",

            youtube:
              data.info.youtube ||
              "",

            cin:
              data.info.cin || "",

            workingHours:
              data.info
                .workingHours || "",

            description:
              data.info
                .description || "",

            certifications:
              data.info
                .certifications
                ?.length > 0
                ? data.info
                    .certifications
                : [""],

            locations:
              data.info.locations
                ?.length > 0
                ? data.info.locations
                : [
                    {
                      name: "",
                      mapLink: "",
                    },
                  ],
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

  /*  INPUT CHANGE  */

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  /*  LOGO UPLOAD  */

  const handleLogoUpload =
    async (e) => {
      const file =
        e.target.files[0];

      if (!file) return;

      try {
        setUploading(true);

        const uploadData =
          new FormData();

        uploadData.append(
          "image",
          file
        );

        const res = await fetch(
          "http://localhost:5000/api/company-info/upload-logo",
          {
            method: "POST",
            body: uploadData,
          }
        );

        const data =
          await res.json();

        if (data.success) {
          setFormData({
            ...formData,
            logo: data.image,
          });
        }
      } catch (error) {
        console.log(error);
      } finally {
        setUploading(false);
      }
    };

  /*  LOCATION  */

  const handleLocationChange = (
    index,
    field,
    value
  ) => {
    const updated =
      [...formData.locations];

    updated[index][field] =
      value;

    setFormData({
      ...formData,
      locations: updated,
    });
  };

  const addLocation = () => {
    setFormData({
      ...formData,
      locations: [
        ...formData.locations,
        {
          name: "",
          mapLink: "",
        },
      ],
    });
  };

  const removeLocation = (
    index
  ) => {
    const updated =
      formData.locations.filter(
        (_, i) => i !== index
      );

    setFormData({
      ...formData,
      locations: updated,
    });
  };

  /*  CERTIFICATIONS  */

  const handleCertificationChange =
    (index, value) => {
      const updated = [
        ...formData.certifications,
      ];

      updated[index] = value;

      setFormData({
        ...formData,
        certifications: updated,
      });
    };

  const addCertification = () => {
    setFormData({
      ...formData,
      certifications: [
        ...formData.certifications,
        "",
      ],
    });
  };

  const removeCertification = (
    index
  ) => {
    const updated =
      formData.certifications.filter(
        (_, i) => i !== index
      );

    setFormData({
      ...formData,
      certifications: updated,
    });
  };

  /*  SUBMIT  */

  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch(
        "http://localhost:5000/api/company-info",
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
          "Company Info Saved 🚀"
        );
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6 text-white">

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-3xl font-black">
          Company Information
        </h2>

        <p className="text-white/50 mt-2">
          Manage company logo,
          contact info & footer
          details
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-8"
      >

        {/* BASIC */}
        <div className="grid md:grid-cols-2 gap-5 bg-white/5 border border-white/10 p-6 rounded-3xl">

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={
              formData.companyName
            }
            onChange={
              handleChange
            }
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            name="tagline"
            placeholder="Tagline"
            value={
              formData.tagline
            }
            onChange={
              handleChange
            }
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
          />

          {/* LOGO UPLOAD */}
          <div className="md:col-span-2">

            <label className="flex items-center justify-center gap-3 w-full bg-white/5 border border-dashed border-cyan-400/40 rounded-2xl px-4 py-6 cursor-pointer hover:bg-white/10 transition">

              <Upload size={20} />

              <span>
                {uploading
                  ? "Uploading..."
                  : "Upload Logo"}
              </span>

              <input
                type="file"
                accept="image/*"
                onChange={
                  handleLogoUpload
                }
                hidden
              />

            </label>

          </div>

          {/* PREVIEW */}
          {formData.logo && (
            <div className="md:col-span-2 flex justify-center">

              <img
                src={`http://localhost:5000${formData.logo}`}
                alt="logo"
                className="w-32 h-32 object-cover rounded-2xl border border-white/10 bg-white p-2"
              />

            </div>
          )}

        </div>

        {/* CONTACT */}
        <div className="grid md:grid-cols-2 gap-5 bg-white/5 border border-white/10 p-6 rounded-3xl">

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={
              formData.phone
            }
            onChange={
              handleChange
            }
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            name="cin"
            placeholder="CIN Number"
            value={formData.cin}
            onChange={
              handleChange
            }
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            name="workingHours"
            placeholder="Working Hours"
            value={
              formData.workingHours
            }
            onChange={
              handleChange
            }
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
          />

        </div>

        {/* SOCIAL */}
        <div className="grid md:grid-cols-2 gap-5 bg-white/5 border border-white/10 p-6 rounded-3xl">

          <input
            type="text"
            name="facebook"
            placeholder="Facebook URL"
            value={
              formData.facebook
            }
            onChange={
              handleChange
            }
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            name="instagram"
            placeholder="Instagram URL"
            value={
              formData.instagram
            }
            onChange={
              handleChange
            }
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={
              formData.linkedin
            }
            onChange={
              handleChange
            }
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
          />

          <input
            type="text"
            name="youtube"
            placeholder="YouTube URL"
            value={
              formData.youtube
            }
            onChange={
              handleChange
            }
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
          />

        </div>

        {/* DESCRIPTION */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">

          <textarea
            rows="5"
            name="description"
            placeholder="Company Description"
            value={
              formData.description
            }
            onChange={
              handleChange
            }
            className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none resize-none"
          />

        </div>

        {/* LOCATIONS */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">

          <div className="flex items-center justify-between mb-5">

            <h3 className="text-xl font-bold">
              Locations
            </h3>

            <button
              type="button"
              onClick={
                addLocation
              }
              className="bg-cyan-500 text-black px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <Plus size={16} />
              Add
            </button>

          </div>

          <div className="space-y-4">

            {formData.locations.map(
              (
                location,
                index
              ) => (
                <div
                  key={index}
                  className="grid md:grid-cols-2 gap-4"
                >

                  <input
                    type="text"
                    placeholder="Location Name"
                    value={
                      location.name
                    }
                    onChange={(
                      e
                    ) =>
                      handleLocationChange(
                        index,
                        "name",
                        e.target
                          .value
                      )
                    }
                    className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
                  />

                  <div className="flex gap-3">

                    <input
                      type="text"
                      placeholder="Google Map Link"
                      value={
                        location.mapLink
                      }
                      onChange={(
                        e
                      ) =>
                        handleLocationChange(
                          index,
                          "mapLink",
                          e.target
                            .value
                        )
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        removeLocation(
                          index
                        )
                      }
                      className="bg-red-500 px-4 rounded-xl"
                    >
                      <Trash2
                        size={18}
                      />
                    </button>

                  </div>

                </div>
              )
            )}

          </div>

        </div>

        {/* CERTIFICATIONS */}
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">

          <div className="flex items-center justify-between mb-5">

            <h3 className="text-xl font-bold">
              Certifications
            </h3>

            <button
              type="button"
              onClick={
                addCertification
              }
              className="bg-cyan-500 text-black px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <Plus size={16} />
              Add
            </button>

          </div>

          <div className="space-y-4">

            {formData.certifications.map(
              (cert, index) => (
                <div
                  key={index}
                  className="flex gap-3"
                >

                  <input
                    type="text"
                    placeholder="Certification"
                    value={cert}
                    onChange={(
                      e
                    ) =>
                      handleCertificationChange(
                        index,
                        e.target
                          .value
                      )
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      removeCertification(
                        index
                      )
                    }
                    className="bg-red-500 px-4 rounded-xl"
                  >
                    <Trash2
                      size={18}
                    />
                  </button>

                </div>
              )
            )}

          </div>

        </div>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="w-full bg-cyan-500 hover:bg-cyan-400 transition text-black py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
        >

          <Save size={18} />

          {loading
            ? "Saving..."
            : "Save Company Info"}

        </button>

      </form>

    </section>
  );
}