import React from "react";
import styles from "./WhoCanApply.module.css"; // Import Module CSS

interface WhoCanApplyProps {
  title: string;
  content: string;
  highlights: string[];
}

const WhoCanApply: React.FC<WhoCanApplyProps> = ({
  title,
  content,
  highlights,
}) => {
  return (
    <section className={styles.whoCanApply}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.content}>{content}</p>
      <ul className={styles.highlights}>
        {highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </section>
  );
};

export default WhoCanApply;
