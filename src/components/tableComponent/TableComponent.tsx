import React from "react";
import styles from "./TableComponent.module.css"; // Import CSS Module

interface TableRow {
  applicant: string;
  riskClass: string;
  type: string;
  forms: string[];
}

interface TableProps {
  data: TableRow[];
}

const tableHeadings: { key: keyof TableRow; label: string }[] = [
  { key: "applicant", label: "Applicant" },
  { key: "riskClass", label: "Risk/Class" },
  { key: "type", label: "Type of Licence" },
  { key: "forms", label: "Forms" },
];

const TableComponent: React.FC<TableProps> = ({ data }) => {
  return (
    <div className={styles.tableContainer}>
     <div className={styles.tableWrapper}>
      <table className={styles.styledTable}>
        <thead>
          <tr>
            {tableHeadings.map((heading) => (
              <th key={heading.key}>{heading.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.applicant}</td>
              <td>{row.riskClass}</td>
              <td>{row.type}</td>
              <td>
                {row.forms.map((form, i) => (
                  <div key={i}>{form}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
  );
};

export default TableComponent;
