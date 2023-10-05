import React from "react";
import FormAcknowledgement from "./FormAcknowledgement";

const Acknowledgement = () => {
  return (
    <section className="mx-8 h-screen pt-8">
      <div>
        <h1 className="page_title">
          Acknowledgement <br /> <span className="text-yellow-400">Form</span>
        </h1>
      </div>
      <div>
        <FormAcknowledgement />
      </div>
    </section>
  );
};

export default Acknowledgement;
