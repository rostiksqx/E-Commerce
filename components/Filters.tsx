import Image from "next/image";
import Divider from "@/components/ui/divider";
import { colors, sizes } from "@/constants/shop-constants";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RangeSlider } from "@/components/ui/range-slider";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { GET_FILTERSResult } from "@/sanity.types";
import { FilterState } from "@/types/shop-types";

function darkenColor(hex: string, percent: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const darker = (c: number) =>
    Math.max(0, Math.floor(c * (1 - percent / 100)));

  const toHex = (c: number) => c.toString(16).padStart(2, "0");

  return `#${toHex(darker(r))}${toHex(darker(g))}${toHex(darker(b))}`;
}

export default function Filters({
  filters,
  setFiltersAction,
}: {
  filters: GET_FILTERSResult;
  setFiltersAction: React.Dispatch<React.SetStateAction<FilterState>>;
}) {
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [showMoreDressStyle, setShowMoreDressStyle] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<FilterState>({
    categories: [],
    price: [0, 2600],
    colors: [],
    sizes: [],
    dressStyle: [],
  });

  const handlePriceChange = (price: number[]) => {
    setSelectedFilters((prev) => ({
      ...prev,
      price,
    }));
  };

  const handleApplyFilters = () => {
    setFiltersAction(selectedFilters);
  };

  const toggleFilterClick = (
    filterType: keyof FilterState,
    filterValue: string,
  ) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: (prev[filterType] as string[]).includes(filterValue)
        ? (prev[filterType] as string[]).filter((item) => item !== filterValue)
        : [...(prev[filterType] as string[]), filterValue],
    }));
  };

  return (
    <div className="hidden xl:flex flex-col gap-6 pt-5 pb-7 px-6 rounded-[20px] border border-black/10">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">Filters</h3>
        <Image
          src="/filter-settings.svg"
          alt="Filters"
          width="24"
          height="24"
          className="w-auto h-auto"
        />
      </div>
      <Divider className="mx-auto max-w-[247px]" />
      <div>
        {filters.category.length === 0 ? (
          <div className="animate-pulse">
            <div className="w-20 h-5 bg-[#F0F0F0] rounded-[62px] mb-2" />
            <div className="w-20 h-5 bg-[#F0F0F0] rounded-[62px] mb-2" />
            <div className="w-20 h-5 bg-[#F0F0F0] rounded-[62px]" />
          </div>
        ) : (
          filters.category
            .slice(0, showMoreCategories ? filters.category.length : 5)
            .map((category) => (
              <div
                key={category.id}
                onClick={() => toggleFilterClick("categories", category.slug!)}
                className="flex items-center gap-2 mb-1"
              >
                <Checkbox id={category.slug!} className="w-5 h-5 shadow-none" />
                <label className="cursor-pointer" htmlFor={category.slug!}>
                  {category.title}
                </label>
              </div>
            ))
        )}
        {filters.category.length > 5 && (
          <button
            onClick={() => setShowMoreCategories((prev) => !prev)}
            className="mt-2 underline"
          >
            View More
          </button>
        )}
      </div>

      <Divider className="mx-auto max-w-[247px]" />
      <Accordion
        type="multiple"
        defaultValue={["price", "colors", "size", "dress-style"]}
      >
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent className="mt-5">
            <RangeSlider
              onValueChange={handlePriceChange}
              min={0}
              max={3000}
              step={5}
              value={selectedFilters.price || [0, 2600]}
            />
          </AccordionContent>
          <Divider className="mx-auto my-6 max-w-[247px]" />
        </AccordionItem>
        <AccordionItem value="colors">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-5 gap-4">
              {colors.map((color) => (
                <div
                  key={color.id}
                  onClick={() => toggleFilterClick("colors", color.code)}
                  className="relative w-9 h-9 cursor-pointer"
                >
                  {/* Border circle (darker shade) */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      backgroundColor: darkenColor(color.code, 15),
                    }}
                  />
                  {/* Inner circle (main color) */}
                  <div
                    className="absolute inset-[3px] rounded-full"
                    style={{
                      backgroundColor: color.code,
                    }}
                  />
                  {selectedFilters.colors.includes(color.code) && (
                    <Image
                      src="/check.svg"
                      alt="Check"
                      width="16"
                      height="16"
                      className="w-auto h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                  )}
                </div>
              ))}
            </div>
          </AccordionContent>
          <Divider className="mx-auto my-6 max-w-[247px]" />
        </AccordionItem>
        <AccordionItem value="size">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-2 gap-2">
              {sizes.map((size) => (
                <button
                  onClick={() => toggleFilterClick("sizes", size.value)}
                  key={size.id}
                  className={cn(
                    "min-w-[76px] bg-[#F0F0F0] text-black/60 rounded-[62px] h-10",
                    selectedFilters.sizes.includes(size.value) &&
                      "bg-black text-white font-bold",
                  )}
                >
                  {size.title}
                </button>
              ))}
            </div>
          </AccordionContent>
          <Divider className="mx-auto my-6 max-w-[247px]" />
        </AccordionItem>
        <AccordionItem value="dress-style">
          <AccordionTrigger>Dress Style</AccordionTrigger>
          <AccordionContent>
            <div>
              {filters.dressStyle.length === 0 ? (
                <div className="animate-pulse">
                  <div className="w-20 h-5 bg-[#F0F0F0] rounded-[62px] mb-2" />
                  <div className="w-20 h-5 bg-[#F0F0F0] rounded-[62px] mb-2" />
                  <div className="w-20 h-5 bg-[#F0F0F0] rounded-[62px]" />
                </div>
              ) : (
                filters.dressStyle
                  .slice(0, showMoreDressStyle ? filters.dressStyle.length : 5)
                  .map((dressStyle) => (
                    <div
                      onClick={() =>
                        toggleFilterClick("dressStyle", dressStyle.slug!)
                      }
                      key={dressStyle.id}
                      className="flex items-center gap-2 mb-1 cursor-pointer"
                    >
                      <Checkbox
                        id={dressStyle.slug!}
                        className="w-5 h-5 shadow-none"
                      />
                      <label
                        className="cursor-pointer"
                        htmlFor={dressStyle.slug!}
                      >
                        {dressStyle.title}
                      </label>
                    </div>
                  ))
              )}
              {filters.dressStyle.length > 5 && (
                <button
                  onClick={() => setShowMoreDressStyle((prev) => !prev)}
                  className="mt-2 underline"
                >
                  View More
                </button>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <button
        type="submit"
        className="w-full h-12 bg-black text-white rounded-[62px]"
        onClick={handleApplyFilters}
      >
        Apply Filter
      </button>
    </div>
  );
}
