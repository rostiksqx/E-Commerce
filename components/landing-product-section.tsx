﻿"use client";
import ClothesCard from "@/components/clothes-card";
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
      <h1 className="flex justify-center items-center font-integralCFRegular font-bold uppercase text-5xl mt-[72px] mb-[55px]">
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
        className="px-[100px] flex gap-5 items-center justify-center"
      >
        {items.map((item) => (
          <ClothesCard key={item.id} clothes={item} />
        ))}
      </motion.div>
      <Link href="/shop" className="w-full flex justify-center mt-9">
        <WhiteButton text="View All" />
      </Link>
    </section>
  );
}
