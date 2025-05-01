import React from "react";
import styles from "./index.module.css"; // Import Module CSS
import MedicalDevicesRegulatoryServices from "@/sections/medicalDevicesRegulatoryServices/MedicalDevicesRegulatoryServices";
import MedicalDevicesManufacturingServices from "@/sections/medicalDevicesManufacturingServices/MedicalDevicesManufacturingServices";
import Footer from "@/sections/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";
import Head from "next/head";

const MedicalDevicesServices = () => {
  return (
    <div>
      <Head>
        <title>Barrocyte - Devices</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <MedicalDevicesRegulatoryServices />
      <MedicalDevicesManufacturingServices />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default MedicalDevicesServices;
