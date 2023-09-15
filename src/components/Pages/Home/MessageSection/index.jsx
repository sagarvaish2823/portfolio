import { Button } from "@nextui-org/button";
import Link from "next/link";
import React from "react";

const Message = () => {
  return (
    <section className="mx-8 pb-8">
      <div>
        <h2 className="text-left text-4xl font-bold tracking-tight lg-1024:pl-16 lg-1024:text-5xl">
          Want to work with me?...
        </h2>
      </div>
      <div className="flex items-center justify-center pt-12">
        <Button
          radius="full"
          className="button_main bg-transparent"
          aria-label="lets make your website page message"
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
