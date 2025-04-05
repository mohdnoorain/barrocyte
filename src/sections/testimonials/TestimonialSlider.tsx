"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./TestimonialSlider.module.css";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  image: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Avinash Kr",
    role: "Co-Founder at xyz",
    quote: "This service has completely transformed our logistics operations.",
    image: "/user1.png",
    highlight: "Avinash Kr",
  },
  {
    name: "Bharat Kunal",
    role: "Manager at xyz",
    quote:
      "Highly professional and always reliable for international trade needs.",
    image: "/user2.png",
    highlight: "Bharat Kunal",
  },
  {
    name: "Prabhakar D",
    role: "Founder / CEO at xyz",
    quote: "We’ve saved time and money with their custom clearance solutions.",
    image: "/user3.png",
    highlight: "Prabhakar D",
  },
];

const TestimonialSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch Support
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isTouching = false;
    let startXTouch = 0;
    let scrollLeftTouch = 0;

    const handleTouchStart = (e: TouchEvent) => {
      isTouching = true;
      startXTouch = e.touches[0].pageX - slider.offsetLeft;
      scrollLeftTouch = slider.scrollLeft;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTouching) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startXTouch) * 1.5;
      slider.scrollLeft = scrollLeftTouch - walk;
    };

    const handleTouchEnd = () => {
      isTouching = false;
    };

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Auto Slide Every 5 Seconds
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      if (!isDragging) {
        const cardWidth =
          slider.querySelector(`.${styles.card}`)?.clientWidth || 0;
        slider.scrollBy({ left: cardWidth + 20, behavior: "smooth" });

        // Loop back if reached end
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          setTimeout(() => {
            slider.scrollTo({ left: 0, behavior: "smooth" });
          }, 500); // wait before resetting
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <div className={styles.testimonialSection}>
      <div className="container">
        <h2 className={styles.title}>TESTIMONIALS</h2>
        <p className={styles.subtext}>Here’s what our clients say about us.</p>

        <div
          className={styles.slider}
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {testimonials.map((t, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.userImage}>
                <img src={t.image} alt={t.name} />
              </div>
              <p className={styles.quote}>
                <span className={styles.quoteIcon}>❝</span>
                {t.quote}
                <span className={styles.quoteIcon}>❞</span>
              </p>
              <h4 className={styles.name}>{t.highlight}</h4>
              <p className={styles.role}>{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
