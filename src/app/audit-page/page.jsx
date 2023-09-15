import React from "react";

export const metadata = {
  title: "Free Website Audit",
  description: "Form for the sending the request for website audit",
};

export default function AuditPage() {
  return (
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
