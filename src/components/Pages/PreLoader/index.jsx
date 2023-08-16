import React from "react";

import { motion as m } from "framer-motion";

const Preloader = () => {
  return (
    // <div className="absolute left-0 top-0 bg-white dark:bg-black">
    <m.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-screen w-screen animate-pulse items-center justify-center text-5xl font-bold"
    >
      नमस्ते
    </m.div>
    // </div>
  );
};

export default Preloader;
