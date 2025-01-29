import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/Blog";
import Category from "@/models/Category";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  await dbConnect();

  const { title, slug, content, categoryId, image, seoMeta } = req.body;

  // Validate the request body
  if (!title || !slug || !content || !categoryId || !image || !seoMeta) {
    return res.status(400).json({ success: false, message: "All fields are required" });
  }

  try {
    // Check if the slug already exists
    const existingBlog = await Blog.findOne({ slug });
    if (existingBlog) {
      return res.status(400).json({ success: false, message: "Slug already exists" });
    }

    // Ensure the category exists
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ success: false, message: "Category not found" });
    }

    // Create the blog
    const blog = await Blog.create({
      title,
      slug,
      content,
      category: categoryId,
      image,
      seoMeta,
    });

    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
}
