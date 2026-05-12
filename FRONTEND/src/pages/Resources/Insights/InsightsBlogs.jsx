import { useEffect, useState } from "react";

import { motion } from "framer-motion";

import {
  CalendarDays,
  ArrowRight,
  TrendingUp,
  Cpu,
  Sparkles,
  Globe2,
  BarChart3,
  Rocket,
  Clock3,
} from "lucide-react";

const iconMap = {
  TrendingUp: <TrendingUp size={20} />,
  Cpu: <Cpu size={20} />,
  Sparkles: <Sparkles size={20} />,
  Rocket: <Rocket size={20} />,
  Globe2: <Globe2 size={20} />,
  BarChart3: <BarChart3 size={20} />,
};

export default function InsightsBlogs() {
  const [blogs, setBlogs] = useState([]);

  const [loading, setLoading] =
    useState(true);

  /* ================= FETCH BLOGS ================= */
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
    } finally {
      setLoading(false);
    }
  };

  /* ================= FEATURED BLOG ================= */
  const featuredBlog = blogs.find(
    (blog) => blog.featured
  );

  return (
    <section className="relative overflow-hidden bg-[#0B1220] text-white py-20 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16">

      {/* BACKGROUND */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 backdrop-blur-xl text-cyan-300 text-sm font-medium">
            <Globe2 size={16} />
            Latest Insights
          </div>

          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight max-w-4xl mx-auto">
            Explore our latest{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              blogs & insights
            </span>
          </h2>

          <p className="mt-6 text-white/65 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Actionable growth frameworks, modern development
            strategies, automation systems, and digital experiences
            for startups and enterprise teams.
          </p>

        </motion.div>

        {/* ================= FEATURED BLOG ================= */}
        {featuredBlog && (
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="relative mt-16 overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.03] backdrop-blur-2xl"
          >

            <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-cyan-500/10 blur-3xl rounded-full" />

            <div className="grid lg:grid-cols-2 gap-10 items-center p-6 sm:p-8 md:p-10 lg:p-14">

              {/* LEFT */}
              <div className="relative z-10">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
                  <Rocket size={15} />
                  Featured Article
                </div>

                <h3 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                  {featuredBlog.title}
                </h3>

                <p className="mt-6 text-white/65 leading-relaxed text-base sm:text-lg">
                  {featuredBlog.description}
                </p>

                {/* META */}
                <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/50">

                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />

                    {new Date(
                      featuredBlog.createdAt
                    ).toLocaleDateString()}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />

                    {featuredBlog.read}
                  </div>

                  <div className="flex items-center gap-2">
                    <BarChart3 size={16} />

                    {featuredBlog.category}
                  </div>

                </div>

                {/* BUTTONS */}
                <div className="mt-10 flex flex-wrap gap-4">

                  <motion.a
                    href={`/blog/${featuredBlog.slug}`}
                    whileHover={{
                      scale: 1.04,
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                    className="group relative overflow-hidden rounded-2xl bg-white text-black px-7 py-4 font-semibold shadow-2xl"
                  >

                    <span className="relative z-10 flex items-center gap-2">
                      Read Full Article

                      <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>

                  </motion.a>

                  <button className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl px-7 py-4 font-medium hover:bg-white/10 transition">
                    Browse All Articles
                  </button>

                </div>

              </div>

              {/* RIGHT */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="relative"
              >

                <div className="relative overflow-hidden rounded-[30px] border border-white/10">

                  <img
                    src={`http://localhost:5000${featuredBlog.image}`}
                    alt={featuredBlog.title}
                    className="w-full h-[450px] object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 p-8">

                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <span>
                        By {featuredBlog.author}
                      </span>

                      <span>•</span>

                      <span>Featured</span>
                    </div>

                    <h4 className="mt-4 text-2xl font-bold max-w-md">
                      {featuredBlog.title}
                    </h4>

                  </div>

                </div>

              </motion.div>

            </div>

          </motion.div>
        )}

        {/* ================= BLOG GRID ================= */}
        {loading ? (
          <div className="text-center py-20 text-white/50">
            Loading Blogs...
          </div>
        ) : (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {blogs.map((blog, i) => (
              <motion.div
                key={blog._id}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl"
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden h-[240px]">

                  <img
                    src={`http://localhost:5000${blog.image}`}
                    alt={blog.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent" />

                  {/* CATEGORY */}
                  <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 text-cyan-300 text-xs font-medium">
                    {blog.category}
                  </div>

                  {/* FEATURED */}
                  {blog.featured && (
                    <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-cyan-400 text-black text-xs font-bold">
                      Featured
                    </div>
                  )}

                </div>

                {/* CONTENT */}
                <div className="relative p-6">

                  {/* ICON */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 border border-cyan-400/20 flex items-center justify-center text-cyan-300">

                    {iconMap[blog.icon] || (
                      <Sparkles size={20} />
                    )}

                  </div>

                  {/* TITLE */}
                  <h3 className="mt-5 text-2xl font-bold leading-snug group-hover:text-cyan-300 transition">
                    {blog.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-4 text-white/60 leading-relaxed text-sm line-clamp-3">
                    {blog.description}
                  </p>

                  {/* AUTHOR */}
                  <div className="mt-6 flex items-center justify-between text-sm">

                    <div className="text-white/50">
                      By {blog.author}
                    </div>

                    <div className="text-white/40">
                      {new Date(
                        blog.createdAt
                      ).toLocaleDateString()}
                    </div>

                  </div>

                  {/* FOOTER */}
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">

                    <span className="text-sm text-white/40">
                      {blog.read}
                    </span>

                    <motion.a
                      href={`/blog/${blog.slug}`}
                      whileHover={{
                        x: 4,
                      }}
                      className="flex items-center gap-2 text-cyan-300 text-sm font-medium"
                    >

                      Read More

                      <ArrowRight size={16} />

                    </motion.a>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        )}

        {/* EMPTY */}
        {!loading &&
          blogs.length === 0 && (
            <div className="text-center py-20 text-white/40">
              No Blogs Found
            </div>
          )}

      </div>

    </section>
  );
}