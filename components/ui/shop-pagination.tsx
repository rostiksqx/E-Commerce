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
}: {
  currentPage: number;
  totalPages: number;
  totalItems: number;
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

  const paginationRange = getPaginationRange();

  return (
    <Pagination>
      <PaginationContent className="lg:justify-between lg:w-full">
        <PaginationItem>
          <PaginationPrevious
            href={`/shop?page=${currentPage === 1 ? 1 : currentPage - 1}`}
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
                  href={`/shop?page=${page}`}
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
            href={`/shop?page=${currentPage === totalPages ? totalPages : currentPage + 1}`}
            isActive={!(currentPage === totalPages)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
