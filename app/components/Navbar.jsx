"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
// import { ModalContext } from "app/context/ModalContext.jsx";

export default function Navbar() {
  // const { toggleModal } = useContext(ModalContext);

  return (
    <nav>
      <div>
        <Image
          src="/helpdesk.png"
          width={100}
          height={100}
          alt="Helpdesk Logo"
        />
      </div>
      <h1> Idris Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      {/* <button onClick={toggleModal}>Toggle modal</button> */}
    </nav>
  );
}
