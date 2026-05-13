import mongoose from "mongoose";

import bcrypt from "bcryptjs";

import dotenv from "dotenv";

import Admin from "./models/Admin.js";

// CONFIG
dotenv.config();

/* 
   CREATE ADMIN
 */

const createAdmin = async () => {
  try {
    // DB CONNECT
    await mongoose.connect(
      process.env.MONGO_URI
    );

    console.log(
      "✅ MongoDB Connected"
    );

    // CHECK EXISTING ADMIN
    const existingAdmin =
      await Admin.findOne({
        email:
          "itsavinash0@gmail.com",
      });

    if (existingAdmin) {
      console.log(
        "⚠️ Admin already exists"
      );

      process.exit(0);
    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(
        "itsavinash0@gmail.com1",
        10
      );

    // CREATE ADMIN
    await Admin.create({
      name: "Avinash",

      email:
        "itsavinash0@gmail.com",

      password:
        hashedPassword,

      role: "super admin",
    });

    console.log(`


✅ SUPER ADMIN CREATED

`);

    process.exit(0);
  } catch (error) {
    console.log(
      "❌ Error:",
      error.message
    );

    process.exit(1);
  }
};

createAdmin();