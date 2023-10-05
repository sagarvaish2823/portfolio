import React from "react";

export const metadata = {
  title: "Free Website Audit | websitesbysagar",
  description: "Form for the sending the request for website audit",
};

export default function AuditPage() {
  return (
    <div className="mx-8 pt-16">
      <section className="flex justify-end">
        <h1 className="page_title">
          Get Your Website
          <br />
          <span className="text-yellow-400">Audited</span>.
        </h1>
      </section>
      <form className="h-screen">
        <label htmlFor="name">Name</label>
      </form>
    </div>
  );
}
