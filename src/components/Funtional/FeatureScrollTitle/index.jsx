import classNames from "classnames";
import { useInView } from "framer-motion";
import React, { useRef } from "react";

const FeatureScrollTitle = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  return (
    <p
      ref={ref}
      className={classNames(
        "py-14 text-xl font-bold tracking-tight transition-colors lg-1024:text-5xl",
        isInView
          ? "text-black dark:text-white"
          : "text-gray-300 dark:text-gray-700"
      )}
    >
      {children}
    </p>
  );
};

export default FeatureScrollTitle;
