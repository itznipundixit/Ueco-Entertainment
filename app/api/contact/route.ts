import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Required fields missing" },
        { status: 400 }
      );
    }

    // 🔥 Yahan aap:
    // - Database me save kar sakte ho
    // - Email send kar sakte ho (nodemailer)
    // - PHP backend ko forward kar sakte ho

    console.log("New Enquiry:", body);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
