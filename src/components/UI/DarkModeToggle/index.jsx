"use client";
import { ThemeContext } from "@/context/themeContext/themeContext";
import React, { useContext } from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { Switch } from "@nextui-org/switch";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <Switch
      defaultSelected
      onClick={toggle}
      size="lg"
      color="secondary"
      thumbIcon={({ className }) =>
        mode === "dark" ? (
          <BsMoonFill className={className} />
        ) : (
          <BsFillSunFill className={className} />
        )
      }
    />
  );
};

export default DarkModeToggle;
