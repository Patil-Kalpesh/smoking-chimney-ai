import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Blog title is required"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true,
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
    seoMeta: {
      title: {
        type: String,
        required: [true, "SEO title is required"],
      },
      description: {
        type: String,
        required: [true, "SEO description is required"],
      },
      keywords: {
        type: [String],
        default: [],
      },
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
