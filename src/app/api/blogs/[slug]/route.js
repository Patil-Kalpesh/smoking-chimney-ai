import { Blog } from "@/lib/Blog";
import dbConnect from "@/utils/dbConnect";

// 🟢 GET a Blog by Slug
export async function GET(req, { params }) {
  await dbConnect();

  try {
    const blog = await Blog.findOne({ slug: params.slug }); // ✅ Use findOne() with slug
    if (!blog) {
      return new Response(JSON.stringify({ success: false, message: "Blog not found" }), { status: 404 });
    }
    return new Response(JSON.stringify({ success: true, data: blog }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}

// 🟢 UPDATE a Blog by Slug
export async function PUT(req, { params }) {
  await dbConnect();

  try {
    const body = await req.json();
    const updatedBlog = await Blog.findOneAndUpdate({ slug: params.slug }, body, { new: true, runValidators: true });

    if (!updatedBlog) {
      return new Response(JSON.stringify({ success: false, message: "Blog not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, data: updatedBlog }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}

// 🟢 DELETE a Blog by Slug
export async function DELETE(req, { params }) {
  await dbConnect();

  try {
    const deletedBlog = await Blog.findOneAndDelete({ slug: params.slug }); // ✅ Use findOneAndDelete()

    if (!deletedBlog) {
      return new Response(JSON.stringify({ success: false, message: "Blog not found" }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, message: "Blog deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}
