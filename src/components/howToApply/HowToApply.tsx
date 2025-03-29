import React from "react";
import "./HowToApply.css";

interface HowToApplyProps {
  title: string;
  steps: string[];
}

const HowToApply: React.FC<HowToApplyProps> = ({ title, steps }) => {
  return (
    <section className="how-to-apply">
      <h2 className="section-title">{title}</h2>
      <ul className="steps-list">
        {steps.map((step, index) => (
          <li key={index} className="step-item">
            <span className="step-icon material-icons">check_circle</span>
            {step}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HowToApply;
