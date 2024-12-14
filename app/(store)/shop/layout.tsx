import React from "react";
import Divider from "@/components/ui/divider";
import ShopNavigation from "@/components/ui/shop-navigation";

export default function ShopLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="px-4 xl:px-[100px]">
      <Divider className="max-w-[1320px] mx-auto mb-6" />
      <ShopNavigation />
      {children}
    </div>
  );
}
