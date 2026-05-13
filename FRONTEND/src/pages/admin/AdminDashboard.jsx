import {
  LayoutDashboard,
  Users,
  ShoppingCart,
  Logs,
  CreditCard,
  TableOfContents,
  Activity,
  BriefcaseBusiness,
  LogOut,
  Menu,
  Info,
  ShieldCheck,
  Bell,
  Briefcase,
  MessageSquare,
  ChevronRight,
  X,
  TrendingUp,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import { motion } from "framer-motion";

import AdminContacts from "./AdminContacts";
import AdminFAQS from "./AdminFAQS";
import AdminTestimonials from "./AdminTestimonials";
import AdminJobs from "./AdminJobs";
import AdminBlogs from "./AdminBlogs";
import AdminCompanyInfo from "./AdminCompanyInfo";
import AdminApplications from "./AdminApplications";

export default function AdminDashboard() {
  const navigate = useNavigate();

  /*  STATES  */

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [stats, setStats] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [admin, setAdmin] =
    useState(null);

  const [activePage, setActivePage] =
    useState("Dashboard");

  /*  TOKEN CHECK  */

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (!token) {
      navigate("/login-admin");
      return;
    }

    const adminData = JSON.parse(
      localStorage.getItem("admin")
    );

    setAdmin(adminData);

    fetchDashboardData();
  }, []);

  /*  FETCH DASHBOARD  */

  const fetchDashboardData =
    async () => {
      try {
        const token =
          localStorage.getItem(
            "token"
          );

        const res = await fetch(
          "http://localhost:5000/api/dashboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data =
          await res.json();

        if (!data.success) {
          localStorage.removeItem(
            "token"
          );

          localStorage.removeItem(
            "admin"
          );

          navigate("/login-admin");

          return;
        }

        setStats(data.stats || []);
      } catch (error) {
        console.log(error);

        navigate("/login-admin");
      } finally {
        setLoading(false);
      }
    };

  /*  LOGOUT  */

  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("admin");

    navigate("/login-admin");
  };

  /*  SIDEBAR ITEMS  */

  const sidebarItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
    },

    {
      icon: Info,
      label: "CompanyInfo",
    },

    {
      icon: Users,
      label: "Contacts",
    },

    {
      icon: Logs,
      label: "Blogs",
    },

    {
      icon: TableOfContents,
      label: "FAQS",
    },

    {
      icon: Activity,
      label: "Testimonials",
    },

    {
      icon: Briefcase,
      label: "Jobs",
    },

    {
      icon: BriefcaseBusiness,
      label: "JobApplications",
    },
  ];

  /*  FEATURE CARDS  */

  const featureCards = [
    {
      icon: Users,
      title: "Contact Management",
      desc: "View inquiries, reply to clients and manage leads.",
      page: "Contacts",
    },

    {
      icon: Logs,
      title: "Blog Management",
      desc: "Create, edit and publish SEO blogs.",
      page: "Blogs",
    },

    {
      icon: MessageSquare,
      title: "Testimonials",
      desc: "Manage reviews and customer trust sections.",
      page: "Testimonials",
    },

    {
      icon: Briefcase,
      title: "Jobs & Careers",
      desc: "Add jobs and manage recruitment posts.",
      page: "Jobs",
    },

    {
      icon: ShieldCheck,
      title: "Company Information",
      desc: "Update phone, email, address and socials.",
      page: "CompanyInfo",
    },

    {
      icon: CreditCard,
      title: "FAQ Management",
      desc: "Manage support questions and answers.",
      page: "FAQS",
    },
  ];

  /*  ADMIN ACTIVITY  */

  const adminActivity = [
    {
      icon: CheckCircle2,
      title: "Contacts Replied",
      value: "18",
      color:
        "from-green-500 to-emerald-500",
    },

    {
      icon: Logs,
      title: "Blogs Published",
      value: "4",
      color:
        "from-cyan-500 to-blue-500",
    },

    {
      icon: Clock3,
      title: "Hours Active",
      value: "6h 24m",
      color:
        "from-orange-500 to-yellow-500",
    },

    {
      icon: TrendingUp,
      title: "Tasks Completed",
      value: "32",
      color:
        "from-pink-500 to-rose-500",
    },
  ];

  /*  RENDER PAGE  */

  const renderPage = () => {
    switch (activePage) {
      case "Contacts":
        return <AdminContacts />;

      case "CompanyInfo":
        return <AdminCompanyInfo />;

      case "Blogs":
        return <AdminBlogs />;

      case "FAQS":
        return <AdminFAQS />;

      case "Testimonials":
        return <AdminTestimonials />;

      case "Jobs":
        return <AdminJobs />;

      case "JobApplications":  
        return <AdminApplications />;

      default:
        return (
          <div className="p-4 sm:p-6 lg:p-8">

            {/* HERO */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 lg:p-8 overflow-hidden relative">

              <div className="absolute right-0 top-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

              <div className="relative z-10">

                <h2 className="text-3xl lg:text-5xl font-black leading-tight">
                  Enterprise Admin Dashboard
                </h2>

                <p className="text-white/60 mt-4 max-w-3xl leading-relaxed">
                  Manage your website content,
                  contacts, company details,
                  testimonials, jobs, blogs and
                  customer communication from
                  one powerful control center.
                </p>

                <div className="flex flex-wrap gap-3 mt-7">

                  <button className="px-5 py-3 rounded-2xl bg-cyan-500 text-black font-semibold flex items-center gap-2">
                    <Bell size={18} />
                    Notifications
                  </button>

                  <button className="px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                    System Status
                  </button>

                </div>

              </div>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">

              {stats.map((item, i) => {
                const icons = {
                  Users,
                  CreditCard,
                  ShoppingCart,
                  ShieldCheck,
                };

                const Icon =
                  icons[item.icon];

                return (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 20,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: i * 0.08,
                    }}
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition"
                  >

                    <div className="flex items-start justify-between">

                      <div>

                        <p className="text-white/50 text-sm">
                          {item.title}
                        </p>

                        <h3 className="text-4xl font-black mt-3">
                          {item.value}
                        </h3>

                        <p className="text-cyan-400 text-sm mt-3">
                          {item.growth}
                        </p>

                      </div>

                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                      >
                        {Icon && (
                          <Icon size={24} />
                        )}
                      </div>

                    </div>

                  </motion.div>
                );
              })}

            </div>

            {/* ADMIN WORK STATUS */}
            <div className="mt-10">

              <div className="mb-6">

                <h3 className="text-2xl font-black">
                  Today's Admin Activity
                </h3>

                <p className="text-white/50 mt-1">
                  Daily productivity and work tracking
                </p>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                {adminActivity.map(
                  (
                    item,
                    index
                  ) => {
                    const Icon =
                      item.icon;

                    return (
                      <motion.div
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.08,
                        }}
                        className="rounded-3xl border border-white/10 bg-white/5 p-6"
                      >

                        <div className="flex items-center justify-between">

                          <div>

                            <p className="text-white/50 text-sm">
                              {item.title}
                            </p>

                            <h3 className="text-3xl font-black mt-3">
                              {item.value}
                            </h3>

                          </div>

                          <div
                            className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center`}
                          >

                            <Icon size={24} />

                          </div>

                        </div>

                      </motion.div>
                    );
                  }
                )}

              </div>

            </div>

            {/* ADMIN FEATURES */}
            <div className="mt-10">

              <div className="mb-6">

                <h3 className="text-2xl font-black">
                  What Admin Can Manage
                </h3>

                <p className="text-white/50 mt-1">
                  Full enterprise management system
                </p>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                {featureCards.map(
                  (
                    item,
                    index
                  ) => {
                    const Icon =
                      item.icon;

                    return (
                      <motion.button
                        key={index}
                        initial={{
                          opacity: 0,
                          y: 15,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          delay:
                            index * 0.08,
                        }}
                        onClick={() =>
                          setActivePage(
                            item.page
                          )
                        }
                        className="text-left rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition group"
                      >

                        <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">

                          <Icon size={24} />

                        </div>

                        <h4 className="text-xl font-bold mt-5">
                          {item.title}
                        </h4>

                        <p className="text-white/55 text-sm leading-relaxed mt-3">
                          {item.desc}
                        </p>

                        <div className="flex items-center gap-2 text-cyan-400 mt-5 text-sm font-semibold">

                          Open Section

                          <ChevronRight
                            size={16}
                          />

                        </div>

                      </motion.button>
                    );
                  }
                )}

              </div>

            </div>

          </div>
        );
    }
  };

  return (
    <section className="min-h-screen bg-[#0B1220] text-white">

      <div className="flex">

        {/* OVERLAY */}
        {sidebarOpen && (
          <div
            onClick={() =>
              setSidebarOpen(false)
            }
            className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          />
        )}

        {/* SIDEBAR */}

        <aside
          className={`
            fixed top-0 left-0 z-50
            h-screen w-[280px]
            bg-[#0f172a]
            border-r border-white/10
            backdrop-blur-2xl
            flex flex-col
            transition-all duration-300
            ${
              sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
        >

          {/* TOP */}
          <div className="sticky top-0 z-20 bg-[#0f172a] border-b border-white/10 p-5">

            <div className="flex items-center justify-between">

              <div>

                <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Uddan
                </h2>

                <p className="text-white/40 text-xs mt-1">
                  Enterprise Control Panel
                </p>

              </div>

              <button
                onClick={() =>
                  setSidebarOpen(false)
                }
                className="lg:hidden w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center"
              >

                <X size={18} />

              </button>

            </div>

          </div>

          {/* MENU */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3">

            {sidebarItems.map(
              (item, i) => {
                const Icon =
                  item.icon;

                return (
                  <button
                    key={i}
                    onClick={() => {
                      setActivePage(
                        item.label
                      );

                      setSidebarOpen(
                        false
                      );
                    }}
                    className={`
                      w-full flex items-center gap-2
                      px-2 py-2 rounded-2xl
                      transition-all duration-300
                      ${
                        activePage ===
                        item.label
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold"
                          : "bg-white/5 hover:bg-white/10 text-white"
                      }
                    `}
                  >

                    <Icon size={18} />

                    {item.label}

                  </button>
                );
              }
            )}

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="w-full mt-6 flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 py-3 rounded-2xl hover:bg-red-500/20 transition"
            >

              <LogOut size={18} />

              Logout

            </button>

          </div>

        </aside>

        {/* MAIN */}

        <main className="flex-1 lg:ml-[280px] min-h-screen">

          {/* HEADER */}

          <header className="sticky top-0 z-30 bg-[#0B1220]/90 backdrop-blur-2xl border-b border-white/10 px-4 sm:px-6 lg:px-10 py-4">

            <div className="flex items-center justify-between gap-4">

              {/* LEFT */}
              <div className="flex items-center gap-4">

                <button
                  onClick={() =>
                    setSidebarOpen(true)
                  }
                  className="lg:hidden bg-white/5 border border-white/10 p-2 rounded-xl"
                >

                  <Menu size={20} />

                </button>

                <div>

                  <h1 className="text-xl sm:text-2xl font-black">
                    Welcome back 👋
                  </h1>

                  <p className="text-white/50 text-sm">
                    {activePage}
                  </p>

                </div>

              </div>

              {/* PROFILE */}
              <div className="hidden sm:flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-2xl">

                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />

                <div>

                  <h4 className="text-sm font-semibold">
                    {admin?.name}
                  </h4>

                  <p className="text-xs text-white/40">
                    Super Admin
                  </p>

                </div>

              </div>

            </div>

          </header>

          {/* PAGE CONTENT */}

          {loading ? (
            <div className="flex items-center justify-center h-[70vh]">

              <div className="w-14 h-14 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" />

            </div>
          ) : (
            renderPage()
          )}

        </main>

      </div>

    </section>
  );
}