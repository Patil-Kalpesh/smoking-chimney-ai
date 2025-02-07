import { NextResponse } from "next/server";
import { Category } from "@/lib/categoryModel";
import dbConnect from "@/utils/dbConnect";

export async function GET() {
  await dbConnect();
  try {
    console.log("GET request hit");
    const categories = await Category.find({});
    return NextResponse.json({ success: true, data: categories });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

export async function POST(req) {
  await dbConnect();
  try {
    const body = await req.json();
    const category = await Category.create(body);
    return NextResponse.json({ success: true, data: category }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
