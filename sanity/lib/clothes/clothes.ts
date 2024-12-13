import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";
import { FilterState } from "@/types/shop-types";

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
    return clothes.data || [];
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
    return clothes.data || [];
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
    return clothes.data || [];
  } catch (error) {
    console.error("Error fetching clothes: ", error);
    return [];
  }
};

export const GetPaginatedData = async (
  page: number = 1,
  limit: number = 9,
  filters: {
    selectedFilters?: FilterState;
    onSale?: boolean;
    newArrivals?: boolean;
  },
) => {
  let baseCondition = "";
  let newArrivalsConditions = "";
  // refactor to switch case
  if (filters.onSale) baseCondition += ` && discount > 0`;
  if (filters.newArrivals) newArrivalsConditions += ` | order(createdAt desc)`;
  if (
    filters.selectedFilters?.categories &&
    filters.selectedFilters.categories.length >= 1
  ) {
    baseCondition += ` && count((categories[]->slug.current)[@ in ${JSON.stringify(
      filters.selectedFilters.categories,
    )}]) > 0`;
  }
  if (
    filters.selectedFilters?.dressStyle &&
    filters.selectedFilters.dressStyle.length >= 1
  ) {
    baseCondition += ` && count((dressStyle[]->slug.current)[@ in ${JSON.stringify(
      filters.selectedFilters.dressStyle,
    )}]) > 0`;
  }
  if (
    filters.selectedFilters?.colors &&
    filters.selectedFilters.colors.length >= 1
  ) {
    baseCondition += ` && count((imagesAndColors[].colorCode)[@ in ${JSON.stringify(
      filters.selectedFilters.colors,
    )}]) > 0`;
  }
  if (
    filters.selectedFilters?.sizes &&
    filters.selectedFilters.sizes.length >= 1
  ) {
    baseCondition += ` && count((sizes[])[@ in ${JSON.stringify(
      filters.selectedFilters.sizes,
    )}]) > 0`;
  }
  if (
    filters.selectedFilters?.price &&
    filters.selectedFilters.price.length === 2
  ) {
    baseCondition += ` && price >= ${filters.selectedFilters.price[0]} && price <= ${
      filters.selectedFilters.price[1]
    }`;
  }

  const GET_PAGINATED_DATA = defineQuery(`{
    "total": count(*[_type == "clothes" ${baseCondition}]${newArrivalsConditions}),
    "items": *[_type == "clothes" ${baseCondition}] [$start...$end] {
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
      params: { start: (page - 1) * limit, end: page * limit },
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
