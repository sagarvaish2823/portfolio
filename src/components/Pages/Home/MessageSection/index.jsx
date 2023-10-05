import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

const Message = () => {
  return (
    <section className="mx-8 pb-8">
      <div>
        <h2 className="page_subHeading">Want to work with me?...</h2>
      </div>
      <div className="flex items-center justify-center pt-12">
        <Button
          radius="full"
          className="button_main bg-transparent"
          aria-label="Lets Make Your Website page"
          role="button"
        >
          <Link href={"/lets-make-your-website"}>
            Let&apos;s Make Your Website
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Message;
