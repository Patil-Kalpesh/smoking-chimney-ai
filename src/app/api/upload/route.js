import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
    }

    // Convert file to Buffer
    const buffer = await file.arrayBuffer();
    const base64File = `data:${file.type};base64,${Buffer.from(buffer).toString("base64")}`;

    // Upload directly to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload(base64File, {
      folder: "nextjs_uploads", // Change folder if needed
      resource_type: "auto",
    });

    return NextResponse.json({ success: true, url: uploadResponse.secure_url }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
