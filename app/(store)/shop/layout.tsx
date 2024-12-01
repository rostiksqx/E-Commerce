import React from "react";
import Divider from "@/components/ui/divider";

export default function ShopLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="px-[100px]">
      <Divider className="max-w-[1320px] mx-auto mb-6" />
      <h1>Shop Layout </h1>
      {children}
    </div>
  );
}
