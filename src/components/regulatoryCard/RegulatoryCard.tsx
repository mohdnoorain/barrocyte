import React from "react";
import styles from "./RegulatoryCard.module.css"; // Import CSS Module
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
    <div className={styles.regulatoryGrid}>
      <Link href={link}>
        <div
          className={styles.regulatoryCard}
          style={{ backgroundColor: color }}
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
      </Link>
    </div>
  );
};

export default RegulatoryCard;
