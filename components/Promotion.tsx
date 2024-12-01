"use client";

import { SignInButton, useUser } from "@clerk/nextjs";
import React, { useEffect } from "react";
import Image from "next/image";

export default function Promotion() {
  const [showPromotion, setShowPromotion] = React.useState(true);
  const { user } = useUser();

  useEffect(() => {
    const isPromotionClosed = localStorage.getItem("promotionClosed");
    if (isPromotionClosed) {
      setShowPromotion(false);
    }
  }, []);

  const handleClosePromotion = () => {
    localStorage.setItem("promotionClosed", "true");
    setShowPromotion(false);
  };

  if (user || !showPromotion) {
    return null;
  }

  return (
    <div className="relative bg-black font-satoshiRegular text-white py-[10px] text-center text-sm max-lg:text-[12px]">
      <p className="">
        Sign up and get 20% off your first order.{" "}
        <SignInButton>
          <span className="underline underline-offset-4 font-bold hover:text-gray-200 transition-colors cursor-pointer">
            Sign Up Now
          </span>
        </SignInButton>
      </p>
      <Image
        src="/close.svg"
        alt="Close"
        width="13"
        height="13"
        className="absolute right-[100px] top-1/2 -translate-y-1/2 cursor-pointer max-lg:hidden"
        onClick={handleClosePromotion}
      />
    </div>
  );
}
