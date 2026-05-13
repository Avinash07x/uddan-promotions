import express from "express";

import { protectAdmin } from "../middleware/authMiddleware.js";

import Admin from "../models/Admin.js";

const router = express.Router();

/* ========
   DASHBOARD DATA
======== */

router.get(
  "/",
  protectAdmin,

  async (req, res) => {
    try {
      // FIND ADMIN
      const admin =
        await Admin.findById(
          req.user.id
        ).select("-password");

      // STATS
      const stats = [
        {
          title: "Contacts",
          value: 120,
          growth: "+12%",
          icon: "Users",
          color:
            "from-cyan-500 to-blue-500",
        },

        {
          title: "Blogs",
          value: 45,
          growth: "+8%",
          icon: "ShoppingCart",
          color:
            "from-pink-500 to-rose-500",
        },

        {
          title: "FAQS",
          value: 28,
          growth: "+4%",
          icon: "CreditCard",
          color:
            "from-yellow-400 to-orange-500",
        },

        {
          title: "Testimonials",
          value: 15,
          growth: "+18%",
          icon: "ShieldCheck",
          color:
            "from-green-400 to-emerald-500",
        },
      ];

      // ACTIVITY
      const activity = [
        {
          action:
            "Added new blog post",
          time: "2 min ago",
        },

        {
          action:
            "Updated company info",
          time: "10 min ago",
        },

        {
          action:
            "Replied to contact message",
          time: "25 min ago",
        },
      ];

      res.status(200).json({
        success: true,

        admin,

        stats,

        activity,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,

        message:
          "Dashboard Error",
      });
    }
  }
);

export default router;