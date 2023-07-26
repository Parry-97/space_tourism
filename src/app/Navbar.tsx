"use client";

import Image from "next/image";
import React, { useState } from "react";
import hamburger from "../../starter-code/assets/shared/icon-hamburger.svg";
import closeIcon from "../../starter-code/assets/shared/icon-close.svg";

import { Transition } from "@headlessui/react";
import Link from "next/link";
export const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col h-full">
      <Transition
        className={"self-end"}
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
          className="cursor-pointer"
          src={hamburger}
          onClick={() => setShow(true)}
          alt="A hamburger icon for the navbar"
        />
      </Transition>
      <Transition
        appear={false}
        className="text-white lg:h-fit backdrop-blur-xl lg:min-w-fit absolute  lg:backdrop-blur-3xl py-10 h-full right-0 z-10"
        show={show}
        enterFrom="w-0 lg:scale-x-0"
        enterTo="w-3/5 lg:scale-x-100"
        enter="transition-all ease-in-out duration-500"
        leave="transition-all ease-in-out duration-500"
        leaveFrom="w-3/5"
        leaveTo="w-0"
      >
        <div className="flex flex-col  gap-12">
          <Image
            className="self-end lg:hidden cursor-pointer"
            src={closeIcon}
            onClick={() => setShow(false)}
            alt="A close icon for the navbar"
          ></Image>
          <div className="flex px-10 flex-col gap-8 lg:gap-20 lg:flex-row tracking-widest">
            <Link className="flex gap-8" href={"/"}>
              <p className="text-lg font-bold font-barlow_cond lg:hidden">00</p>{" "}
              <p className="text-lg font-barlow_cond">HOME</p>
            </Link>
            <Link className="flex gap-8" href={"/destinations"}>
              <p className="text-lg font-bold font-barlow_cond lg:hidden">01</p>{" "}
              <p className="text-lg font-barlow_cond">DESTINATION</p>
            </Link>
            <Link className="flex gap-8" href={"#"}>
              <p className="text-lg font-bold font-barlow_cond lg:hidden">02</p>{" "}
              <p className="text-lg font-barlow_cond">CREW</p>
            </Link>
            <Link className="flex gap-8" href={"#"}>
              <p className="text-lg font-bold font-barlow_cond lg:hidden">03</p>{" "}
              <p className="text-lg font-barlow_cond">TECHNOLOGY</p>
            </Link>
          </div>
        </div>
      </Transition>
    </div>
  );
};
