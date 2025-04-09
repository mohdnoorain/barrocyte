// components/CoolAccordion.tsx
"use client";
import React, { useState } from "react";
import styles from "./CoolAccordion.module.css";

interface CoolAccordionItem {
  title: string;
  content: string[];
  borderColor?: string;
  background?: string;
}

interface CoolAccordionProps {
  items: CoolAccordionItem[];
}

const CoolAccordion: React.FC<CoolAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.CoolAccordionWrapper}>
      {items.map((item, i) => {
        const isOpen = i === activeIndex;
        return (
          <div
            key={i}
            className={`${styles.CoolAccordionItem} ${isOpen ? styles.active : ""}`}
            style={{
              borderLeft: isOpen
                ? `4px solid ${item.borderColor || "#000"}`
                : "none",
              backgroundColor: item.background || "#fff",
            }}
          >
            <div className={styles.header} onClick={() => toggle(i)}>
              <span className={styles.icon}>{isOpen ? "-" : "+"}</span>
              <span className={styles.title}>{item.title}</span>
            </div>
            {isOpen && (
              <div className={styles.content}>
                {item.content.map((point, idx) => (
                  <p key={idx}>{point}</p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CoolAccordion;
