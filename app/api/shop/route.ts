import { GetPaginatedData } from "@/sanity/lib/clothes/clothes";
import { GetFilters } from "@/sanity/lib/filters/filter";
import { GET_FILTERSResult } from "@/sanity.types";
import { NextResponse } from "next/server";
import { FilterState } from "@/types/shop-types";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const currentPage = body.currentPage;
    const onSale = body.onSale;
    const newArrivals = body.newArrivals;
    const selectedFilters: FilterState = body.selectedFilters || {};

    const { items, totalItems, totalPages } = await GetPaginatedData(
      Number(currentPage),
      9,
      { selectedFilters, onSale, newArrivals },
    );

    const filters = (await GetFilters()) as GET_FILTERSResult;

    return NextResponse.json(
      {
        items,
        totalItems,
        totalPages,
        filters,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { message: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
