import RegulatoryCard from "@/components/regulatoryCard/RegulatoryCard";
import "./RegulatorySolutions.css";

// Data Array
const regulatorySolutions = [
  {
    title: "Medical Device",
    icon: "medical_services",
    color: "#0f495f",
    link: "/medicalDeviceServices",
  },
  {
    title: "Diagnostic Kits",
    icon: "biotech",
    color: "#d61b5b",
    link: "/diagnostic-kits",
  },
  { title: "Cosmetics", icon: "spa", color: "#f5b800", link: "/cosmetics" },
  { title: "Drugs", icon: "science", color: "#4a4a4a", link: "/drugs" },
  {
    title: "Blood Banks",
    icon: "local_hospital",
    color: "#0f495f",
    link: "/blood-banks",
  },
  {
    title: "Trading License",
    icon: "business_center",
    color: "#f5b800",
    link: "/trading-license",
  },
  {
    title: "Legal Metrology",
    icon: "gavel",
    color: "#4a4a4a",
    link: "/legal-metrology",
  },
  {
    title: "Custom Clearance",
    icon: "local_shipping",
    color: "#0f495f",
    link: "/custom-clearance",
  },
  {
    title: "Sanitary Import Permit",
    icon: "fact_check",
    color: "#d61b5b",
    link: "/sanitary-import-permit",
  },
];

export default function RegulatorySolutions() {
  return (
    <section>
      <div className="regulatory-section">
        <div className="container">
          <h1 className="regulatory-title">Our Regulatory Solution</h1>
          <div className="regulatory-grid">
            {regulatorySolutions.map((solution, index) => (
              <RegulatoryCard
                key={index}
                title={solution.title}
                icon={solution.icon}
                color={solution.color}
                link={solution.link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
