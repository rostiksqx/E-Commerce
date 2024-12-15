"use client";

import React, { createContext, ReactNode, useContext } from "react";

export interface NavigationItem {
  href: string;
  label: string;
}

interface ShopNavigationContextType {
  navigationItems: NavigationItem[];
  setNavigationItems: React.Dispatch<React.SetStateAction<NavigationItem[]>>;
}

const ShopNavigationContext = createContext<
  ShopNavigationContextType | undefined
>(undefined);

export const useShopNavigation = () => {
  const context = useContext(ShopNavigationContext);
  if (context === undefined) {
    throw new Error(
      "useShopNavigation must be used within a ShopNavigationProvider",
    );
  }
  return context;
};

export const ShopNavigationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [navigationItems, setNavigationItems] = React.useState<
    NavigationItem[]
  >([
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
  ]);

  return (
    <ShopNavigationContext.Provider
      value={{ navigationItems, setNavigationItems }}
    >
      {children}
    </ShopNavigationContext.Provider>
  );
};
