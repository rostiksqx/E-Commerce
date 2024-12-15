import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { FilterState } from "@/types/shop-types";
import { getFilterCondition, getSortCondition } from "@/utils/utils";

export const GetFirstNewClothes = async (size: number = 4) => {
  const FIRST_NEW_CLOTHES = defineQuery(`
    *[_type == "clothes"] | order(createdAt desc)[0...${size}] {
    "id": _id,
    "imageUrl": imagesAndColors[0].images[0].asset->url,
    "slug": slug.current,
    discount,
    title,
    rating,
    price
  }`);

  try {
    const clothes = await sanityFetch({ query: FIRST_NEW_CLOTHES });
    return clothes.data;
  } catch (error) {
    console.error("Error fetching brands: ", error);
    return [];
  }
};

export const GetTopSellingClothes = async (size: number = 4) => {
  const TOP_SELLING_CLOTHES = defineQuery(`
    *[_type == "clothes"] | order(salesCount desc)[0...${size}] {
    "id": _id,
    "imageUrl": imagesAndColors[0].images[0].asset->url,
    "slug": slug.current,
    discount,
    title,
    rating,
    price
  }`);

  try {
    const clothes = await sanityFetch({ query: TOP_SELLING_CLOTHES });
    return clothes.data;
  } catch (error) {
    console.error("Error fetching brands: ", error);
    return [];
  }
};

export const GetClothesByQuery = async (query = "") => {
  const CLOTHES_BY_QUERY = defineQuery(`
        *[_type == "clothes" && title match $searchQuery] {
        "id": _id,
        "imageUrl": imagesAndColors[0].images[0].asset->url,
        "slug": slug.current,
        title,
        rating,
        price
    }`);

  try {
    const clothes = await sanityFetch({
      query: CLOTHES_BY_QUERY,
      params: { searchQuery: `${query}*` },
    });
    return clothes.data;
  } catch (error) {
    console.error("Error fetching clothes: ", error);
    return [];
  }
};

export const GetPaginatedData = async (
  page: number = 1,
  limit: number = 9,
  filters: {
    gender?: string;
    sortOptions?: string;
    selectedFilters?: FilterState;
    onSale?: boolean;
    newArrivals?: boolean;
  },
) => {
  let baseCondition = getFilterCondition(filters.selectedFilters!);
  let sortCondition = getSortCondition(filters.sortOptions!);
  if (filters.onSale) baseCondition += ` && discount > 0`;
  if (filters.gender) baseCondition += ` && gender match "${filters.gender}"`;

  const GET_PAGINATED_DATA = defineQuery(`{
    "total": count(*[_type == "clothes" ${baseCondition}]${sortCondition}),
    "items": *[_type == "clothes" ${baseCondition}] ${sortCondition} [$start...$end] {
      "id": _id,
      "imageUrl": imagesAndColors[0].images[0].asset->url,
      "slug": slug.current,
      discount,
      title,
      rating,
      price
    }
  }`);

  try {
    const { data } = await sanityFetch({
      query: GET_PAGINATED_DATA,
      params: {
        start: (page - 1) * limit,
        end: page * limit,
      },
    });

    return {
      items: data.items,
      totalItems: data.total,
      totalPages: Math.ceil(data.total / limit),
    };
  } catch (error) {
    console.error("Error fetching data: ", error);
    return { items: [], totalItems: 0, totalPages: 0 };
  }
};
