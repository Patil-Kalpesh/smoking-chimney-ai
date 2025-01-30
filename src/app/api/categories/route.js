import { connectionStr } from "@/app/lib/db";
import { Category } from "@/lib/categoryModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({result:true})
  
// }

export async function POST(req) {
  const payload = await req.json()

  await mongoose.connect(connectionStr);
  let category = new Category({
    payload


  })
  const result = await category.save();
  return NextResponse.json({result, success:true})

 

}
