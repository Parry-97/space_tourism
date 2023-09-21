"use client";
import Link from "next/link";
import React from "react";

export const TechnologySelector = ({ index }: { index: number }) => {
  let options = [1, 2, 3];
  return (
    <div className="justify-center font-bellefair lg:text-3xl text-white lg:gap-8 gap-4 flex lg:flex-col ">
      {options.map((option) => {
        return (
          <Link
            key={option}
            href={`/technology/${option - 1}`}
            className={`${
              index + 1 == option ? "bg-white text-black" : ""
            } border-white py-[10px] lg:py-[20px] flex justify-center border border-opacity-25 w-10 lg:w-20 h-10 lg:h-20 rounded-full`}
          >
            <span> {option} </span>
          </Link>
        );
      })}
    </div>
  );
};
