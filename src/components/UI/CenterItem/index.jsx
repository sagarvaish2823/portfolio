import React from "react";

export default function CenterItem({ children }) {
  return (
    <div className="flex h-screen w-screen items-center justify-center text-5xl">
      {children}
    </div>
  );
}
