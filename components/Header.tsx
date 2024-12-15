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
import React from "react";
import { linkList } from "@/constants/header-constants";
import { cn } from "@/lib/utils";
import { CLOTHES_BY_QUERYResult } from "@/sanity.types";
import { useDebounce } from "@uidotdev/usehooks";
import toast from "react-hot-toast";

export default function Header() {
  const { user } = useUser();
  const [focused, setFocused] = React.useState(false);

  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<CLOTHES_BY_QUERYResult>([]);
  const debouncedQuery = useDebounce(query, 300);

  React.useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    const fetchResults = async () => {
      try {
        const response = await fetch(`/api/clothes?query=${debouncedQuery}`);
        if (!response.ok) return toast.error("Failed to fetch clothes");
        const data = await response.json();
        console.log(data);
        setResults(data);
      } catch (error) {
        console.error(error);
        setResults([]);
      }
    };

    fetchResults().then((r) => r);
  }, [debouncedQuery]);

  return (
    <header className="flex items-center justify-center w-full px-[100px] py-6 max-lg:py-5 max-lg:px-4">
      <div className="hidden max-lg:block mr-4 mt-1">
        <Image src="/menu.svg" alt="menu" width="24" height="24" />
      </div>

      <Link href="/">
        <span className="font-integralCFRegular font-bold text-[32px] max-lg:text-2xl">
          SHOP.CO
        </span>
      </Link>

      <NavigationMenu className="font-satoshiRegular flex items-center space-x-6 mx-10 max-lg:hidden">
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
        <Link href="/shop?onSale">
          <span>On Sale</span>
        </Link>
        <Link href="/shop?newArrivals">
          <span>New Arrivals</span>
        </Link>
        <Link href="/shop/brands">
          <span>Brands</span>
        </Link>
      </NavigationMenu>

      {focused && (
        <div
          className="fixed inset-x-0 inset-y-0 bg-black/50 z-30"
          onClick={() => setFocused(false)}
        />
      )}

      <div className="flex items-center flex-1 space-x-3.5 max-lg:justify-end max-lg:space-x-3">
        <div className="relative flex-1 mr-10 max-lg:flex-initial max-lg:m-0 z-30">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 max-lg:static
          max-lg:left-0 max-lg:top-0 max-lg:translate-y-0"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              className="fill-black lg:fill-black/60"
              d="M20.7959 19.2041L16.3437 14.75C17.6787 13.0104 18.3019 10.8282 18.087 8.64607C17.8722 6.4639 16.8353 4.44516 15.1867 2.99937C13.5382 1.55357 11.4014 0.788988 9.20984 0.860713C7.01829 0.932437 4.93607 1.8351 3.38558 3.38559C1.83509 4.93608 0.932429 7.0183 0.860705 9.20985C0.78898 11.4014 1.55356 13.5382 2.99936 15.1867C4.44515 16.8353 6.46389 17.8722 8.64606 18.087C10.8282 18.3019 13.0104 17.6787 14.75 16.3438L19.2059 20.8006C19.3106 20.9053 19.4348 20.9883 19.5715 21.0449C19.7083 21.1016 19.8548 21.1307 20.0028 21.1307C20.1508 21.1307 20.2973 21.1016 20.4341 21.0449C20.5708 20.9883 20.695 20.9053 20.7997 20.8006C20.9043 20.696 20.9873 20.5717 21.044 20.435C21.1006 20.2983 21.1298 20.1517 21.1298 20.0037C21.1298 19.8558 21.1006 19.7092 21.044 19.5725C20.9873 19.4358 20.9043 19.3115 20.7997 19.2069L20.7959 19.2041ZM3.12499 9.5C3.12499 8.23915 3.49888 7.0066 4.19938 5.95824C4.89987 4.90988 5.89551 4.09278 7.06039 3.61027C8.22527 3.12776 9.50707 3.00151 10.7437 3.2475C11.9803 3.49348 13.1162 4.10064 14.0078 4.9922C14.8994 5.88376 15.5065 7.01967 15.7525 8.2563C15.9985 9.49293 15.8722 10.7747 15.3897 11.9396C14.9072 13.1045 14.0901 14.1001 13.0418 14.8006C11.9934 15.5011 10.7608 15.875 9.49999 15.875C7.80977 15.8733 6.18927 15.2011 4.99411 14.0059C3.79894 12.8107 3.12673 11.1902 3.12499 9.5Z"
            />
          </svg>

          <input
            onFocus={() => setFocused(true)}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search for products..."
            className="bg-[#F0F0F0] text-[#000000] border-none focus:outline-none pl-10 pr-4 py-3 w-full rounded-3xl max-lg:hidden"
          />

          <div
            className={cn(
              "absolute w-full bg-white rounded-xl p-2 top-16 shadow-md transition-all duration-300 invisible opacity-0 z-30",
              focused && "visible opacity-100 top-14",
              results.length <= 0 && "hidden",
            )}
          >
            {results.map((clothes) => (
              <Link
                key={`${clothes.slug}-${clothes.id}`}
                href={`/shop/${clothes.slug}`}
              >
                <div className="flex flex-wrap p-2 gap-3 items-center hover:bg-gray-300 rounded-xl">
                  <Image
                    className="rounded-xl"
                    src={clothes.imageUrl || "/placeholder.svg"}
                    alt={clothes.title || "Clothe image"}
                    width={40}
                    height={40}
                  />
                  <span className="font-bold text-lg">{clothes.title}</span>
                  <span className="text-md">${clothes.price}</span>
                  <span className="text-md">{clothes.rating}⭐</span>
                </div>
              </Link>
            ))}
          </div>
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
