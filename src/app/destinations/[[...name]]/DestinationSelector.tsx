"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const DestinationSelector = () => {
  const pathname = usePathname();
  return (
    <div className="flex lg:w-full justify-between lg:justify-start md:gap-4 font-barlow_cond">
      {["moon", "mars", "europa", "titan"].map((name) => (
        <Link
          href={`/destinations/${name}`}
          key={name}
          className={`text-white cursor-pointer text-[14px] md:text-[1rem] tracking-widest  p-2 ${
            pathname.toLowerCase().startsWith(`/destinations/${name}`)
              ? "border-b-2 border-white"
              : ""
          }`}
        >
          {name.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};
