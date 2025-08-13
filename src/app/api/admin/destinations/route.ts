import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { prisma } from "../../../../lib/prisma";

export async function GET() {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Fetch all destinations with their content and counts
    const destinations = await prisma.destination.findMany({
      include: {
        content: {
          select: {
            language: true,
            name: true,
            description: true,
          },
        },
        _count: {
          select: {
            images: true,
            tourPlans: true,
            thingsToDo: true,
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return NextResponse.json(destinations);
  } catch (error) {
    console.error("Error fetching destinations:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { slug, status, content } = body;

    // Create new destination with content
    const destination = await prisma.destination.create({
      data: {
        slug,
        status: status || "DRAFT",
        content: {
          create: content.map((c: any) => ({
            language: c.language,
            name: c.name,
            description: c.description,
            introduction: c.introduction || "",
            location: c.location || "",
            highlights: c.highlights || [],
            gettingThere: c.gettingThere || "",
          })),
        },
      },
      include: {
        content: true,
        _count: {
          select: {
            images: true,
            tourPlans: true,
            thingsToDo: true,
          },
        },
      },
    });

    return NextResponse.json(destination, { status: 201 });
  } catch (error) {
    console.error("Error creating destination:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
