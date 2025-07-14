import React from "react";
import Navbar from "../components/Navbar.jsx";
import About from "../components/About.jsx";
import Hero from "../components/Hero.jsx";
import Faq from "../components/Faq.jsx";
import ScrollingText from "../components/ScrollingText.jsx";
import Footer from "../components/Footer.jsx";
import Tokenomics from "../components/Tokenomics.jsx";
import Roadmap from "../components/Roadmap.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollingText />
      <About />
      <Tokenomics />
      <Roadmap />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
