import FormInput from "@/components/Funtional/FormInput";
import ContactDetails from "@/components/Pages/letsMakeYourWebsite/ContactDetails";
import React from "react";

export const metadata = {
  title: "Let's make your website | websitesbysagar",
  description: "Form for the sending the request for website designing",
};

const MakeWebsite = () => {
  return (
    <section className="pb-16 pt-8">
      <div className="mx-8">
        <h1 className="text-right text-3xl font-bold md-768:text-4xl lg-1366:text-5xl">
          Let&apos;s Talk
          <br />
          <span className="text-yellow-400">About Website</span>
        </h1>
      </div>
      <div className="flex grid-cols-2 flex-col-reverse gap-8 pt-8 md-768:grid">
        <ContactDetails />
        <div className="flex justify-center md-768:flex-none">
          <FormInput />
        </div>
      </div>
    </section>
  );
};

export default MakeWebsite;
