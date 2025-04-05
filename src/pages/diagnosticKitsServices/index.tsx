import React from "react";
import styles from "./index.module.css"; // Import Module CSS
import DiagnosticRegulatoryKitsServices from "@/sections/diagnosticRegulatoryKitsServices/DiagnosticRegulatoryKitsServices";
import Footer from "@/sections/footer/Footer";
import DiagnostickitsManufactureServices from "@/sections/diagnostickitsManufactureServices/DiagnostickitsManufactureServices";

const DiagnosticKitsServices = () => {
  return (
    <>
      <DiagnosticRegulatoryKitsServices />
      <hr className={styles.divider} />
      <DiagnostickitsManufactureServices />
      <Footer />
    </>
  );
};

export default DiagnosticKitsServices;
