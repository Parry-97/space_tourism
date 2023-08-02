import { fetchTechnologyData } from "@/app/utils";
import Image from "next/image";
import React from "react";

export default async function Page({ params }: { params: { name: string[] } }) {
  let { name } = params;

  if (!name) {
    name = ["1"];
  }

  const index = Number.parseInt(name[0]);
  const data = await fetchTechnologyData(index);
  return (
    <div className="flex lg:px-20 flex-grow flex-col lg:flex-row-reverse h-auto items-center justify-start max-lg:pt-8 lg:gap-0 gap-4">
      <div className="relative w-full h-full ">
        <Image
          className="w-full lg:object-contain"
          priority
          quality={100}
          src={data.images.portrait.slice(1)}
          fill={true}
          alt={data.name}
        />
      </div>
      <div className="flex flex-col h-full text-center text-white px-3  justify-center ">
        <h2 className="uppercase font-barlow_cond tracking-wider lg:text-left text-center text-[#D0D6F9]">
          The terminology ...
        </h2>
        <h1 className="text-2xl lg:text-left md:text-[40px] lg:text-[56px] font-bellefair leading-normal">
          {data.name.toUpperCase()}
        </h1>
        <p className="max-lg:self-center lg:text-left md:w-2/3 lg:w-8/12 font-barlow text-[#D0D6F9] lg:text-lg leading-6">
          {data.description}
        </p>
      </div>
    </div>
  );
}
