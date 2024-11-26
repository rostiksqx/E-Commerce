import LandingPage from "@/components/landing-page";
import Brands from "@/components/brands";
import LandingProductSection from "@/components/landing-product-section";
import Divider from "@/components/ui/divider";
import {
  GetFirstNewClothes,
  GetTopSellingClothes,
} from "@/sanity/lib/clothes/clothes";
import DressStyle from "@/components/dress-style";
import { GetFirstDressStyles } from "@/sanity/lib/dressStyles/dressStyles";
import {
  FIRST_BRANDSResult,
  FIRST_DRESS_STYLESResult,
  FIRST_NEW_CLOTHESResult,
  TOP_SELLING_CLOTHESResult,
} from "@/sanity.types";
import HappyCustomers from "@/components/happy-customers";
import { GetFirstBrands } from "@/sanity/lib/brands/brands";

export default async function Home() {
  const [newArrivalsClothes, topSellingClothes, firstDressStyles, brands]: [
    FIRST_NEW_CLOTHESResult,
    TOP_SELLING_CLOTHESResult,
    FIRST_DRESS_STYLESResult,
    FIRST_BRANDSResult,
  ] = await Promise.all([
    GetFirstNewClothes(),
    GetTopSellingClothes(),
    GetFirstDressStyles(),
    GetFirstBrands(),
  ]);

  return (
    <>
      <LandingPage key="landing-page" />
      <Brands key="brands" brands={brands} />
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
      <DressStyle dressStyles={firstDressStyles} />
      <HappyCustomers />
    </>
  );
}
