import React from "react";
import styles from "./MedicalDevicesServicesSection.module.css";
import "@/styles/globals.css";
import TableComponent from "@/components/tableComponent/TableComponent";
import Header from "@/components/header/Header";
import OfferContainer from "@/components/offerContainer/OfferContainer";
import ValidityInfo from "@/components/validityInfo/ValidityInfo";
import ImportantDocuments from "@/components/importantDocuments.tsx/ImportantDocuments";
import HowToApply from "@/components/howToApply/HowToApply";
const MedicalDevicesRegulatoryServices = () => {
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
      applicant: "Manufacturer",
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
  ];

  const tableData2 = [
    {
      applicant: "Importer",
      riskClass: "A, B, C & D",
      type: "Clinical Investigation Permission",
      forms: ["Application: MD-22", "Permission: MD-23"],
    },
    {
      applicant: "",
      riskClass: "A, B, C & D",
      type: "Import License",
      forms: ["Application: MD-26", "Permission: MD-27"],
    },
    {
      applicant: "",
      riskClass: "A, B, C & D",
      type: "Test License",
      forms: ["Application: MD-16", "Permission: MD-17"],
    },
    {
      applicant: "Manufacturer",
      riskClass: "A, B, C & D",
      type: "Clinical Investigation Permission",
      forms: ["Application: MD-22", "Permission: MD-23"],
    },
    {
      applicant: "",
      riskClass: "A, B, C & D",
      type: "Manufacturing License",
      forms: ["Application: MD-26", "Permission: MD-27"],
    },
    {
      applicant: "",
      riskClass: "A, B, C & D",
      type: "Test License",
      forms: ["Application: MD-16", "Permission: MD-17"],
    },
  ];

  const feeData = [
    {
      icon: "discount",
      title: "Fee Involved",
      description:
        "Medical device fees vary by risk class. Below is the fee structure for import licenses.",
    },
    {
      icon: "discount",
      title: "One site $1000",
      description: "Class A medical devices: $50 per distinct device.",
    },
    {
      icon: "discount",
      title: "One site $2000",
      description: "Class B medical devices: $1000 per distinct device.",
    },
    {
      icon: "discount",
      title: "One site $3000",
      description: "Class C & D medical devices: $1500 per distinct device.",
    },
    {
      icon: "discount",
      title: "One site $3000",
      description: "Class C & D medical devices: $1500 per distinct device.",
    },
  ];

  const validityData = {
    title: "Validity of Import License",
    description:
      "The import license (Form MD 15) remains valid permanently, provided the license retention fee is paid every 5 years as per the Second Schedule. If not paid, the Central Licensing Authority may suspend or cancel it.",
  };

  const whoCanApplyData = {
    title: "Who Can Apply ?",
    description:
      "An authorized Indian agent must be appointed for the same. This agent must have a license to manufacture (for sale or distribution) or wholesale License FORM 20B & FORM 21 B (sale or distribution) as per the CDSCO guidelines. The agent will make an application to get the grant of medical devices import license by applying through the Sugam online portal.",
  };
  const documentsData = [
    { icon: "description", label: "Wholesale Licence" },
    { icon: "gavel", label: "Power of Attorney" },
    { icon: "assignment", label: "Free Sale Certificate" },
    { icon: "inventory", label: "GHTF" },
    { icon: "folder", label: "Device Master File" },
    { icon: "domain", label: "Site Master File" },
  ];

  const steps = [
    {
      icon: "./icons/evaluate-purple.png",
      text: "Evaluation of the product, if it requires registration under MDR 2017 (Regulated/Non-Regulated).",
    },
    {
      icon: "/icons/check-purple.png",
      text: "If required, evaluation of classification (Class A, B, C, & D) based on the product risk category.",
    },
    {
      icon: "/icons/docs-purple.png",
      text: "Preparation of documents as per the MD 14 checklist.",
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
      text: "Approval/confirmation of the draft application by the authorized agent and submission.",
    },
    {
      icon: "/icons/order-purple.png",
      text: "Follow-up with the regulatory authority and query management if any.",
    },
    {
      icon: "/icons/approved-purple.png",
      text: "Medical Device Import Approval in India is received.",
    },
  ];

  return (
    <section>
      <div className={styles.MedicalDevicesServicesSection}>
        <div className="container">
          <Header />
          <h2 className={styles.MedicalDevicesServicesTitle}>
            Medical Device Regulatory Service
          </h2>
          <p className={styles.MedicalDevicesServicesParagrapgh}>
            Medical devices are regulated by the Indian Government, categorized
            into A, B, C, and D classes based on risk, with licensing governed
            by central and state authorities.
            <br />
            The government has streamlined the application process through the
            SUGAM portal, making it faster and more efficient. For imports, an
            authorized Indian agent is required to apply for the license. We
            assist clients with medical device licensing and application
            procedures, ensuring a smooth and compliant process.
          </p>
        </div>

        <div className={styles.FormsContainer}>
          <div className="container">
            <div className={styles.imageSection}>
              <div className={styles.imageBox}>
                <div
                  className={`${styles.imageWrapper} ${styles.imageOne}`}
                ></div>
              </div>
              <div className={styles.tableContainer}>
                <h3 className={styles.imageTitle}>
                  NEW DEVICE- FIRST TIME IN INDIA
                </h3>
                <p className={styles.imageParagraph}>
                  As per government rules, a medical device which itself or its
                  predicate hasn’t yet been included in the medical devices list
                  of CDSCO (Central Drugs Standard Control Organization) is
                  considered a new medical device...
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
                  MEDICAL DEVICE CLASSIFICATION
                </h3>
                <p className={styles.imageParagraph}>
                  Medical device has been classified into A, B, C, and D
                  categories...
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
            <h2 className={styles.MedicalDevicesServicesTitle}>
              Medical Device Licensing Forms
            </h2>
            <div className={styles.tableFormContainer}>
              <div className={styles.tableContainer}>
                <TableComponent data={tableData1} />
              </div>
              <div className={styles.tableContainer}>
                <TableComponent data={tableData2} />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${styles.FormsContainer} ${styles.validityInfoContainer}`}
        >
          <div className="container">
            <ValidityInfo
              title={whoCanApplyData.title}
              description={whoCanApplyData.description}
            />
          </div>
        </div>

        <div className={`${styles.FormsContainer} ${styles.howToApply}`}>
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
              headingTitle={"Medical Device Import License Fees"}
            />
          </div>
        </div>

        <div
          className={`${styles.FormsContainer} ${styles.validityInfoContainer}`}
        >
          <div className="container">
            <ValidityInfo
              title={validityData.title}
              description={validityData.description}
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

        <div className={`${styles.FormsContainer} ${styles.TimeLineContainer}`}>
          <div className="container">
            <div className={styles.MedicalDevicesServicesTitle}>
              Form MD 15 Processing Timeline
            </div>
            <p className={styles.TimeLineParagrapgh}>
              The Government Timeline for Import License for Medical Device is
              6-9 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalDevicesRegulatoryServices;
