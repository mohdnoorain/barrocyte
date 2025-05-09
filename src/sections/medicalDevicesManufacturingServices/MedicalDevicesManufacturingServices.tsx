import React, { useState } from "react";
import styles from "./MedicalDevicesServicesSection.module.css";
import Header from "@/components/header/Header";
import OfferContainer from "@/components/offerContainer/OfferContainer";
import ValidityInfo from "@/components/validityInfo/ValidityInfo";
import ImportantDocuments from "@/components/importantDocuments.tsx/ImportantDocuments";
import HowToApply from "@/components/howToApply/HowToApply";
const MedicalDevicesManufacturingServices = () => {


  const feeData = [
    {
      icon: "discount",
      title: "Fee Involved",
      description:
        "Medical device fees vary by risk class. Below is the fee structure for import licenses.",
    },
    {
      icon: "discount",
      title: "One site Rs5000",
      description:
        "Class A & B: Manufacturing license fee – ₹5,000/site, ₹100/product.",
    },
    {
      icon: "discount",
      title: "One site Rs5000",
      description:
        "Class C & D: Manufacturing license fee – ₹50,000/site, ₹1,000/product",
    },
  ];

  const validityData = {
    title: "Validity of Import License",
    description:
      "The manufacturing license issued on Form MD 5 or Form MD 9  remains valid in perpetuity i.e., permanently, as long as the payment of license retention fee is done from time to time, as specified in the Second Schedule. The license retention should be paid each time before completion of the period of 5 years from the date of issue of the license unless it is suspended or cancelled by the State Licensing Authority or Central Licensing Authority.",
  };

  const documentsData = [
    { icon: "fact_check", label: "Quality Management System Plan" },
    { icon: "menu_book", label: "Quality Manual" },
    { icon: "rule", label: "SOP’s" },
    { icon: "category", label: "Device Master File" },
    { icon: "apartment", label: "Layout Plan" },
  ];

  const accordionData = [
    {
      title:
        "Permission for Manufacturing & Loan License of Class A & B Medical Devices",
      content: `
    The government grants licenses for manufacturing and loan applications for Class A & B medical devices, which are low-to-moderate risk, including in-vitro diagnostic devices. 

    A manufacturing license is applied using Form MD-3 and granted through Form MD-5, while a loan license is applied using Form MD-4 and granted through Form MD-6. Applications are submitted to the State Licensing Authority (SLA). 

    Required documents include a cover letter with application details, constitution details of the manufacturer or authorized agent, a test license copy for quality control, a substantial equivalence report for safety compliance, and a plant master file detailing the manufacturing process. 

    Foreign applicants must have an Indian agent’s manufacturing license. Barrocyte Consultants provides pan-India support for filing applications. 

    For more information, contact us at barrocyte@gmail.com or +91-7838883608.
  `,
    },
    {
      title:
        "Permission for Manufacturing & Loan License of Class C & D Medical Devices",
      content: `
    Licensing for Class C (Moderate to High Risk) and Class D (High Risk) medical devices is managed by the Central Licensing Authority (CLA). Due to their high-risk nature, obtaining a manufacturing license involves a stringent process.

    Applications for manufacturing licenses are submitted to CDSCO using Form MD-7 and granted through Form MD-9. Loan license applications use Form MD-8 and are approved via Form MD-10.

    Required documents include a cover letter detailing the application, constitution details of the manufacturer or authorized agent, a test license for quality control, an essential principles list outlining potential hazards, a substantial equivalence report, and master files defining technical and manufacturing details.

    Barrocyte Consultants simplifies this complex process with expert guidance and support. 

    For more information, contact us at barrocyte@gmail.com or +91-7838883608.
  `,
    },
    {
      title: "Permission for Test License to Manufacture Medical Devices",
      content: `
    Manufacturers may require a test license to produce medical devices for testing, training, clinical evaluation, or demonstrations. The Central Licensing Authority grants this license for all classes of medical devices.

    Applications are submitted using Form MD-12, and approval is granted through Form MD-13. Supporting documents include a cover letter, details of the medical device, a brief on its composition and functionality, a statement on its purpose and benefits, and a justification for the quantity to be manufactured.

    Barrocyte Consultants ensures a seamless application process with expert guidance. 

    For more information, contact us at barrocyte@gmail.com or +91-7838883608.
  `,
    },
    {
      title:
        "Manufacturing & Loan License for Class A & B Medical Devices – State FDA",
      content: `
    Licensing for Class A (Low Risk) and Class B (Low to Moderate Risk) medical devices falls under the jurisdiction of State Licensing Authorities. Barrocyte Consultants assists manufacturers in filing applications with the respective state FDA.

    Companies manufacturing Class A and B devices must obtain a manufacturing license, while those seeking a loan license must apply separately. Applications are filed using Form MD-3 for manufacturing approval (granted via Form MD-5) and Form MD-4 for a loan license (granted via Form MD-6).

    Required documents include a cover letter, constitution details of the manufacturer or authorized agent, a test license for quality control, substantial equivalence documentation, and a plant master file outlining the manufacturing process.

    Barrocyte Consultants ensures a smooth filing process with expert guidance.

    For more information, contact us at barrocyte@gmail.com or +91-7838883608.
  `,
    },
    {
      title:
        "Test License for Manufacturing Medical Devices – Form MD-12 & MD-13",
      content: `
    Manufacturers may require a test license for producing medical devices intended for testing, training, clinical evaluation, or demonstrations. This license is granted by the Central Licensing Authority and applies to all classes of medical devices.

    Companies manufacturing medical devices in small quantities for clinical investigation, testing, evaluation, or training must apply for a test license from the Central Licensing Authority. Applications for Class A, B, C, and D devices must be submitted with Form MD-12 and supporting documents.

    Required documents include a cover letter outlining the application purpose, device details, composition, functionality, and justification for the quantity required. Additionally, an explanation of the device’s benefits to patients is necessary.

    Barrocyte Consultants assists clients in preparing and submitting complete applications to ensure a smooth approval process.

    For more information, contact us at barrocyte@gmail.com or +91-7838883608.
  `,
    },
  ];

  const steps = [
    {
      icon: "./icons/evaluate-purple.png",
      text: "Preparation of documents as per MDR 2017",
    },
    {
      icon: "/icons/check-purple.png",
      text: "Online generation of application.",
    },
    {
      icon: "/icons/docs-purple.png",
      text: "Online Submission at Sugam",
    },
    {
      icon: "/icons/appoint-purple.png",
      text: "Audit of Plant by Notified Body (Class A & Class B)",
    },
    {
      icon: "/icons/regiter-purple.png",
      text: "Inspection of Plant by CDSCO (Class C & D)",
    },
    {
      icon: "/icons/check-mark-purple.png",
      text: "Follow-up with regulatory authority and Query management if any",
    },
    {
      icon: "/icons/order-purple.png",
      text: "Medical Device Import Approval in India is received",
    },
    {
      icon: "/icons/approved-purple.png",
      text: "Medical Device Import Approval in India is received.",
    },
  ];



  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);


  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section>
      <div className={styles.MedicalDevicesServicesSection}>
        <div className={`${styles.FormsContainer} ${styles.howToApply}`}>
          <div className="container">
            <h2 className={styles.MedicalDevicesServicesTitle}>
              Medical Device Manufacturing Service
            </h2>
            <div className={styles.imageSection}>
              <div className={styles.tableContainer}>
                <div className="animate__animated animate__bounce">
                  <h3 className={styles.mainTitle}>
                    Medical Device Manufacturing
                  </h3>
                </div>

                <p className={styles.imageParagraph}>
                  New regulations have been introduced for the manufacturing of
                  medical devices in India. Manufacturers of Class A and B
                  devices must apply to the State Licensing Authority, while
                  those producing Class C and D devices are regulated by the
                  Central Licensing Authority.
                  Additionally, CDSCO has outlined specific application fees for
                  each category to streamline the licensing process.
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
            <h2 className={styles.MedicalDevicesServicesTitle}>
              Classification of Medical Device
            </h2>
            <div className={styles.imagesFormContainer}>
              <div className={styles.imgContainer}></div>
            </div>
          </div>
        </div>

        <div className={styles.FormsContainer}>
          <div className="container">
            <h2 className={styles.MedicalDevicesServicesTitle}>
              Manufacturing License for Medical Devices from SLA/CLAA
            </h2>
            <div className={styles.bigNotesContainer}>

              {accordionData.map((item, index) => (
                <div className={styles.bigNotes} key={index}>
                  <div className={styles.bigNotesHeading}>{item.title}</div>
                  <p
                    className={`${styles.bigNotesParagraph} ${expandedIndex === index ? styles.expanded : ""
                      }`}
                  >
                    {expandedIndex === index
                      ? item.content
                      : item.content.slice(0, 500) + "..."}
                  </p>
                  <button
                    className={styles.readMoreButton}
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                </div>
              ))}
            </div>
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
      </div>
    </section>
  );
};

export default MedicalDevicesManufacturingServices;
