"use client";
import React, { useEffect, useState } from "react";
import Preloader from "@/components/Pages/PreLoader";
import HeroSection from "@/components/Pages/Home/HeroSection";
import AboutSection from "@/components/Pages/Home/AboutSection";
import ServicesSection from "@/components/Pages/Home/ServicesSection";
import WorkFlow from "@/components/Pages/Home/WorkFlow";
import ProjectWork from "@/components/Pages/Home/ProjectWork";
import Message from "@/components/Pages/Home/MessageSection";
import AccordionSection from "@/components/Pages/Home/AccordionSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  if (loading) {
    return <Preloader />;
  } else
    return (
      <section className="pb-8">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WorkFlow />
        <ProjectWork />
        <Message />
        <AccordionSection />
      </section>
    );
}
