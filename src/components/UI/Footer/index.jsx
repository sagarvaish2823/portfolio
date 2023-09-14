import React from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  const Links = [
    {
      id: 0,
      icon: <BsGithub />,
      href: "https://github.com/sagarvaish2823",
    },
    {
      id: 1,
      icon: <BsLinkedin />,
      href: "https://github.com/sagarvaish2823",
    },
    {
      id: 2,
      icon: <BsInstagram />,
      href: "https://github.com/sagarvaish2823",
    },
  ];
  return (
    <section className="mx-8 py-16">
      <div className="flex items-center justify-center">
        <p className="text-center text-xl">
          Created by
          <br />
          Sagar Vaish
        </p>
      </div>
      <div className="mt-8 flex items-center justify-center gap-8 text-4xl">
        {Links.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="transition-transform hover:scale-110"
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Footer;
