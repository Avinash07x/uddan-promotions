import express from "express";
import ContactOptions from "../models/ContactOptions.js";

const router = express.Router();

/* GET OPTIONS */
router.get("/", async (req, res) => {
  try {
    const options = await ContactOptions.findOne();

    return res.status(200).json({
      success: true,
      options,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;