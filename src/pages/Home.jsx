import React from "react";
import Navbar from "../components/Navbar.jsx";
import About from "../components/About.jsx";
import Hero from "../components/Hero.jsx";
import Faq from "../components/Faq.jsx";
import ScrollingText from "../components/ScrollingText.jsx";
import Footer from "../components/Footer.jsx";
import Roadmap from "../components/Roadmap.jsx";
import TortureChart from "../components/TortureChart.jsx";
import TortureGallery from "../components/TortureGallery.jsx";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollingText />
      <About />

      <TortureChart />

      <Roadmap />
      <TortureGallery />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
