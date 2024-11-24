import ClothesCard from "@/components/clothes-card";
import WhiteButton from "@/components/ui/white-button";
import Link from "next/link";
import { GetFirst5NewClothes } from "@/sanity/lib/clothes/clothes";

export default async function NewArrivals() {
  const clothes = await GetFirst5NewClothes();

  return (
    <section>
      <h1 className="flex justify-center items-center font-integralCFRegular font-bold text-5xl mt-[72px] mb-[55px]">
        New Arrivals
      </h1>
      <div className="px-[100px] flex gap-5 items-center justify-center">
        {clothes.map((clothes) => (
          <ClothesCard key={clothes.id} clothes={clothes} />
        ))}
      </div>
      <Link href="/shop" className="w-full flex justify-center mt-9">
        <WhiteButton text="View All" />
      </Link>
    </section>
  );
}
