"use client";
import { AnimatePresence } from "framer-motion";
import React from "react";

const AnimatePresenceMotion = ({ children }) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export default AnimatePresenceMotion;
