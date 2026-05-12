import {
  useEffect,
  useState,
} from "react";

import {
  Pencil,
  Trash2,
  X,
  Save,
} from "lucide-react";

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] =
    useState([]);

  const [editingId, setEditingId] =
    useState(null);

  const [formData, setFormData] =
    useState({
      name: "",
      role: "",
      company: "",
      city: "",
      quote: "",
      row: 1,
    });

  // ================= FETCH =================
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials =
    async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/testimonial"
        );

        const data =
          await res.json();

        if (data.success) {
          setTestimonials(
            data.testimonials
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

  // ================= HANDLE CHANGE =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // ================= CREATE =================
  const handleSubmit = async (
    e
  ) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "http://localhost:5000/api/testimonial",
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
          "Testimonial Added"
        );

        resetForm();

        fetchTestimonials();
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ================= UPDATE =================
  const updateTestimonial =
    async (e) => {
      e.preventDefault();

      try {
        const res = await fetch(
          `http://localhost:5000/api/testimonial/${editingId}`,
          {
            method: "PUT",

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
            "Updated Successfully"
          );

          setEditingId(null);

          resetForm();

          fetchTestimonials();
        }
      } catch (error) {
        console.log(error);
      }
    };

  // ================= DELETE =================
  const deleteTestimonial =
    async (id) => {
      const confirmDelete =
        window.confirm(
          "Delete testimonial?"
        );

      if (!confirmDelete) return;

      try {
        const res = await fetch(
          `http://localhost:5000/api/testimonial/${id}`,
          {
            method: "DELETE",
          }
        );

        const data =
          await res.json();

        if (data.success) {
          fetchTestimonials();
        }
      } catch (error) {
        console.log(error);
      }
    };

  // ================= EDIT =================
  const startEdit = (item) => {
    setEditingId(item._id);

    setFormData({
      name: item.name,
      role: item.role,
      company: item.company,
      city: item.city,
      quote: item.quote,
      row: item.row,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ================= RESET =================
  const resetForm = () => {
    setFormData({
      name: "",
      role: "",
      company: "",
      city: "",
      quote: "",
      row: 1,
    });
  };

  // ================= CANCEL =================
  const cancelEdit = () => {
    setEditingId(null);

    resetForm();
  };

  return (
    <section className="p-6 text-white">

      {/* HEADER */}
      <div className="mb-8">
        <h2 className="text-3xl font-black">
          Testimonials Management
        </h2>

        <p className="text-white/50 mt-2">
          Add / Update / Delete
          testimonials
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={
          editingId
            ? updateTestimonial
            : handleSubmit
        }
        className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl"
      >

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            name="name"
            placeholder="Client Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
          />

          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
          />

          {/* ROW OPTION */}
          <select
            name="row"
            value={formData.row}
            onChange={handleChange}
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-3"
          >
            <option
              value={1}
              className="text-black"
            >
              Row 1
            </option>

            <option
              value={2}
              className="text-black"
            >
              Row 2
            </option>
          </select>

          <textarea
            rows="5"
            name="quote"
            placeholder="Client Review"
            value={formData.quote}
            onChange={handleChange}
            required
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 resize-none"
          />

          <div className="md:col-span-2 flex gap-4">

            <button
              type="submit"
              className="bg-cyan-500 text-black px-8 py-3 rounded-2xl font-bold flex items-center gap-2"
            >
              {editingId ? (
                <>
                  <Save size={18} />
                  Update
                </>
              ) : (
                "Add Testimonial"
              )}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={cancelEdit}
                className="bg-red-500/20 border border-red-500/20 text-red-400 px-6 py-3 rounded-2xl font-semibold flex items-center gap-2"
              >
                <X size={18} />
                Cancel
              </button>
            )}
          </div>
        </div>
      </form>

      {/* LIST */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">

        {testimonials.map(
          (item) => (
            <div
              key={item._id}
              className="bg-white/5 border border-white/10 rounded-3xl p-6"
            >

              <p className="text-white/70">
                “{item.quote}”
              </p>

              <div className="border-t border-white/10 mt-6 pt-5">

                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

                <p className="text-cyan-400 text-sm">
                  {item.role}
                </p>

                <p className="text-white/50 text-sm">
                  {item.company}
                </p>

                <p className="text-white/40 text-xs mt-1">
                  {item.city}
                </p>

                <p className="text-yellow-400 text-xs mt-2">
                  Row: {item.row}
                </p>
              </div>

              <div className="flex gap-3 mt-6">

                <button
                  onClick={() =>
                    startEdit(item)
                  }
                  className="flex-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 py-3 rounded-2xl flex items-center justify-center gap-2"
                >
                  <Pencil size={16} />
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteTestimonial(
                      item._id
                    )
                  }
                  className="flex-1 bg-red-500/10 border border-red-500/20 text-red-400 py-3 rounded-2xl flex items-center justify-center gap-2"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}