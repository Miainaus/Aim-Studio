import React, { useState, useEffect } from "react";
import "./smoothScroll.css";
import { AiOutlineArrowUp } from "react-icons/ai";

const SmoothScroll = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const shouldShowButton = scrollY > window.innerHeight / 2;
      setShowButton(shouldShowButton);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Cleanup the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const duration = 1000; // Adjust the duration of the scroll animation
    const start = window.scrollY;
    const target = 0;
    const startTime = performance.now();

    function animateScroll() {
      const currentTime = performance.now();
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const newPosition = easeInOutQuad(progress) * (target - start) + start;

      window.scrollTo(0, newPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    }

    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animateScroll);
  };
  return (
    <div className={`${showButton && "show"} scrollTop`}>
        <button onClick={scrollToTop} >
         <i><AiOutlineArrowUp /></i> 
        </button>
    </div>
  );
};

export default SmoothScroll;
