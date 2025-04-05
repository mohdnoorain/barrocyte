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
      if (window.innerWidth > 500) {
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

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}
      ref={menuRef}
    >
      <div className={`${styles["nav-container"]} container`}>
        <div className={styles.logo}>Barro.</div>

        {/* Mobile Menu Button */}
        <button
          className={styles["menu-button"]}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${styles["nav-links"]} ${
            isMobileMenuOpen ? styles.open : ""
          }`}
        >
          <li>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
              Services
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
