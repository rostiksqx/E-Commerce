import Image from "next/image";

const brands: { imageUrl: string }[] = [
  { imageUrl: "/zara.svg" },
  { imageUrl: "/zara.svg" },
  { imageUrl: "/zara.svg" },
  { imageUrl: "/zara.svg" },
  { imageUrl: "/zara.svg" },
];

export default function Brands() {
  return (
    <section className="w-full bg-black py-11 px-[100px] z-10 relative">
      <div className="flex flex-wrap justify-center">
        {brands.map((brand, i) => (
          <Image
            key={i}
            src={brand.imageUrl}
            alt={brand.imageUrl}
            width="100"
            height="100"
            className="w-1/5 h-9"
          />
        ))}
      </div>
    </section>
  );
}
