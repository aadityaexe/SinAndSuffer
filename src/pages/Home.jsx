import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import ScrollingText from "../components/ScrollingText.jsx";
import Footer from "../components/Footer.jsx";
import AskTheAbyss from "../components/AskTheAbyss.jsx";
import LineSve from "../components/LineSve.jsx";

// Lazy-loaded components
const Roadmap = lazy(() => import("../components/Roadmap.jsx"));
const TortureChart = lazy(() => import("../components/TortureChart.jsx"));
const TortureGallery = lazy(() => import("../components/TortureGallery.jsx"));
const Faq = lazy(() => import("../components/Faq.jsx"));

const Loading = () => (
  <div className="text-center text-white py-10 text-xl">Loading...</div>
);

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />

      <AskTheAbyss />
      <LineSve />
      <ScrollingText />
      <About />
      <LineSve />
      <Suspense fallback={<Loading />}>
        <TortureChart />
      </Suspense>
      <LineSve />

      <Suspense fallback={<Loading />}>
        <Roadmap />
      </Suspense>
      <LineSve />

      <Suspense fallback={<Loading />}>
        <TortureGallery />
      </Suspense>
      <LineSve />

      <Suspense fallback={<Loading />}>
        <Faq />
      </Suspense>
      <LineSve />

      <Footer />
    </div>
  );
};

export default Home;
