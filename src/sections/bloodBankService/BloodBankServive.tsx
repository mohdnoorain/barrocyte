"use client";
import React, { useState } from "react";
import styles from "./BloodBankService.module.css";
import ValidityInfo from "@/components/validityInfo/ValidityInfo";
import DoPargraph from "@/components/doPargraph/DoPargraph";
import DoCard from "@/components/DoCard/DoCard";

export default function BloodBankServive() {
 const doItems = {
   title: "Blood Bank License Application Essentials",
   points: [
     "Duly filled Form 27C signed by the competent authority.",
     "Requisite fee payment proof.",
     "Layout and key plan of the Blood Bank premises with proper section labeling.",
     "Attested certificates of qualification and appointment letters for Medical Officer, Nurses, and Technicians.",
     "List of essential machinery and lab equipment with specifications.",
     "Standard Operating Procedures (SOPs) signed by an authorized medical officer.",
     "Draft specimen labels for human blood and its components.",
     "Undertaking to not draw blood from paid/professional donors.",
     "Undertaking stating that the Blood Bank will not use paid or professional donors.",
     "No Objection Certificate (NOC) from Pollution Control Board.",
     "NOC from Pollution Control Board and Fire Services.",
   ],
 };


  const validityData = {
    title: "Validity of License",
    description: `The Blood Bank licence in Form 28-C, Form 28-E, or renewed in Form 26-G or Form 26-I is valid for five years unless suspended or cancelled.  
    The validity starts from the date it is granted or renewed.`,
  };
  const formLicenseData = {
    title: "Form of Licence for Blood Bank",
    content:
      "A licence for the operation of a Blood Bank or processing whole Human Blood for components shall be issued in Form 28-C, 28-E, 26-G, or 26-I, depending on the specific operation. Before granting such a licence, specific conditions must be fulfilled by the applicant. The functioning of the Blood Bank must be under the active direction and supervision of qualified technical personnel. This includes a full-time Medical Officer with one of the following qualifications:\n\n• A Postgraduate degree in Medicine such as M.D. in Pathology or Transfusion Medicine.\n• An MBBS degree along with a Diploma in Pathology or Transfusion Medicine, with sufficient knowledge in blood group serology and blood procurement principles. An MBBS degree with one year of experience in a Blood Bank during regular service, also demonstrating adequate knowledge and experience in serology and component preparation. The degree or diploma must be from a university recognized by the Central Government.",
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
                <DoCard
                  title={doItems.title}
                  items={doItems.points}
                />
              </div>
              <div className={styles.BoodBankAccordianContainer}>
                <DoPargraph
                  title={formLicenseData.title}
                  content={formLicenseData.content}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bloodBankLicensingContainer}>
          <div className="container">
            <ValidityInfo
              title={validityData.title}
              description={validityData.description}
              titleColor="#c30011"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
