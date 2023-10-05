import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const AccordionSection = () => {
  const accordianContent = [
    {
      id: 1,
      ariaLabel: "Accordion 1",
      title: "How much time does a project take?",
      Content:
        "I usually take from 2 weeks to 2 month based on the type of project.",
    },
    {
      id: 2,
      ariaLabel: "Accordion 2",
      title: "Do you need to have a domain and hosting?",
      Content:
        "You do not need to have a domain and hosting before contacting me.",
    },
    {
      id: 3,
      ariaLabel: "Accordion 3",
      title: "Do I work internationally?",
      Content:
        "Yes, I am based in India and I take projects from around the globe.",
    },
  ];

  return (
    <section className="mx-8 pt-16 lg-1024:mx-28">
      {accordianContent.map((item) => (
        <Accordion key={item.id}>
          <AccordionItem
            key={item.id}
            aria-label={item.ariaLabel}
            title={item.title}
            className="font-bold"
          >
            <div className="w-fit border-b text-lg font-normal">
              {item.Content}
            </div>
          </AccordionItem>
        </Accordion>
      ))}
    </section>
  );
};

export default AccordionSection;
