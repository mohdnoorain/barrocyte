import React from "react";
import "./ImportantDocuments.css";

interface DocumentItem {
  icon: string;
  label: string;
}

interface ImportantDocumentsProps {
  title: string;
  documents: DocumentItem[];
}

const ImportantDocuments: React.FC<ImportantDocumentsProps> = ({
  title,
  documents,
}) => {
  return (
    <div className="documentsContainer">
      <h2 className="documentsTitle">{title}</h2>
      <div className="documentsGrid">
        {documents.map((doc, index) => (
          <div key={index} className="documentCard">
            <span className="material-icons documentIcon">{doc.icon}</span>
            <p className="documentLabel">{doc.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDocuments;
