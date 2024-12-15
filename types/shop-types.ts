import { GET_FILTERSResult } from "@/sanity.types";

export interface PageProps {
  searchParams: {
    page?: string;
    onSale?: string;
    newArrivals?: string;
  };
}

export interface FilterState {
  categories: string[];
  price: number[];
  colors: string[];
  sizes: string[];
  dressStyle: string[];
}

export interface ShopData {
  items: {
    id: string;
    imageUrl: string;
    slug: string;
    discount: number;
    title: string;
    rating: number;
    price: number;
  }[];
  totalItems: number;
  totalPages: number;
  filters: GET_FILTERSResult;
}

export interface FetchShopDataProps {
  setIsLoading: (loading: boolean) => void;
  setShopData: (data: ShopData) => void;
  filters: FilterState;
  sortOptions: string;
  currentPage: number;
  gender?: string;
  onSale?: boolean;
  newArrivals?: boolean;
}
