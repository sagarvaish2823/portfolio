"use client";
import React from "react";

const SuccessAuditMessage = (props) => {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen backdrop-blur-sm">
      <div className="flex flex-col justify-center items-center mt-[7%] bg-white mx-20 h-[70%] rounded-lg shadow-2xl">
        <p className="text-black">Thanks</p>
        <button
          type="button"
          onClick={props.onClickAgain}
          className="my-4 py-4 px-8 rounded-2xl font-bold bg-yellow-400 text-black hover:scale-105 active:scale-95 transition-transform"
        >
          Audit another website
        </button>
      </div>
    </div>
  );
};

export default SuccessAuditMessage;
