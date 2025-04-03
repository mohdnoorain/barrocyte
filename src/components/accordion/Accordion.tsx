import React from "react";
import styles from "./Accordion.module.css";

interface AccordionProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`${styles.accordionItem} ${isActive ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles.accordionHeader}>
        <span>{title}</span>
        <span className={`material-icons ${styles.icon}`}>
          {isActive ? "remove" : "expand_more"}
        </span>
      </div>
      <div
        className={styles.accordionContent}
        style={{
          maxHeight: isActive ? "500px" : "0",
          padding: isActive ? "10px 15px" : "0 15px",
          transition: "max-height 0.4s ease-in-out, padding 0.3s ease-in-out",
        }}
      >
        {content.split(". ").map((sentence, i) => (
          <p key={i} className={styles.accordionParagraph}>
            {sentence}.
          </p>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
