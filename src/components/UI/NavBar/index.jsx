import Link from "next/link";
import React, { Fragment } from "react";

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
      <nav className="flex justify-end items-center gap-4 my-2 mx-8">
        <div className="flex gap-4 text-2xl">
          {links.map((item) => (
            <Link
              className="hover:scale-105 hover:-translate-y-2 transition-all"
              key={item.id}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <button className="text-xl py-2 px-6 border border-black rounded-full transition-all hover:bg-black hover:text-white">
            <p>Let&apos;s Talk &gt;</p>
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
