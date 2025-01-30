import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export const Category =
  mongoose.models.categories || mongoose.model("categories", categorySchema);
