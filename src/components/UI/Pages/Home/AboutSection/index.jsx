import React, { Fragment } from "react";
import HindiBackGround from "@/components/UI/HindiBackGround";

const AboutSection = () => {
  return (
    <Fragment>
      <section className="flex items-start justify-center">
        <q className="text-2xl font-bold">
          I help design simpler user experiences.
        </q>
      </section>
      <section className="flex h-[30vh] items-start justify-center">
        <HindiBackGround />
      </section>
      <section className="mx-20 mt-20">
        <h2 className="text-6xl font-bold">
          About <span className="text-yellow-400">me</span>
        </h2>
      </section>
    </Fragment>
  );
};

export default AboutSection;
