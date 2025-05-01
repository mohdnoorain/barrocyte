import React from "react";
import styles from "./index.module.css"; // Import Module CSS
import Header from "@/components/header/Header";
import DrugRegulatoryServices from "@/sections/drugRegulatoryServices/DrugRegulatoryServices";
import DrugsLicenseServices from "@/sections/drugsLicenseServices/DrugsLicenseServices";
import Footer from "@/sections/footer/Footer";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";
import Head from "next/head";

const DrugsServiceSection = () => {
  return (
    <>
      <Head>
        <title>Barrocyte - Drugs services</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.DrugsServiceSection}>
        <Header />
        <DrugRegulatoryServices />
        <DrugsLicenseServices />
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default DrugsServiceSection;
