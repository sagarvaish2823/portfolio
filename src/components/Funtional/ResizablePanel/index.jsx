import React from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import useMeasure from "react-use-measure";

const ResizablePanel = ({ children, className }) => {
  let [ref, { height }] = useMeasure();
  return (
    <m.div animate={{ height }} className="relative overflow-hidden">
      <AnimatePresence initial={false}>
        <m.div
          key={JSON.stringify(children, ignoreCircularReferences())}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            ref={ref}
            className={className + " " + `${height ? "absolute" : "relative"}`}
          >
            {children}
          </div>
        </m.div>
      </AnimatePresence>
    </m.div>
  );
};

const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};

export default ResizablePanel;
