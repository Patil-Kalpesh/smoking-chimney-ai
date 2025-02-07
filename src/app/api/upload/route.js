import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import { promisify } from "util";
import mime from "mime-types";

const writeFile = promisify(fs.writeFile);

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
    }

    // Convert file to a Buffer
    const buffer = await file.arrayBuffer();
    const fileExtension = mime.extension(file.type);
    const fileName = `${Date.now()}.${fileExtension}`;

    // Define file path
    const filePath = path.join(process.cwd(), "public/uploads", fileName);

    // Write the file to disk
    await writeFile(filePath, Buffer.from(buffer));

    // Generate accessible URL
    const fileUrl = `/uploads/${fileName}`;

    return NextResponse.json({ success: true, url: fileUrl }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
