/*
  Reusable glass window wrapper with macOS-style window controls.
  Wraps children and provides a dark, blurred glass background.
*/
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MacDots = () => (
  <div className="flex items-center gap-2">
    <span className="inline-block w-3 h-3 rounded-full bg-[#FF5F57]" />
    <span className="inline-block w-3 h-3 rounded-full bg-[#FEBC2E]" />
    <span className="inline-block w-3 h-3 rounded-full bg-[#28C840]" />
  </div>
);

const GlassWindow = ({ children, className = "" }) => {
  const contentRef = useRef(null);
  const observedRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const runAnimations = () => {
      const headings = el.querySelectorAll("h1,h2,h3,h4,h5,h6");
      const images = el.querySelectorAll("img");
      const others = el.querySelectorAll("[data-animate], .animate-in");

      if (headings.length) {
        gsap.from(headings, {
          opacity: 0,
          x: (i) => (i % 2 === 0 ? -12 : 12),
          duration: 1.1,
          stagger: 0.08,
          ease: "sine.out",
        });
      }

      if (images.length) {
        gsap.from(images, {
          opacity: 0,
          x: (i) => (i % 2 === 0 ? 10 : -10),
          duration: 1.2,
          stagger: 0.06,
          ease: "sine.out",
        });
      }

      if (others.length) {
        gsap.from(others, {
          opacity: 0,
          x: (i) => (i % 2 === 0 ? -8 : 8),
          duration: 1.1,
          stagger: 0.07,
          ease: "sine.out",
        });
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runAnimations();
            if (observedRef.current) {
              io.unobserve(observedRef.current);
              io.disconnect();
            }
          }
        });
      },
      { threshold: 0.25 }
    );

    observedRef.current = el;
    io.observe(el);

    return () => io.disconnect();
  }, []);

  return (
    <div
      className={
"relative w-full max-w-[76.8rem] mx-auto rounded-2xl border border-white/10 bg-black/25 backdrop-blur-md shadow-[0_0_40px_rgba(0,0,0,0.4)] overflow-hidden px-4 md:px-6 " +
        className
      }
    >
<div className="hidden md:flex items-center justify-between h-9 px-3 bg-black/50">
        <MacDots />
        <div className="w-16 h-2 rounded-full bg-white/10" />
      </div>
<div className="hidden md:block h-px w-full bg-white/10" />
      <div ref={contentRef} className="relative p-6 md:p-8">
        {children}
      </div>
    </div>
  );
};

export default GlassWindow;
