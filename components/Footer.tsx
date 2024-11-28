﻿import Link from "next/link";
import Divider from "@/components/ui/divider";
import Image from "next/image";
import React from "react";
import {
  companyList,
  linkIcons,
  paymentList,
} from "@/constants/footer-constants";
import Form from "next/form";

// TODO: Implement responsive design
export default function Footer() {
  return (
    <footer className="relative bg-[#F0F0F0] px-[100px] pt-[140px] pb-[88px] mt-[170px]">
      <div className="absolute inset-x-[100px] bottom-[440px] bg-black text-white px-16 py-9 flex justify-between rounded-[20px]">
        <h1 className="font-integralCFRegular font-bold text-[40px] max-w-[551px] leading-[45px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <Form
          action="/subscribe"
          className="relative flex flex-col gap-3.5 min-w-[350px]"
        >
          <svg
            className="absolute left-3 top-6 transform -translate-y-1/2 max-lg:static
        max-lg:left-0 max-lg:top-0 max-lg:translate-y-0"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 22 16"
            fill="none"
          >
            <path
              className="fill-black/40"
              d="M20 0.125H2C1.70163 0.125 1.41548 0.243526 1.2045 0.454505C0.993526 0.665483 0.875 0.951631 0.875 1.25V14C0.875 14.4973 1.07254 14.9742 1.42417 15.3258C1.77581 15.6775 2.25272 15.875 2.75 15.875H19.25C19.7473 15.875 20.2242 15.6775 20.5758 15.3258C20.9275 14.9742 21.125 14.4973 21.125 14V1.25C21.125 0.951631 21.0065 0.665483 20.7955 0.454505C20.5845 0.243526 20.2984 0.125 20 0.125ZM11 7.97375L4.89219 2.375H17.1078L11 7.97375ZM7.69906 8L3.125 12.1925V3.8075L7.69906 8ZM9.36406 9.52625L10.2397 10.3297C10.4472 10.52 10.7185 10.6255 11 10.6255C11.2815 10.6255 11.5528 10.52 11.7603 10.3297L12.6359 9.52625L17.1078 13.625H4.89219L9.36406 9.52625ZM14.3009 8L18.875 3.8075V12.1925L14.3009 8Z"
            />
          </svg>

          <input
            name="query"
            type="text"
            placeholder="Search for products..."
            className="bg-white lg:bg-white text-white lg:text-black border-none focus:outline-none pl-12 pr-4 py-3 rounded-3xl"
          />

          <button
            type="submit"
            className="bg-white text-black font-medium rounded-[62px] px-4 py-3"
          >
            Subscribe to Newsletter
          </button>
        </Form>
      </div>

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