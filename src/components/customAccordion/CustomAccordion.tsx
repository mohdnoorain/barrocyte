"use client";
import React, { useState } from "react";
import styles from "./CustomAccordion.module.css";

interface CustomAccordionItem {
  title: string;
  content: string;
}

interface CustomAccordionProps {
  data: CustomAccordionItem[];
  defaultOpenIndex?: number;
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({
  data,
  defaultOpenIndex = null,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(
    defaultOpenIndex
  );

  const toggleCustomAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.wrapper}>
      {data.map((item, idx) => (
        <div
          key={idx}
          className={`${styles.item} ${
            activeIndex === idx ? styles.active : ""
          }`}
        >
          <div className={styles.header} onClick={() => toggleCustomAccordion(idx)}>
            <h3>{item.title}</h3>
            <span className={`material-icons ${styles.icon}`}>
              {activeIndex === idx ? "expand_less" : "expand_more"}
            </span>
          </div>
          <div
            className={styles.content}
            style={{
              maxHeight: activeIndex === idx ? "500px" : "0px",
              opacity: activeIndex === idx ? 1 : 0,
              transition: "all 0.5s ease",
            }}
          >
            {item.content && <p>{item.content}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;
