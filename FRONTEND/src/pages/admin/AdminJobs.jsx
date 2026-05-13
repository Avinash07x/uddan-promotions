import {
  useEffect,
  useState,
} from "react";

import {
  Pencil,
  Trash2,
  Save,
  X,
} from "lucide-react";

export default function AdminJobs() {
  //  STATES 
  const [jobs, setJobs] =
    useState([]);

  const [editingId, setEditingId] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: "",
      department: "",
      type: "",
      salary: "",
      location: "",
      experience: "",
      openings: "",
      mode: "",
      qualification: "",
      posted: "",
      description: "",
      skills: "",
      benefits: "",
    });

  //  FETCH 
  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/job"
      );

      const data = await res.json();

      if (data.success) {
        setJobs(data.jobs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  HANDLE CHANGE 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  //  CREATE 
  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,

        skills:
          formData.skills.split(","),

        benefits:
          formData.benefits.split(
            ","
          ),
      };

      const res = await fetch(
        "http://localhost:5000/api/job",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            payload
          ),
        }
      );

      const data =
        await res.json();

      if (data.success) {
        alert("Job Added");

        resetForm();

        fetchJobs();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  DELETE 
  const deleteJob = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this job?"
      );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `http://localhost:5000/api/job/${id}`,
        {
          method: "DELETE",
        }
      );

      const data =
        await res.json();

      if (data.success) {
        fetchJobs();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  START EDIT 
  const startEdit = (job) => {
    setEditingId(job._id);

    setFormData({
      title: job.title || "",
      department:
        job.department || "",
      type: job.type || "",
      salary: job.salary || "",
      location:
        job.location || "",
      experience:
        job.experience || "",
      openings:
        job.openings || "",
      mode: job.mode || "",
      qualification:
        job.qualification || "",
      posted: job.posted || "",
      description:
        job.description || "",

      skills:
        job.skills?.join(", ") ||
        "",

      benefits:
        job.benefits?.join(
          ", "
        ) || "",
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //  UPDATE 
  const updateJob = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,

        skills:
          formData.skills.split(","),

        benefits:
          formData.benefits.split(
            ","
          ),
      };

      const res = await fetch(
        `http://localhost:5000/api/job/${editingId}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify(
            payload
          ),
        }
      );

      const data =
        await res.json();

      if (data.success) {
        alert("Updated");

        setEditingId(null);

        resetForm();

        fetchJobs();
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  RESET 
  const resetForm = () => {
    setFormData({
      title: "",
      department: "",
      type: "",
      salary: "",
      location: "",
      experience: "",
      openings: "",
      mode: "",
      qualification: "",
      posted: "",
      description: "",
      skills: "",
      benefits: "",
    });
  };

  //  CANCEL 
  const cancelEdit = () => {
    setEditingId(null);

    resetForm();
  };

  return (
    <section className="p-6 text-white">

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-3xl font-black">
          Jobs Management
        </h2>

        <p className="text-white/50 mt-2">
          Add, edit & delete jobs
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={
          editingId
            ? updateJob
            : handleSubmit
        }
        className="bg-white/5 border border-white/10 rounded-3xl p-6"
      >

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={
              formData.department
            }
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="type"
            placeholder="Full-time"
            value={formData.type}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={
              formData.location
            }
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={
              formData.experience
            }
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="openings"
            placeholder="Openings"
            value={
              formData.openings
            }
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="mode"
            placeholder="Remote / Hybrid"
            value={formData.mode}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            value={
              formData.qualification
            }
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="posted"
            placeholder="Posted"
            value={formData.posted}
            onChange={handleChange}
            className="input"
          />

          <textarea
            rows="5"
            name="description"
            placeholder="Description"
            value={
              formData.description
            }
            onChange={handleChange}
            className="md:col-span-2 input"
          />

          <input
            type="text"
            name="skills"
            placeholder="React, Node, MongoDB"
            value={formData.skills}
            onChange={handleChange}
            className="input"
          />

          <input
            type="text"
            name="benefits"
            placeholder="WFH, Bonus"
            value={
              formData.benefits
            }
            onChange={handleChange}
            className="input"
          />

          {/* BUTTONS */}
          <div className="md:col-span-2 flex gap-4">

            <button className="bg-cyan-500 text-black px-8 py-3 rounded-2xl font-bold flex items-center gap-2">

              {editingId ? (
                <>
                  <Save size={18} />
                  Update Job
                </>
              ) : (
                "Add Job"
              )}

            </button>

            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="bg-red-500/20 border border-red-500/20 text-red-400 px-6 py-3 rounded-2xl flex items-center gap-2"
              >
                <X size={18} />
                Cancel
              </button>
            )}

          </div>

        </div>

      </form>

      {/* JOBS */}
      <div className="grid lg:grid-cols-3 gap-6 mt-10">

        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white/5 border border-white/10 rounded-3xl p-6"
          >

            <h3 className="text-2xl font-bold">
              {job.title}
            </h3>

            <p className="text-cyan-400 mt-2">
              {job.department}
            </p>

            <p className="text-white/60 mt-2">
              {job.location}
            </p>

            <p className="mt-3">
              {job.salary}
            </p>

            <div className="flex gap-3 mt-6">

              <button
                onClick={() =>
                  startEdit(job)
                }
                className="flex-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 py-3 rounded-2xl flex items-center justify-center gap-2"
              >
                <Pencil size={16} />
                Edit
              </button>

              <button
                onClick={() =>
                  deleteJob(job._id)
                }
                className="flex-1 bg-red-500/10 border border-red-500/20 text-red-400 py-3 rounded-2xl flex items-center justify-center gap-2"
              >
                <Trash2 size={16} />
                Delete
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* INPUT STYLE */}
      <style >{`
        .input {
          background: rgba(
            255,
            255,
            255,
            0.05
          );
          border: 1px solid
            rgba(
              255,
              255,
              255,
              0.1
            );
          border-radius: 16px;
          padding: 14px 16px;
          outline: none;
          width: 100%;
        }
      `}</style>

    </section>
  );
}