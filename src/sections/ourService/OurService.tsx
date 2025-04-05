"use client";
import React, { useEffect } from "react";
import styles from "./OurSection.module.css";

interface Service {
  title?: string;
  details: string;
  cardPointsIcon: string;
}

interface OurServiceProps {
  data: Service[];
  title:string;
}

const OurService: React.FC<OurServiceProps> = ({ data , title }) => {
  useEffect(() => {
    const section = document.querySelector(`.${styles.ourSection}`);

    if (!section) return; // Prevent errors if the element is not found

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add(styles.show);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);

    return () => observer.disconnect(); // Cleanup observer on unmount
  }, []);

  return (
    <section>
      <div className={styles.ourSection}>
        <div className="container">
          <h2 className={styles.ourSectionTitle}>{title} </h2>
          <div className={styles.ourSectionCard}>
            {data.map((service, index) => (
              <div className={styles.cardContainer} key={index}>
                <div className={styles.innerCardContainer}>
                  <div className={styles.iconContainer}>
                    <span className={`material-icons ${styles.iconStyle}`}>
                      {service.cardPointsIcon}
                    </span>
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <div className={styles.cardDetails}>{service.details}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
