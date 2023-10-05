"use client";
import { ThemeContext } from "@/context/themeContext/themeContext";
import React, { useContext } from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { Switch } from "@nextui-org/switch";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <Switch
      isSelected={mode === "light" ? <BsFillSunFill /> : null}
      onClick={toggle}
      size="lg"
      color="primary"
      aria-label="dark mode"
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
