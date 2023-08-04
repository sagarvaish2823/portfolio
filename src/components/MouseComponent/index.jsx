"use client";
import { motion as m } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";

const MouseComponent = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  const variants = {
    default: {
      x: mousePosition.x - 150,
      y: mousePosition.y - 150,
      transition: {
        type: "tween",
      },
    },
  };

  return (
    <Fragment>
      <m.div
        variants={variants}
        animate="default"
        className="fixed left-0 top-0 z-0 blur-[150px] dark:blur-[200px]"
      >
        <div className="aspect-square h-[300px] animate-rotate_item rounded-full bg-gradient-to-r from-blue-300 to-green-500 dark:from-green-300 dark:to-purple-500"></div>
      </m.div>
    </Fragment>
  );
};

export default MouseComponent;
