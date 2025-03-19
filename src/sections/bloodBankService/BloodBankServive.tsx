import React from "react";
import "./BloodBankServive.css";
import DoCard from "@/components/DoCard/DoCard";
export default function BloodBankServive() {
  const doItems = [
    "Write clean and modular code",
    "Follow accessibility standards",
    "Optimize for performance",
    "Use semantic HTML",
    "Ensure mobile responsiveness",
    "Keep UI/UX simple and effective",
  ];
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
    {
      title: "FSSAI Licensing and Compliance Assistance",
      content: `Obtaining an FSSAI license is a complex process requiring various documents, depending on the business type.  
    **Barrocyte Consultants** provides:
    - A systematic, checklist-based documentation process.
    - Assistance for petty food businesses in FSSAI registration.
    - Support for modification, renewal, and duplicate license issuance.
    - License or registration for 1-5 years, requiring renewal at least 30 days before expiry.
    - Advisory services for compliance with FSSAI regulations.
    Food Business Operators must inform the authority of any changes in their business before implementing them.
    For assistance, contact Barrocyte Consultants at **barrocyte@gmail.com** or **+91-9266665237**.`,
    },
  ];

  return (
    <section>
      <div className="bloodBankService">
        <div className="container">
          <h2 className="bloodBankServiceTitle"> Blood Bank Service</h2>
          <p className="bloodBankServiceParagrapgh">
            Blood Transfusion Service is a vital part of the National Health
            Service and there is no substitute for Human Blood and its
            components. Increasing advancement in the field of Transfusion
            Technology has necessitated to enforce stricter control over the
            quality of Blood and its products. In most of the developed
            countries, the blood banking system has advanced in all facets of
            donor management, storage of blood, grouping and cross matching,
            testing of transmissible diseases, rationale use of blood and
            distribution. The Govt. has the full responsibility for the blood
            programme even though, in some countries, the management of blood
            transfusion services are delegated fully or partly to an appropriate
            non-governmental organization (NGOs) working on a non-profit basis,
            e.g., Red Cross Society. When a NGO is assigned this responsibility,
            the Govt. should formally recognize it and give a clear mandate
            formulating the national blood policy, it is important to consider
            policy decisions enforcing appropriate regulations or necessary
            functions of health service to ensure high quality service and safe
            blood. In order to improve the standards of Blood and its
            components, the Central Govt. through Drugs Controller General of
            India, has formulated a comprehensive legislation to ensure better
            quality control system on collection, storage, testing and
            distribution of blood and its components. Central Govt. amended from
            time to time the existing requirements of Blood Banks in the Drugs &
            Cosmetics Act, 1940 and Rules thereunder to meet the latest
            standards. Consequent to a public litigation case recently, Supreme
            Court of India directed Central Govt. to enact a comprehensive
            legislation on Blood Banks in collection, storage, testing and
            distribution of blood and its components. In this context, the
            office of Drugs Controller General of India made draft rules to
            further amend the existing law in the Drugs & Cosmetics Act, 1940
            and Rules thereunder. We as a Consultant, provide our clients
            assistance with application and licensing procedures related to
            Blood Bank.
          </p>
        </div>
      </div>

      <div className="container">
        <h2 className="bloodBankLicensingTitle">
          Blood Bank Licensing and FSSAI Compliance Guidelines
        </h2>
        <DoCard items={doItems} />
      </div>
    </section>
  );
}
