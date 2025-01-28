import dbConnect from "@/utils/dbConnect";
import Blog from "@/models/Blog";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      try {
        const blog = await Blog.findById(id).populate("category");
        res.status(200).json(blog);
      } catch (error) {
        res.status(500).json({ error: "Blog not found" });
      }
      break;
    case "PUT":
      try {
        const { title, content, category, metaTitle, metaDescription, keywords, image } = req.body;
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const updatedBlog = await Blog.findByIdAndUpdate(
          id,
          { title, content, category, slug, metaTitle, metaDescription, keywords, image },
          { new: true }
        );
        res.status(200).json(updatedBlog);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
    case "DELETE":
      try {
        await Blog.findByIdAndDelete(id);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
