import React from "react";
import styles from "./ApplicationFormsTable.module.css";

export interface LicenseData {
  SrNO: number; // Ensure this matches the actual data type (number)
  FormNO: string;
  purpose: string;
}

interface ApplicationFormsTableProps {
  data: LicenseData[];
}

const tableHeadings: { key: keyof LicenseData; label: string }[] = [
  { key: "SrNO", label: "SR. NO" },
  { key: "FormNO", label: "Form NO" },
  { key: "purpose", label: "Purpose" },
];

const ApplicationFormsTable: React.FC<ApplicationFormsTableProps> = ({
  data,
}) => {
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
            {data.map((form, index) => (
              <tr key={index}>
                <td>{form.SrNO}</td>
                <td>{form.FormNO}</td>
                <td>{form.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationFormsTable;
