import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

import CompanyInfo from "../models/CompanyInfo.js";

const router = express.Router();

/* ================= CREATE UPLOAD FOLDER ================= */

if (!fs.existsSync("uploads")) {
  fs.mkdirSync("uploads");
}

/* ================= MULTER STORAGE ================= */

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

/* ================= MULTER ================= */

const upload = multer({
  storage,

  limits: {
    fileSize:
      5 * 1024 * 1024,
  },

  fileFilter: (
    req,
    file,
    cb
  ) => {
    const allowed =
      /jpg|jpeg|png|webp/;

    const ext =
      allowed.test(
        path.extname(
          file.originalname
        ).toLowerCase()
      );

    const mime =
      allowed.test(
        file.mimetype
      );

    if (ext && mime) {
      return cb(null, true);
    }

    cb(
      new Error(
        "Only Images Allowed"
      )
    );
  },
});

/* ================= UPLOAD LOGO ================= */

router.post(
  "/upload-logo",
  upload.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res
          .status(400)
          .json({
            success: false,
            message:
              "No Image Uploaded",
          });
      }

      res.json({
        success: true,

        image: `/uploads/${req.file.filename}`,
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

/* ================= GET ================= */

router.get("/", async (req, res) => {
  try {
    let info =
      await CompanyInfo.findOne();

    res.json({
      success: true,
      info,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
});

/* ================= CREATE / UPDATE ================= */

router.post("/", async (req, res) => {
  try {
    let info =
      await CompanyInfo.findOne();

    if (info) {
      info =
        await CompanyInfo.findByIdAndUpdate(
          info._id,
          req.body,
          {
            new: true,
          }
        );
    } else {
      info =
        await CompanyInfo.create(
          req.body
        );
    }

    res.json({
      success: true,
      info,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
});

export default router;