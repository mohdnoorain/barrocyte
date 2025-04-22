import RegulatoryCard from "@/components/regulatoryCard/RegulatoryCard";
import styles from "./RegulatorySolution.module.css";

const regulatorySolutions = [
  {
    title: "Medical Device",
    icon: "medical_services",
    color: "#96ae39",
    link: "/medical-device-services",
  },
  {
    title: "Diagnostic Kits",
    icon: "biotech",
    color: "#1a66ab",
    link: "/diagnostic-kits-services",
  },
  {
    title: "Legal Metrology",
    icon: "gavel",
    color: "#0f495f",
    link: "/legal-metrology-services",
  },
  { title: "Drugs", icon: "science", color: "#676767", link: "/drugs-service" },
  {
    title: "Blood Banks",
    icon: "local_hospital",
    color: "#d61b5b",
    targetId: "blood-bank-section",
  },

  {
    title: "Custom Clearance",
    icon: "local_shipping",
    color: "#5c3e99",
    targetId: "customClearance",
  },
  {
    title: "Sanitary Import Permit",
    icon: "fact_check",
    color: "#82685a",
    targetId: "sanitoryImportpermit",
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
                link={
                  solution.link && !solution.targetId
                    ? solution.link
                    : undefined
                }
                onClick={
                  solution.targetId
                    ? () => {
                      const section = document.getElementById(
                        solution.targetId!
                      );
                      section?.scrollIntoView({ behavior: "smooth" });
                    }
                    : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
