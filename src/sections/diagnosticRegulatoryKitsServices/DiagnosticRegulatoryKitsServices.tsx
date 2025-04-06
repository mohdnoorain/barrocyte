import React from "react";
import styles from "./DiagnosticRegulatoryKits.module.css";
import TableComponent from "@/components/tableComponent/TableComponent";
import OfferContainer from "@/components/offerContainer/OfferContainer";
import ImportantDocuments from "@/components/importantDocuments.tsx/ImportantDocuments";
import HowToApply from "@/components/howToApply/HowToApply";
import LicenseProcessStep from "@/components/licenseProcessStep/LicenseProcessStep";
const DiagnosticRegulatoryKitsServices = () => {
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
    <>
      <section>
        <div className={styles.diagnosticRegulatoryKitsServicesSection}>
          <div className={styles.FormsContainer}>
            <div className="container">
              <div className={styles.imageSection}>
                <div className={styles.tableContainer}>
                  <div className="animate__animated animate__bounce">
                    <h3 className={styles.mainTitle}>
                      Diagnostic Kits Regulatory
                    </h3>
                  </div>

                  <p className={styles.imageParagraph}>
                    At <b>Barrocyte Consultants</b>, we help manufacturers
                    overcome the barriers in preparing strong regulatory
                    strategies and unambiguous dossiers for filing applications
                    for various drug products approval. Experts from our team
                    represent our clients at the SEC meetings to obtain
                    unanimous approvals and permissions. Our constant guidance,
                    thorough follow up and other services like clinical trial
                    management, medical writing, etc. enable our client to
                    obtain successful approval/permission smoothly and apply for
                    licenses
                  </p>
                </div>
                <div className={styles.imageBox}>
                  <div
                    className={`${styles.imageWrapper} ${styles.image3}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.FormsContainer}>
            <div className="container">
              <h2 className={styles.diagnosticRegulatoryKitsServicesTitle}>
                Diagnostic Kits Regulatory Service
              </h2>
              <div className={styles.imageSection}>
                <div className={styles.imageBox}>
                  <div
                    className={`${styles.imageWrapper} ${styles.imageOne}`}
                  ></div>
                </div>
                <div className={styles.tableContainer}>
                  <h3 className={styles.imageTitle}>
                    NEW IN-VITRO DIAGNOSTIC DEVICE – INDIA'S FIRST-TIME
                    REGULATIONS
                  </h3>
                  <p className={styles.imageParagraph}>
                    Any In-Vitro Diagnostic Device which does not have a
                    predicate or similar device in the Indian market is
                    considered to be a New In-Vitro Diagnostic Device. Such
                    devices need to gain approval from the Central Licensing
                    Authority for their manufacture or Import in India.
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
                    CLASSIFICATION OF DIAGNOSTIC KITS
                  </h3>
                  <p className={styles.imageParagraph}>
                    Based on New Medical Rules, the classification of the
                    diagnostic kits takes into consideration factors like the
                    involved risk, medical condition being diagnosed,
                    self-testing or near patient testing. Diagnostic kits used
                    for serious medical conditions like HIV or Cancer are
                    classified as high-risk devices and hence placed under Class
                    D. Other simple kits like glucose testing strips and
                    sphygmomanometers are placed under Class A & B.
                  </p>
                </div>
                <div className={styles.imageBox}>
                  <div
                    className={`${styles.imageWrapper} ${styles.imageTwo}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.FormsContainer}>
            <div className="container">
              <div className={styles.tableFormContainer}>
                <div className={styles.tableContainer}>
                  <h3 className={styles.imageTitle}>Forms for Application</h3>
                  <TableComponent data={tableData1} />
                </div>
                <div className={styles.tableContainer}>
                  <h3 className={styles.imageTitle}>For Importers</h3>
                  <p className={styles.imageParagraph}>
                    India’s rapid economic growth has led to a surge in demand
                    for medical equipment. The new medical rules classify all
                    diagnostic kits, including previously unclassified ones. The
                    import license process is now a simplified single-step
                    procedure, allowing multiple importers for a single kit,
                    though each must file a separate application.
                  </p>
                  <div className={styles.processContainer}>
                    <h3 className={styles.imageTitle}>
                      Import License Process
                    </h3>
                    <div className={styles.importLicenseProcess}>
                      {importLicenseSteps.map((step, index) => (
                        <LicenseProcessStep
                          key={index}
                          icon={step.icon}
                          text={step.text}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.FormsContainer} ${styles.backgroundColorHowToApply}`}
          >
            <div className="container">
              <HowToApply steps={steps} />
            </div>
          </div>

          <div
            className={`${styles.FormsContainer} ${styles.licenseFeesContainer}`}
          >
            <div className="container">
              <OfferContainer
                offerData={feeData}
                headingTitle="Medical Device Import License Fees"
              />
            </div>
          </div>

          <div
            className={`${styles.FormsContainer} ${styles.importantDocumentsContainer}`}
          >
            <div className="container">
              <ImportantDocuments
                title="Important Documents"
                documents={documentsData}
              />
            </div>
          </div>

          <div
            className={`${styles.FormsContainer} ${styles.TimeLineContainer}`}
          >
            <div className="container">
              <h3 className={styles.diagnosticRegulatoryKitsServicesTitle}>
                Timeline to Obtain Form MD-15 from CDSCO
              </h3>
              <p className={styles.TimeLineParagrapgh}>
                The Government Timeline for Import License Form 15 for in-vitro
                Diagnostic kits is 6-9 months.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiagnosticRegulatoryKitsServices;
