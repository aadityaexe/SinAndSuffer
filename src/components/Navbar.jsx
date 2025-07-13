import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black border-b-2 border-pink-600 shadow-md w-full z-50 ">
      <div className="max-w-[1400px] w-full mx-auto px-8 xl:px-20 py-5 flex justify-between items-center ml-7 ">
        {/* Logo */}
        <h1 className="text-pink-500 font-bold text-4xl lg:text-5xl">
          AnimeVerse
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-12 text-3xl xl:text-4xl font-semibold gap-6">
          <li>
            <a
              href="#about"
              className="text-pink-100 hover:text-pink-500 transition duration-300 relative group"
            >
              About
              <span className="block h-[2px] w-0 group-hover:w-full bg-pink-600 transition-all duration-300 absolute bottom-[-4px] left-0"></span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-pink-100 hover:text-pink-500 transition duration-300 relative group"
            >
              Contact Us
              <span className="block h-[2px] w-0 group-hover:w-full bg-pink-600 transition-all duration-300 absolute bottom-[-4px] left-0"></span>
            </a>
          </li>
          <li>
            <a
              href="#roadmap"
              className="text-pink-100 hover:text-pink-500 transition duration-300 relative group"
            >
              Roadmap
              <span className="block h-[2px] w-0 group-hover:w-full bg-pink-600 transition-all duration-300 absolute bottom-[-4px] left-0"></span>
            </a>
          </li>
          <li>
            <a
              href="#tokenomics"
              className="text-pink-100 hover:text-pink-500 transition duration-300 relative group"
            >
              Tokenomics
              <span className="block h-[2px] w-0 group-hover:w-full bg-pink-600 transition-all duration-300 absolute bottom-[-4px] left-0"></span>
            </a>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
        <div
          className="md:hidden text-pink-500 cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-pink-600 px-6 pb-4">
          <ul className="flex flex-col space-y-4 text-3xl font-medium">
            <li>
              <a href="#about" className="text-pink-100 hover:text-pink-500">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-pink-100 hover:text-pink-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#roadmap" className="text-pink-100 hover:text-pink-500">
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#tokenomics"
                className="text-pink-100 hover:text-pink-500"
              >
                Tokenomics
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
