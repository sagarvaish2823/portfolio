"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriterTitle = () => {
  return (
    <div className="absolute left-0 top-0 z-0 h-screen w-screen text-xl font-bold lowercase text-black md-768:text-5xl">
      {/* <p className="pointer-events-none text-[4rem] font-bold">Hi, I&apos;m</p> */}
      {/* <p className="text-red-400 text-[5rem] font-bold"> */}
      <p className="flex h-[15rem] items-center justify-center md-768:h-screen">
        <Typewriter
          words={["नमस्ते", "websitesbysagar"]}
          // words={["सागर वैश", "Sagar Vaish"]}
          loop={1}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
      {/* </p> */}
    </div>
  );
};

export default TypeWriterTitle;
