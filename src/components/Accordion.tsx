import React, { useState } from "react";

interface AccordionProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  content,
  isActive,
  onClick,
}) => {
  return (
    <div
      className={`accordionItem ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      <div className="accordionHeader">
        <span>{title}</span>
        <span className="icon material-icons">
          {isActive ? "remove" : "expand_more"}
        </span>
      </div>
      <div
        className="accordionContent"
        style={{
          maxHeight: isActive ? "500px" : "0",
          padding: isActive ? "10px 15px" : "0 15px",
          transition: "max-height 0.4s ease-in-out, padding 0.3s ease-in-out",
        }}
      >
        {content.split(". ").map((sentence, i) => (
          <p key={i} className="accordionParagraph">
            {sentence}.
          </p>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
