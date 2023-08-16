"use client";
import React, { Fragment, useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const ServicesSection = () => {
  const [flip1, setFlip1] = useState(false);
  const [flip2, setFlip2] = useState(false);

  return (
    <Fragment>
      <section className="mx-8 pt-8 lg-1024:mt-16">
        <div>
          <h2 className="text-4xl font-bold tracking-tight lg-1024:pl-16 lg-1024:text-5xl">
            I can <br /> help you in...
          </h2>
        </div>
        <div className="min-h-[50vh] grid-cols-2 gap-8 pt-16 md-768:grid lg-1024:px-[13rem]">
          <div
            className={`${
              flip1
                ? "animate-gradient-xy bg-gradient-to-r from-rose-200 to-amber-300 dark:from-fuchsia-700 dark:to-sky-800"
                : ""
            } relative w-full rounded-2xl bg-[#f3f3f3] p-8 shadow dark:bg-[#161617]`}
          >
            {!flip1 ? (
              <div className="flex h-full items-center justify-center">
                <p className="text-3xl font-bold">
                  Website
                  <br />
                  Creation
                </p>
              </div>
            ) : (
              <div>
                <p className="mt-4 text-xl">
                  Unleash your online potential with our expert website
                  creation. Engaging designs, seamless functionality, and
                  captivating user experience.
                </p>
              </div>
            )}
            <button
              onClick={() => setFlip1(!flip1)}
              className="absolute bottom-4 right-4 z-20 text-5xl transition-transform hover:scale-90"
            >
              <BsArrowUpRightCircleFill />
            </button>
          </div>
          <div
            className={`${
              flip2
                ? "animate-gradient-xy bg-gradient-to-r from-rose-200 to-amber-300 dark:from-fuchsia-700 dark:to-sky-800"
                : ""
            } relative mt-8 w-full rounded-2xl bg-[#f3f3f3] p-8 shadow dark:bg-[#161617] md-768:mt-0`}
          >
            {!flip2 ? (
              <div className="flex h-full items-center justify-center">
                <p className="text-3xl font-bold">
                  Website
                  <br />
                  Re-Design
                </p>
              </div>
            ) : (
              <div>
                <p className="mt-4 text-xl">
                  Revamp your website with a modern and user-friendly re-design.
                  Enhance user experience, improve aesthetics, and optimize
                  functionality for better engagement and conversions.
                </p>
              </div>
            )}

            <button
              onClick={() => setFlip2(!flip2)}
              className="absolute bottom-4 right-4 z-20 text-5xl transition-transform hover:scale-90"
            >
              <BsArrowUpRightCircleFill />
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ServicesSection;
