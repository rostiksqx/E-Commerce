import { FilterState } from "@/types/shop-types";

export const getFilterCondition = (selectedFilters: FilterState) => {
  let baseCondition = "";
  if (selectedFilters?.categories && selectedFilters.categories.length >= 1) {
    baseCondition += ` && count((categories[]->slug.current)[@ in ${JSON.stringify(
      selectedFilters.categories,
    )}]) > 0`;
  }
  if (selectedFilters?.dressStyle && selectedFilters.dressStyle.length >= 1) {
    baseCondition += ` && count((dressStyle[]->slug.current)[@ in ${JSON.stringify(
      selectedFilters.dressStyle,
    )}]) > 0`;
  }
  if (selectedFilters?.colors && selectedFilters.colors.length >= 1) {
    baseCondition += ` && count((imagesAndColors[].colorCode)[@ in ${JSON.stringify(
      selectedFilters.colors,
    )}]) > 0`;
  }
  if (selectedFilters?.sizes && selectedFilters.sizes.length >= 1) {
    baseCondition += ` && count((sizes[])[@ in ${JSON.stringify(
      selectedFilters.sizes,
    )}]) > 0`;
  }
  if (selectedFilters?.price && selectedFilters.price.length === 2) {
    baseCondition += ` && price >= ${selectedFilters.price[0]} && price <= ${
      selectedFilters.price[1]
    }`;
  }

  return baseCondition;
};

export const getSortCondition = (sortOptions: string) => {
  switch (sortOptions) {
    case "most-popular":
      return "| order(salesCount desc)";
    case "price-low-to-high":
      return "| order(price asc)";
    case "price-high-to-low":
      return "| order(price desc)";
    case "a-z":
      return "| order(title asc)";
    case "z-a":
      return "| order(title desc)";
    case "rating-asc":
      return "| order(rating asc)";
    case "rating-desc":
      return "| order(rating desc)";
    default:
      return "";
  }
};
