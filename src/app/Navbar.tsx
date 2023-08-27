"use client";

import Image from "next/image";
import React, { useState } from "react";

import { Transition } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const Navbar = () => {
  const [show, setShow] = useState(false);
  const currentPathname = usePathname();
  return (
    <div className="flex flex-col h-full">
      <Transition
        className={"self-end pointer-events-auto"}
        appear={true}
        show={!show}
        enterFrom="scale-0"
        enterTo="scale-100"
        enter="transition-all ease-in-out duration-700"
        leave="transition-all ease-in-out duration-700"
        leaveFrom="scale-0"
        leaveTo="scale-100"
      >
        <Image
          className="py-[30px] cursor-pointer"
          src="/assets/shared/icon-hamburger.svg"
          width="24"
          height="21"
          onClick={() => setShow(true)}
          alt="A hamburger icon for the navbar"
        />
      </Transition>
      <Transition
        appear={false}
        className={`${
          !show ? "pointer-events-none" : "pointer-events-auto"
        } text-white pointer-events-auto lg:h-fit backdrop-blur-xl bg-[rgba(255, 255, 255, 0.04)] lg:min-w-fit absolute lg:backdrop-blur-3xl h-full right-0 z-10`}
        show={show}
        enterFrom="w-0 lg:scale-x-0"
        enterTo="w-4/5 lg:w-3/5 lg:scale-x-100"
        enter="transition-all ease-in-out duration-500"
        leave="transition-all ease-in-out duration-500"
        leaveFrom="w-4/5 lg:w-3/5"
        leaveTo="w-0"
      >
        <div className="flex flex-col max-lg:pt-10 pr-10 self-stretch gap-12">
          <Image
            className="self-end lg:hidden cursor-pointer"
            src="/assets/shared/icon-close.svg"
            width="20"
            height="21"
            onClick={() => setShow(false)}
            alt="A close icon for the navbar"
          ></Image>
          <div className="pointer-events-auto flex px-10 flex-col gap-8 lg:gap-20 lg:flex-row  tracking-widest">
            {[
              { "00": ["/", "home"] },
              { "01": ["/destinations", "destination"] },
              { "02": ["/crew", "crew"] },
              { "03": ["/technology", "technology"] },
            ].map((item) => {
              const key = Object.keys(item)[0];
              const value = Object.values(item)[0];
              console.log(currentPathname);
              return (
                <Link
                  key={key}
                  className={`${
                    currentPathname.endsWith(value[0])
                      ? `lg:border-b-[3px] lg:border-white`
                      : `lg:hover:border-b-[3px] lg:hover:border-opacity-25 lg:hover:border-white`
                  } uppercase text-lg font-barlow_cond flex items-center lg:h-24 gap-8`}
                  href={value[0]}
                >
                  <p className="text-lg font-bold font-barlow_cond lg:hidden">
                    {key}
                  </p>{" "}
                  <p>{value[1]}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </Transition>
    </div>
  );
};
