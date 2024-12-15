"use client";
import ClothesCard from "@/components/ClothesCard";
import WhiteButton from "@/components/ui/white-button";
import Link from "next/link";
import { motion } from "motion/react";
import {
  FIRST_NEW_CLOTHESResult,
  TOP_SELLING_CLOTHESResult,
} from "@/sanity.types";

type LandingProductSectionProps = {
  title: string;
  items: FIRST_NEW_CLOTHESResult | TOP_SELLING_CLOTHESResult;
};

export default function LandingProductSection({
  title,
  items,
}: LandingProductSectionProps) {
  return (
    <section>
      <h1 className="flex justify-center items-center font-integralCFRegular font-bold uppercase sm:text-5xl text-[32px] sm:mt-[72px] mt-[50px] sm:mb-[55px] mb-8">
        {title}
      </h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        className="lg:px-[100px] px-4 py-4 flex sm:gap-5 gap-4 items-center sm:justify-center justify-between overflow-y-scroll"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
            }}
            className="flex flex-col items-start h-full sm:space-y-4 space-y-2.5"
          >
            <ClothesCard key={item.slug} cloth={item} />
          </motion.div>
        ))}
      </motion.div>
      <Link
        href="/shop?newArrivals"
        className="w-full flex justify-center sm:mt-9 mt-[24px]"
      >
        <WhiteButton text="View All" />
      </Link>
    </section>
  );
}
