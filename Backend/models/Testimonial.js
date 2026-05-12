import mongoose from "mongoose";

const testimonialSchema =
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
      },

      role: {
        type: String,
        required: true,
      },

      company: {
        type: String,
        required: true,
      },

      city: {
        type: String,
        required: true,
      },

      quote: {
        type: String,
        required: true,
      },

      row: {
        type: Number,
        enum: [1, 2],
        default: 1,
      },
    },
    {
      timestamps: true,
    }
  );

const Testimonial =
  mongoose.models.Testimonial ||
  mongoose.model(
    "Testimonial",
    testimonialSchema
  );

export default Testimonial;