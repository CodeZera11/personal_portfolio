import { connectToDb } from "@/db/ConnectToDB";
import Contact from "@/models/contactModel";
import { NextResponse } from "next/server";

connectToDb();

export async function POST(request) {
  try {
    const data = await request.json();

    const { name, phone, email, message } = data;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Please fill the details!" },
        { status: 400 }
      );
    }

    const client = await new Contact({
      name,
      phone,
      email,
      message,
    });

    await client.save();

    return NextResponse.json(
      { message: "I'll contact you soon" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
}
