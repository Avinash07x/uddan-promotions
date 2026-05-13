import jwt from "jsonwebtoken";

import Admin from "../models/Admin.js";

export const protectAdmin = async (
  req,
  res,
  next
) => {
  try {
    let token;

    /* TOKEN */

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith(
        "Bearer"
      )
    ) {
      token =
        req.headers.authorization.split(
          " "
        )[1];
    }

    /* NO TOKEN */

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    /* VERIFY */

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    /* CHECK ADMIN */

    const admin =
      await Admin.findById(
        decoded.id
      );

    // ADMIN DELETED
    if (!admin) {
      return res.status(401).json({
        success: false,
        message:
          "Admin account deleted",
      });
    }

    /* SAVE USER */

    req.user = {
      id: admin._id,
      email: admin.email,
    };

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};