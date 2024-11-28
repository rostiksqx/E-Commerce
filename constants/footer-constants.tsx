﻿import React from "react";

export const linkIcons: {
  title: string;
  icon: React.ReactNode;
  href: string;
}[] = [
  {
    title: "Twitter",
    icon: (
      <svg
        width="12"
        height="10"
        viewBox="0 0 12 10"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.2071 1.9831C10.7881 2.16933 10.3458 2.28573 9.88023 2.35557C10.3458 2.07622 10.7183 1.63392 10.8812 1.0985C10.4389 1.35457 9.95006 1.5408 9.41465 1.6572C8.99562 1.2149 8.39037 0.935547 7.73856 0.935547C6.48149 0.935547 5.45721 1.95982 5.45721 3.21689C5.45721 3.40312 5.48049 3.56608 5.52705 3.72903C3.64145 3.63591 1.94208 2.72803 0.801411 1.33129C0.615178 1.68048 0.498783 2.05294 0.498783 2.47196C0.498783 3.26345 0.894527 3.96182 1.52306 4.38084C1.1506 4.35756 0.801411 4.26445 0.475504 4.10149V4.12477C0.475504 5.24216 1.26699 6.17333 2.31455 6.38284C2.12831 6.42939 1.9188 6.45267 1.70929 6.45267C1.56962 6.45267 1.40666 6.42939 1.26699 6.40612C1.56962 7.314 2.40766 7.98909 3.40866 7.98909C2.61717 8.59434 1.63945 8.96681 0.56862 8.96681C0.382388 8.96681 0.196156 8.96681 0.0332031 8.94353C1.05748 9.59534 2.24471 9.96781 3.54833 9.96781C7.76184 9.96781 10.0665 6.47595 10.0665 3.44968C10.0665 3.35656 10.0665 3.24017 10.0665 3.14705C10.5088 2.84443 10.9045 2.44868 11.2071 1.9831Z" />
      </svg>
    ),
    href: "https://twitter.com/",
  },
  {
    title: "Facebook",
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 8.97391 2.11609 11.4878 4.875 11.9375V7.73438H3.41016V6H4.875V4.67812C4.875 3.17344 5.73984 2.34375 7.10391 2.34375C7.75781 2.34375 8.44688 2.46094 8.44688 2.46094V3.875H7.71094C6.98672 3.875 6.75 4.33203 6.75 4.80078V6H8.37891L8.11992 7.73438H6.75V11.9375C9.50891 11.4878 12 8.97391 12 6Z" />
      </svg>
    ),
    href: "https://www.facebook.com/",
  },
  {
    title: "Instagram",
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 0C4.37344 0 4.16625 0.00562501 3.525 0.03C2.88469 0.054375 2.45531 0.165937 2.07937 0.31875C1.68844 0.476875 1.35469 0.686875 1.02375 1.02375C0.686875 1.35469 0.476875 1.68844 0.31875 2.07937C0.165937 2.45531 0.054375 2.88469 0.03 3.525C0.00562501 4.16625 0 4.37344 0 6C0 7.62656 0.00562501 7.83375 0.03 8.475C0.054375 9.11531 0.165937 9.54469 0.31875 9.92063C0.476875 10.3116 0.686875 10.6453 1.02375 10.9763C1.35469 11.3131 1.68844 11.5231 2.07937 11.6813C2.45531 11.8341 2.88469 11.9456 3.525 11.97C4.16625 11.9944 4.37344 12 6 12C7.62656 12 7.83375 11.9944 8.475 11.97C9.11531 11.9456 9.54469 11.8341 9.92063 11.6813C10.3116 11.5231 10.6453 11.3131 10.9763 10.9763C11.3131 10.6453 11.5231 10.3116 11.6813 9.92063C11.8341 9.54469 11.9456 9.11531 11.97 8.475C11.9944 7.83375 12 7.62656 12 6C12 4.37344 11.9944 4.16625 11.97 3.525C11.9456 2.88469 11.8341 2.45531 11.6813 2.07937C11.5231 1.68844 11.3131 1.35469 10.9763 1.02375C10.6453 0.686875 10.3116 0.476875 9.92063 0.31875C9.54469 0.165937 9.11531 0.054375 8.475 0.03C7.83375 0.00562501 7.62656 0 6 0ZM6 1.08C7.59844 1.08 7.79156 1.08469 8.43375 1.10906C9.02625 1.13156 9.33187 1.23844 9.53625 1.32562C9.80625 1.44094 10.0013 1.57969 10.2056 1.78406C10.41 1.98844 10.5487 2.18344 10.6641 2.45344C10.7513 2.65781 10.8581 2.96344 10.8806 3.55594C10.905 4.19813 10.9097 4.39125 10.9097 5.98969C10.9097 7.58813 10.905 7.78125 10.8806 8.42344C10.8581 9.01594 10.7513 9.32156 10.6641 9.52594C10.5487 9.79594 10.41 9.99094 10.2056 10.1953C10.0013 10.3997 9.80625 10.5384 9.53625 10.6538C9.33187 10.7409 9.02625 10.8478 8.43375 10.8703C7.79156 10.8947 7.59844 10.8994 6 10.8994C4.40156 10.8994 4.20844 10.8947 3.56625 10.8703C2.97375 10.8478 2.66812 10.7409 2.46375 10.6538C2.19375 10.5384 1.99875 10.3997 1.79437 10.1953C1.59 9.99094 1.45125 9.79594 1.33594 9.52594C1.24875 9.32156 1.14187 9.01594 1.11937 8.42344C1.095 7.78125 1.09031 7.58813 1.09031 5.98969C1.09031 4.39125 1.095 4.19813 1.11937 3.55594C1.14187 2.96344 1.24875 2.65781 1.33594 2.45344C1.45125 2.18344 1.59 1.98844 1.79437 1.78406C1.99875 1.57969 2.19375 1.44094 2.46375 1.32562C2.66812 1.23844 2.97375 1.13156 3.56625 1.10906C4.20844 1.08469 4.40156 1.08 6 1.08Z" />
        <path d="M6 7.99969C4.89562 7.99969 4 7.10406 4 5.99969C4 4.89531 4.89562 3.99969 6 3.99969C7.10437 3.99969 8 4.89531 8 5.99969C8 7.10406 7.10437 7.99969 6 7.99969ZM6 2.91969C4.29969 2.91969 2.92 4.29938 2.92 5.99969C2.92 7.7 4.29969 9.07969 6 9.07969C7.70031 9.07969 9.08 7.7 9.08 5.99969C9.08 4.29938 7.70031 2.91969 6 2.91969Z" />
        <path d="M9.92812 2.79594C9.92812 3.19344 9.60562 3.51594 9.20812 3.51594C8.81062 3.51594 8.48812 3.19344 8.48812 2.79594C8.48812 2.39844 8.81062 2.07594 9.20812 2.07594C9.60562 2.07594 9.92812 2.39844 9.92812 2.79594Z" />
      </svg>
    ),
    href: "https://www.instagram.com/",
  },
  {
    title: "Github",
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 0C2.68594 0 0 2.68594 0 6C0 8.65688 1.71938 10.9031 4.10344 11.7C4.40625 11.7562 4.5 11.5688 4.5 11.4094C4.5 11.2625 4.49062 10.8094 4.49062 10.3031C3 10.5469 2.61562 9.90938 2.49375 9.57188C2.42812 9.40313 2.13281 8.87813 1.875 8.73125C1.66406 8.61563 1.36125 8.37188 1.86562 8.3625C2.33438 8.35313 2.67188 8.79375 2.7875 8.96875C3.33 9.88125 4.19063 9.59531 4.52813 9.43594C4.58438 9.04688 4.74375 8.78438 4.92188 8.63906C3.58125 8.49375 2.18438 7.97813 2.18438 5.68125C2.18438 5.02969 2.41875 4.49063 2.80313 4.07344C2.74063 3.92344 2.53125 3.31031 2.86406 2.48438C2.86406 2.48438 3.36844 2.325 4.50001 3.09844C4.97813 2.96344 5.49375 2.89594 6.00938 2.89594C6.525 2.89594 7.04063 2.96344 7.51875 3.09844C8.65032 2.31563 9.15469 2.48438 9.15469 2.48438C9.4875 3.31031 9.27813 3.92344 9.21563 4.07344C9.6 4.49063 9.83438 5.02031 9.83438 5.68125C9.83438 7.98751 8.43281 8.49375 7.09219 8.63906C7.31563 8.82188 7.51406 9.17344 7.51406 9.72188C7.51406 10.5094 7.50469 11.2031 7.50469 11.4094C7.50469 11.5688 7.59844 11.7656 7.90125 11.7C9.08988 11.2978 10.1182 10.5271 10.8435 9.49704C11.5688 8.46697 11.9614 7.24776 12 6C12 2.68594 9.31406 0 6 0Z" />
      </svg>
    ),
    href: "https://www.github.com/",
  },
];

export const companyList: {
  title: string;
  links: { title: string; href: string }[];
}[] = [
  {
    title: "Company",
    links: [
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Features",
        href: "/features",
      },
      {
        title: "Works",
        href: "/works",
      },
      {
        title: "Career",
        href: "/career",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        title: "About",
        href: "/about",
      },
      {
        title: "Features",
        href: "/features",
      },
      {
        title: "Works",
        href: "/works",
      },
      {
        title: "Career",
        href: "/career",
      },
    ],
  },
  {
    title: "Help",
    links: [
      {
        title: "Customer Support",
        href: "/customer-support",
      },
      {
        title: "Delivery Details",
        href: "/delivery-details",
      },
      {
        title: "Terms & Conditions",
        href: "/terms-and-conditions",
      },
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
    ],
  },
  {
    title: "FAQ",
    links: [
      {
        title: "Account",
        href: "/account",
      },
      {
        title: "Manage Deliveries",
        href: "/manage-deliveries",
      },
      {
        title: "Orders",
        href: "/orders",
      },
      {
        title: "Payments",
        href: "/payments",
      },
    ],
  },
];

export const paymentList: { title: string; imageUrl: string }[] = [
  {
    title: "Visa",
    imageUrl: "/payment/Visa.svg",
  },
  {
    title: "Mastercard",
    imageUrl: "/payment/Mastercard.svg",
  },
  {
    title: "Paypal",
    imageUrl: "/payment/Paypal.svg",
  },
  {
    title: "Apple Pay",
    imageUrl: "/payment/ApplePay.svg",
  },
  {
    title: "Google Pay",
    imageUrl: "/payment/GooglePay.svg",
  },
];