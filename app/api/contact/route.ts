import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, phone, email, message } = data;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: "Please fill the details!" },
        { status: 400 }
      );
    }

    await prisma.contact.create({
      data: {
        name,
        phone,
        email,
        message,
      },
    });

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
