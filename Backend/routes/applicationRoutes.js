import express from "express";

import Application from "../models/Application.js";

import Job from "../models/Job.js";

import upload from "../middleware/upload.js";

import applyemail from "../middleware/applyemail.js";

const router =
  express.Router();

/*  APPLY JOB  */

router.post(
  "/",
  upload.single("resume"),
  async (req, res) => {
    try {
      const {
        fullName,
        email,
        phone,
        experience,
        coverLetter,
        jobId,
      } = req.body;

      const job =
        await Job.findById(
          jobId
        );

      if (!job) {
        return res
          .status(404)
          .json({
            success: false,
            message:
              "Job not found",
          });
      }

      const application =
        await Application.create({
          jobId,

          jobTitle:
            job.title,

          department:
            job.department,

          fullName,

          email,

          phone,

          experience,

          coverLetter,

          resume:
            req.file
              ?.filename ||
            "",

          status:
            "pending",
        });

      /* EMAIL USER */

      await applyemail({
        to: email,

        subject:
          "Application Submitted",

        html: `
          <h2>Hello ${fullName}</h2>

          <p>
            Your application for 
            <b>${job.title}</b>
            has been submitted successfully.
          </p>

          <p>
            We will contact you soon.
          </p>
        `,
      });

      res.status(201).json({
        success: true,

        message:
          "Application submitted",

        application,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,

        message:
          "Server Error",
      });
    }
  }
);

/*  GET ALL  */

router.get(
  "/",
  async (req, res) => {
    try {
      const applications =
        await Application.find()
          .sort({
            createdAt: -1,
          });

      res.json({
        success: true,

        applications,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
      });
    }
  }
);

/*  REPLY  */

router.post(
  "/reply/:id",
  async (req, res) => {
    try {
      const { message } =
        req.body;

      const application =
        await Application.findById(
          req.params.id
        );

      if (!application) {
        return res
          .status(404)
          .json({
            success: false,
          });
      }

      application.status =
        "replied";

      application.adminReply =
        {
          message,

          repliedAt:
            new Date(),
        };

      await application.save();

      /* SEND EMAIL */

      await applyemail({
        to: application.email,

        subject:
          "Regarding Your Job Application",

        html: `
          <h2>Hello ${application.fullName}</h2>

          <p>${message}</p>

          <br/>

          <p>
            Thanks & Regards
          </p>
        `,
      });

      res.json({
        success: true,

        message:
          "Reply sent successfully",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
      });
    }
  }
);

/*  DELETE  */

router.delete(
  "/:id",
  async (req, res) => {
    try {
      await Application.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,

        message:
          "Deleted successfully",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
      });
    }
  }
);

export default router;