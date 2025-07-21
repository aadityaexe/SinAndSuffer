import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const message = `The Abyss Shifts... A New Sin Awaits.`;

const TransitionLayout = () => {
  const transitionRef = useRef();
  const textRef = useRef();
  const location = useLocation();

  useEffect(() => {
    let split;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setShowContent(true),
      });

      // Reset
      gsap.set(transitionRef.current, { y: "-100%" });

      split = new SplitText(textRef.current, {
        type: "words",
        wordsClass: "split-word",
      });

      tl.to(transitionRef.current, {
        y: 0,
        duration: 0.6,
        ease: "power4.inOut",
      })
        .from(
          split.words,
          {
            opacity: 0,
            y: 30,
            rotationX: 90,
            duration: 1.2,
            ease: "back.out(1.7)",
            stagger: 0.08,
          },
          "-=0.3"
        )
        .to(transitionRef.current, {
          y: "-100%",
          delay: 1.2,
          duration: 1,
          ease: "power4.inOut",
        });
    });

    return () => {
      ctx.revert();
      split && split.revert();
    };
  }, [location.pathname]);

  return (
    <>
      <div
        ref={transitionRef}
        className="fixed top-0 left-0 w-full h-full bg-black z-[9999] flex items-center justify-center"
        style={{ transform: "translateY(-100%)" }}
      >
        <div className="w-[90vw] px-6 md:px-12 text-center">
          <h1
            ref={textRef}
            className="animate-me text-red-600 text-2xl md:text-4xl font-bold tracking-widest uppercase leading-snug"
          >
            {message}
          </h1>
        </div>
      </div>

      {/* Only render the route content after transition completes */}
      <Outlet />
    </>
  );
};

export default TransitionLayout;
