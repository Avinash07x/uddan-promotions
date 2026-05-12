import express from "express";

import authMiddleware from "../middleware/authMiddleware.js";

import Admin from "../models/Admin.js";

const router = express.Router();

router.get(
  "/",
  authMiddleware,

  async (req, res) => {
    try {
      const admin =
        await Admin.findById(
          req.user.id
        );

      res.json({
        success: true,

        admin: {
          name: admin.name,
          email: admin.email,
        },

        activity: [],
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

export default router;