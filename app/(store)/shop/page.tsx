"use client";
import Filters from "@/components/Filters";
import ShopPagination from "@/components/ui/shop-pagination";
import Divider from "@/components/ui/divider";
import React, { useEffect, useState } from "react";
import { FilterState, ShopData } from "@/types/shop-types";
import { useSearchParams } from "next/navigation";
import ClothesGrid from "@/components/ClothesGrid";
import GridClothesSkeleton from "@/components/GridClothesSkeleton";
import ShopSorting from "@/components/ShopSorting";
import { fetchShopData } from "@/utils/utils";

export default function ShopPage() {
  const params = useSearchParams();
  const currentPage = Number(params.get("page")) || 1;
  const onSale = params.has("onSale");
  const newArrivals = params.has("newArrivals");

  const [shopData, setShopData] = useState<ShopData>({
    items: [],
    totalItems: 0,
    totalPages: 0,
    filters: {
      category: [],
      dressStyle: [],
    },
  });
  const [sortOptions, setSortOptions] = useState<string>("most-popular");

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    price: [0, 2600],
    colors: [],
    sizes: [],
    dressStyle: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchShopData({
      setIsLoading,
      setShopData,
      filters,
      sortOptions,
      currentPage,
      onSale,
      newArrivals,
    }).then((r) => r);
  }, [currentPage, filters, onSale, newArrivals, sortOptions]);

  return (
    <div className="xl:grid grid-cols-[295px_925px] items-center lg:items-start 2xl:justify-center gap-7">
      <Filters filters={shopData.filters} setFiltersAction={setFilters} />
      <div>
        <ShopSorting
          title="Shop"
          shopData={shopData}
          sortOptions={sortOptions}
          setSortOptions={setSortOptions}
        />
        {shopData.items.length === 0 ? (
          isLoading ? (
            <GridClothesSkeleton count={9} />
          ) : (
            <p className="text-black/60 text-3xl text-center mt-16">
              No products found 🥲
            </p>
          )
        ) : (
          <>
            <ClothesGrid clothes={shopData.items} />
            <Divider className="max-w-[358px] lg:max-w-[925px] my-8 mx-auto" />
          </>
        )}
        <ShopPagination
          currentPage={currentPage}
          totalPages={shopData.totalPages}
          totalItems={shopData.totalItems}
          searchParams={{ onSale, newArrivals }}
        />
      </div>
    </div>
  );
}
