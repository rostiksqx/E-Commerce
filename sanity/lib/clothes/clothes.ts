﻿import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

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
