// models/CompanyInfo.js

import mongoose from "mongoose";

const companyInfoSchema =
  new mongoose.Schema(
    {
      companyName: {
        type: String,
        default:
          "Uddan Promotions",
      },

      tagline: {
        type: String,
        default:
          "Digital Growth Agency",
      },

      logo: {
        type: String,
        default: "",
      },

      phone: {
        type: String,
        default: "",
      },

      email: {
        type: String,
        default: "",
      },

      facebook: {
        type: String,
        default: "",
      },

      instagram: {
        type: String,
        default: "",
      },

      linkedin: {
        type: String,
        default: "",
      },

      youtube: {
        type: String,
        default: "",
      },

      cin: {
        type: String,
        default: "",
      },

      workingHours: {
        type: String,
        default: "",
      },

      description: {
        type: String,
        default: "",
      },

      locations: [
        {
          name: {
            type: String,
            default: "",
          },

          mapLink: {
            type: String,
            default: "",
          },
        },
      ],

      certifications: [
        {
          type: String,
        },
      ],
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "CompanyInfo",
  companyInfoSchema
);