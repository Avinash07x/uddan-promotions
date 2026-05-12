import Admin from "../models/Admin.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

// ================= REGISTER =================
export const registerAdmin = async (
  req,
  res
) => {
  try {
    const {
      name,
      email,
      password,
    } = req.body;

    // CHECK EXISTING
    const existingAdmin =
      await Admin.findOne({ email });

    if (existingAdmin) {
      return res.status(400).json({
        success: false,
        message:
          "Admin already exists",
      });
    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // CREATE ADMIN
    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message:
        "Account created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= LOGIN =================
export const loginAdmin = async (
  req,
  res
) => {
  try {
    const { email, password } =
      req.body;

    // FIND ADMIN
    const admin =
      await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email",
      });
    }

    // CHECK PASSWORD
    const isMatch =
      await bcrypt.compare(
        password,
        admin.password
      );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // TOKEN
    const token = jwt.sign(
      {
        id: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      success: true,
      token,

      admin: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};