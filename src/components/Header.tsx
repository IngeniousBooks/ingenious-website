'use client'

import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";


export default function Header() {
  return (
    <>
    <div className="w-full format h-auto p-4 grid grid-cols-6">
      < Image width={475.56} height={117.17} priority className="col-span-3" alt="Ingenious Logo" src={"/ingenious-logo.svg"} />
      <Navbar />
    </div>

    </>
  );
}
