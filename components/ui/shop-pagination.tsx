"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ShopPagination({
  currentPage,
  totalPages,
  totalItems,
  searchParams,
  isLoading,
}: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  searchParams: { onSale?: boolean; newArrivals?: boolean };
  isLoading: boolean;
}) {
  const router = useRouter();

  useEffect(() => {
    if (totalItems <= 0 || currentPage > totalPages) {
      router.push("/shop");
    }
  }, [totalItems, currentPage, totalPages, router]);

  if (totalItems <= 0 || currentPage > totalPages) {
    return null;
  }

  const getPaginationRange = () => {
    const delta = 2;
    const range: (number | string)[] = [];

    for (
      let i = Math.max(1, currentPage - delta);
      i <= Math.min(totalPages, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (Number(range[0]) > 1) range.unshift("...");
    if (Number(range[range.length - 1]) < totalPages) range.push("...");
    return range;
  };

  const constructHref = (page: number): string => {
    if (searchParams.onSale) {
      return `/shop?onSale&page=${page}`;
    }

    if (searchParams.newArrivals) {
      return `/shop?newArrival&page=${page}`;
    }

    return `/shop?page=${page}`;
  };

  const paginationRange = getPaginationRange();

  return (
    <Pagination>
      <PaginationContent className="lg:justify-between lg:w-full">
        <PaginationItem>
          <PaginationPrevious
            href={constructHref(currentPage === 1 ? 1 : currentPage - 1)}
            isActive={!(currentPage === 1)}
          />
        </PaginationItem>

        <div className="flex gap-1">
          {paginationRange.map((page, index) =>
            page === "..." ? (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={page}>
                <PaginationLink
                  href={constructHref(page as number)}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            ),
          )}
        </div>

        <PaginationItem>
          <PaginationNext
            href={constructHref(
              currentPage === totalPages ? totalPages : currentPage + 1,
            )}
            isActive={!(currentPage === totalPages)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
