"use client";
import { ThemeContext } from "@/context/themeContext/themeContext";
import React, { useContext } from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";

const DarkModeToggle = () => {
  const Sun = <BsFillSunFill className="text-2xl" />;

  const Moon = <BsMoonFill className="text-2xl" />;

  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className="cursor-pointer">
      <button onClick={toggle}>{mode === "dark" ? Sun : Moon}</button>
    </div>
  );
};

export default DarkModeToggle;
