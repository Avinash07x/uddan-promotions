import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

// ROUTES
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import faqRoutes from "./routes/faqRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import companyInfoRoutes from "./routes/companyInfoRoutes.js";

// CONFIG
dotenv.config();

const app = express();

//  MIDDLEWARE 
app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

//  STATIC FOLDER 
app.use(
  "/uploads",
  express.static(
    path.join(process.cwd(), "uploads")
  )
);

//  MONGODB 
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log(
      "✅ MongoDB Connected"
    );
  })
  .catch((error) => {
    console.log(
      "❌ MongoDB Error:",
      error.message
    );
  });

//  HOME 
app.get("/", (req, res) => {
  res.send(
    "🚀 Backend Running Successfully"
  );
});

//  TEST API 
app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message:
      "API Working Successfully",
  });
});

//  ROUTES 
app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/dashboard",
  dashboardRoutes
);

app.use(
  "/api/contact",
  contactRoutes
);

app.use(
  "/api/blog",
  blogRoutes
);

app.use(
  "/api/faq",
  faqRoutes
);

app.use(
  "/api/testimonial",
  testimonialRoutes
);

app.use(
  "/api/job",
  jobRoutes
);

app.use(
  "/api/company-info",
  companyInfoRoutes
);


//  PORT 
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    ` Server running on port ${PORT}`
  );
});