import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import ScrollingText from "../components/ScrollingText";
import Footer from "../components/Footer";
import Tokenomics from "../components/Tokenomics.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollingText />
      <About />
      <Tokenomics />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
