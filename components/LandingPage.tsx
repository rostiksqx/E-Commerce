import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <section
      className="font-satoshiRegular bg-[#F2F0F1] pl-[100px] pt-[103px] pb-[116px] flex flex-col items-left justify-between relative
    max-md:pt-10 max-md:px-4 max-md:pb-0"
    >
      <div className="max-w-[577px] space-y-8 max-md:space-y-0">
        <h1 className="font-integralCFRegular font-bold text-[64px] leading-[64px] max-md:mb-5 max-md:text-4xl">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-black/60 max-w-[545px] max-md:text-sm">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <Link href="/shop">
          <Button
            className="px-[54px] py-4 rounded-[62px] w-[210px] h-[52px] text-[16px] mt-8 mb-12
          max-md:w-full max-md:mt-6"
          >
            Shop Now
          </Button>
        </Link>
      </div>

      <div className="flex flex-wrap items-center space-x-8 max-md:space-x-[27.5px] max-md:justify-center">
        <div>
          <span className="font-bold text-[40px] max-md:text-[24px]">200+</span>
          <p className="text-[16px] text-black/60 max-md:text-xs">
            International Brands
          </p>
        </div>
        <hr className="h-[74px] w-[1px] bg-black/10 max-md:h-[52px]" />

        <div>
          <span className="font-bold text-[40px] max-md:text-[24px]">
            2,000+
          </span>
          <p className="text-[16px] text-black/60 max-md:text-xs">
            High-Quality Products
          </p>
        </div>
        <hr className="h-[74px] w-[1px] bg-black/10 max-md:hidden" />

        <div className="max-md:!ml-0">
          <span className="font-bold text-[40px] max-md:text-[24px]">
            30,000+
          </span>
          <p className="text-[16px] text-black/60 max-md:text-xs">
            Happy Customers
          </p>
        </div>
      </div>

      <div>
        <Image
          className="absolute right-[664px] top-[327px] z-10 max-[1439px]:w-[44px] max-[1439px]:h-[44px] max-[1439px]:left-[27px] max-[1439px]:top-[735px]
          max-md:top-[620px]"
          src="/black-star.svg"
          alt="Star"
          width="56"
          height="56"
        />
        <Image
          className="absolute right-20 top-0 z-0 max-[1439px]:w-[390px] max-[1439px]:h-[448px] max-[1439px]:static"
          src="/landing-image.jpg"
          alt="Landing Image"
          width="700"
          height="663"
        />
        <Image
          className="absolute right-[81px] top-[86px] max-[1439px]:w-[76px] max-[1439px]:h-[76px] max-[1439px]:left-[403px] max-[1439px]:top-[635px]
          max-md:left-[293px] max-md:top-[520px]"
          src="/black-star.svg"
          alt="Star"
          width="104"
          height="104"
        />
      </div>
    </section>
  );
}
