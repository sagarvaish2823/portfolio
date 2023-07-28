import db from "@/middleware/mongoose";
import User from "@/model/User";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  await db.connect();
  const body = await req.json();
  const { name, email, address } = body;
  await User.create({
    name,
    email,
    address,
  });

  return new Response("ok");
}

export async function GET(req, res) {
  await db.connect();
  const body = await User.find();
  // await db.disconnect();
  return new NextResponse(body);
}
