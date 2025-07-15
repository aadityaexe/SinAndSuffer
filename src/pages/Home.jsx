import React, { Suspense, lazy } from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import ScrollingText from "../components/ScrollingText.jsx";
import Footer from "../components/Footer.jsx";
import AskTheAbyss from "../components/AskTheAbyss.jsx";

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
      <ScrollingText />
      <About />

      <Suspense fallback={<Loading />}>
        <TortureChart />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Roadmap />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <TortureGallery />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <Faq />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Home;
