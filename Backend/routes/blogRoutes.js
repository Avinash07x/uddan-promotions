import express from "express";
import multer from "multer";
import path from "path";

import Blog from "../models/Blog.js";

const router = express.Router();

//  MULTER STORAGE 
const storage =
  multer.diskStorage({
    destination: function (
      req,
      file,
      cb
    ) {
      cb(null, "uploads/");
    },

    filename: function (
      req,
      file,
      cb
    ) {
      cb(
        null,
        Date.now() +
          path.extname(
            file.originalname
          )
      );
    },
  });

const upload = multer({
  storage,
});

//  GET ALL BLOGS 
router.get("/", async (req, res) => {
  try {
    const blogs =
      await Blog.find().sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
});

//  GET SINGLE BLOG 
router.get(
  "/:slug",
  async (req, res) => {
    try {
      const blog =
        await Blog.findOne({
          slug: req.params.slug,
        });

      res.json({
        success: true,
        blog,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  }
);

//  CREATE BLOG 
router.post(
  "/",
  upload.single("image"),
  async (req, res) => {
    try {
      const {
        title,
        category,
        description,
        author,
        read,
        featured,
      } = req.body;

      const blog =
        await Blog.create({
          title,
          category,
          description,
          author,
          read,
          featured,
          image:
            "/uploads/" +
            req.file.filename,
        });

      res.json({
        success: true,
        blog,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  }
);

//  UPDATE BLOG 
router.put(
  "/:id",
  upload.single("image"),
  async (req, res) => {
    try {
      const {
        title,
        category,
        description,
        author,
        read,
        featured,
      } = req.body;

      const updatedData = {
        title,
        category,
        description,
        author,
        read,
        featured,

        slug: title
          ?.toLowerCase()
          .replace(/ /g, "-")
          .replace(
            /[^\w-]+/g,
            ""
          ),
      };

      // IF NEW IMAGE
      if (req.file) {
        updatedData.image =
          "/uploads/" +
          req.file.filename;
      }

      const blog =
        await Blog.findByIdAndUpdate(
          req.params.id,
          updatedData,
          {
            new: true,
          }
        );

      res.json({
        success: true,
        blog,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  }
);

//  DELETE BLOG 
router.delete(
  "/:id",
  async (req, res) => {
    try {
      await Blog.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "Blog Deleted Successfully",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  }
);

export default router;