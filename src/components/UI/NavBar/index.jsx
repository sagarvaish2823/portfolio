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
      {/* <nav className="flex justify-end items-center gap-4 my-2 mx-8"> */}
      <nav className="relative">
        {/* <div className="flex gap-4 text-2xl">
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
        </div> */}
        <div className="mx-8 mt-8 md-768:mt-16 lg-1366:mt-8">
          <h1 className="text-2xl font-bold md-768:text-4xl">
            Sagar Vaish<span className="text-yellow-400">.</span>
          </h1>
          {/* <p className="">
            websitesbysagar<span className="text-2xl text-yellow-400">.</span>
          </p> */}
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
