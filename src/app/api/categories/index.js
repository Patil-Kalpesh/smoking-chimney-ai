// import { Category } from "@/lib/categoryModel";
// import dbConnect from "@/lib/dbConnect";

// export default async function handler(req, res) {
//   const { method } = req;
//   await dbConnect();

//   switch (method) {
//     case "GET":
//       try {
//         console.log("get hit")

//         const categories = await Category.find({});
//         res.status(200).json({ success: true, data: categories });
//       } catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//       }
//       break;

//     case "POST":
//       try {
//         const category = await Category.create(req.body);
//         res.status(201).json({ success: true, data: category });
//       } catch (error) {
//         res.status(400).json({ success: false, message: error.message });
//       }
//       break;

//     default:
//       res.setHeader("Allow", ["GET", "POST"]);
//       res.status(405).end(`Method ${method} Not Allowed`);
//       break;
//   }
// }
