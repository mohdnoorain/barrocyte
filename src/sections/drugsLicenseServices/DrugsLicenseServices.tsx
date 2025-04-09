import LicenseTable from "@/components/LicenseTable/LicenseTable";
import styles from "./DrugsLicenseServices.module.css"; // Import module CSS
import React, { useState } from "react";
import Accordion from "@/components/accordion/Accordion";
import CustomAccordion from "@/components/customAccordion/CustomAccordion";
const DrugsLicenseServices: React.FC = () => {
  const drugLicenseAccordionData = [
    {
      title: "Prerequisites for Obtaining Drug License",
      content: `To obtain a drug license, the following conditions must be met:
    - **Pharmacist/Competent Person:** A qualified pharmacist is required for retail licenses, while wholesale licenses require a graduate with 1 year of experience or an undergraduate with 4 years of experience.
    - **Space Requirement:** Retail and wholesale premises must be at least 15 sq. meters; individual licenses require 10 sq. meters.
    - **Storage Facility:** Refrigeration is mandatory for drugs requiring low temperatures.
    - **Technical Staff:** Retail pharmacy staff must have in-depth knowledge; wholesale staff must have relevant experience.`,
    },
    {
      title: "Application Process for Drug License",
      content: `Steps to obtain a drug license:
    - Apply online with a valid email, contact number, and PAN number.
    - Ensure all documents are updated and ready.
    - Upload the documents and pay the applicable fees.
    - Authorities will inspect the premises for compliance.
    - Upon successful verification, the drug license is granted.`,
    },
    {
      title: "Essential Documents Required",
      content: `The following documents are required:
    - Entity proof: MOA, AOA for companies; partnership deed for partnerships.
    - ID and address proof of proprietor/partners/directors.
    - Property documents: Ownership proof or rental agreement.
    - Site and key plan of premises.
    - Proof of cold storage or refrigeration facilities.
    - Affidavits of non-conviction for proprietor/partners/directors.
    - Affidavit of registered pharmacist/competent person.`,
    },
    {
      title: "Types of Drug Licenses",
      content: `Different types of drug licenses include:
    - **Wholesale Drug License:** Required for selling drugs to retailers or distributors. Forms: 20B & 21B.
    - **Retail Drug License:** Required for selling drugs to end consumers. Forms: 20 & 21.
    - **Restricted Drug License:** For general stores with limited drug sales. Forms: 20A & 21A.`,
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section>
      <div className={styles.drugsLicenseServiceSection}>
        <div className={`${styles.FormsContainer} ${styles.howToApply}`}>
          <div className="container">
            <h2 className={styles.drugsLicenseServiceTitle}>
              Drugs License Service
            </h2>
            <div className={styles.imageSection}>
              <div className={styles.tableContainer}>
                <div className="animate__animated animate__bounce">
                  <h3 className={styles.mainTitle}>Drugs License</h3>
                </div>

                <p className={styles.imageParagraph}>
                  Ensuring everyone has equal and fair access to drugs and
                  medicine is the primary concern of government. But the right
                  to sell drugs and medicines has to be given cautiously. Hence
                  the government has stringent rules for granting licenses for
                  the selling of drugs and medicine. We at Barrocyte assist in
                  getting hustle free grant of Drug License in the stipulated
                  time line.
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

        <div className={styles.drugsType}>
          <div className="container">
            <h2 className={styles.drugsLicenseServiceTitle}>
              Drug License Requirements, Process & Categories
            </h2>
            <div className={styles.drugsInnnercontainer}>
              <div className={styles.drugsAccordionContainer}>
                <h3 className={styles.imageTitle}>
                  Overview of Drug Licensing in India
                </h3>
                <CustomAccordion data={drugLicenseAccordionData} defaultOpenIndex={1} />
              </div>
              <div className={styles.drugsTypeContainer}>
                <h3 className={styles.imageTitle}>Forms for Application</h3>
                <LicenseTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrugsLicenseServices;
