import React from "react";
import styles from "./DrugRegulatoryServices.module.css";
import ApplicationFormsTable from "@/components/applicationFormsTable/ApplicationFormsTable";
import OurService from "../ourService/OurService";
export interface LicenseData {
  SrNO: number;
  FormNO: string;
  purpose: string;
}
const DrugRegulatoryServices = () => {
  const applicationForms: LicenseData[] = [
    {
      SrNO: 1,
      FormNO: "Form 19",
      purpose:
        "License to sell, stock, exhibit or offer for sale, or distribute drugs apart from those in Schedule X.",
    },
    {
      SrNO: 2,
      FormNO: "Form 19A",
      purpose:
        "Restricted license for dealers without a qualified individual to sell or distribute drugs.",
    },
    {
      SrNO: 3,
      FormNO: "Form 19B",
      purpose:
        "License to sell, stock, exhibit, or distribute Homoeopathic Medicines.",
    },
    {
      SrNO: 4,
      FormNO: "Form 19C",
      purpose:
        "License to sell, stock, exhibit, or distribute drugs specified in Schedule X.",
    },
    {
      SrNO: 5,
      FormNO: "Form 24",
      purpose:
        "License to manufacture for sale or distribution of drugs except those in Schedule C, C (1), and X.",
    },
    {
      SrNO: 6,
      FormNO: "Form 24A",
      purpose:
        "Loan license for manufacturing drugs except those in Schedule C, C (1), and X.",
    },
    {
      SrNO: 7,
      FormNO: "Form 24B",
      purpose:
        "License to repack for sale or distribution of drugs excluding those in Schedule C, C (1), and X.",
    },
    {
      SrNO: 8,
      FormNO: "Form 24C",
      purpose:
        "License to manufacture or distribute Homoeopathic medicines or potentized preparations.",
    },
    {
      SrNO: 9,
      FormNO: "Form 24F",
      purpose:
        "License to manufacture drugs specified in Schedule X but not in Schedule C and C(1).",
    },
    {
      SrNO: 10,
      FormNO: "Form 27",
      purpose:
        "License to manufacture drugs specified in Schedule C and C (1) excluding those in part XB and Schedule X.",
    },
  ];

  const servicesData1 = [
    {
      title: "Investigational New Drug (IND)",
      details:
        "Investigational new drug” means any new chemical entity or substance which is under investigation in a clinical trial to assess its safety and efficacy. We help ease the manufacturer’s journey in the process of receiving approvals for new drugs under investigation that are waiting to be introduced in the Indian market.",
      cardPointsIcon: "science", // Research & Drug Development
    },
    {
      title: "New Drug Approval (NDA)",
      details:
        "We provide comprehensive solutions for new formulations, API, FDCs, new indication for existing drug, new dosage form, modified release dosage form, veterinary products, and for vaccines, recombinant DNA (r-DNA) derived products, monoclonal antibodies, stem cells, gene therapeutic products, and xenografts.",
      cardPointsIcon: "approval", // Regulatory Approval
    },
    {
      title: "Subsequent New Drug Approval (SND)",
      details:
        "‘Subsequent new drug’ is an officially accepted term by CDSCO for new drug products of the same therapeutic class or different class for a new indication, strength, dosage form, or route of administration. Our regulatory experts guide you through the entire approval process.",
      cardPointsIcon: "assignment_turned_in", // Compliance & Approval
    },
    {
      title: "BE NOC for Export",
      details:
        "The requirements for BE NOC depend on the drug, disease, and study type. Our experienced team provides end-to-end consultation on BE NOC requirements to ensure compliance with regulatory needs.",
      cardPointsIcon: "assignment", // Regulatory Documentation
    },
    {
      title: "Special Code/Neutral Code for Export",
      details:
        "If you have an exported product that requires a special code on the label authorized by the Licensing Committee, we can obtain NOC for you. This applies to finished formulations, bulk drugs, narcotic drugs, and psychotropic substances.",
      cardPointsIcon: "qr_code", // Unique Code & Labeling
    },
    {
      title: "SEC Meetings",
      details:
        "The Subject Expert Committee (SEC) evaluates clinical trial and new drug applications. Our team assists in preparation, presentation, and representation during SEC meetings to ensure smooth approval.",
      cardPointsIcon: "groups", // Committee & Meetings
    },
    {
      title: "Toxicity Studies",
      details:
        "Toxicity testing assesses adverse effects of chemical and physical agents on biological systems. We ensure studies adhere to GLP and CDSCO guidelines, providing expert assistance in toxicity study needs.",
      cardPointsIcon: "dangerous", // Toxicity & Safety
    },
    {
      title: "BE Studies",
      details:
        "Bioequivalence (BE) studies assess therapeutic equivalence between two drug products. Our team provides comprehensive support to conduct BE studies smoothly and efficiently.",
      cardPointsIcon: "equalizer", // Bioequivalence & Drug Testing
    },
    {
      title: "Clinical Trials",
      details:
        "We help clients obtain regulatory permissions from DCGI for clinical trials across Phases I, II, and III. Our team guides clients through approvals, protocol amendments, and required notifications.",
      cardPointsIcon: "edit_document", // Clinical Trials & Testing
    },
    {
      title: "Medical Writing",
      details:
        "Medical writing plays a critical role in therapeutic product development. Our services include literature searches, Periodic Safety Update Report (PSUR) writing, and full-scale medical documentation support.",
      cardPointsIcon: "edit_document", // Medical Writing & Documentation
    },
  ];

  const serviceData2 = [
    {
      title: "Test License",
      details:
        "A Test license is issued for the purpose of examination, test or analysis of a drug in small quantities which is otherwise prohibited under section 10 of the D & C Act and Rules, 1945. This license is issued in Form 29 for Manufacturers from State Licensing Authority (SLA). We provide end-to-end consultation services to obtain Test License in a hassle-free manner.",
      cardPointsIcon: "science", // Example Material Icon
    },
    {
      title: "Export NOC",
      details:
        "A manufacturer holding a valid license copy as per the Form-25 and Form-28 can obtain a No Objection Certificate (NOC) from Zonal/Sub Zonal offices of CDSCO for export purposes only for approved / unapproved new drug / banned drug in India. The process of obtaining these NOCs requires proper filling of documents. The process of obtaining the required NOCs can be eased by consulting a team of experts at Barrocyte Consultants.",
      cardPointsIcon: "flight_takeoff", // Example Material Icon
    },
    {
      title: "Dual NOC",
      details:
        "A Dual NOC is required for the import of drugs and items capable of dual use in pharma and non-pharma industry. The permission has to be obtained from the Zonal Offices of CDSCO. Barrocyte Consultants can guide you throughout the process for obtaining the NOC for drugs with dual use.",
      cardPointsIcon: "assignment", // Example Material Icon
    },
  ];

  const serviceData3 = [
    {
      title: "Manufacturing License",
      details:
        "For manufacturing of Allopathic drugs/products, a Manufacturing License is required as per D & C Act, 1940. To obtain a manufacturing license, filing of correct documents as per the State Licensing Authority (SLA) and/or Central License Approving Authority (CLAA) is required, whichever is applicable.",
      cardPointsIcon: "factory", // Example Material Icon
    },
    {
      title: "Form 29 for Test Batch",
      details:
        "Test license in Form 29 is a license to manufacture drugs for the purpose of examination, testing, or analysis of drugs. At Barrocyte Consultants, we guide you throughout the licensing process to file the appropriate documents for obtaining the license glitch-free.",
      cardPointsIcon: "science", // Example Material Icon
    },
    {
      title: "Wholesale Drug License",
      details:
        "A Wholesale License is required for sale or distribution of drugs in Form 20B & 21B or its renewal in Form 21C by the manufacturer or any others who want to sell, stock, exhibit or offer for sale or distribute drugs. It is issued by the State Licensing Authority (SLA) in India. Barrocyte Consultants ensures a smooth and timely licensing process.",
      cardPointsIcon: "business_center", // Example Material Icon
    },
    {
      title: "Wholesale License Details",
      details:
        "Wholesale License for sale or distribution of drugs under Drugs and Cosmetics Rules in Form 20B & 21B or its renewal in Form 21C is issued to the manufacturer or any other entity. Wholesalers purchase products in bulk and resell them at discounted prices to retailers. Wholesale Drug licenses (Form 20B; Form 21B; Form 21C) remain valid for 5 years from the date of issue.",
      cardPointsIcon: "storefront", // Example Material Icon
    },
    {
      title: "Retail Drug License",
      details:
        "A retail license is required for the retail sale of drugs. A retail sale means selling drugs or cosmetics directly to the end consumer. Retailers, such as dispensaries, hospitals, medical institutes, and stand-alone pharmacists, require this license. Retail Drug licenses are issued in Form 20 & Form 21 and are valid for 5 years from the date of issuance.",
      cardPointsIcon: "local_pharmacy", // Example Material Icon
    },
  ];

 

  return (
    <section>
      <div className={styles.drugRegulatoryServicesSection}>
        <div className={styles.FormsContainer}>
          <div className="container">
            <h2 className={styles.drugRegulatoryServicesTitle}>
              Drug Regulatory Services
            </h2>
            <div className={styles.imageSection}>
              <div className={styles.imageBox}>
                <div
                  className={`${styles.imageWrapper} ${styles.imageOne}`}
                ></div>
              </div>
              <div className={styles.tableContainer}>
                <h3 className={styles.imageTitle}>FOR MANUFACTURER</h3>
                <p className={styles.imageParagraph}>
                  At Barrocyte Consultants, we help manufacturers overcome the
                  barriers in preparing strong regulatory strategies and
                  unambiguous dossiers for filing applications for various drug
                  products approval. Experts from our team represent our clients
                  at the SEC meetings to obtain unanimous approvals and
                  permissions. Our constant guidance, thorough follow-up, and
                  other services like clinical trial management, medical
                  writing, etc., enable our clients to obtain successful
                  approvals/permissions smoothly and apply for licenses.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.FormsContainer}>
          <OurService data={servicesData1} title="CENTRAL – CDSCO" />
          <OurService data={serviceData3} title="STATE – FDA" />
          <OurService data={serviceData2} title="ZONAL – CDSCO" />
        </div>

        <div className={styles.FormsContainer}>
          <div className="container">
            <h2 className={styles.drugRegulatoryServicesTitle}>
              Forms of Licences to Sell Drugs
            </h2>
            <div className={styles.imageSection}>
              <div className={styles.tableContainer}>
                <h3 className={styles.imageTitle}>
                  Forms of Licenses to Sell Drugs
                </h3>
                <p className={styles.imageParagraph}>
                  A licence to sell, stock, exhibit or offer for sale or
                  distribute drugs other than those specified in Schedules C, C
                  (1) and X and by retail on restricted licence or by wholesale,
                  shall be issued in Form 20, Form 20-A or Form 20–B, as the
                  case may be. A licence to sell, stock, exhibit or offer for
                  sale or distribute drugs specified in Schedule C and C (1)
                  excluding those specified in Schedule X, by retail on
                  restricted licence or by wholesale shall be issued in Form 21,
                  Form 21-A or Form 21-B, as the case may be. A licence to sell,
                  stock, exhibit or offer for sale or distribute drugs specified
                  in Schedule X by retail or by wholesale shall be issued in
                  Form 20-G as the case may be. Applications for the grant or
                  renewal of a licence to sell, stock, exhibit or offer for sale
                  or distribute drugs, other than those included in Schedule X,
                  shall be made in Form 19 or in the case of drugs included in
                  Schedule X shall be made in Form 19-C.
                </p>
              </div>
              <div className={styles.tableContainer}>
                <ApplicationFormsTable data={applicationForms} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrugRegulatoryServices;
