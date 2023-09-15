"use client";
import React, { useEffect, useState } from "react";
import HomePage from "@/components/Pages/Home";
import Preloader from "@/components/Pages/PreLoader";

export default function MainPagePreloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  if (loading) {
    return <Preloader />;
  } else
    return (
      <section className="pb-8">
        <HomePage />
      </section>
    );
}
