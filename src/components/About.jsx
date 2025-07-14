import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "../assets/about.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(imageRef.current, {
        opacity: 0,
        y: 80,
        scale: 0.95,
        filter: "blur(12px)",
        duration: 1.2,
        ease: "power3.out",
      }).from(
        textRef.current,
        {
          opacity: 0,
          y: 60,
          filter: "blur(8px)",
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-6 py-16 md:px-12 lg:px-24 xl:px-36"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Image */}
        <div ref={imageRef} className="w-full md:w-1/2">
          <img
            src={aboutImg}
            alt="About"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>

        {/* Text */}
        <div
          ref={textRef}
          className="w-full md:w-1/2 bg-white rounded-2xl p-8 md:p-10 shadow-2xl"
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-3xl leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ultrices nulla eu dignissim convallis. Suspendisse nec turpis at
            odio finibus porta. Sed ut perspiciatis unde omnis iste natus error
            sit voluptatem accusantium doloremque laudantium.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
