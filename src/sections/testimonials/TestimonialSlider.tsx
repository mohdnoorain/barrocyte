"use client";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
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

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    rubberband: false,
    renderMode: "performance",
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      origin: "auto",
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 16,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 3,
          spacing: 16,
        },
      },
    },
  });

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Clean up on unmount
  }, [instanceRef]);

  return (
    <div className={styles.testimonialSection}>
      <div className="container">
        <h2 className={styles.title}>TESTIMONIALS</h2>
        <p className={styles.subtext}>Here’s what our clients say about us.</p>

        <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
          {testimonials.map((t, i) => (
            <div key={i} className={`keen-slider__slide ${styles.card}`}>
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

        <div className={styles.dots}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`${styles.dot} ${
                currentSlide === idx ? styles.activeDot : ""
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
