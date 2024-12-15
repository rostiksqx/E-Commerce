import { NextRequest, NextResponse } from "next/server";
import { GetFirstBrands } from "@/sanity/lib/brands/brands";

export async function GET(req: NextRequest) {
  try {
    const brands = await GetFirstBrands(20);

    return NextResponse.json(brands);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch clothes" },
      { status: 500 },
    );
  }
}
