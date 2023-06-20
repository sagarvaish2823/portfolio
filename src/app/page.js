import HindiBackGround from "@/components/UI/HindiBackGround";
import TypeWriterTitle from "@/components/UI/TypeWriterTitle";
import React from "react";

export default function Home() {
  return (
    <main>
      <section className="mx-8 relative h-screen">
        <HindiBackGround />
        <div className="z-10 relative">
          <div className="pt-8">
            <TypeWriterTitle />
          </div>
          <button>Get Your Website Redesigned</button>
        </div>
      </section>
    </main>
  );
}
