import React from "react";
import "./RegulatoryCard.css";
import Link from "next/link";

interface RegulatoryCardProps {
  title: string;
  icon: string;
  color: string;
  link: string;
}

const RegulatoryCard: React.FC<RegulatoryCardProps> = ({
  title,
  icon,
  color,
  link,
}) => {
  return (
    <div className="regulatory-gird">
      <Link href={link}>
        <div className="regulatory-card" style={{ backgroundColor: color }}>
          <div className="hexagon-card">
            <div className="hexagon">
              <span className="material-icons regulatory-icon">{icon}</span>
            </div>
          </div>
          <span className="regulatory-text">{title}</span>
        </div>
      </Link>
    </div>
  );
};

export default RegulatoryCard;
