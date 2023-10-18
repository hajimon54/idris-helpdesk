"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Modal from "app/components/Modal.jsx";

export default function Navbar() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

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

      <button
        onClick={toggleModal}
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        type="button"
      >
        Toggle modal
      </button>
      <Modal isOpen={isModalOpen} />
    </nav>
  );
}
