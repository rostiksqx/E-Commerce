import Image from "next/image";
import StarRating from "@/components/ui/stars-rating";
import { FIRST_NEW_CLOTHESResult } from "@/sanity.types";
import Link from "next/link";

export default function ClothesCard({
  cloth,
}: {
  cloth: FIRST_NEW_CLOTHESResult[0];
}) {
  const discountedPrice =
    cloth.price && cloth.discount
      ? cloth.price - (cloth.price * cloth.discount) / 100
      : cloth.price;

  return (
    <div>
      <Link href={`/shop/${cloth.slug}`} key={cloth.id}>
        <Image
          src={cloth.imageUrl || ""}
          alt={cloth.title || "Clothes Image"}
          width="295"
          height="298"
          className="rounded-[20px] sm:max-h-[298px] max-h-[200px] min-w-[198px] hover:scale-110 transition-transform duration-300"
        />
      </Link>

      <div className="space-y-2">
        <p className="font-bold sm:text-xl">{cloth.title}</p>
        <StarRating
          rating={cloth.rating || 5}
          fontSize={14}
          iconSize="w-4 h-4 sm:w-5 sm:h-5"
        />
        <div className="flex items-center gap-x-2.5">
          {cloth.discount ? (
            <>
              <p className="font-bold sm:text-2xl text-xl">
                ${discountedPrice}
              </p>
              <p className="sm:text-2xl text-xl font-bold text-muted-foreground line-through">
                ${cloth.price}
              </p>
              <span className="px-[14px] py-[5px] sm:text-[12px] text-[10px] font-medium text-red-600 bg-red-100 rounded-[62px]">
                -{cloth.discount}%
              </span>
            </>
          ) : (
            <p className="font-bold sm:text-2xl text-xl">${cloth.price}</p>
          )}
        </div>
      </div>
    </div>
  );
}
