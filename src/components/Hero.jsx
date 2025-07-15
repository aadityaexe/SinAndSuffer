import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroVideo from "../assets/heroV.mp4"; // Replace with actual video path

const Hero = () => {
  const headingRef = useRef(null);
  const videoRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    // Heading animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      }
    );

    // Paragraph and Button animation
    gsap.fromTo(
      textRefs.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.5,
      }
    );

    // Video animation
    gsap.fromTo(
      videoRef.current,
      { opacity: 0, x: 60 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.7,
      }
    );
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-16 gap-12 text-black"
    >
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 gap-5">
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Welcome to Hell, Sweetheart.
        </h1>
        <p
          ref={(el) => (textRefs.current[0] = el)}
          className="text-4xl text-gray-700 max-w-xl mx-auto md:mx-0"
        >
          You didn’t fall from grace. You dove into desire... and now you're
          home.
        </p>
        <div>
          <a href="#AskTheAbyss">
            <button
              ref={(el) => (textRefs.current[1] = el)}
              className="px-8 py-3 bg-black text-white text-3xl rounded-2xl font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              Enter the Fire
            </button>
          </a>
        </div>
      </div>

      {/* Right Video */}
      <div className="md:w-1/2 flex justify-center items-center">
        <video
          ref={videoRef}
          src={HeroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-64 md:w-96 h-auto rounded-2xl drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
