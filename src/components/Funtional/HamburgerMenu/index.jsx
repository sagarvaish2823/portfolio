"use client";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const hamBurgerHandler = () => {
  console.log("hi");
};

export default function HamburgerMenu() {
  return (
    <button
      onClick={hamBurgerHandler}
      className="absolute right-0 z-20 m-4 text-3xl"
    >
      <RxHamburgerMenu />
    </button>
  );
}
