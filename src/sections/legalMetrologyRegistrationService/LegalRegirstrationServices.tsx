import React, { useState } from "react";
import styles from "./LegalRegirstrationServices.module.css";

import Accordion from "@/components/accordion/Accordion";
const LegalRegirstrationServices = () => {
  const accordionData = [
    {
      title: "Registration of Companies",
      content: `Companies involved in manufacturing, import, or packaging of weighing and measuring instruments must register through the Legal Metrology online portal. 
    Each Indian state and UT has its respective portal. Where online registration is unavailable, companies must apply offline. 
    Barrocyte Consultants offers support for smooth Legal Metrology registration.`,
    },
    {
      title: "Registration of Importers",
      content: `Importers of measuring instruments in India must register to obtain the Certificate of Registration for Import of Weights and Measures. 
    This is done by applying under Schedule X, Rule 15, Section 19 of the Legal Metrology Act, 2009. 
    We assist importers in new registrations and renewals of existing licenses.`,
    },
    {
      title: "Registration of Manufacturer, Importer, and Packer",
      content: `All weighing and measuring instrument labels must comply with Legal Metrology (Packaged Commodities) Rules, 2011 & 2017. 
    Product labels need updated compliance as per the latest regulations. Companies must register packaging and warehouse details under Rule 27. 
    Warehouses involved in label affixation must also be registered. 
    Barrocyte Consultants helps with registration and renewal for manufacturers, importers, and packers.`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section>
        <div className={styles.LegalRegirstrationServicesSection}>
          <div className={styles.FormsContainer}>
            <div className="container">
              <h2 className={styles.LegalRegirstrationServicesTitle}>
                Legal Metrology Services
              </h2>
              <div className={styles.imagesFormContainer}>
                <div className={styles.imgContainer}></div>
              </div>
              <p className={styles.LegalRegirstrationServicesParagrapgh}>
                The Legal Metrology wing of the Department of Consumer Affairs
                came into being in 2009 and deals with the monitoring and
                regulation of manufacturing, import and business of weighing and
                measuring instruments and devices.
                <br />
                At Barrocyte Consultants, we assist manufacturers and importers
                of weighing and measuring instruments and devices to obtain
                appropriate licenses and approvals for setting up their company
                and marketing their products. The Legal Metrology Department
                falls under the Department of Consumer Affairs, Food and Public
                Distribution Wing of the Government of India.
              </p>
            </div>
          </div>

          <div className={styles.FormsContainer}>
            <div className="container">
              <h2 className={styles.LegalRegirstrationServicesTitle}>
                Registration
              </h2>
              <p className={styles.LegalRegirstrationServicesParagrapgh}>
                Registration of a company as a manufacturer, importer or packer
                of weighing and measuring instruments and devices needs to be
                done under Legal Metrology. Government Authorities have devised
                a systematic procedure for registration of a respective company
                under Legal Metrology. At Barrocyte Consultants, we protect our
                clients from the strenuous application procedure to help save
                their time and effort.
              </p>
            </div>
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
              <h2 className={styles.LegalRegirstrationServicesTitle}>
                Licenses
              </h2>
              <p className={styles.LegalRegirstrationServicesParagrapgh}>
                Legal Metrology has defined specific licenses and application
                procedures related to weighing and measuring instruments and
                devices. These procedures may include manufacturing, import,
                marketing and repair of measuring instruments and related
                equipment. Rules also require a company to perform regular and
                periodic updates and license renewals towards the Legal
                Metrology department.
                <br />
                At Barrocyte Consultants, we help our clients in obtaining
                licenses and performing these periodic updates to the Legal
                Metrology Division without any problems and unnecessary effort.
              </p>
            </div>
          </div>

          <div className={styles.FormsContainer}>
            <div className="container">
              <div className={styles.imageSection}>
                <div className={styles.tableContainer}>
                  <h3 className={styles.imageTitle}>
                    License For Manufacturer
                  </h3>
                  <p className={styles.imageParagraph}>
                    Legal Metrology has defined specific licenses and
                    application procedures related to weighing and measuring
                    instruments and devices. These procedures may include
                    manufacturing, import, marketing and repair of measuring
                    instruments and related equipment. Rules also require a
                    company to perform regular and periodic updates and license
                    renewals towards the Legal Metrology department. At
                    Barrocyte Consultants, we help our clients in obtaining
                    licenses and performing these periodic updates to the Legal
                    Metrology Division without any problems and unnecessary
                    effort.
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
              <div className={styles.imageSection}>
                <div className={styles.imageBox}>
                  <div
                    className={`${styles.imageWrapper} ${styles.image4}`}
                  ></div>
                </div>
                <div className={styles.tableContainer}>
                  <h3 className={styles.imageTitle}>License For Dealer</h3>
                  <p className={styles.imageParagraph}>
                    Legal Metrology has defined specific licenses and
                    application procedures related to weighing and measuring
                    instruments and devices. These procedures may include
                    manufacturing, import, marketing and repair of measuring
                    instruments and related equipment. Rules also require a
                    company to perform regular and periodic updates and license
                    renewals towards the Legal Metrology department. At
                    Barrocyte Consultants, we help our clients in obtaining
                    licenses and performing these periodic updates to the Legal
                    Metrology Division without any problems and unnecessary
                    effort
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.FormsContainer}>
            <div className="container">
              <div className={styles.imageSection}>
                <div className={styles.tableContainer}>
                  <h3 className={styles.imageTitle}>Model Approval</h3>
                  <p className={styles.imageParagraph}>
                    Every model of a weighing or measuring instrument covered
                    under Legal Metrology must obtain a Model Approval from the
                    Central Legal Metrology Department. To initiate the process,
                    manufacturers or importers must file an application along
                    with two sample units, technical documentation, and a
                    certified lab report from an approved referral laboratory.
                    This lab report validates the accuracy, performance, and
                    compliance of the model with Legal Metrology standards.
                    Based on the lab evaluation, the Central Department may
                    grant Model Approval, after which a unique model code is
                    assigned to the instrument. This code must be clearly
                    displayed on the product label or certificate attached to
                    each unit sold in the market.
                  </p>
                </div>
                <div className={styles.imageBox}>
                  <div
                    className={`${styles.imageWrapper} ${styles.image5}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.FormsContainer}>
            <div className="container">
              <h2 className={styles.LegalRegirstrationServicesTitle}>
                Stamping And Verification
              </h2>
              <p className={styles.LegalRegirstrationServicesParagrapgh}>
                As per the State Legal Metrology (Enforcement) Rules, 2010 and
                the Legal Metrology Act, 2009, every approved weighing and
                measuring instrument must be tested, verified, and stamped by
                the respective Legal Metrology Officer or Inspector. After
                successful verification, a stamp indicating the year and quarter
                is affixed to the instrument, and a certificate of verification
                is issued as per Schedule VIII.
                <br />
                <br />
                Manufacturers are also required to submit regular reports
                detailing sold instruments to the State Legal Metrology
                Department. Barrocyte Consultants supports clients in managing
                the entire stamping and verification process smoothly.
                <br />
                We also assist with label design, manufacturing, and timely
                printing—ensuring no delays in stamping and verification due to
                label issues. Our partnerships with trusted vendors allow
                efficient delivery and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalRegirstrationServices;
