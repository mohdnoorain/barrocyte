import React from "react";
import "./HowToApply.css";
interface Step {
  icon: string;
  text: string;
}

interface HowToApplyProps {
  steps: Step[];
}

const HowToApply: React.FC<HowToApplyProps> = ({ steps }) => {
  return (
    <div className="howToApply">
      <h2>How To Apply?</h2>
      <p className="headingParagraph">
        As per the Medical Device Rule 2017, the process of approval from CDSCO
        is as follows:
      </p>
      <div className="stepsContainer">
        {steps.map((step, index) => (
          <div key={index} className="stepCard">
            <img src={step.icon} alt="Step Icon" className="stepIcon" />
            <p className="HowToApplyParagraph">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToApply;
