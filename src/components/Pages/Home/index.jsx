"use client";
import React, { Fragment } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import WorkFlow from "./WorkFlow";
import ProjectWork from "./ProjectWork";
import Message from "./MessageSection";
import AccordionSection from "./AccordionSection";

const HomePage = () => {
  return (
    <Fragment>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkFlow />
      <ProjectWork />
      <Message />
      <AccordionSection />
    </Fragment>
  );
};

export default HomePage;
