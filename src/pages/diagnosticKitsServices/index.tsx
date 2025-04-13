import React from "react";
import styles from "./index.module.css"; // Import Module CSS
import DiagnosticRegulatoryKitsServices from "@/sections/diagnosticRegulatoryKitsServices/DiagnosticRegulatoryKitsServices";
import Footer from "@/sections/footer/Footer";
import DiagnostickitsManufactureServices from "@/sections/diagnostickitsManufactureServices/DiagnostickitsManufactureServices";
import Header from "@/components/header/Header";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";

const DiagnosticKitsServices = () => {
  return (
    <>
      <Header />
      <DiagnosticRegulatoryKitsServices />
      <DiagnostickitsManufactureServices />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default DiagnosticKitsServices;
