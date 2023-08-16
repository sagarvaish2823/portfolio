import { useScroll, useTransform, motion as m } from "framer-motion";
import React, { Fragment, useRef } from "react";

const WorkFlow = () => {
  const WorkFlowText = [
    {
      id: 1,
      title: (
        <h2 className="text-3xl">
          Share
          <br /> Details
        </h2>
      ),
      para: (
        <p className="text-base font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          atque odit facilis cumque! Cumque, suscipit.
        </p>
      ),
    },
    {
      id: 2,
      title: (
        <h2 className="text-3xl">
          Design
          <br /> Discussion
        </h2>
      ),
      para: (
        <p className="text-base font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          atque odit facilis cumque! Cumque, suscipit.
        </p>
      ),
    },
    {
      id: 3,
      title: (
        <h2 className="text-3xl">
          Work
          <br /> on project
        </h2>
      ),
      para: (
        <p className="text-base font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          atque odit facilis cumque! Cumque, suscipit.
        </p>
      ),
    },
    {
      id: 4,
      title: (
        <h2 className="text-3xl">
          Fresh
          <br /> Website Ready
        </h2>
      ),
      para: (
        <p className="text-base font-normal">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          atque odit facilis cumque! Cumque, suscipit.
        </p>
      ),
    },
  ];

  // const targetRefPc = useRef(null);
  // const targetRefMobile = useRef(null);
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  // const { scrollYProgress } = useScroll({
  //   target: targetRefMobile,
  // });
  const workflowScrollPc = useTransform(
    scrollYProgress,
    [0, 1],
    ["65%", "-0%"]
  );
  const workflowScrollMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["65%", "-290%"]
  );

  return (
    <Fragment>
      <section ref={targetRef} className="relative mx-8 h-[300vh]">
        <div className="sticky top-0 overflow-hidden">
          <div>
            <div className="pt-8 lg-1024:pt-16">
              <p className="text-right text-4xl font-bold tracking-tight lg-1024:text-5xl">
                Your Website will be ready in <br /> 4 easy steps...
              </p>
            </div>
            <m.div
              className="flex gap-4 pt-16 md-768:hidden"
              style={{ x: workflowScrollMobile }}
            >
              {WorkFlowText.map((text) => (
                <div key={text.id} className="card">
                  <div className="flex items-end justify-between">
                    {text.title}
                    <p className="absolute -top-20 right-5 text-[7rem] text-gray-400">
                      {text.id}
                    </p>
                  </div>
                  {text.para}
                </div>
              ))}
            </m.div>
            <m.div
              className="hidden gap-4 pt-16 md-768:flex"
              style={{ x: workflowScrollPc }}
            >
              {WorkFlowText.map((text) => (
                <div key={text.id} className="card">
                  <div className="flex items-end justify-between">
                    {text.title}
                    <p className="absolute -top-20 right-5 text-[7rem] text-gray-400">
                      {text.id}
                    </p>
                  </div>
                  {text.para}
                </div>
              ))}
            </m.div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WorkFlow;
