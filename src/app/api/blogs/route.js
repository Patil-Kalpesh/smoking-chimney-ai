import { Blog } from "@/lib/Blog";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from 'next/server';

export async function POST(req) {
  await dbConnect();

  const { title, category, description, seoTitle, seoDescription, seoKeywords,image } = await req.json();

  if (!title || !category || !description) {
    return NextResponse.json(
      { success: false, message: "Title, category, and description are required!" },
      { status: 400 }
    );
  }

  try {
    const newBlog = new Blog({
      title,
      category,
      description,
      seoTitle,
      seoDescription,
      image,
      seoKeywords,
    });

    const savedBlog = await newBlog.save();
    return NextResponse.json({ success: true, data: savedBlog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}

export async function GET(req) {
  await dbConnect();

  try {
    const blogs = await Blog.find({});
    return NextResponse.json({ success: true, data: blogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
