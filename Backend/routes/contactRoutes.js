import express from "express";
import Contact from "../models/Contact.js";
import sendEmail from "../middleware/sendEmail.js";

const router = express.Router();

//  GET ALL 
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      contacts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


//  CREATE 
router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create({
      ...req.body,
      status: "unread",
    });

    return res.status(201).json({
      success: true,
      contact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


//  MARK AS READ 
router.put("/read/:id", async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status: "read" },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      contact,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


//  REPLY 
router.post("/reply/:id", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    // update DB first
    contact.status = "replied";
    contact.reply = {
      message,
      repliedAt: new Date(),
    };

    await contact.save();

    // send response immediately
    res.status(200).json({
      success: true,
      message: "Reply saved successfully",
      contact,
    });

    // email background (non-blocking safe)
    setImmediate(async () => {
      try {
        await sendEmail({
          to: contact.email,
          subject: "Reply from Uddan Promotions",
          html: `
            <div style="font-family:Arial;padding:20px">
              <h2>Hello ${contact.name},</h2>
              <p>${message}</p>
              <br/>
              <p>Regards,<br/><b>Uddan Promotions Team</b></p>
            </div>
          `,
        });

        console.log("✅ Email sent successfully");
      } catch (err) {
        console.log("❌ Email failed:", err.message);
      }
    });

  } catch (error) {
    console.log("❌ REPLY ERROR:", error.message);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});


//  DELETE 
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;