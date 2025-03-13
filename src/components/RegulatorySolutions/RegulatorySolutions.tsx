import "./RegulatoryPage.css";

export default function RegulatoryPage() {
  return (
    <main>
      <div className="regulatory-section">
        <div className="container">
          <h1 className="regulatory-title">Our Regulatory Solution</h1>

          <div className="regulatory-grid">
            {[
              {
                title: "Medical Device",
                description:
                  "Manufacturing License, Import license, CDSCO clarification, Performance evaluation, MDAC meeting support, etc.",
              },
              {
                title: "Diagnostic Kits",
                description:
                  "Notified and Non-Notified kits, Registration, Import license, Test license, Performance evaluation, MDAC support, etc.",
              },
              {
                title: "Cosmetics",
                description:
                  "Manufacturing license, Cosmetic registration & approval, labeling assistance, Testing, etc.",
              },
              {
                title: "Drugs",
                description:
                  "Registration of biologicals, Import license, Test license, Export NOC, CLAA regulatory support, etc.",
              },
              {
                title: "Blood Banks",
                description:
                  "Site approval, Equipment supply, SOPs, License grants, etc.",
              },
              {
                title: "Sanitary Import Permit (SIP)",
                description:
                  "Permit for Livestock, Poultry, Fish products, Cheese, Milk products, Whey & more.",
              },
              {
                title: "Trading License",
                description: "Wholesale and retail Drug License.",
              },
              {
                title: "Legal Metrology",
                description:
                  "Importer registration, Model Approval, Stamping & Verification, etc.",
              },
              {
                title: "Custom Clearance",
                description: "Approved CHA for Custom Clearance.",
              },
            ].map((solution, index) => (
              <div className="regulatory-card" key={index}>
                <h2>{solution.title}</h2>
                <p>{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="regulatory-cta">
            <button className="regulatory-button">Get in Touch</button>
          </div>``
        </div>
      </div>
    </main>
  );
}
