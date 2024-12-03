import Filters from "@/components/Filters";
import ClothesGrid from "@/components/ClothesGrid";
import { GetPaginatedData } from "@/sanity/lib/clothes/clothes";
import { GET_PAGINATED_DATAResult } from "@/sanity.types";

interface PageProps {
  searchParams: {
    page?: string;
  };
}

type Clothes = GET_PAGINATED_DATAResult["items"];

export default async function ShopPage({ searchParams }: PageProps) {
  const currentPage = Number(searchParams.page) || 1;
  const { items, totalItems, totalPages } = await GetPaginatedData(currentPage);
  // possible query: ?onSale=true&NewArrival=true&page=1

  return (
    <div className="grid grid-cols-[295px_1fr] justify-center gap-5">
      <Filters />
      <div>
        <div>
          <h1>Shop</h1>
          <p>Showing 1-10 of 100 Products</p>
          <p>
            Sort by: <span>Most Popular</span>
          </p>
        </div>
        <ClothesGrid clothes={items} />
        {/* TODO: Need to finish and fix pagination */}
        {/*<ShopPagination*/}
        {/*  currentPage={currentPage}*/}
        {/*  totalPages={totalPages}*/}
        {/*  totalItems={totalItems || 0}*/}
        {/*  items={items}*/}
        {/*/>*/}
      </div>
    </div>
  );
}
