import React, { Fragment } from "react";
import NavbarLogo from "./NavbarLogo";

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
      <nav className="mx-8 my-2 pt-2">
        <NavbarLogo />
      </nav>
    </Fragment>
  );
};

export default NavBar;
