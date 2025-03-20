import React from "react";
import "./RegulatoryCard.css";

interface RegulatoryCardProps {
  title: string;
  icon: string;
  color: string;
}

const RegulatoryCard: React.FC<RegulatoryCardProps> = ({
  title,
  icon,
  color,
}) => {
  return (
    <div className="regulatory-gird">
      <div className="regulatory-card" style={{ backgroundColor: color }}>
        <div className="hexagon-card">
          <div className="hexagon">
            <span className="material-icons regulatory-icon">{icon}</span>
          </div>
        </div>
        <span className="regulatory-text">{title}</span>
      </div>
    </div>
  );
};

export default RegulatoryCard;
