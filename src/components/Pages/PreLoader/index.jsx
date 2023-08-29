import React from "react";

import { motion as m } from "framer-motion";

const Preloader = () => {
  return (
    // <div className="absolute left-0 top-0 bg-white dark:bg-black">
    <m.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-[91vh] w-screen animate-pulse grid-rows-2 items-center justify-center gap-8 text-5xl font-bold lg-1024:h-[91.5vh]"
    >
      नमस्ते
    </m.div>
    // </div>
  );
};

export default Preloader;
