"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner container">
        <h1 className="logo">
          <Link href="/">Print Digital Services</Link>
        </h1>

        {/* Desktop Nav */}
        <nav className="nav desktop-nav">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-nav ${open ? "open" : ""}`}>
        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
        <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
        <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
        <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
        <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </header>
  );
}
