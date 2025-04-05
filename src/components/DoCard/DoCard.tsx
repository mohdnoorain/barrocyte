import React from "react";
import styles from "./DoCard.module.css";

interface DoRightCardProps {
  title: string;
  items: string[];
  icon?: string; // default icon
  iconColor?: string; // icon color
  labelBgColor?: string; // label background color
}

const DoCard: React.FC<DoRightCardProps> = ({
  title,
  items,
  icon,
  iconColor,
  labelBgColor,
}) => {
  return (
    <div className={styles.doingcard}>
      <div className={styles.doCard}>
        {/* List Section */}
        <ul className={styles.doList}>
          {items.map((item, index) => (
            <li key={index} className={styles.doListItem}>
              <span className={styles.checkmark}>
                <span
                  className={`material-icons ${styles.bloodIcon}`}
                  style={{ color: iconColor }}
                >
                  {icon}
                </span>
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* Label Section */}
        <div
          className={styles.doLabel}
          style={{ backgroundColor: labelBgColor }}
        >
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default DoCard;
