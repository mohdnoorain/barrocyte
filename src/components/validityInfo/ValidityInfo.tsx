import React from "react";
import styles from "./ValidityInfo.module.css"; // Import Module CSS

interface ValidityProps {
  title: string;
  description: string;
  titleColor?: string; 
}

const ValidityInfo: React.FC<ValidityProps> = ({
  title,
  description,
  titleColor,
}) => {
  return (
    <div className={styles.validityContainer}>
      <div className={styles.innerContainer}>
        <h2
          className={styles.validityTitle}
          style={{ color: titleColor || "inherit" }}
        >
          {title}
        </h2>
        <p className={styles.validityDescription}>{description}</p>
      </div>
    </div>
  );
};

export default ValidityInfo;
