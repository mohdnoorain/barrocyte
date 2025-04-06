import RegulatoryCard from "@/components/regulatoryCard/RegulatoryCard";
import styles from "./RegulatorySolution.module.css";

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
    link: "/diagnosticKitsServices",
  },
  { title: "Drugs", icon: "science", color: "#4a4a4a", link: "/drugsService" },
  {
    title: "Blood Banks",
    icon: "local_hospital",
    color: "#0f495f",
    link: "/blood-banks",
  },

  {
    title: "Legal Metrology",
    icon: "gavel",
    color: "#4a4a4a",
    link: "/legalMetrologyServices",
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
      <div className={styles.regulatorySection}>
        <div className="container">
          <h1 className={styles.regulatoryTitle}>Our Regulatory Solution</h1>
          <div className={styles.regulatoryGrid}>
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
