"use client";

import FeedBackCard from "@/components/feed-back-card";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/ui/feed-back-arrow-button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function HappyCustomers() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnFocusIn: true }),
  ]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="relative">
      <h1 className="font-integralCFRegular font-bold uppercase text-[32px] leading-8 mb-6 ml-4 md:text-5xl md:ml-[100px] md:mb-10">
        Our Happy Customers
      </h1>

      <div className="absolute right-4 top-8 md:top-6 md:right-[100px]">
        <div className="grid grid-cols-[repeat(2,1fr)] items-end">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute inset-y-0 left-0 w-[130px] bg-gradient-to-r from-white to-transparent z-10" />
        <div className="hidden md:block absolute inset-y-0 right-0 w-[130px] bg-gradient-to-l from-white to-transparent z-10" />

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex md:gap-5 gap-4 px-4">
            {[...Array(9).keys()].map((_, index) => (
              <FeedBackCard
                key={index}
                className="max-w-[400px] flex-[0_0_100%]"
                feedback={{}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
