import React from "react";
import styles from "./index.module.css"; // Import Module CSS
import Header from "@/components/header/Header";
import DrugRegulatoryServices from "@/sections/drugRegulatoryServices/DrugRegulatoryServices";
import DrugsLicenseServices from "@/sections/drugsLicenseServices/DrugsLicenseServices";
import Footer from "@/sections/footer/Footer";

const DrugsServiceSection = () => {
  return (
    <>
      <div className={styles.DrugsServiceSection}>
        <Header />
        <DrugRegulatoryServices />
        <DrugsLicenseServices />
        <Footer />
      </div>
    </>
  );
};

export default DrugsServiceSection;
