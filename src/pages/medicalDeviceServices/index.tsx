import React from "react";
import "@/styles/globals.css";
import "./index.css";
import MedicalDevicesRegulatoryServices from "@/sections/medicalDevicesRegulatoryServices/MedicalDevicesRegulatoryServices";
import MedicalDevicesManufacturingServices from "@/sections/medicalDevicesManufacturingServices/MedicalDevicesManufacturingServices";



const MedicalDevicesServices = () => {
  return (
    <div >
      <MedicalDevicesRegulatoryServices />
      <hr />
      <MedicalDevicesManufacturingServices/>
    </div>
  );
};

export default MedicalDevicesServices;
