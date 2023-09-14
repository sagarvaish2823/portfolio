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
      <nav className="mx-8 flex items-center justify-between py-2 pt-4">
        <NavbarLogo />
        <div className="z-0 flex gap-8">
          <Link
            href="/#myWork"
            className="hidden text-lg font-bold transition-transform hover:scale-105 md-768:block"
          >
            My Work
          </Link>
          <DarkModeToggle />
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
