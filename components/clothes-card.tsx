import Image from "next/image";
import StarRating from "@/components/ui/stars-rating";

// TODO: Add types for clothes
export default function ClothesCard({ clothes }: any) {
  return (
    <div className="flex flex-col items-start space-y-4">
      <Image
        src={clothes.imageUrl || ""}
        alt={clothes.title}
        width="295"
        height="298"
        className="rounded-[20px]"
      />
      <div className="space-y-2">
        <p className="font-bold text-xl">{clothes.title}</p>
        <StarRating rating={clothes.rating} fontSize={14} />
        <p className="font-bold text-2xl">${clothes.price}</p>
      </div>
    </div>
  );
}
