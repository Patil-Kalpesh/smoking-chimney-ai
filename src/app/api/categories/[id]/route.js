import { Category } from "@/lib/categoryModel";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  await dbConnect();

  try {
    const category = await Category.findById(id);
    if (!category) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: category });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;
  await dbConnect();

  try {
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
      return NextResponse.json(
        { success: false, message: "Category not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, message: "Category deleted" });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 }
    );
  }
}
