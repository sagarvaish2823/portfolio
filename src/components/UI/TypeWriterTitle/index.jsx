"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriterTitle = () => {
  return (
    <div>
      <p className="pointer-events-none text-[4rem] font-bold">Hi, I&apos;m</p>
      <p className="text-red-400 text-[5rem] font-bold">
        <Typewriter
          words={["सागर वैश", "Sagar Vaish"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
    </div>
  );
};

export default TypeWriterTitle;
