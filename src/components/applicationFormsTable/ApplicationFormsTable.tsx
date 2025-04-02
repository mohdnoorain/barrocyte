import React from "react";
import "./ApplicationFormsTable.css";

export interface LicenseData {
  SrNO: string;
  FormNO: string;
  purpose: string;
}

// Define headings separately
const tableHeadings: { key: keyof LicenseData; label: string }[] = [
  { key: "SrNO", label: "SR. NO" },
  { key: "FormNO", label: "Form NO" },
  { key: "purpose", label: "purpose" },
];

const applicationForms = [
  {
    srNo: 1,
    formNo: "Form 19",
    purpose:
      "License to sell, stock, exhibit or offer for sale, or distribute drugs apart from those in Schedule X.",
  },
  {
    srNo: 2,
    formNo: "Form 19A",
    purpose:
      "Restricted license for dealers without a qualified individual to sell or distribute drugs.",
  },
  {
    srNo: 3,
    formNo: "Form 19B",
    purpose:
      "License to sell, stock, exhibit, or distribute Homoeopathic Medicines.",
  },
  {
    srNo: 4,
    formNo: "Form 19C",
    purpose:
      "License to sell, stock, exhibit, or distribute drugs specified in Schedule X.",
  },
  {
    srNo: 5,
    formNo: "Form 24",
    purpose:
      "License to manufacture for sale or distribution of drugs except those in Schedule C, C (1), and X.",
  },
  {
    srNo: 6,
    formNo: "Form 24A",
    purpose:
      "Loan license for manufacturing drugs except those in Schedule C, C (1), and X.",
  },
  {
    srNo: 7,
    formNo: "Form 24B",
    purpose:
      "License to repack for sale or distribution of drugs excluding those in Schedule C, C (1), and X.",
  },
  {
    srNo: 8,
    formNo: "Form 24C",
    purpose:
      "License to manufacture or distribute Homoeopathic medicines or potentized preparations.",
  },
  {
    srNo: 9,
    formNo: "Form 24F",
    purpose:
      "License to manufacture drugs specified in Schedule X but not in Schedule C and C(1).",
  },
  {
    srNo: 10,
    formNo: "Form 27",
    purpose:
      "License to manufacture drugs specified in Schedule C and C (1) excluding those in part XB and Schedule X.",
  },
];

const ApplicationFormsTable: React.FC = () => {
  return (
    <div className="table-container">
      <h2 className="table-title">List of Application Forms</h2>
      <div className="table-wrapper">
        <table className="styled-table">
          <thead>
            <tr>
              {tableHeadings.map((heading) => (
                <th key={heading.key}>{heading.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {applicationForms.map((form) => (
              <tr key={form.srNo}>
                <td>{form.srNo}</td>
                <td>{form.formNo}</td>
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
