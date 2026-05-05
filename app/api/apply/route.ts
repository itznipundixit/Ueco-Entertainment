import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, type } = body;

    if (!name || !email || !phone || !type) {
      return NextResponse.json(
        { message: "Required fields missing" },
        { status: 400 }
      );
    }

    console.log("New Application:", body);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
