import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { logok } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastYRef = useRef(window.scrollY);

  useEffect(() => {
    const onScroll = () => {
      // Disable hide/show behavior on phones (below md)
      const isDesktop = window.matchMedia("(min-width: 768px)").matches;
      if (!isDesktop) {
        if (!showHeader) setShowHeader(true);
        lastYRef.current = window.scrollY;
        return;
      }

      const y = window.scrollY;
      const lastY = lastYRef.current;
      const delta = y - lastY;
      // Hide when scrolling down beyond 80px; show when scrolling up
      if (y > 80 && delta > 2 && !openNavigation) setShowHeader(false);
      else if (delta < -2 || y <= 80) setShowHeader(true);
      lastYRef.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [openNavigation, showHeader]);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed left-0 w-full z-50 border-b border-n-6 ${
        showHeader || openNavigation ? "top-0" : "-top-24"
      } ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block xl:mr-8" href="#hero">
          <div className="flex items-center gap-3">
            <img src={logok} className="w-[2.25rem] h-[2.25rem] object-contain" width={36} height={36} alt="kalkiNi logo" />
            <span className="font-semibold text-lg tracking-wide">KalkiNi</span>
          </div>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed inset-0 z-[60] w-screen h-screen bg-n-8 text-n-1 lg:static lg:inset-auto lg:w-auto lg:h-auto lg:z-auto lg:mx-auto lg:bg-transparent lg:text-inherit lg:flex`}
        >
          <button
            type="button"
            aria-label="Close menu"
            className="absolute top-5 right-5 z-20 px-3 py-2 rounded-xl bg-n-7/70 text-n-1 border border-white/10 lg:hidden"
            onClick={toggleNavigation}
          >
            <span className="text-2xl leading-none">×</span>
          </button>
          <div className="relative z-10 flex flex-col items-center justify-center m-auto lg:flex-row lg:m-0">
            {[{title:"Home",to:"/"},{title:"Features",to:"/features"},{title:"Pricing",to:"/pricing"},{title:"Contact",to:"/contact"}].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  pathname.pathname === item.to ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
