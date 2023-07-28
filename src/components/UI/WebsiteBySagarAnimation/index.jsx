import { easeOut, motion as m } from "framer-motion";
import React from "react";

export default function WebsiteBySagarAnimation() {
  return (
    <m.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: easeOut }}
      className="absolute left-0 top-0 z-20 h-screen w-screen text-5xl lowercase"
    >
      <h1 className="flex h-screen animate-pulse items-center justify-center">
        WEBSITESBYSAGAR
      </h1>
    </m.div>
  );
}
