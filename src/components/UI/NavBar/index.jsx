import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import NavbarLogo from "./NavbarLogo";
import DarkModeToggle from "../DarkModeToggle";
import Link from "next/link";

export default function NavBar() {
  return (
    <Navbar
      maxWidth="full"
      shouldHideOnScroll
      className="bg-transparent"
      isBlurred="true"
    >
      <NavbarBrand>
        <NavbarLogo />
      </NavbarBrand>
      <NavbarContent justify="end" className="z-0">
        <NavbarItem>
          <Link href="/#myWork">My Work</Link>
        </NavbarItem>
        <NavbarItem>
          <DarkModeToggle />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
