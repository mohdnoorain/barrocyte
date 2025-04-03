import React from "react";
import styles from "./LicenseTable.module.css"; // Import CSS Module

export interface LicenseData {
  category: string;
  saleType: string;
  applicationForm: string;
  licenseForm: string;
}

export const licenseData: LicenseData[] = [
  {
    category: "Drugs other than Schedule C&C (1) & X",
    saleType: "Whole Sale",
    applicationForm: "19",
    licenseForm: "20-B",
  },
  {
    category: "Drugs other than Schedule C&C (1) & X",
    saleType: "Retail Sale",
    applicationForm: "19",
    licenseForm: "20",
  },
  {
    category: "Drugs other than Schedule C&C (1) & X",
    saleType: "Restricted (General Store)",
    applicationForm: "19-A",
    licenseForm: "20-A",
  },
  {
    category: "Drugs in Schedule C&C (1) but not in Schedule X",
    saleType: "Whole Sale",
    applicationForm: "19",
    licenseForm: "21-B",
  },
  {
    category: "Drugs in Schedule C&C (1) but not in Schedule X",
    saleType: "Retail Sale",
    applicationForm: "19",
    licenseForm: "21",
  },
  {
    category: "Drugs in Schedule C&C (1) but not in Schedule X",
    saleType: "Restricted (General Store)",
    applicationForm: "19-A",
    licenseForm: "21-A",
  },
  {
    category: "Drugs in Schedule ‘X’",
    saleType: "Whole Sale",
    applicationForm: "19-C",
    licenseForm: "20-G",
  },
  {
    category: "Drugs in Schedule ‘X’",
    saleType: "Retail Sale",
    applicationForm: "19-C",
    licenseForm: "20-F",
  },
  {
    category: "Drugs from motor vehicles",
    saleType: "Whole Sale (Non-Schedule C&C (1))",
    applicationForm: "19-AA",
    licenseForm: "20-BB",
  },
  {
    category: "Drugs from motor vehicles",
    saleType: "Whole Sale (Schedule C&C (1))",
    applicationForm: "19-AA",
    licenseForm: "21-BB",
  },
  {
    category: "Homoeopathic Medicines",
    saleType: "Whole Sale",
    applicationForm: "19-B",
    licenseForm: "20-D",
  },
  {
    category: "Homoeopathic Medicines",
    saleType: "Retail Sale",
    applicationForm: "19-B",
    licenseForm: "20-C",
  },
];

const LicenseTable: React.FC = () => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.licenseTable}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sale Type</th>
            <th>Application Form</th>
            <th>License Form</th>
          </tr>
        </thead>
        <tbody>
          {licenseData.map((item: LicenseData, index: number) => (
            <tr key={index}>
              <td>{item.category}</td>
              <td>{item.saleType}</td>
              <td>{item.applicationForm}</td>
              <td>{item.licenseForm}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LicenseTable;
