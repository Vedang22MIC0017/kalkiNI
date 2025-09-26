import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useMobile from '../hooks/useMobile';

/**
 * ScrollToTop Component
 * Automatically scrolls to the top of the page when the route changes
 * Should be placed inside Router but outside of Routes
 * Uses instant scroll on mobile for better performance
 */
const ScrollToTop = () => {
  const location = useLocation();
  const isMobile = useMobile();

  useEffect(() => {
    // Scroll to top when location changes
    // Use instant scroll on mobile for better performance, smooth on desktop
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: isMobile ? 'auto' : 'smooth'
    });
  }, [location.pathname, isMobile]); // Run effect when pathname or mobile state changes

  // This component doesn't render anything
  return null;
};

export default ScrollToTop;