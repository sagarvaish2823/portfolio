"use client";
import React, { Fragment, useEffect, useState } from "react";
import Preloader from "@/components/Pages/PreLoader";
import MainSection from "@/components/Pages/Home/FirstSection";
import AboutSection from "@/components/Pages/Home/SecondSection";
import ServicesSection from "@/components/Pages/Home/ThirdSection";
import WorkFlow from "@/components/Pages/Home/FourthSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  if (loading) {
    return <Preloader />;
  } else
    return (
      <Fragment>
        <section className="mb-16">
          <MainSection />
          <AboutSection />
          <ServicesSection />
          <WorkFlow />
        </section>
      </Fragment>
    );
}
