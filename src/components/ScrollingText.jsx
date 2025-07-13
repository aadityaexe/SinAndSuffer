import React, { useEffect } from "react";
import { gsap } from "gsap";

const ScrollingText = () => {
  useEffect(() => {
    gsap.to(".scroll-text", {
      x: "-100%",
      duration: 20,
      ease: "linear",
      repeat: -1,
      delay: 0.5,
    });
  }, []);

  return (
    <section className="overflow-hidden  py-4">
      <div className="flex flex-row">
        <div className="scroll-text text-pink-900  text-6xl font-bold whitespace-nowrap ml-12">
          Angel Face, Devil Thoughts
        </div>
        <div className="scroll-text text-pink-900 text-6xl font-bold whitespace-nowrap ml-12">
          Angel Face, Devil Thoughts
        </div>
        <div className="scroll-text text-pink-900 text-6xl font-bold whitespace-nowrap ml-12">
          Angel Face, Devil Thoughts
        </div>
      </div>
    </section>
  );
};

export default ScrollingText;
