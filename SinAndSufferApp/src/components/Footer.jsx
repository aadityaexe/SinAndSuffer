import React from "react";
import footerBg from "../assets/footerBg.jpg"; // Adjust path if needed

const Footer = () => {
  return (
    <footer
      className="bg-center bg-cover text-white py-12 px-6 h-[400px]"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 h-full">
        <div className="text-center md:text-left space-y-3">
          <h2 className="text-4xl font-extrabold tracking-wider text-red-500">
            Sin & Suffer
          </h2>
          <p className="text-3xl text-gray-300 italic">
            Where every goodbye burns and every hello hurts.
          </p>
          <p className="text-3xl text-gray-400">
            &copy; {new Date().getFullYear()} Tortured Souls Inc. All rights
            reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-6 text-2xl font-medium">
          <a href="#about" className="hover:text-red-400 transition">
            About
          </a>
          <a href="#roadmap" className="hover:text-red-400 transition">
            Roadmap
          </a>
          <a href="#torture-stats" className="hover:text-red-400 transition">
            Tortures
          </a>
          <a href="#torture-gallery" className="hover:text-red-400 transition">
            Gallery of Pain
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
