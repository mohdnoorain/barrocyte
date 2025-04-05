import React from "react";
import styles from "./index.module.css"; // Import Module CSS
import MedicalDevicesRegulatoryServices from "@/sections/medicalDevicesRegulatoryServices/MedicalDevicesRegulatoryServices";
import MedicalDevicesManufacturingServices from "@/sections/medicalDevicesManufacturingServices/MedicalDevicesManufacturingServices";
import Footer from "@/sections/footer/Footer";

const MedicalDevicesServices = () => {
  return (
    <div>
      <MedicalDevicesRegulatoryServices />
      <hr className={styles.divider} />
      <MedicalDevicesManufacturingServices />
      <Footer />
    </div>
  );
};

export default MedicalDevicesServices;
