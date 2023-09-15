import React from "react";
import Link from "next/link";
import { BsMouse } from "react-icons/bs";
import { MdSwipeUp } from "react-icons/md";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";

const HeroSection = () => {
  return (
    <main className="h-screen lg-1024:mx-8">
      <section className="grid h-[71.6vh] grid-rows-2 gap-8 lg-1024:h-[82.6vh]">
        <h2 className="flex items-end justify-center text-4xl text-black drop-shadow-md dark:text-white md-768:text-6xl lg-1024:text-5xl">
          webistesbysagar
        </h2>
        <div className="mx-8 flex h-fit flex-wrap items-start justify-center gap-8">
          <Button
            radius="full"
            className="button_main"
            aria-label="lets make your website page"
            role="button"
          >
            <Link href={"/lets-make-your-website"}>
              Let&apos;s Make Your Website
            </Link>
          </Button>
          <Button
            radius="full"
            className="button_main bg-transparent"
            aria-label="your free audit page"
            role="button"
          >
            <Link href={"/audit-page"}>Your Free Website Audit</Link>
          </Button>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <Tooltip showArrow={true} content="Scroll Down">
          <Button className="bg-transparent" aria-label="icon" role="button">
            <BsMouse className="hidden text-4xl lg-1024:block" />
            <MdSwipeUp className="text-4xl lg-1024:hidden" />
          </Button>
        </Tooltip>
      </section>
    </main>
  );
};

export default HeroSection;
