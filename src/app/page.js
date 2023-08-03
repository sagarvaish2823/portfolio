"use client";
import React, { Fragment, useEffect, useState } from "react";
import AboutSection from "@/components/UI/Pages/Home/AboutSection";
import MainSection from "@/components/UI/Pages/Home/MainSection";
import Preloader from "@/components/UI/Pages/PreLoader";

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
        </section>
      </Fragment>
    );
}
