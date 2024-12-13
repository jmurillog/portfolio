import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-gray-800 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span
          onClick={() => (window.location.href = "/")}
          className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
        >
          Jose Murillo
        </span>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-300" />
          ) : (
            <Menu className="h-6 w-6 text-gray-300" />
          )}
        </button>

        <div className="hidden md:flex gap-8">
          <button
            onClick={() => (window.location.href = "/")}
            className="hover:text-blue-400 transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => (window.location.href = "/about")}
            className="hover:text-blue-400 transition-colors"
          >
            About
          </button>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="hover:text-blue-400 transition-colors"
          >
            Contact
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800">
          <div className="flex flex-col items-center gap-4 py-4">
            <button
              onClick={() => (window.location.href = "/")}
              className="hover:text-blue-400 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => (window.location.href = "/about")}
              className="hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => (window.location.href = "/contact")}
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
