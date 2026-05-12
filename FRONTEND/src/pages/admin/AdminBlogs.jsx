// ================= AdminBlogs.jsx =================

import {
  Plus,
  Trash2,
  Edit,
  Calendar,
  Star,
  Upload,
  X,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

export default function AdminBlogs() {
  const [blogs, setBlogs] =
    useState([]);

  const [editingId, setEditingId] =
    useState(null);

  const [loading, setLoading] =
    useState(false);

  const [imagePreview, setImagePreview] =
    useState("");

  const [formData, setFormData] =
    useState({
      title: "",
      category: "",
      description: "",
      author: "",
      read: "",
      featured: false,
      image: null,
    });

  // ================= FETCH =================
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/blog"
      );

      const data = await res.json();

      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ================= CHANGE =================
  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
      files,
    } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        image: files[0],
      });

      setImagePreview(
        URL.createObjectURL(files[0])
      );
    } else {
      setFormData({
        ...formData,
        [name]:
          type === "checkbox"
            ? checked
            : value,
      });
    }
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const sendData =
        new FormData();

      sendData.append(
        "title",
        formData.title
      );

      sendData.append(
        "category",
        formData.category
      );

      sendData.append(
        "description",
        formData.description
      );

      sendData.append(
        "author",
        formData.author
      );

      sendData.append(
        "read",
        formData.read
      );

      sendData.append(
        "featured",
        formData.featured
      );

      if (formData.image) {
        sendData.append(
          "image",
          formData.image
        );
      }

      const method = editingId
        ? "PUT"
        : "POST";

      const url = editingId
        ? `http://localhost:5000/api/blog/${editingId}`
        : "http://localhost:5000/api/blog";

      const res = await fetch(url, {
        method,
        body: sendData,
      });

      const data = await res.json();

      if (data.success) {
        fetchBlogs();

        setEditingId(null);

        setImagePreview("");

        setFormData({
          title: "",
          category: "",
          description: "",
          author: "",
          read: "",
          featured: false,
          image: null,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // ================= DELETE =================
  const deleteBlog = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this blog?"
      );

    if (!confirmDelete) return;

    try {
      await fetch(
        `http://localhost:5000/api/blog/${id}`,
        {
          method: "DELETE",
        }
      );

      fetchBlogs();
    } catch (error) {
      console.log(error);
    }
  };

  // ================= EDIT =================
  const editBlog = (blog) => {
    setEditingId(blog._id);

    setImagePreview(blog.image);

    setFormData({
      title: blog.title || "",
      category: blog.category || "",
      description:
        blog.description || "",
      author: blog.author || "",
      read: blog.read || "",
      featured:
        blog.featured || false,
      image: null,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="p-6 text-white">

      {/* ================= HEADER ================= */}
      <div className="mb-8">
        <h2 className="text-3xl font-black">
          Blogs Management
        </h2>

        <p className="text-white/50 mt-2">
          Create and manage blog
          articles
        </p>
      </div>

      {/* ================= FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-5 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl"
      >

        {/* TITLE */}
        <input
          type="text"
          name="title"
          placeholder="Blog Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
        />

        {/* CATEGORY */}
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          required
          className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
        />

        {/* AUTHOR */}
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={formData.author}
          onChange={handleChange}
          className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
        />

        {/* READ */}
        <input
          type="text"
          name="read"
          placeholder="5 min read"
          value={formData.read}
          onChange={handleChange}
          className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none"
        />

        {/* IMAGE */}
        <div className="md:col-span-2">

          <label className="border-2 border-dashed border-white/15 rounded-3xl p-8 flex flex-col items-center justify-center cursor-pointer bg-white/[0.03] hover:bg-white/[0.05] transition">

            <Upload size={40} className="text-cyan-400 mb-4" />

            <p className="font-semibold">
              Upload Blog Image
            </p>

            <p className="text-sm text-white/40 mt-1">
              JPG, PNG, WEBP
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="hidden"
            />
          </label>

          {/* PREVIEW */}
          {imagePreview && (
            <div className="relative mt-5">

              <img
                src={imagePreview}
                alt=""
                className="w-full h-64 object-cover rounded-3xl border border-white/10"
              />

              <button
                type="button"
                onClick={() => {
                  setImagePreview("");

                  setFormData({
                    ...formData,
                    image: null,
                  });
                }}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center"
              >
                <X size={18} />
              </button>

            </div>
          )}
        </div>

        {/* DESCRIPTION */}
        <textarea
          rows="6"
          name="description"
          placeholder="Blog Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 outline-none resize-none"
        />

        {/* FEATURED */}
        <label className="flex items-center gap-3 text-sm">
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleChange}
            className="w-5 h-5"
          />

          Featured Blog
        </label>

        {/* BUTTON */}
        <button
          disabled={loading}
          className="md:col-span-2 bg-cyan-500 hover:bg-cyan-400 transition text-black py-3 rounded-2xl font-bold flex items-center justify-center gap-2"
        >
          <Plus size={18} />

          {loading
            ? "Please Wait..."
            : editingId
            ? "Update Blog"
            : "Add Blog"}
        </button>

      </form>

      {/* ================= BLOGS ================= */}
      <div className="grid lg:grid-cols-3 gap-6 mt-10">

        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
          >

            {/* IMAGE */}
            <div className="relative">

              <img
                src={`http://localhost:5000${blog.image}`}
                alt={blog.title}
                className="h-56 w-full object-cover"
              />

              {blog.featured && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1">
                  <Star size={12} />
                  Featured
                </div>
              )}
            </div>

            {/* CONTENT */}
            <div className="p-5">

              <div className="flex items-center justify-between gap-3">

                <span className="text-cyan-400 text-sm">
                  {blog.category}
                </span>

                <span className="text-white/40 text-xs">
                  {blog.read}
                </span>

              </div>

              <h3 className="text-xl font-bold mt-3 line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-white/60 mt-3 text-sm leading-relaxed line-clamp-3">
                {blog.description}
              </p>

              {/* FOOTER */}
              <div className="flex items-center justify-between mt-5 text-sm text-white/40">

                <div className="flex items-center gap-2">
                  <Calendar size={15} />

                  {new Date(
                    blog.createdAt
                  ).toLocaleDateString()}
                </div>

                <span>
                  {blog.author}
                </span>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3 mt-6">

                <button
                  onClick={() =>
                    editBlog(blog)
                  }
                  className="flex-1 bg-yellow-500 py-2.5 rounded-xl text-black font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  <Edit size={16} />
                  Edit
                </button>

                <button
                  onClick={() =>
                    deleteBlog(blog._id)
                  }
                  className="flex-1 bg-red-500 py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  <Trash2 size={16} />
                  Delete
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}