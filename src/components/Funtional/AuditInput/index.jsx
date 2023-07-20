"use client";
import React, { useState } from "react";
import SuccessAuditMessage from "../SuccessAuditMessage";
import { IoSend } from "react-icons/io5";

const AuditInput = () => {
  const [clicked, setClicked] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  // const [auditAnother, setAuditAnother] = useState(false)
  const submitHandler = (ev) => {
    ev.preventDefault();
    setClicked(true);
    // alert("HI");
    setFormVisible(false);
  };
  const againAuditHandler = () => {
    setClicked(false);
    setFormVisible(true);
  };
  return (
    <div className="">
      {/* {!!formVisible && ( */}
      <form>
        <p className="font-semibold sm-280:text-lg sm-280:leading-[2.5rem] sm-360:text-2xl sm-360:leading-[4rem] sm-390:text-3xl sm-390:leading-[3.5rem] sm-414:leading-[4.5rem] md-768:text-4xl md-768:leading-[5rem] md-820:text-[2.5rem] md-820:leading-[6rem] lg-1024:text-[3rem] lg-1024:leading-[6.5rem] lg-1366:text-[2.5rem] lg-1366:leading-[5rem]">
          My Name is{" "}
          <span>
            <input placeholder="Your Name" className="input_form" />
          </span>{" "}
          and I want{" "}
          <span>
            <input placeholder="Your Website" className="input_form" />
          </span>{" "}
          to be audited. You can reach me at{" "}
          <span>
            <input placeholder="Your Email" className="input_form" />
          </span>{" "}
          to send report.
        </p>
        <div className="">
          <button
            type="submit"
            onClick={submitHandler}
            className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3
            text-xl font-bold transition-transform hover:scale-105 active:scale-95 md-768:text-2xl lg-1024:px-8 lg-1024:py-5 lg-1024:text-3xl lg-1366:px-6 lg-1366:py-3"
          >
            Send
            <IoSend />
          </button>
        </div>
      </form>
      {/* )} */}
      {!!clicked && (
        // <div className="absolute h-screen w-screen top-0 left-0 bg-black">
        <SuccessAuditMessage onClickAgain={againAuditHandler} />
        // </div>
      )}
    </div>
  );
};

export default AuditInput;
