"use client";
import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { Snippet } from "@nextui-org/snippet";
import Image from "next/image";
import myImg from "@/public/images/sagar-2.webp";

const ContactDetails = () => {
  return (
    <div className="ml-[4%] pt-8 md-768:ml-[10%] lg-1366:ml-[20%]">
      {/* <p className="rounded-2xl bg-[#f3f3f3] px-10 pb-16 pt-16 text-2xl font-bold text-black shadow dark:bg-white dark:text-black">
        Hi,
        <br />
        You just need to fill out a few details
        <br /> then let me handle the rest of it.
      </p>
      <div className="flex gap-8 rounded-2xl bg-gray-600 px-10 pb-16 pt-16 text-2xl font-bold text-black opacity-50 shadow dark:text-black">
        <div className="flex items-center gap-2">
          <MdOutlineAlternateEmail className="text-xl" />
          <h3 className="text-xl">Email</h3>
        </div>
        <Snippet hideSymbol className="bg-transparent text-xl">
          sagarvaish2823@gmail.com
        </Snippet>
      </div> */}
      <div className="relative h-[14rem] w-[95%] animate-gradient-xy rounded-2xl border bg-gradient-to-r from-rose-200 to-amber-300 p-6 dark:from-fuchsia-700 dark:to-sky-800 md-768:h-[14rem] md-768:w-[100%] lg-1024:h-[17rem] lg-1024:w-[105%] lg-1366:w-[85%]">
        <div className="grid h-full grid-rows-2">
          <div>
            <h3 className="text-base md-768:text-lg">Email</h3>
            <Snippet className="bg-transparent text-base md-768:text-lg">
              sagarvaish2823@gmail.com
            </Snippet>
          </div>
          <div className="flex h-full items-end justify-start">
            <div>
              <h2 className="text-base md-768:text-lg">SAGAR VAISH</h2>
              <h3 className="text-sm text-gray-300">websitesbysagar</h3>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-4">
          <div className="relative aspect-square w-[7rem] md-768:w-[8rem] lg-1366:w-[10rem]">
            <Image src={myImg} alt="sagar-vaish" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
