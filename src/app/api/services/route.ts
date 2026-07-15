export const dynamic = "force-dynamic";

import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAdminSession } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get("locale");
    const includeAll = searchParams.get("all") === "true";

    // Check if admin is requesting all services
    if (includeAll) {
      const session = await getAdminSession();
      if (!session) {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
        );
      }
      const services = await db.service.findMany({
        orderBy: { sortOrder: "asc" },
      });
      return NextResponse.json(services);
    }

    // Public: only published services
    const where: Record<string, unknown> = { isPublished: true };
    if (locale) {
      where.locale = locale;
    }

    const services = await db.service.findMany({
      where,
      orderBy: { sortOrder: "asc" },
      select: {
        id: true,
        slug: true,
        title: true,
        titleEn: true,
        summary: true,
        summaryEn: true,
        icon: true,
        isFeatured: true,
        locale: true,
      },
    });

    return NextResponse.json(services);
  } catch (error) {
    console.error("Services GET error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    // Validate required fields
    if (!body.slug || !body.title) {
      return NextResponse.json(
        { error: "Slug and title are required" },
        { status: 400 }
      );
    }

    const service = await db.service.create({
      data: {
        slug: body.slug,
        locale: body.locale || "ar",
        title: body.title,
        titleEn: body.titleEn,
        summary: body.summary,
        summaryEn: body.summaryEn,
        content: body.content,
        contentEn: body.contentEn,
        icon: body.icon,
        sortOrder: body.sortOrder || 0,
        isPublished: body.isPublished || false,
        isFeatured: body.isFeatured || false,
        metaTitle: body.metaTitle,
        metaDesc: body.metaDesc,
      },
    });

    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    console.error("Services POST error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
