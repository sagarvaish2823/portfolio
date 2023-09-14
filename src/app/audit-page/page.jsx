"use client";
import React, { useState } from "react";
import formImg from "../../public/svg/form.svg";
import Image from "next/image";
import AuditInput from "@/components/Funtional/AuditInput";
import ConfettiScreen from "@/components/UI/Confetti";

export const metadata = {
  title: "websitesbysagar - Sagar Vaish",
  description: "This is Sagar's portfolio website.",
};

export default function AuditPage() {
  // const [confetti, setConfetti] = useState(false);
  // function stopconfetti() {
  //   setConfetti(false);
  // }

  // function makeWebiste() {
  //   setTimeout(stopconfetti, 5000);
  //   setConfetti(true);
  // }
  return (
    // {confetti && <ConfettiScreen />}
    <div className="mx-8 h-full w-[95vw] pt-16">
      <section className="flex justify-end">
        <h2 className="text-right text-5xl font-bold">
          Get Your Website
          <br />
          <span className="text-yellow-400">Audited</span>.
        </h2>
      </section>
      <form className="h-screen">
        <label htmlFor="name">Name</label>
      </form>
    </div>
  );
}
