import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { consultationSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    // TODO: Implement rate limiting (e.g., using @upstash/ratelimit or similar)

    const body = await request.json();

    const parsed = consultationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    await db.consultationRequest.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        whatsapp: data.whatsapp || null,
        serviceType: data.serviceType || null,
        subject: data.subject,
        description: data.description,
        urgency: data.urgency,
        status: "pending",
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Consultation request submitted successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Consultation submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Internal server error. Please try again later.",
      },
      { status: 500 }
    );
  }
}
