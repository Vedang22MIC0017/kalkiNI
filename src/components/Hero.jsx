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
import useMobile from "../hooks/useMobile";

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const isMobile = useMobile();
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Reset state when component mounts
    setIsLoaded(false);
    setIsPlaying(false);
    
    // Set initial state
    video.muted = true;
    video.currentTime = 0;
    
    // Handle video events
    const handleLoadedData = () => {
      console.log('Video loadeddata event fired');
      // Don't set currentTime here as it can cause issues
    };
    
    const handleCanPlay = () => {
      console.log('Video can play - setting loaded state');
      setIsLoaded(true);
    };
    
    const handleCanPlayThrough = () => {
      console.log('Video can play through - fully loaded');
      setIsLoaded(true);
    };
    
    const handlePlay = () => {
      console.log('Video started playing');
      setIsPlaying(true);
    };
    
    const handlePause = () => {
      console.log('Video paused');
      setIsPlaying(false);
    };
    
    const handleError = (e) => {
      console.error('Video error:', e.target.error);
      setIsLoaded(true); // Remove loading state even on error
    };
    
    const handleLoadStart = () => {
      console.log('Video load started');
      setIsLoaded(false);
    };
    
    // Check if video is already loaded (in case events fired before listeners were added)
    if (video.readyState >= 3) { // HAVE_FUTURE_DATA or higher
      console.log('Video already loaded on mount');
      setIsLoaded(true);
    }
    
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);
    
    // Fallback timeout to prevent infinite loading
    const loadingTimeout = setTimeout(() => {
      if (!isLoaded && video.readyState > 0) {
        console.log('Loading timeout - forcing loaded state');
        setIsLoaded(true);
      }
    }, 5000); // 5 second timeout
    
    return () => {
      clearTimeout(loadingTimeout);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
    };
  }, []);

  const playVideo = async () => {
    const video = videoRef.current;
    if (!video || !isLoaded) return;
    
    try {
      console.log('Attempting to play video');
      await video.play();
      console.log('Video playing successfully');
    } catch (error) {
      console.error('Failed to play video:', error);
    }
  };

  const pauseVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    
    try {
      video.pause();
      console.log('Video paused successfully');
    } catch (error) {
      console.error('Failed to pause video:', error);
    }
  };

  const handleMouseEnter = () => {
    if (isMobile) return;
    console.log('Mouse entered - attempting to play video');
    playVideo();
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    console.log('Mouse left - pausing video');
    pauseVideo();
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video || !isLoaded) {
      console.log('Video not ready');
      return;
    }
    
    console.log('Toggle play - current paused state:', video.paused);
    if (video.paused) {
      playVideo();
    } else {
      pauseVideo();
    }
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
      className="w-full h-full relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onPointerEnter={handleMouseEnter}
      onPointerLeave={handleMouseLeave}
    >
      {/* Loading overlay - shows until video is loaded */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-n-8/20 backdrop-blur-[1px] flex items-center justify-center z-10">
          <div className="w-8 h-8 border-2 border-color-1 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <video
        ref={videoRef}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-90'
        }`}
        poster="/videos/hero-vid3-poster.jpg"
        playsInline
        muted
        loop
        preload="metadata"
        crossOrigin="anonymous"
        controlsList="nodownload"
      >
        <source src="/videos/hero-vid3.mp4" type="video/mp4" media="(min-width: 1024px)" />
        <source src="/videos/hero-vid3.mp4" type="video/mp4" media="(min-width: 768px)" />
        <source src="/videos/hero-vid3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause button for small devices - top left */}
      <button
        type="button"
        className={`sm:hidden absolute top-2 left-2 w-10 h-10 rounded-full backdrop-blur-sm border flex items-center justify-center z-30 transition-all duration-200 ${
          isLoaded 
            ? 'bg-black/50 border-white/20 text-white cursor-pointer hover:bg-black/70' 
            : 'bg-gray-600/50 border-gray-400/20 text-gray-400 cursor-not-allowed'
        }`}
        onClick={togglePlay}
        disabled={!isLoaded}
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        <div className="text-white">
          {isPlaying ? (
            // Pause icon
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            // Play icon
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="8,5 19,12 8,19" />
            </svg>
          )}
        </div>
      </button>

      {/* Mute button - visible on all devices */}
      <div className="absolute top-2 right-2 flex gap-2 z-30">
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
            Explore the Possibilities of&nbsp;AI&nbsp;defense with {` `}
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
