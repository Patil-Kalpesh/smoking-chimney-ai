import { Blog } from "@/lib/Blog";
import dbConnect from "@/utils/dbConnect";


export async function GET(req, { params }) {
  await dbConnect();

  const { id } = params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return new Response(JSON.stringify({ success: false, message: "Blog not found" }), { status: 404 });
    }
    return new Response(JSON.stringify({ success: true, data: blog }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}

export async function PUT(req, { params }) {
  await dbConnect();

  const { id } = params;
  const body = await req.json();

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, body, { new: true, runValidators: true });
    if (!updatedBlog) {
      return new Response(JSON.stringify({ success: false, message: "Blog not found" }), { status: 404 });
    }
    return new Response(JSON.stringify({ success: true, data: updatedBlog }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  await dbConnect();

  const { id } = params;

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return new Response(JSON.stringify({ success: false, message: "Blog not found" }), { status: 404 });
    }
    return new Response(JSON.stringify({ success: true, message: "Blog deleted successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 500 });
  }
}
