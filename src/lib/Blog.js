import mongoose from "mongoose";
import slugify from "slugify";

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }, 
    seoTitle: { type: String, required: false },
    seoDescription: { type: String, required: false },
    seoKeywords: { type: String, required: false },
  },
  { timestamps: true }
);

// Auto-generate slug before saving
blogSchema.pre("save", function (next) {
  if (!this.slug) {
    this.slug = slugify(this.title, { lower: true, strict: true });
  }
  next();
});
export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
