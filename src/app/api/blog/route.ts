import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { getAdminSession } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const locale = searchParams.get("locale");
    const includeAll = searchParams.get("all") === "true";

    if (includeAll) {
      const session = await getAdminSession();
      if (!session) {
        return NextResponse.json(
          { error: "Unauthorized" },
          { status: 401 }
        );
      }
      const posts = await db.blogPost.findMany({
        orderBy: { createdAt: "desc" },
      });
      return NextResponse.json(posts);
    }

    // Public: only published posts
    const where: Record<string, unknown> = { isPublished: true };
    if (locale) {
      where.locale = locale;
    }

    const posts = await db.blogPost.findMany({
      where,
      orderBy: { publishedAt: "desc" },
      select: {
        id: true,
        slug: true,
        title: true,
        titleEn: true,
        excerpt: true,
        excerptEn: true,
        coverImage: true,
        author: true,
        authorEn: true,
        publishedAt: true,
        locale: true,
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Blog GET error:", error);
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

    if (!body.slug || !body.title || !body.content) {
      return NextResponse.json(
        { error: "Slug, title, and content are required" },
        { status: 400 }
      );
    }

    const post = await db.blogPost.create({
      data: {
        slug: body.slug,
        locale: body.locale || "ar",
        title: body.title,
        titleEn: body.titleEn,
        excerpt: body.excerpt,
        excerptEn: body.excerptEn,
        content: body.content,
        contentEn: body.contentEn,
        coverImage: body.coverImage,
        author: body.author,
        authorEn: body.authorEn,
        tags: body.tags,
        isPublished: body.isPublished || false,
        publishedAt: body.isPublished ? new Date() : null,
        metaTitle: body.metaTitle,
        metaDesc: body.metaDesc,
        ogImage: body.ogImage,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.error("Blog POST error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
