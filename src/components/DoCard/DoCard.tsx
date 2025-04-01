import React from "react";
import "./DoCard.css";

interface DoRightCardProps {
  title: string;
  items: string[];
}

const DoCard: React.FC<DoRightCardProps> = ({ title, items }) => {
  return (
    <div className="doingcard">
      <div className="do-card">
        {/* List Section */}
        <ul className="do-list">
          {items.map((item, index) => (
            <li key={index} className="do-list-item">
              <span className="checkmark">
                <span className="material-icons blood-icon">water_drop</span>
              </span>
              {item}
            </li>
          ))}
        </ul>

        {/* Label Section */}
        <div className="do-label">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default DoCard;
