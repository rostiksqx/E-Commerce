import Image from "next/image";
import Divider from "@/components/ui/divider";
import {
  categoryFilters,
  colors,
  dressStyles,
} from "@/constants/shop-constants";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RangeSlider } from "@/components/ui/range-slider";
import SizeFilter from "@/components/ui/size-filter";

function darkenColor(hex: string, percent: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  const darker = (c: number) =>
    Math.max(0, Math.floor(c * (1 - percent / 100)));

  const toHex = (c: number) => c.toString(16).padStart(2, "0");

  return `#${toHex(darker(r))}${toHex(darker(g))}${toHex(darker(b))}`;
}

// TODO: Implement responsive design, fix some issues
export default function Filters() {
  return (
    <div className="flex flex-col max-h-[1220px] gap-6 pt-5 pb-7 px-6 rounded-[20px] border border-black/10">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">Filters</h3>
        <Image
          src="/filter-settings.svg"
          alt="Filters"
          width="24"
          height="24"
        />
      </div>
      <Divider className="mx-auto max-w-[247px]" />
      <div>
        {categoryFilters.map((category, index) => (
          <div key={index} className="flex items-center gap-2 mb-1">
            <Checkbox id={category.name} className="w-5 h-5 shadow-none" />
            <label htmlFor={category.name}>{category.name}</label>
          </div>
        ))}
      </div>

      <Divider className="mx-auto max-w-[247px]" />
      <Accordion type="multiple">
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent className="mt-5">
            <RangeSlider min={0} max={3000} step={1} value={[0, 3000]} />
          </AccordionContent>
          <Divider className="mx-auto my-6 max-w-[247px]" />
        </AccordionItem>
        <AccordionItem value="colors">
          <AccordionTrigger>Colors</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-5 gap-4">
              {colors.map((color, index) => (
                <div key={index} className="relative w-9 h-9">
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
                </div>
              ))}
            </div>
          </AccordionContent>
          <Divider className="mx-auto my-6 max-w-[247px]" />
        </AccordionItem>
        <SizeFilter />
        <AccordionItem value="dress-style">
          <AccordionTrigger>Dress Style</AccordionTrigger>
          <AccordionContent>
            <div>
              {dressStyles.map((dressStyle, index) => (
                <div key={index} className="flex items-center gap-2 mb-1">
                  <Checkbox
                    id={dressStyle.name}
                    className="w-5 h-5 shadow-none"
                  />
                  <label htmlFor={dressStyle.name}>{dressStyle.name}</label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <button className="w-full h-12 bg-black text-white rounded-[62px]">
        Apply Filter
      </button>
    </div>
  );
}
