import React from "react";
import styles from "./LicenseProcessStep.module.css";

interface LicenseProcessStepProps {
  icon: string;
  text: string;
}

const LicenseProcessStep: React.FC<LicenseProcessStepProps> = ({
  icon,
  text,
}) => {
  return (
    <div className={styles.LicenseProcessContainer}>
      <img
        src={`/icons/${icon}`}
        alt="Process Icon"
        className={styles.LicenseProcessImages}
      />
      <p className={styles.processParagraph}>{text}</p>
    </div>
  );
};

export default LicenseProcessStep;
