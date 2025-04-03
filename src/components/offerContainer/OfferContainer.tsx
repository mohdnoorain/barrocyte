import React from "react";
import styles from "./OfferContainer.module.css"; // Import CSS Module

interface OfferItem {
  icon: string;
  title: string;
  description: string;
}

interface OfferContainerProps {
  headingTitle: string;
  offerData: OfferItem[];
}

const OfferContainer: React.FC<OfferContainerProps> = ({
  offerData,
  headingTitle,
}) => {
  return (
    <div className={styles.medicalDeviceLicenseFeesContainer}>
      <p className={styles.chooseUs}>WHY CHOOSE US</p>
      <h2 className={styles.headingLicenseFees}>{headingTitle}</h2>
      <div className={styles.feeContainer}>
        {offerData.map((item, index) => (
          <div key={index} className={styles.offerContainer}>
            <div className={styles.iconContainer}>
              <span className={`material-icons ${styles.offerIcon}`}>
                {item.icon}
              </span>
            </div>
            <div className={styles.bothcontainer}>
              <div className={styles.offerTitleContainer}>
                <span>{item.title}</span>
              </div>
              <div className={styles.offerParagraph}>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferContainer;
