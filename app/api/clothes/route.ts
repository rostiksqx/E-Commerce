import { GetClothesByQuery } from "@/sanity/lib/clothes/clothes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");

  const searchQuery = query || "";

  try {
    const clothes = await GetClothesByQuery(searchQuery);

    return NextResponse.json(clothes);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch clothes" },
      { status: 500 },
    );
  }
}
