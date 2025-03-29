import React from "react";
import "./OfferContainer.css";
interface OfferItem {
  icon: string;
  title: string;
  description: string;
}

interface OfferContainerProps {
  headingTitle: string;
  offerData: OfferItem[];
}

const OfferContainer: React.FC<OfferContainerProps> = ({ offerData , headingTitle}) => {
  return (
    <div className="medicalDeviceLicenseFeesContainer">
      <p className="chooseUs">WHY CHOOSE US </p>
      <h2 className="headingLicenseFees">{headingTitle}</h2>
      <div className="feeContainer">
        {offerData.map((item, index) => (
          <div key={index} className="offerContainer">
            <div className="iconContainer">
              <span className="material-icons offerIcon">{item.icon}</span>
            </div>
            <div className="bothcontainer">
              <div className="offerTitleContainer">
                <span>{item.title}</span>
              </div>
              <div className="offerParagraph">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferContainer;
