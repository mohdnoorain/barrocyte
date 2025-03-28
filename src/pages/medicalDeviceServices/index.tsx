import React from "react";
import "@/styles/globals.css";
import "./index.css";
import TableComponent from "@/components/tableComponent/TableComponent";
import Header from "@/components/header/Header";
import WhoCanApply from "@/components/whoCanApply/WhoCanApply";
import HowToApply from "@/components/howToApply/HowToApply";
import DoCard from "@/components/DoCard/DoCard";

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

const data = {
  title: "Who Can Apply?",
  content:
    "An authorized Indian agent must be appointed for the same. This agent must have a license to manufacture (for sale or distribution) or wholesale License FORM 20B & FORM 21B (sale or distribution) as per the CDSCO guidelines.",
  highlights: [
    "Agent must have a manufacturing or wholesale license",
    "Must follow CDSCO guidelines",
    "Application is done via Sugam online portal",
  ],
};

const doItems = {
  title: "FSSAI Licensing & Compliance Guidance",
  points: [
    "Evaluate if the product needs MDR 2017 registration",
    "Check classification (Class A, B, C, & D) based on risk",
    "Prepare documents as per MD 14 checklist",
    "Appoint an authorized agent",
    "Generate application online",
    "Approval and submission by the agent",
    "Follow-up with regulatory authority & handle queries",
    "Receive Medical Device Import Approval",
  ],
};

const feeData = [
  {
    icon: "discount",
    title: "One site $1000",
    description:
      "The import license fee for Class A medical devices other than in vitro diagnostic medical devices. Each distinct medical device cost- $50.",
  },
  {
    icon: "discount",
    title: "One site $2000",
    description:
      "The import license fee for Class B medical devices other than in vitro diagnostic medical devices. Each distinct medical device cost- $1000.",
  },
  {
    icon: "discount",
    title: "One site $3000",
    description:
      "The import license fee for Class C or Class D medical devices other than in vitro diagnostic medical devices. Each distinct medical device cost- $1500.",
  },
];

const MedicalDevicesServices = () => {
  return (
    <section>
      <div className="MedicalDevicesServicesSection">
        <div className="container">
          <Header />
          <h2 className="MedicalDevicesServicesTitle">
            Medical Device Service
          </h2>
          <p className="MedicalDevicesServicesParagrapgh">
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
        <div className="medicalDeviceLicensingFormsContainer">
          <div className="container">
            <h2 className="MedicalDevicesServicesTitle">
              Medical Device Licensing Forms
            </h2>

            <div className="licensingFormContainer">
              <div className="tableContainer">
                <TableComponent data={tableData1} />
              </div>
              <div className="tableContainer">
                <TableComponent data={tableData2} />
              </div>
            </div>
          </div>
        </div>
        <div className="medicalDeviceLicensingFormsContainer">
          <div className="container">
            <div className="licensingFormContainer">
              <div className="tableContainer">
                <WhoCanApply
                  title={data.title}
                  content={data.content}
                  highlights={data.highlights}
                />
              </div>
              <div className="tableContainer">
                <DoCard title="How To Apply ?" items={doItems.points} />
              </div>
            </div>
          </div>
        </div>
        <div className="medicalDeviceLicensingFormsContainer">
          <div className="container">
            <div className="medicalDeviceLicenseFeesContainer">
              <p className="chooseUs">WHY CHOOSE US </p>
              <h2 className="headingLicenseFees">
                Medical Device Import License Fees
              </h2>
              <div className="feeContainer">
                {feeData.map((item, index) => (
                  <div key={index} className="offerContainer">
                    <div className="iconContainer">
                      <span className="material-icons offerIcon">
                        {item.icon}
                      </span>
                    </div>
                    <div className="bothcontainer">
                      <div className="offerTitleContainer">
                        <span>{item.title}</span>
                      </div>
                      <div className="offerParagraph">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalDevicesServices;
