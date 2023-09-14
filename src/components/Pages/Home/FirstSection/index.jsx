import React from "react";
import Link from "next/link";
import { BsMouse } from "react-icons/bs";
import { MdSwipeUp } from "react-icons/md";
import ToolTip from "@/components/UI/ToolTip";
import { motion as m } from "framer-motion";

const MainSection = () => {
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen lg-1024:mx-8"
    >
      <section className="grid h-[73.6vh] grid-rows-2 gap-8 lg-1024:h-[82.6vh]">
        <h2 className="flex items-end justify-center text-4xl text-black drop-shadow-md dark:text-white md-768:text-6xl lg-1024:text-5xl">
          webistesbysagar
        </h2>
        <div className="mx-8 flex h-fit flex-wrap items-start justify-center gap-8">
          <div>
            <Link href={"/"} className="button_main hover:shadow-md">
              Let&apos;s Make Your Website
            </Link>
          </div>
          <div>
            <Link href={"/audit-page"} className="button_main hover:shadow-md">
              Your Free Website Audit
            </Link>
          </div>
        </div>
      </section>
      <m.section className="flex flex-col items-center justify-center">
        <ToolTip text={"Scroll Down"}>
          <BsMouse className="hidden text-4xl lg-1024:block" />
          <MdSwipeUp className="text-4xl lg-1024:hidden" />
        </ToolTip>
      </m.section>
    </m.main>
  );
};

export default MainSection;
