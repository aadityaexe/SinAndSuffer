import React from "react";
import footerBg from "../assets/footerBg.jpg"; // Adjust path if needed

const Footer = () => {
  return (
    <footer
      className=" bg-center  py-10 px-6 h-56"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-4xl font-bold">Your Brand</h2>
          <p className="text-sm ">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 text-2xl">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#roadmap" className="hover:underline">
            Roadmap
          </a>
          <a href="#tokenomics" className="hover:underline">
            Tokenomics
          </a>
          <a href="#contact" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
