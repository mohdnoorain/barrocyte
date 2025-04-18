"use client";

import { useEffect, useState } from "react";
import styles from "./ScrollToTopButton.module.css"; // Your CSS module

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${styles.scrollButton} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to Top"
    >
      <span className={`material-icons ${styles.icon}`}>arrow_upward</span>
    </button>
  );
};

export default ScrollToTopButton;
