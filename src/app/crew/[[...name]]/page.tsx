import { fetchCrewData } from "@/app/utils";
import Image from "next/image";
import React from "react";
import { CrewSelector } from "./CrewSelector";

export default async function Page({ params }: { params: { name: string[] } }) {
  let { name } = params;

  if (!name) {
    name = ["1"];
  }

  const index = Number.parseInt(name[0]);
  const data = await fetchCrewData(index);
  return (
    <div className="flex px-6 lg:px-20 flex-grow flex-col lg:flex-row-reverse md:flex-col-reverse h-auto items-center justify-start max-lg:pt-8 lg:gap-0 gap-4">
      <div className="relative w-full h-full ">
        <Image
          className="h-auto w-full object-contain object-bottom"
          priority
          src={data.images.webp.slice(1)}
          fill={true}
          alt={data.name}
        />
      </div>
      <div className="flex flex-col h-full text-center text-white justify-center ">
        <CrewSelector index={index} />
        <h2 className="md:text-2xl lg:text-3xl text-center opacity-50 font-bellefair lg:text-left ">
          {data.role.toUpperCase()}
        </h2>
        <h1 className="text-2xl lg:text-left md:text-[40px] lg:text-[56px] font-bellefair leading-normal">
          {data.name.toUpperCase()}
        </h1>
        <p className="max-lg:self-center lg:text-left md:w-2/3 lg:w-8/12 font-barlow text-[#D0D6F9] lg:text-lg leading-6">
          {data.bio}
        </p>
      </div>
    </div>
  );
}
