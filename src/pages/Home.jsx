import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";
import Faq from "../components/Faq";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Faq />
    </div>
  );
};

export default Home;
