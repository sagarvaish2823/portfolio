"use client";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import myPic from "../public/images/myself3.png";
import { motion as m } from "framer-motion";
import ConfettiScreen from "@/components/UI/Confetti";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, [setLoading]);

  function stopconfetti() {
    setConfetti(false);
  }

  function makeWebiste() {
    setTimeout(stopconfetti, 5000);
    setConfetti(true);
  }
  if (loading) {
    return (
      <div className="absolute left-0 top-0 bg-white dark:bg-black">
        <m.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="flex h-screen w-screen animate-pulse items-center justify-center text-5xl font-bold"
        >
          नमस्ते
        </m.div>
      </div>
    );
  } else
    return (
      <Fragment>
        {confetti && <ConfettiScreen />}
        <m.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mx-8"
        >
          <section>
            <div className="absolute left-0 top-0">
              <div className="flex h-screen w-screen items-center justify-center text-5xl">
                webistesbysagar
              </div>
            </div>
            <div className="absolute left-0 top-0">
              <div className="mt-20 flex h-screen w-screen items-center justify-center gap-4">
                <button onClick={makeWebiste} className="button_main">
                  Let&apos;s make your website
                </button>
                {/* <button className="button_main">HIre</button> */}
              </div>
            </div>
          </section>
        </m.main>
      </Fragment>
    );
}
