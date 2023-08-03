import React, { Fragment } from "react";
import NavbarLogo from "./NavbarLogo";
import DarkModeToggle from "../DarkModeToggle";
import Link from "next/link";

const NavBar = () => {
  const links = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "About Me",
      href: "/about-me",
    },
    {
      id: 3,
      name: "Newsletter",
      href: "/newsletter",
    },
  ];
  return (
    <Fragment>
      <nav className="flex items-center justify-between px-8 py-2">
        <NavbarLogo />
        <div>
          <DarkModeToggle />
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
