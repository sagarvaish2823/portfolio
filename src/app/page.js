// import HindiBackGround from "@/components/UI/HindiBackGround";
// import TypeWriterTitle from "@/components/UI/TypeWriterTitle";
import AuditInput from "@/components/Funtional/AuditInput";
import React, { Fragment } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <Fragment>
      {/* <main>
        <section className="mx-8 relative h-screen">
          <HindiBackGround />
          <div className="z-10 relative">
            <div className="pt-8">
              <TypeWriterTitle />
            </div>
            <button>Get Your Website Redesigned</button>
          </div>
        </section>
      </main> */}

      <main className="md-768:mt-16 lg-1024:mt-20 lg-1366:mt-0">
        <section className="grid-cols-[0.7fr,1.3fr] gap-4 lg-1366:mx-8 lg-1366:grid">
          <div className="ml-8 border-black md-768:ml-16 lg-1366:ml-12 lg-1366:border-r">
            <p className="mt-8 text-4xl font-bold sm-280:text-lg sm-390:text-3xl md-820:text-5xl lg-1024:ml-10 lg-1024:mr-6 lg-1024:text-6xl lg-1366:ml-16 lg-1366:mt-16">
              Let&apos;s get
              <br /> started<span className="text-yellow-400">.</span>
            </p>
            <p className="font-light text-yellow-400 sm-280:text-xs sm-360:mt-4 md-820:text-xl lg-1024:ml-10 lg-1024:text-2xl lg-1366:ml-16">
              SUBMIT YOUR WEBSITE
            </p>
            <div className="mt-4 hidden items-center justify-center gap-8 lg-1366:mt-16 lg-1366:flex">
              <FaInstagram className="cursor-pointer text-4xl transition-all hover:scale-105 hover:text-yellow-400 active:scale-95 lg-1024:text-7xl" />
              <FaLinkedin className="cursor-pointer text-4xl transition-all hover:scale-105 hover:text-yellow-400 active:scale-95 lg-1024:text-7xl" />
            </div>
          </div>
          <div className="mx-8 mt-2 inline-flex md-768:mx-16 md-768:mt-16 lg-1024:ml-28 lg-1366:mx-8 lg-1366:mt-20 lg-1366:w-[95%]">
            {/* <div className="mx-8 mt-2 inline-flex md-768:mt-16 lg-1024:ml-10 lg-1366:ml-8 lg-1366:mt-20 lg-1366:w-[95%]"> */}
            <AuditInput />
          </div>
          {/* mobile and tablet social */}
          <div className="mb-20 mt-12 items-center justify-center gap-8 sm-280:flex lg-1366:hidden">
            <FaInstagram className="cursor-pointer text-5xl transition-all hover:scale-105 hover:text-yellow-400 active:scale-95 md-768:text-7xl" />
            <FaLinkedin className="cursor-pointer text-5xl transition-all hover:scale-105 hover:text-yellow-400 active:scale-95 md-768:text-7xl" />
          </div>
        </section>
        <section className="absolute bottom-0 right-5 sm-280:hidden sm-360:block md-768:bottom-4 lg-1366:bottom-5 lg-1366:right-10">
          <p className="select-none text-2xl font-bold text-gray-300 md-768:text-4xl lg-1024:text-5xl">
            #websitesbysagar
          </p>
        </section>
      </main>
    </Fragment>
  );
}
