import { fetchDestinationData } from "@/app/utils";
import Image from "next/image";

export default async function Page({ params }: { params: { name: string[] } }) {
  let { name } = params;

  if (!name) {
    name = ["Moon"];
  }

  const data = await fetchDestinationData(name[0]);
  return (
    <div className="flex flex-col h-auto justify-between lg:gap-24 gap-8">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-8 mx-auto w-11/12 ">
        <div className="relative w-1/3 max-w-sm h-auto">
          <Image
            priority
            className="object-cover w-full h-auto"
            src={data.images.webp.slice(1)}
            height={260}
            width={260}
            alt={data.name}
          />
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className="text-white text-center">
            <h1 className="text-6xl md:text-[80px] lg:text-8xl lg:text-left font-bellefair">
              {data.name.toUpperCase()}
            </h1>
            <p className="max-w-lg text-center lg:text-left font-barlow text-[#D0D6F9] text-lg leading-6">
              {data.description}
            </p>
          </div>
          <hr className="w-full border-[rgb(56,59,75,1)]" />
          <div className="flex flex-col text-center lg:text-left text-white gap-10  w-full  md:flex-row justify-between lg:justify-start">
            <div>
              <h2 className="font-barlow_cond tracking-widest mb-3 text-[#D0D6F9]">
                AVG DISTANCE
              </h2>
              <p className="font-bellefair text-[28px]">
                {data.distance.toUpperCase()}
              </p>
            </div>
            <div>
              <h2 className="font-barlow_cond tracking-widest mb-3 text-[#D0D6F9]">
                EST TRAVEL TIME
              </h2>
              <p className="font-bellefair text-[28px]">
                {data.travel.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
