/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Mouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animate with GSAP
  useGSAP(() => {
    gsap.to("#sin-cursor", {
      x: position.x,
      y: position.y,
      duration: 0.3,
      ease: "power3.out",
    });
  }, [position]);

  return (
    <div
      id="sin-cursor"
      className="pointer-events-none fixed top-0 left-0 z-[9999] h-10 w-10 
                 bg-gradient-to-br from-red-800 to-yellow-400 
                 rounded-full shadow-[0_0_25px_rgba(255,0,0,0.6)] 
                 mix-blend-difference"
    ></div>
  );
};

export default Mouse;
