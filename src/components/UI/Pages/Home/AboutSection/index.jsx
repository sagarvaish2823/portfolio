import React, { Fragment } from "react";
import HindiBackGround from "@/components/UI/HindiBackGround";
import myImg from "../../../../../public/images/sagar.webp";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const AboutSection = () => {
  return (
    <Fragment>
      <div className="px-4 lg-1024:px-[4rem]">
        <div className="grid-cols-3 place-items-center justify-items-center lg-1024:grid">
          <div>
            <p className="text-center text-2xl text-black drop-shadow dark:text-gray-500 lg-1024:text-left lg-1024:text-4xl">
              Hi, I&apos;m <br />
              <span className="text-yellow-400 dark:text-white">
                Sagar Vaish
              </span>
              .
              <br />I help startups design simpler user experiences{" "}
            </p>
          </div>
          <div className="relative mb-16 lg-1024:mb-0 lg-1024:h-[21rem] lg-1024:w-[21rem]">
            <Image src={myImg} alt="my-pic" height={500} width={500} />
          </div>
          <div>
            <p className="text-center text-2xl text-black drop-shadow dark:text-gray-500 lg-1024:text-left lg-1024:text-4xl">
              I simplify & re-design{" "}
              <span className="text-yellow-400 dark:text-white">websites</span>{" "}
              for smooth user experience
              <br />
              Based in{" "}
              <span className="text-yellow-400 dark:text-white">
                <Typewriter
                  words={["भारत", "India"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutSection;
