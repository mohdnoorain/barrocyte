import React from "react";
import "./DiagnosticRegulatoryKitsServices.css";
import TableComponent from "@/components/tableComponent/TableComponent";
import Header from "@/components/header/Header";
import OfferContainer from "@/components/offerContainer/OfferContainer";
import ValidityInfo from "@/components/validityInfo/ValidityInfo";
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
        <div className="diagnosticRegulatoryKitsServicesSection">
          <div className="container">
            <Header />
            <h2 className="diagnosticRegulatoryKitsServicesTitle">
              Diagnostic Kits Regulatory Service
            </h2>
            <p className="diagnosticRegulatoryKitsServicesParagrapgh">
              Diagnostic Kits are essential in medical science, forming the
              basis of tests, surgeries, and experiments. To regulate their use,
              the Indian government introduced the New Medical Devices Rules,
              2017, effective from January 1, 2018. Under these rules, all
              diagnostic kits, whether In-vitro or In-vivo, require licensing
              for manufacturing, sale, and use in India.
              <br />
              These kitsare classified into four categories based on complexity
              and risk, with licenses issued by Central and State authorities as
              per their classification.
            </p>
          </div>
          <div className="FormsContainer">
            <div className="container">
              <div className="imageSection">
                <div className="imageBox">
                  <div className="imageWrapper imageOne"></div>
                </div>
                <div className="tableContainer">
                  <h3 className="imageTitle">
                    NEW IN-VITRO DIAGNOSTIC DEVICE – INDIA'S FIRST-TIME
                    REGULATIONS
                  </h3>
                  <p className="imageParagraph">
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
          <div className="FormsContainer">
            <div className="container">
              <div className="imageSection">
                <div className="tableContainer">
                  <h3 className="imageTitle">
                    CLASSIFICATION OF DIAGNOSTIC KITS
                  </h3>
                  <p className="imageParagraph">
                    Based on New Medical Rules, the classification of the
                    diagnostic kits takes into consideration factors like the
                    involved risk, medical condition being diagnosed,
                    self-testing or near patient testing. Diagnostic kits used
                    for serious medical conditions like HIV or Cancer are
                    classified as high-risk devices and hence placed under Class
                    D. Other simple kits like glucose testing strips, and
                    sphygmomanometers are placed under Class A & B
                  </p>
                </div>
                <div className="imageBox">
                  <div className="imageWrapper imageTwo"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="FormsContainer ">
            <div className="container">
              

              <div className="tableFormContainer">
                <div className="tableContainer">
                  <h3 className="imageTitle">Forms for Application</h3>
                  <TableComponent data={tableData1} />
                </div>
                <div className="tableContainer">
                  <h3 className="imageTitle">For Importers</h3>
                  <p className="imageParagraph">
                    India’s rapid economic growth has led to a surge in demand
                    for medical equipment. The new medical rules classify all
                    diagnostic kits, including previously unclassified ones. The
                    import license process is now a simplified single-step
                    procedure, allowing multiple importers for a single kit,
                    though each must file a separate application.
                  </p>

                  <div className="processContainer">
                    <h3 className="imageTitle">Import License Process</h3>
                    <div className="importLicenseProcess">
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

          <div className="FormsContainer backgroundColorHowToApply">
            <div className="container">
              <HowToApply steps={steps} />
            </div>
          </div>
          <div className="FormsContainer licenseFeesContainer">
            <div className="container">
              <OfferContainer
                offerData={feeData}
                headingTitle={"Medical Device Import License Fees"}
              />
            </div>
          </div>
          <div className="FormsContainer importantDocumentsContainer">
            <div className="container">
              <ImportantDocuments
                title="Important Documents"
                documents={documentsData}
              />
            </div>
          </div>
          <div className="FormsContainer TimeLineContainer">
            <div className="diagnosticRegulatoryKitsServicesTitle">
              Timeline to Obtain Form MD-15 from CDSCO
            </div>

            <p className="TimeLineParagrapgh">
              The Government Timeline for Import License Form 15 for in-vitro
              Diagnostic kits is 6-9 months.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DiagnosticRegulatoryKitsServices;
