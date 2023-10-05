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
          By filling out the form you can share the details of your website with
          me.
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
          I will contact you and we will discuss all the things about your
          website.
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
          I will create a demo of your website and based on that I will develop
          your website.
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
          After all the tests and changes, your website will be ready for the
          launch.
        </p>
      ),
    },
  ];

  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const workflowScrollPc = useTransform(scrollYProgress, [0, 1], ["65%", "3%"]);
  const workflowScrollMobile = useTransform(
    scrollYProgress,
    [0, 1],
    ["65%", "-230%"]
  );

  const para =
    "absolute -top-20 right-5 text-[7rem] text-black dark:text-gray-400";
  return (
    <Fragment>
      <section ref={targetRef} className="relative h-[300vh]">
        <div className="sticky top-0 overflow-hidden">
          <div>
            <div className="mx-8 pt-16">
              <p className="page_subHeading text-right">
                Your Website
                <br className="md-768:hidden" /> will be ready in <br /> 4 easy
                steps...
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
                    <p className={para}>{text.id}</p>
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
                    <p className={para}>{text.id}</p>
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
