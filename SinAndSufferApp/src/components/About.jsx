import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImg from "../assets/about.jpg";

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
      className="flex flex-col md:flex-row items-center justify-center min-h-screen  px-6 py-16 md:px-12 lg:px-24 xl:px-36"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10 items-center justify-between">
        {/* Image */}
        <div ref={imageRef} className="w-full md:w-1/2">
          <img
            src={aboutImg}
            alt="About"
            className="w-auto h-[80vh] rounded-2xl shadow-2xl"
          />
        </div>

        {/* Text */}
        <div
          ref={textRef}
          className="w-full md:w-1/2  rounded-2xl p-8 md:p-10 shadow-2xl"
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-6">
            What is Hell, Really?
          </h2>
          <p className="text-3xl leading-relaxed text-gray-700">
            Forget what the priests told you... Hell isn’t punishment. It’s
            pleasure turned poison. Desire without limits. Lust without love.
            Pain wrapped in velvet chains.
          </p>
          <section>
            <h4 className="text-xl font-extrabold text-gray-800 mb-6">
              Hell is Hot for a Reason
            </h4>
            <p className="text-3xl leading-relaxed text-gray-700">
              Here, we don’t burn because we’re bad. <br />
              We burn because we begged for more.
              <br />
              Every pleasure you chased now owns you.
              <br />
              Every touch you craved now claws back.
              <br />
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
