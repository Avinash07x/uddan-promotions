import mongoose from "mongoose";

const replySchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
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

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      default: "",
    },

    helpType: {
      type: String,
      default: "",
    },

    budget: {
      type: String,
      default: "",
    },

    targetGoLive: {
      type: String,
      default: "",
    },

    preferredContact: {
      type: String,
      default: "",
    },

    bestTime: {
      type: String,
      default: "",
    },

    keepUpdated: {
      type: Boolean,
      default: false,
    },

    message: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["unread", "read", "replied"],
      default: "unread",
    },

    reply: replySchema,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Contact",
  contactSchema
);