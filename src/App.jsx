import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Mouse from "./components/mouse";
import AskTheAbyss from "./components/AskTheAbyss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LineSve from "./components/LineSve";

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.2;
      audio.muted = true;

      audio.play().catch((err) => {
        console.warn("Autoplay blocked:", err);
      });

      const unmute = () => {
        audio.muted = false;
        audio.volume = 0.2;
        audio.play();
        window.removeEventListener("click", unmute);
      };

      window.addEventListener("click", unmute);
    }
  }, []);

  return (
    <Router>
      <Mouse />
      {/* <audio
        ref={audioRef}
        src="/WhispersOfTheAbyss.mp3"
        loop
        autoPlay
        preload="auto"
        style={{ display: "none" }}
      /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/ask-the-abyss"
          element={
            <>
              <LineSve />
              <AskTheAbyss />
            </>
          }
        />
        {/* Add more routes here if needed */}
      </Routes>{" "}
      <Footer />
    </Router>
  );
};

export default App;
