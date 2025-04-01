import React, { useState } from "react";
import "./DiagnostickitsManufactureServices.css";
import "@/styles/globals.css";
import Header from "@/components/header/Header";
import OfferContainer from "@/components/offerContainer/OfferContainer";
import ValidityInfo from "@/components/validityInfo/ValidityInfo";
import ImportantDocuments from "@/components/importantDocuments.tsx/ImportantDocuments";
import HowToApply from "@/components/howToApply/HowToApply";
const DiagnostickitsManufactureServices = () => {
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
        "Permission for Manufacturing Class A & B Diagnostic Kits (Form MD-5 & MD-6) from State FDA",
      content: `
    Any company planning to manufacture Class A and B diagnostic devices must obtain permission from the State FDA. These devices are classified as low to moderate risk, making the application process simpler and less stringent. Manufacturers seeking a loan to manufacture diagnostic kits must first obtain a loan license from the State Licensing Authority.

Barrocyte Consultants assist with filing manufacturing and/or loan licenses for Class A and B diagnostic kits. The Manufacturing License for Class A and B IVDs is regulated by the State Licensing Authority. The application is submitted to the State Drugs Control Authority where the manufacturing premises are located, along with relevant technical and administrative documents.

The application for a Manufacturing License is filed in Form MD-3, and for a loan license, it’s filed in Form MD-4 with the prescribed fees. The Manufacturing License is issued in Form MD-5, and the Loan License in Form MD-6. Manufacturers must also provide staff technical qualifications and conform to Quality Management System standards under the Fifth Schedule.

We provide end-to-end solutions for obtaining swift licenses and certifications in India by filing clear and precise dossiers.
  `,
    },
    {
      title:
        "Permission to Manufacture Class C & D Diagnostic Kits (Form MD-9 & MD-10) from CDSCO",
      content: `
    Class C and D diagnostic kits involve a higher risk, making their license application process more stringent. Permission to manufacture these devices is obtained from the Central Licensing Authority using Form MD-9. Manufacturers seeking a loan for manufacturing must first obtain a loan license.

The Manufacturing License for Class C and D IVDs is regulated by the Central Licensing Authority. The application for the Manufacturing License is filed in Form MD-7, and for a loan license, it’s filed in Form MD-8 with the prescribed fees. Before granting the license, the manufacturing site is inspected within 60 days by a registered notified body.

After the inspection, a report is sent to the Central Licensing Authority, and the performance evaluation is conducted by the National Institute of Biologicals (NIB), Noida. Once compliance is confirmed, the Manufacturing License is issued in Form MD-9, and the Loan License in Form MD-10.

The license remains valid indefinitely, subject to payment of the retention fee every five years unless suspended or canceled. If rejected, a re-audit is conducted.

Barrocyte Consultants assist clients in obtaining manufacturing and loan licenses for Class C and D diagnostic kits, streamlining the process and improving approval chances.
  `,
    },
    {
      title:
        "Permission for test license to manufacture Diagnostic Kits (Form MD-12, Form MD-13)",
      content: `
    Diagnostic kits can be manufactured in small quantities for testing, clinical investigation, demonstration, or training purposes. A test license must be obtained from the Central Licensing Authority. The application is filed using Form MD-12, and the permission is granted in Form MD-13.

New diagnostic kits, both notified and non-notified, require a test license from CDSCO for import and market in India. The test license allows manufacturing In Vitro diagnostic kits for evaluation with the statement "Not for sale or commercial use."

The application for a test license must include:

A description of the diagnostic kits, intended use, materials, and an undertaking for required facilities.

A list of equipment, instruments, and qualified personnel.

A copy of the manufacturing license (if any).

An approval letter for research activities from any government organization (if applicable).

We assist clients in filing the application efficiently, ensuring quick approval so they can focus on manufacturing and launching their products.

The Central Licensing Authority will grant the test license in Form MD-13 or reject the application within 30 days. The license remains valid for three years unless canceled earlier.
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
      <div className="DiagnostickitsServices">
        <div className="container">
          <Header />
          <h2 className="DiagnostickitsServicesTitle">
            Diagnostic Kits Manufacturing Service
          </h2>
          <p className="DiagnostickitsServicesParagraph">
            New Medical Device Rules, 2017 have defined distinct provisions to
            obtain permission for manufacturing of diagnostic kits in India.
            Different diagnostic kits have been classified under different
            categories based upon their use, complexity and the risk involved.
            Applications for Class A and Class B diagnostic kits are reviewed
            and granted permission by the State Licensing Authorities. Whereas
            applications for Class C and Class D medical devices are reviewed
            and granted license by the Central Licensing Authority. This
            difference is obviously due to the depth and scale of review
            involved for different classes of diagnostic kits. CDSCO has also
            defined different fees for different classes of diagnostic kits.
          </p>
        </div>
        <div className="FormsContainer">
          <div className="container">
            <h2 className="DiagnostickitsServicesTitle">
              Classification of Diagnostic Kits
            </h2>

            <div className="imagesFormContainer">
              <div className="imgContainer"></div>
            </div>
          </div>
        </div>

        <div className="FormsContainer">
          <div className="container">
            <h2 className="DiagnostickitsServicesTitle">
              Manufacturing License for IVD Kits from SLA/CLAA
            </h2>
            <div className="bigNotesContainer">
              {accordionData.map((item, index) => (
                <div className="bigNotes" key={index}>
                  <div className="bigNotesHeading">{item.title}</div>
                  <p
                    className={`bigNotesParagraph ${
                      expandedIndex === index ? "expanded" : ""
                    }`}
                  >
                    {expandedIndex === index
                      ? item.content
                      : item.content.slice(0, 500) + "..."}
                  </p>
                  <button
                    className="readMoreButton"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnostickitsManufactureServices;
