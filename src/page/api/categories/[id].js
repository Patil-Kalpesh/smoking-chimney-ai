import dbConnect from "@/utils/dbConnect";
import Category from "@/models/Category";

export default async function handler(req, res) {
  await dbConnect();
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "PUT":
      try {
        const { name } = req.body;
        const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        const updatedCategory = await Category.findByIdAndUpdate(
          id,
          { name, slug },
          { new: true }
        );
        res.status(200).json(updatedCategory);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
      break;
    case "DELETE":
      try {
        await Category.findByIdAndDelete(id);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
      break;
    default:
      res.setHeader("Allow", ["PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
