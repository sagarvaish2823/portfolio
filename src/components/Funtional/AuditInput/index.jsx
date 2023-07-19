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
        <p className="text-5xl font-semibold leading-[5rem]">
          My Name is{" "}
          <span>
            <input
              placeholder="Name"
              className="w-[20rem] text-yellow-400 bg-transparent border-b text-2xl  focus:outline-none p-4"
            />
          </span>{" "}
          and I want{" "}
          <span>
            <input
              placeholder="Website"
              className="w-[20rem] text-yellow-400 bg-transparent border-b text-2xl  focus:outline-none p-4"
            />
          </span>{" "}
          to be audited. You can reach me at{" "}
          <span>
            <input
              placeholder="Email"
              className="w-[20rem] text-yellow-400 bg-transparent border-b text-2xl  focus:outline-none p-4"
            />
          </span>{" "}
          to send report.
        </p>
        <div className="">
          <button
            type="submit"
            onClick={submitHandler}
            className="mt-4 py-3 px-6 bg-yellow-400 rounded-2xl font-bold text-xl flex gap-2 justify-center items-center"
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
