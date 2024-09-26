"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-red-100 to-blue-100 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-red-950 transition duration-300 hover:text-red-200">
              Welcome to my portfolio
            </span>{" "}
          </Link>
        </div>

        <button
          className="block lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation"
        >
          <Menu className="w-6 h-6 text-black" />
        </button>

        <nav className="hidden lg:flex lg:space-x-6">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <Link
              key={item}
              className="py-2 text-gray-700 hover:text-blue-500  transition duration-200"
              href={`/${item.toLowerCase()}`}
            >
              {item}
            </Link>
          ))}
        </nav>

        <nav
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 w-64 h-full bg-gradient-to-r from-red-100 to-blue-100 lg:hidden transition-transform duration-300`}
        >
          <div className="flex flex-col items-start p-4">
            <h1 className="text-black text-xl">Menu</h1>
            <button
              className="self-end mb-4"
              onClick={() => setIsOpen(false)}
              aria-label="Close Navigation"
            >
              <X className="w-6 h-6 text-black" />
            </button>
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <Link
                key={item}
                className="block py-2 text-gray-700 px-4 rounded-lg hover:bg-blue-500 hover:text-black transition duration-200"
                href={`/${item.toLowerCase()}`}
              >
                {item}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              className="mt-4  text-blue-600 px-4 py-2 rounded-lg underline transition duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </nav>

        <div className="hidden lg:block">
          <a
            href="/resume.pdf"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg shadow hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </header>
  );
}
