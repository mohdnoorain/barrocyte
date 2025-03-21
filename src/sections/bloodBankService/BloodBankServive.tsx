import React from "react";
import "./BloodBankServive.css";
import DoRightCard from "@/components/DoCard/DoCard";

export default function BloodBankServive() {
  const doItems = [
    "Write clean and modular code",
    "Follow accessibility standards",
    "Optimize for performance",
    "Use semantic HTML",
    "Ensure mobile responsiveness",
    "Keep UI/UX simple and effective",
  ];
  const title = "Blood Bank Services";
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
      <div className="bloodBankServiceSection">
        <div className="container">
          <h2 className="bloodBankServiceTitle"> Blood Bank Service</h2>
          <p className="bloodBankServiceParagrapgh">
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

        <div className="bloodBankLicensingContainer">
          <div className="container">
            <h2 className="bloodBankServiceTitle">
              Blood Bank Licensing and FSSAI Compliance Guidelines
            </h2>
            <div className="DoCardContainer">
              <DoRightCard title="Blood Bank Licensing" items={doItems} />
              <DoRightCard title="Blood Bank Licensing" items={doItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
