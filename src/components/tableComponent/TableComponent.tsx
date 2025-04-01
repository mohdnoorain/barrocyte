import React from "react";
import "./TableStyles.css";

interface TableRow {
  applicant: string;
  riskClass: string;
  type: string;
  forms: string[];
}

interface TableProps {
  data: TableRow[];
}

const TableComponent: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="table-container">
      <table className="license-table">
        <thead>
          <tr>
            <th>Applicant</th>
            <th>Risk/Class</th>
            <th>Type of Licence</th>
            <th>Forms</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.applicant }</td>
              <td>{row.riskClass }</td>
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
  );
};

export default TableComponent;
