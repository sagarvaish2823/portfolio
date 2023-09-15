import MakeWebsiteForm from "@/components/Funtional/makeWebsiteForm";
import React from "react";

export const metadata = {
  title: "Let's make your website",
  description: "Form for the sending the request for website designing",
};

const makeWebsite = () => {
  return (
    <section className="h-screen">
      <MakeWebsiteForm />
    </section>
  );
};

export default makeWebsite;
