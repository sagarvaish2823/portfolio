import db from "@/middleware/mongoose";
import User from "@/model/User";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await db.connect();
  const body = await req.json();
  const { name, email, message, company, budget, website } = body;
  await User.create({
    name,
    email,
    message,
    company,
    budget,
    website,
  });

  return new NextResponse("ok");
}

// export async function GET(req, res) {
//   await db.connect();
//   const body = await User.find();
//   return new NextResponse(body);
// }
