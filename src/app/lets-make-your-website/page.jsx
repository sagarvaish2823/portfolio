import FormInput from "@/components/Funtional/FormInput";
import ContactDetails from "@/components/Pages/letsMakeYourWebsite/ContactDetails";
import { Tooltip } from "@nextui-org/tooltip";
import React from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";

export const metadata = {
  title: "Let's make your website | websitesbysagar",
  description: "Form for the sending the request for website designing",
};

const MakeWebsite = () => {
  return (
    <section className="pt-8">
      <div className="mx-8">
        <h1 className="text-right text-5xl font-bold">
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
