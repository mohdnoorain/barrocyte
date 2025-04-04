import React from "react";
// import "@/styles/globals.css";
import styles from "./index.module.css"; // Import Module CSS
import Header from "@/components/header/Header";
import DrugRegulatoryServices from "@/sections/drugRegulatoryServices/DrugRegulatoryServices";
import DrugsLicenseServices from "@/sections/drugs/DrugsLicenseServices";

const DrugsServiceSection = () => {
  return (
    <>
      <Header />
      <DrugRegulatoryServices />
      <hr className={styles.divider} />
      <DrugsLicenseServices />
    </>
  );
};

export default DrugsServiceSection;
