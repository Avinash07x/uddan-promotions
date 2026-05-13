import Contact from "../models/Contact.js";

/* 
   GET CONTACTS
 */

export const getContacts =
  async (req, res) => {
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
      console.log(error);

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

/* 
   DELETE CONTACT
 */

export const deleteContact =
  async (req, res) => {
    try {
      await Contact.findByIdAndDelete(
        req.params.id
      );

      res.json({
        success: true,
        message:
          "Contact deleted successfully",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

/* 
   MARK AS READ
 */

export const markAsRead =
  async (req, res) => {
    try {
      const contact =
        await Contact.findByIdAndUpdate(
          req.params.id,
          {
            status: "read",
          },
          { new: true }
        );

      res.json({
        success: true,
        contact,
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

/* 
   REPLY CONTACT
 */

export const replyContact =
  async (req, res) => {
    try {
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({
          success: false,
          message:
            "Reply message required",
        });
      }

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

      contact.status = "replied";

      contact.reply = {
        message,
        repliedAt: new Date(),
      };

      await contact.save();

      res.json({
        success: true,
        message:
          "Reply sent successfully",
      });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };