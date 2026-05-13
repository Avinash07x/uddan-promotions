import mongoose from "mongoose";

/*  REPLY SCHEMA  */

const replySchema =
  new mongoose.Schema(
    {
      message: {
        type: String,
        required: true,
        trim: true,
      },

      repliedAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      _id: false,
    }
  );

/*  CONTACT SCHEMA  */

const contactSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },

      email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
      },

      phone: {
        type: String,
        default: "",
        trim: true,
      },

      company: {
        type: String,
        default: "",
        trim: true,
      },

      helpType: {
        type: String,
        default: "",
        trim: true,
      },

      budget: {
        type: String,
        default: "",
        trim: true,
      },

      bestTime: {
        type: String,
        default: "",
        trim: true,
      },

      targetGoLive: {
        type: String,
        default: "",
        trim: true,
      },

      preferredContact: {
        type: String,
        default: "",
        trim: true,
      },

      keepUpdated: {
        type: Boolean,
        default: false,
      },

      message: {
        type: String,
        required: true,
        trim: true,
      },

      status: {
        type: String,

        enum: [
          "unread",
          "read",
          "replied",
        ],

        default: "unread",
      },

      reply: replySchema,
    },
    {
      timestamps: true,
    }
  );

/*  EXPORT MODEL  */

const Contact =
  mongoose.model(
    "Contact",
    contactSchema
  );

export default Contact;