import React, { useState } from "react";
import styles from "./CustomClearanceServices.module.css";

import Accordion from "@/components/accordion/Accordion";
import DoCard from "@/components/DoCard/DoCard";
const CustomClearanceServices = () => {
  const accordionData = [
    {
      title: "Legal Expertise",
      content: `Our team of legal experts and network of customs clearing agents across India provide tailored solutions 
    to optimize your time and reduce customs duties effectively. We ensure compliance while minimizing delays`,
    },
    {
      title: "Trade Compliance",
      content: `We help you navigate complex import-export trade regulations. Our team ensures that you follow the correct 
    processes and documentation for smooth and compliant customs clearance`,
    },
    {
      title: "Experience Matters",
      content: `With years of experience, we’ve worked with companies dealing in Drugs, Medical Devices, Cosmetics, Livestock, 
    Chemicals, and more. Our knowledge ensures that your goods are handled efficiently and compliantly`,
    },
    {
      title: "End-to-End Solutions",
      content: `From documentation consulting to mapping the most efficient cargo routes, we offer complete support for 
    Import and Export Customs Clearance. We are dedicated to enabling your business growth through reliable services`,
    },
  ];

  const importDocumentation = {
    title: "Imports Documentation",
    points: [
      "Bill of Entry",
      "Commercial Invoice",
      "Bill of Lading or Airway Bill",
      "Import License",
      "Certificate of Insurance",
      "Letter of Credit or LC",
      "Technical Write-up or Literature (Only required for specific goods)",
      "Industrial License (for specific goods)",
      "Test Report (If any)",
      "RCMC Registration cum Membership Certificate",
      "GATT/DGFT declaration",
      "DEEC/DEPB/ECGC License for duty benefits",
    ],
  };

  const exportDocItems = {
    title: "Exports Documentation",
    points: [
      "Proforma Invoice",
      "Customs Packing List",
      "Country of Origin or COO Certificate",
      "Commercial Invoice",
      "Shipping Bill",
      "Bill of Lading or Airway Bill",
      "Bill of Sight",
      "Letter of Credit",
      "Bill of Exchange",
      "Export License",
      "Warehouse Receipt",
      "Health Certificates",
    ],
  };


  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section>
        <div className={styles.CustomClearanceServicesSection}>
          <div className={styles.FormsContainer}>
            <div className="container">
              <h2 className={styles.CustomClearanceServicesTitle}>
                Custom Clearance Services
              </h2>
              <p className={styles.CustomClearanceServicesParagrapgh}>
                All of the items imported into the country have to be custom
                cleared. This applies to the items brought in as personal
                effects and also imported by trade and business establishments
                including governmental and private sectors. Necessary stipulated
                duties would have to be paid before the goods are released by
                Customs.
                <br />
                Cargo imported into the country from any point of entry is
                warehoused at Customs bonded area under customs jurisdiction
                until it is released after clearance.
                <br />
                Customs clearance work involves preparation and submission of
                documentations required to facilitate export or imports into the
                country, representing client during customs examination,
                assessment, payment of duty and co taking delivery of cargo from
                customs after clearance along with documents.
                <br />
                <b> Barrocyte Consultants</b>, will assist you in Custom
                Clearance Services and safely delivery of your consignment to
                your warehouse.
                <br />
                <br />
                <b> Barrocyte Consultants</b> handles all trade compliance and
                processes on your behalf so you can focus on growing your
                business. Our goodwill and clean business policies help us
                ensure speedy clearance of consignments which have arrived by
                air, sea and land.
              </p>
            </div>
          </div>
          <div className={styles.FormsContainer}>
            <div className="container">
              <h2 className={styles.CustomClearanceServicesTitle}>
                Customs Clearance & Trade Compliance Services
              </h2>
              <div className={styles.imageSection}>
                <div className={styles.imageBox}>
                  <div
                    className={`${styles.imageWrapper} ${styles.imageOne}`}
                  ></div>
                </div>
                <div className={styles.tableContainer}>
                  {accordionData.map((item, index) => (
                    <Accordion
                      key={index}
                      title={item.title}
                      content={item.content}
                      isActive={activeIndex === index}
                      onClick={() => toggleAccordion(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.FormsContainer}>
            <div className="container">
              <h2 className={styles.CustomClearanceServicesTitle}>
                Essential Documents for Customs Clearance
              </h2>
              <div className={styles.imageSection}>
                <div className={styles.tableContainer}>
                  <DoCard
                    title={importDocumentation.title}
                    items={importDocumentation.points}
                    icon="description"
                    iconColor="#004e89"
                    labelBgColor="#0f4c81"
                  />
                </div>
                <div className={styles.tableContainer}>
                  <DoCard
                    title={exportDocItems.title}
                    items={exportDocItems.points}
                    icon="description"
                    iconColor="#004e89"
                    labelBgColor="#0f4c81"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomClearanceServices;
