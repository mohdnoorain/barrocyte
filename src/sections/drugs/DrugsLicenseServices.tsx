import LicenseTable from "@/components/LicenseTable/LicenseTable";
import styles from "./DrugsLicenseServices.module.css"; // Import module CSS
import React, { useState } from "react";
import Accordion from "@/components/accordion/Accordion";
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
        <div className="container">
          <h2 className={styles.drugsLicenseServiceTitle}>Drugs Service</h2>
          <p className={styles.drugsLicenseServiceParagraph}>
            Ensuring fair and equal access to medicines is a primary government
            concern, but selling drugs requires strict licensing. To regulate
            this, the government enforces stringent rules for granting drug
            licenses. At Barrocyte, we assist businesses in obtaining a
            hassle-free Drug License within the stipulated timeline, ensuring
            compliance with legal requirements.
            <br />
            As per Section 3(b) of the Drugs and Cosmetics Act, 1940, a “drug”
            includes all medicines and medical devices used for humans and
            animals, both internally and externally. It also covers substances
            used for diagnosis, treatment, or disease prevention, insect
            repellents, pest control substances, and essential components like
            gelatine capsules.
          </p>
        </div>
        <div className={styles.drugsType}>
          <div className="container">
            <h2 className={styles.drugsLicenseServiceTitle}>
              Drug License Requirements, Process & Categories
            </h2>
            <div className={styles.drugsInnnercontainer}>
              <div className={styles.drugsAccordionContainer}>
                {drugLicenseAccordionData.map((item, index) => (
                  <Accordion
                    key={index}
                    title={item.title}
                    content={item.content}
                    isActive={activeIndex === index}
                    onClick={() => toggleAccordion(index)}
                  />
                ))}
              </div>
              <div className={styles.drugsTypeContainer}>
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
