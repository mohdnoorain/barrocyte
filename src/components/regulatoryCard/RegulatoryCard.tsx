import React from "react";
import styles from "./RegulatoryCard.module.css"; // Import CSS Module
import Link from "next/link";

interface RegulatoryCardProps {
  title: string;
  icon: string;
  color: string;
  link?: string; // optional
  onClick?: () => void; // NEW
}


const RegulatoryCard: React.FC<RegulatoryCardProps> = ({
  title,
  icon,
  color,
  link,
  onClick,
}) => {
  const cardContent = (
    <div
      className={styles.regulatoryCard}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <div className={styles.hexagonCard}>
        <div className={styles.hexagon}>
          <span className={`material-icons ${styles.regulatoryIcon}`}>
            {icon}
          </span>
        </div>
      </div>
      <span className={styles.regulatoryText}>{title}</span>
    </div>
  );

  return (
    <div className={styles.regulatoryGrid}>
      {link ? <Link href={link}>{cardContent}</Link> : cardContent}
    </div>
  );
};


export default RegulatoryCard;
