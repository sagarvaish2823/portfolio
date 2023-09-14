"use client";
import React, { useEffect, useState } from "react";
import Preloader from "@/components/Pages/PreLoader";
import MainSection from "@/components/Pages/Home/FirstSection";
import AboutSection from "@/components/Pages/Home/SecondSection";
import ServicesSection from "@/components/Pages/Home/ThirdSection";
import WorkFlow from "@/components/Pages/Home/FourthSection";
import ProjectWork from "@/components/Pages/Home/FifthSection";
import Message from "@/components/Pages/Home/SixthSection";
import AccordionSection from "@/components/Pages/Home/SeventhSection";

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
        <MainSection />
        <AboutSection />
        <ServicesSection />
        <WorkFlow />
        <ProjectWork />
        <Message />
        <AccordionSection />
      </section>
    );
}
