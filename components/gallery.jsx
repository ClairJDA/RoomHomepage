"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBar from "./navbar";
import SideBar from "./side-bar";

import data from "../data.json";
import NaviBtn from "./navi-btn";

function Gallery() {
  const [info, setInfo] = useState(data);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  console.log(info[index].imgUrl);

  useEffect(() => {}, [index]);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="relative w-full lg:w-[60%]">
        <NavBar setIsOpen={setIsOpen} />
        {isOpen && <SideBar setIsOpen={setIsOpen} />}
        <Image
          src={info[index].imgUrl}
          alt="hero"
          width={1440}
          height={700}
          className="object-cover hidden lg:block"
        />
        <Image
          src={info[index].imgMobile}
          alt="hero"
          width={1440}
          height={700}
          className="object-cover lg:hidden"
        />
        <div className="w-[70px] h-[42px] lg:hidden absolute right-0 bottom-0 ">
          <NaviBtn index={index} setIndex={setIndex} />
        </div>
      </div>

      <div className="relative w-full lg:w-[40%] p-12 bg-white">
        <h1 className="text-3xl text-black font-extrabold">
          {info[index].title}
        </h1>
        <p className="my-3 text-xs text-dark-gray">{info[index].detail}</p>
        <div className="flex items-center gap-4">
          <Link
            href="/shop"
            className="text-sm text-very-dark-gray hover:text-dark-gray font-bold tracking-[4px] uppercase"
          >
            Shop now
          </Link>
          <Image
            src={"/images/icon-arrow.svg"}
            alt="arrow"
            width={30}
            height={10}
          />
        </div>
        <div className="hidden w-[70px] h-[42px] lg:block absolute left-0 bottom-0 ">
          <NaviBtn index={index} setIndex={setIndex} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
