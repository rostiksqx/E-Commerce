import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const GetFirstBrands = async (size: number = 15) => {
  const FIRST_BRANDS = defineQuery(`
    *[_type == "brand"][0...${size}] {
    "id": _id,
    "title": title,
    "logoUrl": brandLogo.asset->url,
    "slug": slug.current
  }`);

  try {
    const brands = await sanityFetch({ query: FIRST_BRANDS });
    return brands.data || [];
  } catch (error) {
    console.error("Error fetching brands: ", error);
    return [];
  }
};
