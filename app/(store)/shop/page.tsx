import Divider from "@/components/ui/divider";
import { Checkbox } from "@/components/ui/checkbox";

const categoryFilters: { name: string }[] = [
  { name: "T-Shirts" },
  { name: "Shorts" },
  { name: "Shirts" },
  { name: "Hoodie" },
  { name: "Jeans" },
];

const colors: { code: string }[] = [
  { code: "#00C12B" },
  { code: "#F50606" },
  { code: "#000000" },
  { code: "#000000" },
  { code: "#000000" },
  { code: "#000000" },
];

export default function ShopPage() {
  return (
    <div>
      <div className="flex flex-col max-w-[295px] gap-24 px-6 py-5 rounded-[20px] border border-black/10">
        <h3>Filters</h3>
        <Divider className="mx-auto max-w-[247px]" />
        <div>
          {categoryFilters.map((category, index) => (
            <div key={index}>
              <Checkbox id={category.name} />
              <label htmlFor={category.name}>{category.name}</label>
            </div>
          ))}
        </div>

        <Divider className="mx-auto max-w-[247px]" />
        <div>Price</div>

        <Divider className="mx-auto max-w-[247px]" />
        <div>
          {colors.map((color, index) => (
            <div
              key={index}
              className={`bg-[${color.code}] rounded-full w-5 h-5`}
            />
          ))}
        </div>

        <Divider className="mx-auto max-w-[247px]" />
        <div>Size</div>

        <Divider className="mx-auto max-w-[247px]" />
        <div>Dress Style</div>
        <button>Apply Filter</button>
      </div>
      <div>clothes grid</div>
    </div>
  );
}
