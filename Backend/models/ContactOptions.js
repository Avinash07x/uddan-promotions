import mongoose from "mongoose";

const contactOptionsSchema =
  new mongoose.Schema(
    {
      helpOptions: [String],

      budgetOptions: [String],

      goLiveOptions: [String],

      preferredContactOptions:
        [String],

      bestTimeOptions: [String],
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "ContactOptions",
  contactOptionsSchema
);