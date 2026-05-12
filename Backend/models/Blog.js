import mongoose from "mongoose";

const blogSchema =
  new mongoose.Schema(
    {
      category: {
        type: String,
        required: true,
      },

      title: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },

      image: {
        type: String,
        required: true,
      },

      author: {
        type: String,
        default: "Admin",
      },

      featured: {
        type: Boolean,
        default: false,
      },

      read: {
        type: String,
        default: "5 min read",
      },

      slug: {
        type: String,
      },

      icon: {
        type: String,
        default: "Sparkles",
      },
    },
    {
      timestamps: true,
    }
  );

//  AUTO SLUG 
blogSchema.pre(
  "save",
  function (next) {
    this.slug = this.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

    next();
  }
);

export default mongoose.model(
  "Blog",
  blogSchema
);