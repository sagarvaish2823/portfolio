"use client";
import React, { useState } from "react";

const ToolTip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div className="absolute top-[calc(-100%,-50px)] min-w-[20rem] -translate-x-[45%] -translate-y-[200%] rounded-lg bg-zinc-950 p-2 text-white transition-all">
          {text}
        </div>
      )}
    </div>
  );
};

export default ToolTip;
