import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";




/*  ROUTES  */
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import faqRoutes from "./routes/faqRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import companyInfoRoutes from "./routes/companyInfoRoutes.js";
import contactOptionsRoutes from "./routes/contactOptionsRoutes.js";

/*  APP  */
const app = express();

/*  MIDDLEWARE  */
app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

/*  STATIC  */
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

/*  DB CONNECT  */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err.message));

/*  ROUTES  */
app.get("/", (req, res) => {
  res.send("🚀 Backend Running");
});

app.get("/api/test", (req, res) => {
  res.json({ success: true, message: "API Working" });
});

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/faq", faqRoutes);
app.use("/api/testimonial", testimonialRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/company-info", companyInfoRoutes);
app.use("/api/contact/options", contactOptionsRoutes);

/*  ERROR  */
app.use((err, req, res, next) => {
  console.log("❌ ERROR:", err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

/*  START  */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});