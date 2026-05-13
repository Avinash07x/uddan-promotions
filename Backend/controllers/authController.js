import Admin from "../models/Admin.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

/* 
   REGISTER ADMIN
 */

export const registerAdmin =
  async (req, res) => {
    try {
      const {
        name,
        email,
        password,
        secretKey,
      } = req.body;

      // SECRET KEY CHECK
      if (
        secretKey !==
        process.env.ADMIN_SECRET_KEY
      ) {
        return res.status(401).json({
          success: false,
          message:
            "Invalid Admin Secret Key",
        });
      }

      // EXISTING ADMIN
      const existingAdmin =
        await Admin.findOne({
          email,
        });

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
      const admin =
        await Admin.create({
          name,
          email,
          password:
            hashedPassword,
        });

      res.status(201).json({
        success: true,
        message:
          "Admin created successfully",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };

/* 
   LOGIN ADMIN
 */

export const loginAdmin =
  async (req, res) => {
    try {
      const { email, password } =
        req.body;

      // FIND ADMIN
      const admin =
        await Admin.findOne({
          email,
        });

      if (!admin) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid Email or Password",
        });
      }

      // MATCH PASSWORD
      const isMatch =
        await bcrypt.compare(
          password,
          admin.password
        );

      if (!isMatch) {
        return res.status(400).json({
          success: false,
          message:
            "Invalid Email or Password",
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
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
        },
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };