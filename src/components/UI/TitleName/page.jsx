"use client";
import React, { Fragment, useState } from "react";
import { Noto_Sans } from "next/font/google";
import { MdOutlineLoop } from "react-icons/md";
import { motion as m } from "framer-motion";

const fontUsed = Noto_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const TitleName = () => {
  const [name, setName] = useState(false);
  return (
    <Fragment>
      <section className="relative h-screen w-screen">
        <section>
          <div className="absolute bottom-10 left-[65%]">
            <button
              onClick={() => setName(!name)}
              className="rounded-full border-2 border-gray-400"
            >
              <MdOutlineLoop className="text-3xl text-gray-400" />
            </button>
          </div>
        </section>
        <section>
          <div className="absolute bottom-8 left-[35%]">
            {name ? (
              <m.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-7xl font-bold"
              >
                Sagar Vaish
              </m.h1>
            ) : (
              <m.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={`${fontUsed.className} text-7xl font-bold ml-[2vw]`}
              >
                सागर वैश
              </m.h1>
            )}
          </div>
        </section>
      </section>
    </Fragment>
  );
};

export default TitleName;
