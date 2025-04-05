import React from "react";
import styles from "./ImportantDocuments.module.css";

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
    <div className={styles.documentsContainer}>
      <h2 className={styles.documentsTitle}>{title}</h2>
      <div className={styles.documentsGrid}>
        {documents.map((doc, index) => (
          <div key={index} className={styles.documentCard}>
            <span className={`material-icons ${styles.documentIcon}`}>
              {doc.icon}
            </span>
            <p className={styles.documentLabel}>{doc.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImportantDocuments;
