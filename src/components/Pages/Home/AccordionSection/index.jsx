import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const AccordionSection = () => {
  const Content_1 =
    "I usually take from 2 weeks to 2 month based on the type of project.";
  const Content_2 =
    "You do not need to have a domain and hosting before contacting me.";
  const Content_3 =
    "Yes, I am based in India and I take projects from around the globe.";

  return (
    <section className="mx-8 pt-16 lg-1024:mx-28">
      <Accordion>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title="How much time does a project take?"
        >
          {Content_1}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title="Do you need to have a domain and hosting?"
        >
          {Content_2}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title="Do I work internationally?"
        >
          {Content_3}
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default AccordionSection;
