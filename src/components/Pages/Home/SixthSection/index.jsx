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
        <Link href={"/"} className="button_main hover:shadow-md">
          Let&apos;s Make Your Website
        </Link>
      </div>
    </section>
  );
};

export default Message;
