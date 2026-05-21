import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative z-50 flex items-center justify-between w-full bg-white p-4 border border-black mb-12">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-tighter uppercase font-syne">
        <Link href="/">VIJOMI</Link>
      </div>

      {/* Center Navigation Links */}
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-black uppercase tracking-wide">
        <Link href="/about" className="hover:text-gray-500 transition-colors">
          About
        </Link>
        <Link href="/#services" className="hover:text-gray-500 transition-colors">
          Services
        </Link>
        <Link href="/sermons" className="hover:text-gray-500 transition-colors">
          Sermons
        </Link>
        <Link href="/events" className="hover:text-gray-500 transition-colors">
          Events
        </Link>
        <Link href="/#giving" className="hover:text-gray-500 transition-colors">
          Giving
        </Link>
        <Link href="/prayer" className="hover:text-gray-500 transition-colors">
          Prayer
        </Link>
        <Link href="/media" className="hover:text-gray-500 transition-colors">
          Media
        </Link>
        <Link href="/#contact" className="hover:text-gray-500 transition-colors">
          Contact
        </Link>
      </nav>

      {/* CTA Button */}
      <Link href="/#contact" className="relative z-10 bg-black text-white font-semibold text-xs md:text-sm px-6 py-3 rounded-full hover:bg-gray-800 transition-all tracking-wide uppercase">
        Join Us
      </Link>
    </header>
  );
}
