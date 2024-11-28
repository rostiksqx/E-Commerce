import Link from "next/link";
import Divider from "@/components/ui/divider";
import Image from "next/image";
import React from "react";
import {
  companyList,
  linkIcons,
  paymentList,
} from "@/constants/footer-constants";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] px-[100px] pt-[140px] pb-[88px] mt-[170px]">
      <div className="flex items-start justify-between">
        <div className="flex flex-col space-y-[35px] max-w-[248px]">
          <div className="space-y-[25px]">
            <h1 className="font-integralCFRegular font-bold text-[33px]">
              Shop.co
            </h1>
            <p className="text-black/60 text-sm leading-[22px]">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
          </div>
          <div className="flex space-x-3">
            {linkIcons.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                className="w-7 h-7 rounded-full bg-white hover:bg-black border transition-colors ease-in-out border-black/20 flex items-center justify-center group"
              >
                <span className="w-3 h-3 text-black group-hover:text-white transition-colors ease-in-out">
                  {link.icon}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {companyList.map((list, index) => (
          <div key={index} className="space-y-[26px]">
            <h3 className="font-bold tracking-[3px]">{list.title}</h3>
            <ul className="space-y-5 text-black/60">
              {list.links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="relative inline-block transition-colors duration-300 group"
                  >
                    {link.title}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black transform origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Divider
        key="Footer Divider"
        className="max-w-[1340px] mx-auto sm:mt-[50px] sm:mb-5 my-10"
      />
      <div className="flex justify-between">
        <p className="text-sm text-black/60">
          Shop.co © 2000-{new Date().getFullYear()}, All Rights Reserved
        </p>
        <div className="flex gap-3">
          {paymentList.map((payment, index) => (
            <div
              key={index}
              className="bg-white rounded-[5px] w-11 h-8 flex items-center justify-center"
            >
              <Image
                src={payment.imageUrl}
                alt={payment.title}
                width="40"
                height="15"
                className="max-w-9 max-h-4"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
