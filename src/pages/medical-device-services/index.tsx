import React from "react";
import styles from "./index.module.css"; // Import Module CSS
import MedicalDevicesRegulatoryServices from "@/sections/medicalDevicesRegulatoryServices/MedicalDevicesRegulatoryServices";
import MedicalDevicesManufacturingServices from "@/sections/medicalDevicesManufacturingServices/MedicalDevicesManufacturingServices";
import Footer from "@/sections/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";

const MedicalDevicesServices = () => {
  return (
    <div>
      <Header />
      <MedicalDevicesRegulatoryServices />
      <MedicalDevicesManufacturingServices />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MedicalDevicesServices;
