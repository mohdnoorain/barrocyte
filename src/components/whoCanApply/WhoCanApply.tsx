import React from "react";
import "./WhoCanApply.css"; 

interface WhoCanApplyProps {
  title: string;
  content: string;
  highlights: string[];
}

const WhoCanApply: React.FC<WhoCanApplyProps> = ({
  title,
  content,
  highlights,
}) => {
  return (
    <section className="who-can-apply">
      <h2 className="section-title">{title}</h2>
      <p className="content">{content}</p>
      <ul className="highlights">
        {highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </section>
  );
};

export default WhoCanApply;
