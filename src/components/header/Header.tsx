"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
   const handleScroll = () => {
     if (window.innerWidth > 700) {
       setIsScrolled(window.scrollY > 50);
     } else {
       setIsScrolled(true);
     }
   };

   const handleClickOutside = (event: MouseEvent) => {
     if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
       setIsMobileMenuOpen(false);
     }
   };

   window.addEventListener("scroll", handleScroll);
   window.addEventListener("resize", handleScroll);
   document.addEventListener("mousedown", handleClickOutside);
   handleScroll(); // Initial check

   return () => {
     window.removeEventListener("scroll", handleScroll);
     window.removeEventListener("resize", handleScroll);
     document.removeEventListener("mousedown", handleClickOutside);
   };
 }, []);


  const [isVibrating, setIsVibrating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVibrating(true);
      setTimeout(() => setIsVibrating(false), 500); // Vibrate for 0.5s
    }, 2000); // Every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      ref={menuRef}
    >
      <div className={`${styles["nav-container"]} container`}>
        <div className={styles.logo}>Barro.</div>
        <ul
          className={`${styles["nav-links"]} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <li>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={styles.phoneContainer}
            >
              <span
                className={`material-icons ${styles.icon} ${
                  isVibrating ? styles.vibrate : ""
                }`}
              >
                phone
              </span>
              +91-9266665237
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
