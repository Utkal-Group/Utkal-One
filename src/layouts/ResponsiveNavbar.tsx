"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
  { title: "Home", link: "/" },
  { title: "Projects", link: "/projects" },
  { title: "Our Services", link: "/ourservice" },
  { title: "About Us", link: "/about" },
  { title: "Contact", link: "/contactus" },
];

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white relative z-[100] shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image src="/assets/subnavbar/utkalone.png" width={120} height={40} alt="Logo" className="h-14 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.title} className="relative group">
              <Link href={item.link} className="text-gray-700 hover:text-blue-600">
                {item.title}
              </Link>

              {/* Dropdown Menu */}
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg z-[100] w-40">
                <ul className="py-2">
                  <li>
                    <Link href={item.link} className="block px-4 py-2 text-gray-700 hover:text-blue-600">
                      {item.title}
                    </Link>
                  </li>
                  {/* Add more dropdown items if needed */}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        {/* Burger Icon */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md absolute left-0 top-[60px] w-full flex flex-col space-y-4 py-4 px-6 z-[100]">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.link}
                className="block text-gray-700 hover:text-blue-600"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
