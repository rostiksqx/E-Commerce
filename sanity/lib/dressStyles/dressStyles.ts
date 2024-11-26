import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

export const GetFirstDressStyles = async (size: number = 4) => {
  const FIRST_DRESS_STYLES = defineQuery(`
    *[_type == "dressStyle"][0...${size}] {
    "id": _id,
    "imageUrl": image.asset->url,
    title,
  }`);

  try {
    const dressStyles = await sanityFetch({ query: FIRST_DRESS_STYLES });
    return dressStyles.data || [];
  } catch (error) {
    console.error("Error fetching brands: ", error);
    return [];
  }
};
