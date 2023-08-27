"use client";
import { useRouter } from "next/navigation";
import React from "react";

export const CrewSelector = ({ index }: { index: number }) => {
  const router = useRouter();
  return (
    <svg
      className="self-center lg:self-start lg:order-last m-4 lg:mt-40"
      width="132"
      height="15"
      viewBox="0 0 132 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="hover:opacity-50"
        opacity={index != 0 ? "0.174363" : "1.0"}
        cx="7.5"
        cy="7.5"
        cursor={"pointer"}
        onClick={() => router.push("/crew/0")}
        r="7.5"
        fill="white"
      />
      <circle
        className="hover:opacity-50"
        opacity={index != 1 ? "0.174363" : "1.0"}
        onClick={() => router.push("/crew/1")}
        cx="46.5"
        cursor={"pointer"}
        cy="7.5"
        r="7.5"
        fill="white"
      />
      <circle
        className="hover:opacity-50"
        opacity={index != 2 ? "0.174363" : "1.0"}
        onClick={() => router.push("/crew/2")}
        cx="85.5"
        cursor={"pointer"}
        cy="7.5"
        r="7.5"
        fill="white"
      />
      <circle
        className="hover:opacity-50"
        opacity={index != 3 ? "0.174363" : "1.0"}
        cx="124.5"
        cursor={"pointer"}
        onClick={() => router.push("/crew/3")}
        cy="7.5"
        r="7.5"
        fill="white"
      />
    </svg>
  );
};
