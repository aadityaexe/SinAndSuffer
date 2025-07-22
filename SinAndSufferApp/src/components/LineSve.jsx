import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LineSve = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  // Default fixed straight path
  const defaultPath = "M 0 200 Q 960 200 1920 200";

  useGSAP(() => {
    const container = containerRef.current;
    const path = pathRef.current;

    if (!container || !path) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const wavePath = `M 0 200 Q ${x} ${y} 1920 200`;

      gsap.to(path, {
        attr: { d: wavePath },
        duration: 0.3,
        ease: "sine.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: defaultPath },
        duration: 1.2,
        ease: "elastic.out(1, 0.3)",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[300px]  overflow-hidden"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1920 400"
        preserveAspectRatio="none"
        className="absolute top-0 left-0"
      >
        <defs>
          <filter id="hell-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          ref={pathRef}
          d="M 0 200 Q 960 200 1920 200"
          stroke="#ff1a1a"
          strokeWidth="4"
          fill="transparent"
          filter="url(#hell-glow)"
        />
      </svg>
    </div>
  );
};

export default LineSve;
