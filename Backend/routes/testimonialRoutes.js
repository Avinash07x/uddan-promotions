import express from "express";
import Testimonial from "../models/Testimonial.js";

const router = express.Router();


//  GET ALL 
router.get("/", async (req, res) => {
  try {
    const testimonials =
      await Testimonial.find().sort({
        createdAt: -1,
      });

    res.status(200).json({
      success: true,
      testimonials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        "Failed to fetch testimonials",
      error: error.message,
    });
  }
});


//  CREATE 
router.post("/", async (req, res) => {
  try {
    const {
      name,
      role,
      company,
      city,
      quote,
      row,
    } = req.body;

    if (
      !name ||
      !role ||
      !company ||
      !city ||
      !quote
    ) {
      return res.status(400).json({
        success: false,
        message:
          "All fields are required",
      });
    }

    const testimonial =
      await Testimonial.create({
        name,
        role,
        company,
        city,
        quote,
        row,
      });

    res.status(201).json({
      success: true,
      testimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});


//  UPDATE 
router.put("/:id", async (req, res) => {
  try {
    const updated =
      await Testimonial.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message:
          "Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      testimonial: updated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});


//  DELETE 
router.delete("/:id", async (req, res) => {
  try {
    const deleted =
      await Testimonial.findByIdAndDelete(
        req.params.id
      );

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message:
          "Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      message:
        "Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

export default router;