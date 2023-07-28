"use client";
import React from "react";
import { motion as m } from "framer-motion";
import Link from "next/link";

export default function NavbarLogo() {
  return (
    <Link href="/" className="text-3xl">
      <m.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Sagar <span className="font-bold text-yellow-400">Vaish</span>
        <span className="font-bold">.</span>
      </m.p>
    </Link>
  );
}
