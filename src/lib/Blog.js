import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, 
    seoTitle: { type: String, required: false },
    seoDescription: { type: String, required: false },
    seoKeywords: { type: String, required: false },
  },
  { timestamps: true }
);

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
