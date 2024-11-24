import Image from "next/image";
import { GetFirst5Brands } from "@/sanity/lib/brands/brands";

export default async function Brands() {
  const brands = await GetFirst5Brands();
  return (
    <section className="w-full bg-black py-11 px-[100px] z-10 relative max-md:px-0 max-md:py-10">
      <div className="flex flex-wrap items-center justify-between max-md:justify-center max-md:gap-8">
        {brands.map((brand) => (
          <div key={brand.id}>
            <Image
              src={brand.logoUrl || "favicon.ico"}
              alt={brand.title || "Logo"}
              width="170"
              height="46"
              className="max-md:h-7 max-md:w-[100px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
