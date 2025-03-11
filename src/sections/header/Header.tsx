"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import "./Header.css";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
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
        setIsServicesOpen(false);
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
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`} ref={menuRef}>
      <div className="nav-container">
        <div className="logo">Barro.</div>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links */}
        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
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
          <li className="dropdown">
            <button
              className="dropdown-button"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services ▼
            </button>
            <ul className={`dropdown-menu ${isServicesOpen ? "open" : ""}`}>
              <li>
                <Link href="/web-development" onClick={() => setIsMobileMenuOpen(false)}>
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/seo" onClick={() => setIsMobileMenuOpen(false)}>
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/marketing" onClick={() => setIsMobileMenuOpen(false)}>
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
