import React, { useEffect, useRef } from "react";
import Home from "./pages/Home";
import Mouse from "./components/mouse";

const App = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.volume = 0.2; // Optional low volume
      audio.muted = true; // ✅ Required for autoplay to work on most browsers
      audio.play().catch((err) => {
        console.warn("Autoplay blocked:", err);
      });

      // Unmute after a short delay or user interaction
      const unmute = () => {
        audio.muted = false;
        audio.volume = 0.2;
        audio.play();
        window.removeEventListener("click", unmute);
      };

      // 🔓 Wait for user click to unmute (bypasses browser restrictions)
      window.addEventListener("click", unmute);
    }
  }, []);

  return (
    <div>
      {/* ✅ Audio file must be in /public */}
      <audio
        ref={audioRef}
        src="/WhispersOfTheAbyss.mp3"
        loop
        autoPlay
        preload="auto"
        style={{ display: "none" }}
      />
      <Mouse />
      <Home />
    </div>
  );
};

export default App;
