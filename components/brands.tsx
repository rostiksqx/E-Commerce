"use client";

import { FIRST_BRANDSResult } from "@/sanity.types";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

export default function Brands({ brands }: { brands: FIRST_BRANDSResult }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1.5 }),
  ]);

  return (
    <section className="w-full bg-black py-11 z-10 relative max-md:px-0 max-md:py-10 pointer-events-none">
      <div className="brands__embla__viewport" ref={emblaRef}>
        <div className="brands__embla__container flex items-end">
          {brands.map((brand) => (
            <div key={brand.id} className="brands__embla__slide">
              <Image
                src={brand.logoUrl || "favicon.ico"}
                alt={brand.title || "Logo"}
                width="170"
                height="46"
                className="max-md:h-auto max-md:w-auto brands__embla__slide__item"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
