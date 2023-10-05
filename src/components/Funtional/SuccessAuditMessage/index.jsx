"use client";
import React from "react";

const SuccessAuditMessage = (props) => {
  return (
    <div className="fixed left-0 top-0 z-50 h-screen w-screen backdrop-blur-sm">
      <div className="flex h-[120%] flex-col items-center justify-center rounded-lg bg-white shadow-2xl dark:bg-black lg-1366:mx-20 lg-1366:mt-[7%] lg-1366:h-[70%]">
        <p className="text-black dark:text-white">Thanks</p>
        <button
          type="button"
          onClick={props.onClickAgain}
          className="my-4 rounded-2xl bg-yellow-400 px-8 py-4 font-bold text-black transition-transform hover:scale-105 active:scale-95"
        >
          Audit another website
        </button>
      </div>
    </div>
  );
};

export default SuccessAuditMessage;
