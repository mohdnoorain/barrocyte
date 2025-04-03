"use client";
import React, { useState } from "react";
import styles from "./BloodBankService.module.css";
import DoRightCard from "@/components/DoCard/DoCard";
import Accordion from "@/components/accordion/Accordion";

export default function BloodBankServive() {
  const doItems = {
    title: "FSSAI Licensing & Compliance Guidance",
    points: [
      "FSSAI license requirements vary by business type.",
      "Barrocyte Consultants provides checklist-based documentation support.",
      "Assistance available for registration, renewal, and modifications.",
      "Licenses are valid for 1-5 years and require timely renewal.",
      "For expert guidance, contact barrocyte@gmail.com or +91-9266665237.",
    ],
  };

  const bloodBankAccordionData = [
    {
      title: "Form of Licence for Blood Bank",
      content: `A licence for the operation of a Blood Bank or for processing whole Human Blood for components 
    and manufacture of blood products shall be issued in Form 28-C, Form 28-E, Form 26-G, or Form 26-I.  
    Before issuance, the following conditions must be met:
    - The Blood Bank operation must be supervised by at least one full-time Medical Officer with:
      - Postgraduate degree in Medicine (M.D. in Pathology/Transfusion Medicines), or
      - M.B.B.S. with a Diploma in Pathology or Transfusion Medicines with knowledge of blood group serology, methodology, and medical principles, or
      - M.B.B.S. with at least one year of Blood Bank experience and expertise in blood group serology and methodology.
    The degree or diploma must be from a university recognized by the Central Government.`,
    },
    {
      title: "Validity of License",
      content: `The Blood Bank licence in Form 28-C, Form 28-E, or renewed in Form 26-G or Form 26-I is valid for five years unless suspended or cancelled.  
    The validity starts from the date it is granted or renewed.`,
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <div className={styles.bloodBankServiceSection}>
        <div className="container">
          <h2 className={styles.bloodBankServiceTitle}> Blood Bank Service</h2>
          <p className={styles.bloodBankServiceParagrapgh}>
            Blood Transfusion Services are crucial to healthcare, with no
            substitute for human blood. Advancements in transfusion technology
            demand strict quality control. Many countries have well-regulated
            blood banking systems, with some delegating management to NGOs like
            the Red Cross. The Indian government, through the Drugs Controller
            General, enforces stringent regulations under the Drugs & Cosmetics
            Act, ensuring safe collection, storage, testing, and distribution.
            Following a Supreme Court directive, amendments are being made to
            strengthen these laws. As consultants, we assist clients in
            obtaining blood bank licenses and regulatory approvals.
          </p>
        </div>

        <div className={styles.bloodBankLicensingContainer}>
          <div className="container">
            <h2 className={styles.bloodBankServiceTitle}>
              Blood Bank Licensing and FSSAI Compliance Guidelines
            </h2>
            <div className={styles.BloodBankguideLinesContainer}>
              <div className={styles.DocardContainer}>
                <DoRightCard
                  title="Blood Bank Licensing"
                  items={doItems.points}
                />
              </div>
              <div className={styles.BoodBankAccordianContainer}>
                {bloodBankAccordionData.map((item, index) => (
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
      </div>
    </section>
  );
}
