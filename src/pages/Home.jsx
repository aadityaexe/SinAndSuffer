import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";
import Faq from "../components/Faq";
import ScrollingText from "../components/ScrollingText";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollingText />
      <About />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
