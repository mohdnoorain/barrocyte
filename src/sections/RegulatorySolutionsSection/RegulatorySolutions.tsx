import "./RegulatoryPage.css";

// Data Object
const regulatorySolutions = [
  { title: "Medical Device", icon: "medical_services" },
  { title: "Diagnostic Kits", icon: "biotech" },
  { title: "Cosmetics", icon: "spa" },
  { title: "Drugs", icon: "science" },
  { title: "Blood Banks", icon: "local_hospital" },
  { title: "Sanitary Import Permit", icon: "fact_check" },
  { title: "Trading License", icon: "business_center" },
  { title: "Legal Metrology", icon: "gavel" },
  { title: "Custom Clearance", icon: "local_shipping" },
];

export default function RegulatoryPage() {
  return (
    <section>
      <div className="regulatory-section">
        <div className="container">
          <h1 className="regulatory-title">Our Regulatory Solution</h1>
          <div className="regulatory-grid">
            {regulatorySolutions.map((solution, index) => (
              <div className="regulatory-card" key={index}>
                <span className="material-icons regulatory-icon">
                  {solution.icon}
                </span>
                <span className="regulatory-text">{solution.title}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
