import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const GetFirst5Brands = async () => {
  const FIRST_5_BRANDS = defineQuery(`
    *[_type == "brand"][0...5] {
    "id": _id,
    "title": title,
    "logoUrl": brandLogo.asset->url
  }`);

  try {
    const brands = await sanityFetch({ query: FIRST_5_BRANDS });
    return brands.data || [];
  } catch (error) {
    console.error("Error fetching brands: ", error);
    return [];
  }
};
