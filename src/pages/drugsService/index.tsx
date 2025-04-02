import React from "react";
import "@/styles/globals.css";
import "./index.css";
import Header from "@/components/header/Header";
import DrugRegulatoryServices from "@/sections/drugRegulatoryServices/DrugRegulatoryServices";
import DrugsLicenseServices from "@/sections/drugs/DrugsLicenseServices";
const DrugsServiceSection = () => {
  return (
    <>
      <Header />
      <DrugRegulatoryServices />
      <hr className="Divider" />
      <DrugsLicenseServices />
    </>
  );
};
export default DrugsServiceSection;
