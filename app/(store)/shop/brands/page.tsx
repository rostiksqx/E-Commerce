"use client";
import { useEffect, useState } from "react";
import { useShopNavigation } from "@/contexts/ShopNavigationContext";
import { FIRST_BRANDSResult } from "@/sanity.types";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

const fetchBrands = async () => {
  const loading = toast.loading("Loading brands...");
  const res = await fetch("/api/brands");
  toast.success("Brands loaded", { id: loading });
  return (await res.json()) as FIRST_BRANDSResult;
};

export default function BrandsPage() {
  const { setNavigationItems } = useShopNavigation();
  const [brands, setBrands] = useState<FIRST_BRANDSResult>([]);

  useEffect(() => {
    setNavigationItems((prev) => [
      ...prev,
      { href: "/shop/brands", label: "Brands" },
    ]);
    fetchBrands().then(setBrands);
  }, [setNavigationItems]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {brands.length === 0
        ? [...Array(8)].map((_, i) => (
            <div
              key={i}
              className="relative aspect-video overflow-hidden rounded-lg bg-gray-200 animate-pulse"
            ></div>
          ))
        : brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/shop/brands/${brand.slug}`}
              className="group relative aspect-video overflow-hidden rounded-lg bg-black hover:animate-pulse transition-all duration-300 ease-in-out"
            >
              <Image
                src={brand.logoUrl || "/placeholder.svg"}
                alt={`${brand.title} logo`}
                width="700"
                height="700"
                className="object-cover absolute top-1/2 -translate-y-1/2 opacity-70 group-hover:opacity-30 transition-opacity duration-300"
              />
            </Link>
          ))}
    </div>
  );
}
