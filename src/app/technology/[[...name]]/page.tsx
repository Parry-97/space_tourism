import { fetchTechnologyData } from "@/app/utils";
import Image from "next/image";
import React from "react";
import { TechnologySelector } from "./TechnologySelector";
import imageLoader from "./imageLoader";

export default async function Page({ params }: { params: { name: string[] } }) {
  let { name } = params;

  if (!name) {
    name = ["0"];
  }

  const index = Number.parseInt(name[0]);
  const data = await fetchTechnologyData(index);

  return (
    <div className="flex lg:px-20 flex-grow flex-col lg:flex-row-reverse h-auto items-center justify-start max-lg:pt-8 lg:gap-0 gap-4">
      <div className="w-full h-full">
        <picture className="h-full">
          <source
            media="(max-width: 1024px)"
            srcSet={data.images.landscape.slice(1)}
          />
          <source
            media="(min-width: 1024px)"
            srcSet={data.images.portrait.slice(1)}
          />
          <img
            className="w-full h-auto object-contain max-h-[620px]"
            fetchPriority="high"
            src={data.images.portrait.slice(1)}
            alt={data.name}
          />
        </picture>
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center h-full text-center text-white px-3 gap-4 justify-center lg:gap-8 ">
        <TechnologySelector index={index} />
        <div className="flex flex-col justify-center">
          <h2 className="uppercase font-barlow_cond tracking-wider lg:text-left text-center text-[#D0D6F9]">
            The terminology ...
          </h2>
          <h1 className="text-2xl lg:text-left md:text-[40px] lg:text-[56px] font-bellefair leading-normal">
            {" "}
            {data.name.toUpperCase()}{" "}
          </h1>
          <p className="max-lg:self-center lg:text-left md:w-2/3 lg:w-8/12 font-barlow text-[#D0D6F9] lg:text-lg leading-6">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
