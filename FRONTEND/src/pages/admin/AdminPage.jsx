import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Mail,
  User,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

export default function AdminPage() {
  // STATES 
  const [isLogin, setIsLogin] =
    useState(true);

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  // FORM 
  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      password: "",
    });

  //  CHECK TOKEN 
  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (token) {
      window.location.href =
        "/admin/dashboard";
    }
  }, []);

  //  HANDLE CHANGE 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  //  HANDLE SUBMIT 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const url = isLogin
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";

      const res = await fetch(url, {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await res.json();

      //  SUCCESS 
      if (data.success) {
        // LOGIN
        if (isLogin) {
          localStorage.setItem(
            "token",
            data.token
          );

          localStorage.setItem(
            "admin",
            JSON.stringify(data.admin)
          );

          alert("Login successful");

          window.location.href =
            "/admin/dashboard";
        }

        // SIGNUP
        else {
          alert(
            "Account created successfully"
          );

          setFormData({
            name: "",
            email: "",
            password: "",
          });

          setIsLogin(true);
        }
      }

      //  ERROR 
      else {
        alert(
          data.message ||
            "Something went wrong"
        );
      }
    } catch (error) {
      console.log(error);

      alert("Server Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B1220] text-white flex items-center justify-center px-4 py-8">

      {/* BG */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full" />

      {/* CARD */}
      <div className="relative z-10 w-full max-w-md rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_20px_100px_rgba(0,0,0,0.45)]">

        {/* LOGO */}
        <div className="text-center mb-8">

          <motion.div
            whileHover={{
              rotate: 6,
              scale: 1.05,
            }}
            className="mx-auto w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center"
          >
            <ShieldCheck
              size={38}
              className="text-black"
            />
          </motion.div>

          <h2 className="mt-6 text-4xl font-black">
            {isLogin
              ? "Admin Login"
              : "Create Account"}
          </h2>

          <p className="mt-3 text-white/60">
            {isLogin
              ? "Secure dashboard access"
              : "Create admin profile"}
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* NAME */}
          {!isLogin && (
            <div className="relative">

              <User
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
              />

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-12 py-4 outline-none backdrop-blur-xl focus:border-cyan-400"
              />
            </div>
          )}

          {/* EMAIL */}
          <div className="relative">

            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Admin Email"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-12 py-4 outline-none backdrop-blur-xl focus:border-cyan-400"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">

            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-12 py-4 pr-14 outline-none backdrop-blur-xl focus:border-cyan-400"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 py-4 font-bold text-black text-lg"
          >
            <span className="flex items-center justify-center gap-2">

              {loading
                ? "Please Wait..."
                : isLogin
                ? "Access Dashboard"
                : "Create Account"}

              <ArrowRight size={20} />
            </span>
          </motion.button>
        </form>

        {/* SWITCH */}
        <div className="mt-8 text-center text-white/60">

          {isLogin
            ? "Don’t have an account?"
            : "Already have an account?"}

          <button
            onClick={() =>
              setIsLogin(!isLogin)
            }
            className="ml-2 text-cyan-400 font-semibold"
          >
            {isLogin
              ? "Sign Up"
              : "Login"}
          </button>
        </div>
      </div>
    </section>
  );
}