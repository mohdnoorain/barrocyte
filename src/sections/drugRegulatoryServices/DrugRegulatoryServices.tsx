import React from "react";
import styles from "./DrugRegulatoryServices.module.css";
import ApplicationFormsTable from "@/components/applicationFormsTable/ApplicationFormsTable";

const DrugRegulatoryServices = () => {
  const tableData1 = [
    {
      applicant: "Importer",
      riskClass: "A, B, C, D",
      type: "Importer License",
      forms: ["Application: MD-14", "Permission: MD-15"],
    },
    {
      applicant: "Manufacturer",
      riskClass: "A, B",
      type: "Manufacturing License",
      forms: ["Application: MD-3", "Permission: MD-5"],
    },
    {
      applicant: "",
      riskClass: "",
      type: "Loan License",
      forms: ["Application: MD-4", "Permission: MD-6"],
    },
    {
      applicant: "",
      riskClass: "C, D",
      type: "Manufacturing License",
      forms: ["Application: MD-7", "Permission: MD-9"],
    },
    {
      applicant: "",
      riskClass: "",
      type: "Loan License",
      forms: ["Application: MD-8", "Permission: MD-10"],
    },
    {
      applicant: "Importer",
      riskClass: "A, B, C, D",
      type: "Clinical Performance Evaluation",
      forms: ["Application: MD-24", "Permission: MD-25"],
    },
    {
      applicant: "Manufacturer",
      riskClass: "A, B, C, D",
      type: "Clinical Performance Evaluation",
      forms: ["Application: MD-24", "Permission: MD-25"],
    },
    {
      applicant: "Importer (New In-Vitro Device)",
      riskClass: "A, B, C, D",
      type: "Import License",
      forms: ["Application: MD-28", "Permission: MD-29"],
    },
    {
      applicant: "Manufacturer (New In-Vitro Device)",
      riskClass: "A, B, C, D",
      type: "Manufacturing License",
      forms: ["Application: MD-28", "Permission: MD-29"],
    },
  ];

  const feeData = [
    {
      icon: "discount",
      title: "Fee Involved",
      description:
        "In-Vitro Diagnostic Kits are classified by risk to ensure safety, with specific import license fees",
    },
    {
      icon: "discount",
      title: "One site $1000",
      description:
        "Import license fee for Class A/B In-Vitro Diagnostic Kits: $10 per kit.",
    },
    {
      icon: "discount",
      title: "One site $3000",
      description:
        "Import license fee for Class C/D In-Vitro Diagnostic Kits: $500 per kit.",
    },
  ];

  const documentsData = [
    { icon: "description", label: "Wholesale Licence" },
    { icon: "gavel", label: "Power of Attorney" },
    { icon: "assignment", label: "Free Sale Certificate from GHTF" },
    { icon: "folder", label: "Device Master File " },
    { icon: "domain", label: "Site Master File" },
  ];

  const steps = [
    {
      icon: "/icons/evaluate-purple.png",
      text: "Evaluation of the product, if it requires registration under MDR 2017 (Regulated/Non-Regulated).",
    },
    {
      icon: "/icons/check-purple.png",
      text: "If requires registration, evaluation of classification (Class A, B, C, D) based on the product risk category.",
    },
    {
      icon: "/icons/docs-purple.png",
      text: "Mandatory document requirement: sharing the list and reviewing its adequacy.",
    },
    {
      icon: "/icons/appoint-purple.png",
      text: "Appoint an authorized agent.",
    },
    {
      icon: "/icons/regiter-purple.png",
      text: "Online generation of application.",
    },
    {
      icon: "/icons/check-mark-purple.png",
      text: "Approval/confirmation of draft application by the authorized agent and submission.",
    },
    {
      icon: "/icons/order-purple.png",
      text: "Follow-up with the regulatory authority and query management if any.",
    },
    {
      icon: "/icons/approved-purple.png",
      text: "Final approval.",
    },
  ];

  const importLicenseSteps = [
    { icon: "user-circle-right.png", text: "Classification of Medical" },
    {
      icon: "note-circle-right.png",
      text: "Documents as per Checklist",
    },
    { icon: "certificate-circle.png", text: "Application Filing" },
    { icon: "certificate-circle.png", text: "Import LicenseDevice " },
  ];
  return (
    <section>
      <div className={styles.drugRegulatoryServicesSection}>
        <div className={styles.FormsContainer}>
          <div className="container">
            {" "}
            {/* Global class remains */}
            <h2 className={styles.drugRegulatoryServicesTitle}>
              Drug Regulatory Services
            </h2>
            <div className={styles.imageSection}>
              <div className={styles.imageBox}>
                <div
                  className={`${styles.imageWrapper} ${styles.imageOne}`}
                ></div>
              </div>
              <div className={styles.tableContainer}>
                <h3 className={styles.imageTitle}>FOR MANUFACTURER</h3>
                <p className={styles.imageParagraph}>
                  At Barrocyte Consultants, we help manufacturers overcome the
                  barriers in preparing strong regulatory strategies and
                  unambiguous dossiers for filing applications for various drug
                  products approval. Experts from our team represent our clients
                  at the SEC meetings to obtain unanimous approvals and
                  permissions. Our constant guidance, thorough follow-up, and
                  other services like clinical trial management, medical
                  writing, etc., enable our clients to obtain successful
                  approvals/permissions smoothly and apply for licenses.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.FormsContainer}>
          <div className="container">
            <div className={styles.imageSection}>
              <div className={styles.tableContainer}>
                <h3 className={styles.imageTitle}>
                  Forms of Licenses to Sell Drugs
                </h3>
                <p className={styles.imageParagraph}>
                  A license to sell, stock, exhibit, or offer for sale or
                  distribute drugs other than those specified in Schedules C, C
                  (1), and X, and by retail on a restricted license or by
                  wholesale, shall be issued in Form 20, Form 20-A, or Form
                  20-B, as the case may be.
                  <br />A license to sell, stock, exhibit, or offer for sale or
                  distribute drugs specified in Schedule C and C (1) (excluding
                  those in Schedule X), by retail on a restricted license or by
                  wholesale, shall be issued in Form 21, Form 21-A, or Form
                  21-B, as the case may be.
                </p>
              </div>
              <div className={styles.tableContainer}>
                <ApplicationFormsTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrugRegulatoryServices;
