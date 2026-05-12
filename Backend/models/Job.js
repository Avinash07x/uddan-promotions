import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    department: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      required: true,
    },

    location: {
      type: String,
      required: true,
    },

    experience: {
      type: String,
      required: true,
    },

    openings: {
      type: String,
      required: true,
    },

    mode: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    posted: {
      type: String,
      default: "Today",
    },

    description: {
      type: String,
      required: true,
    },

    skills: {
      type: [String],
      default: [],
    },

    benefits: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Job",
  jobSchema
);