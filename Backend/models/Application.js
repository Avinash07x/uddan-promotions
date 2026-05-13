import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },

    jobTitle: {
      type: String,
      required: true,
    },

    department: {
      type: String,
    },

    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
    },

    coverLetter: {
      type: String,
    },

    resume: {
      type: String,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "reviewed",
        "shortlisted",
        "rejected",
        "replied",
      ],
      default: "pending",
    },

    adminReply: {
      message: String,

      repliedAt: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Application",
  applicationSchema
);