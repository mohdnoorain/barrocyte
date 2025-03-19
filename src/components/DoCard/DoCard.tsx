import React from "react";
import "../DoCard/DoCard.css";
interface DoCardProps {
  items: string[];
}

const DoCard: React.FC<DoCardProps> = ({ items }) => {
  return (
    <>
      <div className="doingcard">
        <div className="do-card">
          <ul className="do-list">
            {items.map((item, index) => (
              <li key={index} className="do-list-item">
                <span className="checkmark">✔</span> {item}
              </li>
            ))}
          </ul>
          {/* Side Label */}
           <div className="do-label">
          <span>DO</span>
          <span className="do-icon">👍</span>
        </div>
        </div>
       
      </div>
    </>
  );
};

export default DoCard;
