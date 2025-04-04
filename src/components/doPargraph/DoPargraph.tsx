import React from "react";
import styles from "./DoPargraph.module.css";

interface DoRightCardProps {
  title: string;
  content: string;
}

const DoPargraph: React.FC<DoRightCardProps> = ({ title, content }) => {
  return (
    <div className={styles.doingcard}>
      <div className={styles.doCard}>
        <p className={styles.doListItem}>
          {content.split(". ").map((sentence, idx) => (
            <span key={idx}>
              {sentence.trim() + "."}
              <br />
            </span>
          ))}
        </p>
        <div className={styles.doLabel}>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default DoPargraph;
