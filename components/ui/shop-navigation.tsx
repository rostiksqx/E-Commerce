import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./breadcrumb";
import { useShopNavigation } from "@/contexts/ShopNavigationContext";

export default function ShopNavigation() {
  const { navigationItems } = useShopNavigation();

  return (
    <Breadcrumb className="ml-12 mb-6">
      <BreadcrumbList>
        {navigationItems.map((item, index) => (
          <React.Fragment key={item.label}>
            <BreadcrumbItem>
              <BreadcrumbLink
                className={
                  index === navigationItems.length - 1 ? "text-black" : ""
                }
                href={item.href}
              >
                {item.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index !== navigationItems.length - 1 && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
