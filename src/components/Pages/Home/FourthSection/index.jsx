import React, { Fragment } from "react";

const WorkFlow = () => {
  return (
    <Fragment>
      <section className="mx-8 mt-10">
        {/* <div>
          <h2 className="flex items-center justify-center text-5xl font-bold">
            My Workflow
          </h2>
        </div> */}
        <div className="flex h-full items-center justify-end pt-8 lg-1024:pt-16">
          <p className="text-right text-4xl font-bold tracking-tight lg-1024:pl-16 lg-1024:text-5xl">
            Your Website will be ready in <br /> 4 easy steps...
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default WorkFlow;
