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

    // Fetch dashboard statistics
    const [
      totalDestinations,
      totalImages,
      publishedDestinations,
      draftDestinations,
    ] = await Promise.all([
      prisma.destination.count(),
      prisma.destinationImage.count(),
      prisma.destination.count({
        where: { status: "PUBLISHED" },
      }),
      prisma.destination.count({
        where: { status: "DRAFT" },
      }),
    ]);

    const stats = {
      destinations: totalDestinations,
      totalImages: totalImages,
      publishedDestinations: publishedDestinations,
      draftDestinations: draftDestinations,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
