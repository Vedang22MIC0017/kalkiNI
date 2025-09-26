import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { useEffect, useRef, useState } from "react";

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    // Start muted and paused, show first frame
    v.muted = true;
    v.pause();
    try { v.currentTime = 0.01; } catch (e) {}
  }, []);

  const handleMouseEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
  };

  const handleMouseLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        loop
        preload="auto"
        onLoadedData={() => {
          const v = videoRef.current;
          if (v) {
            try { v.currentTime = 0.01; } catch (e) {}
          }
        }}
      >
        <source src="/videos/hero-vid3.mp4" type="video/mp4" media="(min-width: 1024px)" />
        <source src="/videos/hero-vid3.mp4" type="video/mp4" media="(min-width: 768px)" />
        <source src="/videos/hero-vid3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-2 right-2 flex gap-2 z-10">
        <button
          type="button"
          className="px-3 py-1 rounded-md bg-black/30 text-white text-xs border border-white/10 backdrop-blur"
          onClick={toggleMute}
        >
          {muted ? "Unmute" : "Mute"}
        </button>
      </div>
    </div>
  );
};

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-24 md:pt-28 lg:pt-[8rem] -mt-10 md:-mt-14 lg:-mt-[4rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Explore the Possibilities of&nbsp;AI&nbsp;Protection with {` `}
            <span className="inline-block relative">
              KalkiNI{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the true power of AI within us. Upgrade your security and protect your loved ones 
            with KalkiNI, where cameras think ahead.
          </p>
          <Button href="/pricing" white>
            Get started
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8/60 backdrop-blur-md rounded-[1rem]">

              <div className="aspect-[4/5] md:aspect-[9/13] lg:aspect-video rounded-[1rem] overflow-hidden relative">
              <HeroVideo />
              </div>
            </div>

            <Gradient />
          </div>
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
