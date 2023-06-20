"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";

const AnimatePresenceMotion = ({ children }) => {
  const pathname = usePathname();
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default AnimatePresenceMotion;
