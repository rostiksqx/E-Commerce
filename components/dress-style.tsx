import Image from "next/image";
import Link from "next/link";
import { FIRST_DRESS_STYLESResult } from "@/sanity.types";

export default function DressStyle({
  dressStyles,
}: {
  dressStyles: FIRST_DRESS_STYLESResult;
}) {
  return (
    <section className="lg:my-20 my-[50px] lg:mx-[100px] mx-4 bg-[#F0F0F0] rounded-[40px] lg:py-[70px] pt-10 pb-[27px] lg:px-16 px-6">
      <h1 className="font-integralCFRegular md:text-5xl text-[32px] font-bold uppercase md:mb-16 mb-7 text-center">
        Browse by Dress Style
      </h1>
      <div className="grid xl:grid-cols-3 xl:gap-5 gap-4">
        {dressStyles.map((style, index) => (
          <Link
            key={style.title}
            href={`/shop/${style.title}`}
            className={`relative max-h-[289px] rounded-[20px] overflow-hidden hover:opacity-70 transition-opacity ease-in-out ${
              index === 1 || index === 2 ? "xl:col-span-2" : "xl:col-span-1"
            }`}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src={style.imageUrl || "/placeholder.svg"}
                alt={`${style.title} clothing style`}
                fill
                className="object-cover"
              />
              <h3 className="absolute md:top-6 top-4 md:left-9 left-6 md:text-4xl text-2xl font-bold">
                {style.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
