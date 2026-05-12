import express from "express";
import nodemailer from "nodemailer";

import Contact from "../models/Contact.js";
import ContactOptions from "../models/ContactOptions.js";

const router = express.Router();

/* ================= EMAIL ================= */

const transporter =
  nodemailer.createTransport({
    service: "gmail",

    auth: {
      user:
        process.env.EMAIL_USER,

      pass:
        process.env.EMAIL_PASS,
    },
  });

/* ================= GET OPTIONS ================= */

router.get(
  "/options",
  async (req, res) => {
    try {
      let options =
        await ContactOptions.findOne();

      if (!options) {
        options =
          await ContactOptions.create({
            helpOptions: [
              "Web Development",
              "Mobile App",
              "Digital Marketing",
              "UI/UX Design",
              "SEO",
              "AI Automation",
            ],

            budgetOptions: [
              "₹10k - ₹50k",
              "₹50k - ₹1L",
              "₹1L - ₹5L",
              "₹5L+",
            ],

            goLiveOptions: [
              "Immediately",
              "1 Month",
              "2-3 Months",
              "Flexible",
            ],

            preferredContactOptions:
              [
                "Email",
                "Phone",
                "WhatsApp",
                "Google Meet",
              ],

            bestTimeOptions: [
              "Morning",
              "Afternoon",
              "Evening",
            ],
          });
      }

      res.json({
        success: true,
        options,
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

/* ================= GET CONTACTS ================= */

router.get("/", async (req, res) => {
  try {
    const contacts =
      await Contact.find().sort({
        createdAt: -1,
      });

    res.json({
      success: true,
      contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
});

/* ================= CREATE CONTACT ================= */

router.post("/", async (req, res) => {
  try {
    const contact =
      await Contact.create(
        req.body
      );

    /* EMAIL TO ADMIN */

    await transporter.sendMail({
      from:
        process.env.EMAIL_USER,

      to:
        process.env.EMAIL_USER,

      subject:
        "New Contact Inquiry",

      html: `
        <h2>New Inquiry</h2>

        <p><b>Name:</b> ${contact.name}</p>

        <p><b>Company:</b> ${contact.company}</p>

        <p><b>Email:</b> ${contact.email}</p>

        <p><b>Phone:</b> ${contact.phone}</p>

        <p><b>Help Type:</b> ${contact.helpType}</p>

        <p><b>Budget:</b> ${contact.budget}</p>

        <p><b>Go Live:</b> ${contact.targetGoLive}</p>

        <p><b>Preferred Contact:</b> ${contact.preferredContact}</p>

        <p><b>Best Time:</b> ${contact.bestTime}</p>

        <p><b>Message:</b></p>

        <p>${contact.message}</p>
      `,
    });

    res.json({
      success: true,
      contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
});

/* ================= MARK READ ================= */

router.put(
  "/read/:id",
  async (req, res) => {
    try {
      const contact =
        await Contact.findByIdAndUpdate(
          req.params.id,
          {
            status: "read",
          },
          {
            new: true,
          }
        );

      res.json({
        success: true,
        contact,
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

/* ================= REPLY ================= */

router.post(
  "/reply/:id",
  async (req, res) => {
    try {
      const { message } =
        req.body;

      const contact =
        await Contact.findById(
          req.params.id
        );

      if (!contact) {
        return res.status(404).json({
          success: false,
          message:
            "Contact not found",
        });
      }

      contact.reply = {
        message,
      };

      contact.status =
        "replied";

      await contact.save();

      /* SEND EMAIL */

      await transporter.sendMail({
        from:
          process.env.EMAIL_USER,

        to: contact.email,

        subject:
          "Reply From Uddan Promotions",

        html: `
          <div style="font-family:sans-serif">
            <h2>Hello ${contact.name}</h2>

            <p>${message}</p>

            <br/>

            <p>
              Regards,
              <br/>
              Uddan Promotions
            </p>
          </div>
        `,
      });

      res.json({
        success: true,
        contact,
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

/* ================= DELETE ================= */

router.delete(
  "/:id",
  async (req, res) => {
    try {
      await Contact.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
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