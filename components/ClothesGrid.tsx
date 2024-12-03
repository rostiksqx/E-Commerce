import { GET_PAGINATED_DATAResult } from "@/sanity.types";
import ClothesCard from "@/components/ClothesCard";

type Clothes = GET_PAGINATED_DATAResult["items"];

export default function ClothesGrid({ clothes }: { clothes: Clothes }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-[repeat(2,_300px)] justify-center lg:grid-cols-[repeat(3,_300px)] gap-6 items-start xl:gap-x-5 xl:gap-y-9">
      {clothes.map((cloth, index) => (
        <ClothesCard key={`${cloth.slug}-${index}`} cloth={cloth} />
      ))}
    </div>
  );
}
