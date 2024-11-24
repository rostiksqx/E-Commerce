import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const GetFirst5NewClothes = async () => {
  const FIRST_5_NEW_CLOTHES = defineQuery(`
    *[_type == "clothes"] | order(createdAt desc)[0...5] {
    "id": _id,
    "imageUrl": imagesAndColors[0].images[0].asset->url,
    title,
    rating,
    price
  }`);

  try {
    const clothes = await sanityFetch({ query: FIRST_5_NEW_CLOTHES });
    return clothes.data || [];
  } catch (error) {
    console.error("Error fetching brands: ", error);
    return [];
  }
};
