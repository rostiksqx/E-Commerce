import LandingPage from "@/components/landing-page";
import Brands from "@/components/brands";
import LandingProductSection from "@/components/landing-product-section";
import Divider from "@/components/ui/divider";
import {
  Get4TopSellingClothes,
  GetFirst4NewClothes,
} from "@/sanity/lib/clothes/clothes";

export default async function Home() {
  const newArrivalsClothes = await GetFirst4NewClothes();
  const topSellingClothes = await Get4TopSellingClothes();

  return (
    <>
      <LandingPage key="landing-page" />
      <Brands key="brands" />
      <LandingProductSection
        key="new-arrivals"
        title="New Arrivals"
        items={newArrivalsClothes}
      />
      <Divider key="divider" className="max-w-[1240px] mx-auto my-16" />
      <LandingProductSection
        key="top-selling"
        title="Top Selling"
        items={topSellingClothes}
      />
    </>
  );
}
