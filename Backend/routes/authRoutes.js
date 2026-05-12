import express from "express";

import {
  registerAdmin,
  loginAdmin,
} from "../controllers/authController.js";

const router = express.Router();

// Register
router.post("/register", registerAdmin);

// Login
router.post("/login", loginAdmin);

export default router;