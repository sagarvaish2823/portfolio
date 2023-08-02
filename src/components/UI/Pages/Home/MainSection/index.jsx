import React from "react";
import Link from "next/link";
import { BsMouse } from "react-icons/bs";
import ToolTip from "@/components/UI/ToolTip";
import { motion as m } from "framer-motion";

const MainSection = () => {
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen"
    >
      <section className="grid h-[83.6vh] grid-rows-2 gap-8">
        <div className="flex items-end justify-center text-5xl text-black dark:text-white">
          webistesbysagar
        </div>
        <div className="flex items-start justify-center gap-8">
          {/* <Link href={"/"} className="button_main">
        Let&apos;s Make Your Website
      </Link> */}
          <Link href={"/auditPage"} className="button_main">
            Your Free Website Audit
          </Link>
        </div>
      </section>
      <m.section className="flex flex-col items-center justify-center">
        <ToolTip text={"Mujhe Pata the Piddi tum ispe hover kroge"}>
          <BsMouse className="text-4xl" />
        </ToolTip>
      </m.section>
    </m.main>
  );
};

export default MainSection;
