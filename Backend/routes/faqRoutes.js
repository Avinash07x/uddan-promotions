import express from "express";

import FAQ from "../models/FAQ.js";

const router = express.Router();

//  GET ALL FAQ 
router.get("/", async (req, res) => {
  try {
    const faqs =
      await FAQ.find().sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      faqs,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

//  CREATE FAQ 
router.post("/", async (req, res) => {
  try {
    const faq = await FAQ.create({
      question:
        req.body.question,

      answer: req.body.answer,
    });

    res.json({
      success: true,
      faq,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

//  UPDATE FAQ 
router.put("/:id", async (req, res) => {
  try {
    const faq =
      await FAQ.findByIdAndUpdate(
        req.params.id,
        {
          question:
            req.body.question,

          answer:
            req.body.answer,
        },
        {
          new: true,
        }
      );

    res.json({
      success: true,
      faq,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
});

//  DELETE FAQ 
router.delete(
  "/:id",
  async (req, res) => {
    try {
      await FAQ.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "FAQ Deleted Successfully",
      });
    } catch (error) {
      res.json({
        success: false,
        message:
          error.message,
      });
    }
  }
);

export default router;