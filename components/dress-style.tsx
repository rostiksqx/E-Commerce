import Image from "next/image";
import Link from "next/link";
import { FIRST_DRESS_STYLESResult } from "@/sanity.types";

export default function DressStyle({
  dressStyles,
}: {
  dressStyles: FIRST_DRESS_STYLESResult;
}) {
  return (
    <section className="my-20 mx-[100px] bg-[#F0F0F0] rounded-[40px] py-[70px] px-16">
      <h1 className="font-integralCFRegular text-5xl font-bold uppercase mb-16 text-center">
        Browse by Dress Style
      </h1>
      <div className="grid grid-cols-3 gap-5">
        {dressStyles.map((style, index) => (
          <Link
            key={style.title}
            href={`/shop/${style.title}`}
            className={`relative max-h-[289px] rounded-[20px] overflow-hidden hover:opacity-70 transition-opacity ease-in-out ${
              index === 1 || index === 2 ? "col-span-2" : "col-span-1"
            }`}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={style.imageUrl || "/placeholder.svg"}
                alt={`${style.title} clothing style`}
                fill
                className="object-cover"
              />
              <h3 className="absolute top-6 left-9 text-4xl font-bold">
                {style.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
