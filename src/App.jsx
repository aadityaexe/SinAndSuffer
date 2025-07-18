import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages & Components
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
      {/* Custom Cursor Component */}
      <Mouse />

      {/* Background Whispering Audio */}
      <audio
        ref={audioRef}
        src="/WhispersOfTheAbyss.mp3"
        loop
        autoPlay
        preload="auto"
        style={{ display: "none" }}
      />

      {/* Site Navigation */}
      <Navbar />

      {/* Route Definitions */}
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
        {/* Fallback Route for 404 */}
        <Route
          path="*"
          element={
            <div
              style={{
                color: "red",
                textAlign: "center",
                fontSize: "2rem",
                marginTop: "100px",
              }}
            >
              404 - Page Not Found
            </div>
          }
        />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
};

export default App;
