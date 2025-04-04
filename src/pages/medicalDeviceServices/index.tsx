import React from "react";
import styles from "./index.module.css"; // Import Module CSS
import MedicalDevicesRegulatoryServices from "@/sections/medicalDevicesRegulatoryServices/MedicalDevicesRegulatoryServices";
import MedicalDevicesManufacturingServices from "@/sections/medicalDevicesManufacturingServices/MedicalDevicesManufacturingServices";
import Footer from "@/sections/footer/Footer";
import Head from "next/head";

const MedicalDevicesServices = () => {
  return (
    <div>
      <Head>
        <title>Barrocyte</title>
        <meta name="Medical Devices Services" content="Medical consultancy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="stylesheet" href="./globals.css" />
      </Head>
      <MedicalDevicesRegulatoryServices />
      <hr className={styles.divider} />
      <MedicalDevicesManufacturingServices />
      <Footer />
    </div>
  );
};

export default MedicalDevicesServices;
