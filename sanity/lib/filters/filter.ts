import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/live";

export const GetFilters = async () => {
  const GET_FILTERS = defineQuery(`
    {
    "category": *[_type == "category"]{
    "id": _id,
    title,
    "slug": slug.current,
  },
    "dressStyle": *[_type == "dressStyle"] {
    "id": _id,
    title,
    "slug": slug.current,
    },
  }`);

  try {
    const filters = await sanityFetch({ query: GET_FILTERS });
    return filters.data;
  } catch (error) {
    console.error("Error while fetching: ", error);
    return [];
  }
};
