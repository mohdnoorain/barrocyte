import React from "react";
import styles from "./HowToApply.module.css"; 

interface Step {
  icon: string;
  text: string;
}

interface HowToApplyProps {
  steps: Step[];
}

const HowToApply: React.FC<HowToApplyProps> = ({ steps }) => {
  return (
    <div className={styles.howToApply}>
      <h2>How To Apply?</h2>
      <p className={styles.headingParagraph}>
        As per the Medical Device Rule 2017, the process of approval from CDSCO
        is as follows:
      </p>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.stepCard}>
            <img src={step.icon} alt="Step Icon" className={styles.stepIcon} />
            <p className={styles.paragraph}>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToApply;
