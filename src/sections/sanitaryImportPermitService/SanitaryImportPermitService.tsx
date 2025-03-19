import React, { useState } from "react";
import "./SanitaryImportPermitService.css";
import Accordion from "@/components/Accordion";

const accordionData = [
  {
    title: "Mandatory Documents",
    content: `Proforma Invoice. Packing List. Product Catalogue. Product Specification. 
    Microbial Data Sheet. Process Flowchart. Import-Export Certificate.`,
  },
  {
    title: "Application Procedure",
    content: `The application should be made on SIP portal. Once the welcome page is opened, 
    the applicants should apply online option and fill in the form A or B and enclose all the mandatory documents. 
    After the submission of all the documents, the application fee of Rs.300 should be paid through the online payment gateway of the portal. 
    Requisite documents should be uploaded on the portal. Once the application is processed and after the successful scrutiny, SIP may be granted. 
    The Department of Animal Husbandry, Dairying and Fisheries would send an email to the registered ID of the applicant in case of any 
    insufficient information or documents, and the applicant should rectify the error by logging into their account on SIP portal.`,
  },
  {
    title: "Validity of the Permit (SIP)",
    content: `The validity of the permit varies depending upon the livestock products and from three months to one year. 
    The importer can carry out as many shipments as required as per the quantity permitted by the SIP within the stipulated period. 
    The Department may extend the validity of the permit on request from the traders.`,
  },
];

export default function SanitaryImportPermitService() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section>
      <div className="sanitaryImportPermitService">
        <div className="container">
          <h2 className="sanitaryImportPermitServiceTitle">
            Sanitary Import Permit (SIP)
          </h2>
          <p className="sanitaryImportPermitServiceParagraph">
            Import of meat and meat products of any kind including fresh,
            chilled and frozen meat, tissue or organs of poultry, sheep, goat;
            egg & egg powder; milk & milk products; bovine, ovine and caprine
            embryos, ova or semen; and pet food products of animal origin
            requires Sanitary Import Permit (SIP) from the Department of Animal
            Husbandry, Dairying and Fisheries (DAHDF). Sanitary Import Permit
            (SIP) is a certificate stating the sanitary conditions listed by the
            Government of India for the importation of livestock and livestock
            products. It is not a license but a document that informs exporting
            countries to follow the sanitary conditions listed under the
            Livestock Importation Act. Traders can import the animal and animal
            products from the exporting country only through the seaports or
            airports of Bangalore, Chennai, Delhi, Hyderabad, Kolkata and
            Mumbai. We at Barrocyte assist you in getting the Sanitary Import
            Permit (SIP) in the stipulated time manner.
          </p>
        </div>
        <div className="container">
          <h2 className="sanitaryImportPermitServiceTitle">
            Sanitary Import Permit (SIP) Guidelines
          </h2>
          <div className="accordianCard">
            <div className="accordianInnercard">
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
            <div className="accordianImageContainer">
              <img
                src="https://www.indiafilings.com/learn/wp-content/uploads/2019/11/Sanitary-Import-Permit.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
