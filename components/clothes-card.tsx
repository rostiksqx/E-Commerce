import Image from "next/image";
import StarRating from "@/components/ui/stars-rating";
import { FIRST_NEW_CLOTHESResult } from "@/sanity.types";
import Link from "next/link";
import { motion } from "motion/react";

export default function ClothesCard({
  clothes,
}: {
  clothes: FIRST_NEW_CLOTHESResult[0];
}) {
  const discountedPrice =
    clothes.price && clothes.discount
      ? clothes.price - (clothes.price * clothes.discount) / 100
      : clothes.price;

  return (
    <motion.div
      variants={{
        hidden: { x: -50, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
      }}
      className="flex flex-col items-start h-full sm:space-y-4 space-y-2.5"
    >
      <Link href={`/shop/${clothes.slug}`} key={clothes.id}>
        <Image
          src={clothes.imageUrl || ""}
          alt={clothes.title || "Clothes Image"}
          width="295"
          height="298"
          className="rounded-[20px] sm:max-h-[298px] max-h-[200px] min-w-[198px] hover:scale-110 transition-transform duration-300"
        />
      </Link>

      <div className="space-y-2">
        <p className="font-bold sm:text-xl">{clothes.title}</p>
        <StarRating rating={clothes.rating || 5} fontSize={14} iconSize={18} />
        <div className="flex items-center gap-x-2.5">
          {clothes.discount ? (
            <>
              <p className="font-bold sm:text-2xl text-xl">
                ${discountedPrice}
              </p>
              <p className="sm:text-2xl text-xl font-bold text-muted-foreground line-through">
                ${clothes.price}
              </p>
              <span className="px-[14px] py-[5px] sm:text-[12px] text-[10px] font-medium text-red-600 bg-red-100 rounded-[62px]">
                -{clothes.discount}%
              </span>
            </>
          ) : (
            <p className="font-bold sm:text-2xl text-xl">${clothes.price}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
