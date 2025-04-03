import React from "react";
import styles from "./DoCard.module.css";

interface DoRightCardProps {
  title: string;
  items: string[];
}

const DoCard: React.FC<DoRightCardProps> = ({ title, items }) => {
  return (
    <div className={styles.doingcard}>
      <div className={styles.doCard}>
        {/* List Section */}
        <ul className={styles.doList}>
          {items.map((item, index) => (
            <li key={index} className={styles.doListItem}>
              <span className={styles.checkmark}>
                <span className={`material-icons ${styles.bloodIcon}`}>water_drop</span>
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* Label Section */}
        <div className={styles.doLabel}>
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default DoCard;
