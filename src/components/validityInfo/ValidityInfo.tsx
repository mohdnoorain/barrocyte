import React from "react";
import "./ValidityInfo.css";
interface ValidityProps {
  title: string;
  description: string;
}

const ValidityInfo: React.FC<ValidityProps> = ({ title, description }) => {
  return (
    <div className="validityContainer">
      <div className="innerContainer">
        <h2 className="validityTitle">{title}</h2>
        <p className="validityDescription">{description}</p>
      </div>
    </div>
  );
};

export default ValidityInfo;
