"use client";
import React from "react";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link href="/" className="text-2xl md-768:text-3xl">
      <h2>
        Sagar <span className="font-bold text-yellow-400">Vaish</span>
        <span className="font-bold">.</span>
      </h2>
    </Link>
  );
}
