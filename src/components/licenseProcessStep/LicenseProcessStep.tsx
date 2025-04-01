import React from "react";
import "./LicenseProcessStep.css";
interface LicenseProcessStepProps {
  icon: string;
  text: string;
}

const LicenseProcessStep: React.FC<LicenseProcessStepProps> = ({
  icon,
  text,
}) => {
  return (
    <div className="LicenseProcessContainer">
      <img
        src={`/icons/${icon}`}
        alt="Process Icon"
        className="LicenseProcessImages"
      />
      <p className="processParagraph">{text}</p>
    </div>
  );
};

export default LicenseProcessStep;
