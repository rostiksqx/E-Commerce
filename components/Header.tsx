"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ListItem from "@/components/ui/list-item";

const linkList: {
  title: string;
  href: string;
  iconSrc: string;
  description: string;
}[] = [
  {
    title: "For She",
    href: "/products",
    iconSrc: "/woman.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "For Her",
    href: "/products",
    iconSrc: "/man.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "For Kids",
    href: "/products",
    iconSrc: "/kid.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Header() {
  const { user } = useUser();

  return (
    <header className="flex items-center w-full px-[100px] py-6">
      <Link href="/">
        <span className="font-integralCFRegular font-bold text-3xl">
          SHOP.CO
        </span>
      </Link>

      {/*<nav className="font-satoshiRegular flex items-center space-x-6 mx-10">*/}
      <NavigationMenu className="font-satoshiRegular flex items-center space-x-6 mx-10">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="p-2 font-satoshiRegular text-base">
              Shop
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {linkList.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    src={component.iconSrc}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <Link href="/products?query=onSale">
          <span>On Sale</span>
        </Link>
        <Link href="/products?category=new-arrivals">
          <span>New Arrivals</span>
        </Link>
        <Link href="/brands">
          <span>Brands</span>
        </Link>
      </NavigationMenu>

      <div className="flex items-center flex-1 space-x-3.5">
        <div className="relative flex-1 mr-10">
          <Image
            src="/search.svg"
            alt="Search"
            width="24"
            height="24"
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-[#F0F0F0] text-[#000000] border-none focus:outline-none pl-10 pr-4 py-3 w-full rounded-3xl"
          />
        </div>
        <ClerkLoaded>
          {user ? (
            <>
              <Link href="/cart">
                <Image src="/backet.svg" alt="Backet" width="24" height="24" />
              </Link>
              <UserButton />
            </>
          ) : (
            <>
              <SignInButton>
                <Image
                  src="/user.svg"
                  className="cursor-pointer"
                  alt="User"
                  width="24"
                  height="24"
                />
              </SignInButton>
            </>
          )}
        </ClerkLoaded>
      </div>
    </header>
  );
}
