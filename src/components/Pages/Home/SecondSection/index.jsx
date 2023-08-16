import React, { Fragment } from "react";
import HindiBackGround from "@/components/UI/HindiBackGround";
import myImg from "../../../../public/images/sagar.webp";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const AboutSection = () => {
  return (
    <Fragment>
      <div className="mx-4 lg-1024:mx-[3rem]">
        <div className="grid-cols-3 place-items-center justify-items-center lg-1024:grid">
          <div>
            <p className="text-center text-2xl text-black drop-shadow dark:text-gray-500 lg-1024:text-left lg-1024:text-3xl lg-1024:tracking-tight">
              Hi, I&apos;m{" "}
              <span className="text-yellow-500 dark:text-white">
                Sagar Vaish
              </span>
              .
              <br />
              Based in{" "}
              <span className="text-yellow-500 dark:text-white">
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
              <br />I help startups design{" "}
              <span className="text-yellow-500 dark:text-white">simpler</span>{" "}
              interfaces.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative mb-16 md-768:h-[20rem] md-768:w-[20rem] lg-1024:mb-0 lg-1024:h-[21rem] lg-1024:w-[21rem]">
              <Image src={myImg} alt="my-pic" height={500} width={500} />
            </div>
          </div>
          <div>
            <p className="text-center text-2xl text-black drop-shadow dark:text-gray-500 lg-1024:text-left lg-1024:text-3xl lg-1024:tracking-tight">
              I{" "}
              <span className="text-yellow-500 dark:text-white">
                simplify & re-design
              </span>{" "}
              websites for smooth user experience and greater{" "}
              <span className="text-yellow-500 dark:text-white">
                interactivity
              </span>
              .
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="lg:1024:h-[30vh] mt-8 h-[20vh] lg-1024:mt-0">
            <HindiBackGround />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutSection;
