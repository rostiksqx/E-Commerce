"use client";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Divider from "@/components/ui/divider";

const sizes: { id: string; title: string }[] = [
  { id: "xxs", title: "XX-Small" },
  { id: "xs", title: "X-Small" },
  { id: "s", title: "Small" },
  { id: "m", title: "Medium" },
  { id: "l", title: "Large" },
  { id: "xl", title: "X-Large" },
  { id: "xxl", title: "XX-Large" },
  { id: "3xl", title: "3X-Large" },
  { id: "4xl", title: "4X-Large" },
];

export default function SizeFilter() {
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const toggleSelectSize = (id: string) => {
    setSelectedSizes((prevSelectedSizes) => {
      return prevSelectedSizes.includes(id)
        ? prevSelectedSizes.filter((selectedSize) => selectedSize !== id)
        : [...prevSelectedSizes, id];
    });
  };

  return (
    <AccordionItem value="size">
      <AccordionTrigger>Size</AccordionTrigger>
      <AccordionContent>
        <div className="grid grid-cols-2 gap-2">
          {sizes.map((size, index) => (
            <button
              onClick={() => toggleSelectSize(size.id)}
              key={index}
              className={cn(
                "min-w-[76px] bg-[#F0F0F0] text-black/60 rounded-[62px] h-10",
                selectedSizes.includes(size.id) &&
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
  );
}
