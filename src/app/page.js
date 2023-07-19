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

      <main className="">
        <section className="mx-8 grid grid-cols-[0.7fr,1.3fr] gap-4">
          <div className="border-r border-black">
            <p className="text-7xl font-bold mt-20 ml-16">
              Let&apos;s get
              <br /> started<span className="text-yellow-400">.</span>
            </p>
            <p className="font-light mt-4 ml-16 text-yellow-400">
              SUBMIT YOUR WEBSITE
            </p>
            <div className="mt-16 flex justify-center items-center gap-8">
              <FaInstagram className="text-5xl hover:text-yellow-400 hover:scale-105 active:scale-95 transition-all cursor-pointer" />
              <FaLinkedin className="text-5xl hover:text-yellow-400 hover:scale-105 active:scale-95 transition-all cursor-pointer" />
            </div>
          </div>
          <div className="mt-20 w-[95%] inline-flex ml-8">
            <AuditInput />
          </div>
        </section>
        <section className="absolute bottom-5 right-10">
          <p className="text-gray-300 text-4xl font-bold select-none">
            #websitesbysagar
          </p>
        </section>
      </main>
    </Fragment>
  );
}
