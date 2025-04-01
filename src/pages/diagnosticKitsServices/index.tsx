import React from "react";
import "@/styles/globals.css";
import "./index.css";
import DiagnosticRegulatoryKitsServices from "@/sections/diagnosticRegulatoryKitsServices/DiagnosticRegulatoryKitsServices";
import Footer from "@/sections/footer/Footer";
import DiagnostickitsManufactureServices from "@/sections/diagnostickitsManufactureServices/DiagnostickitsManufactureServices";
const DiagnosticKitsServices = () =>{
    return (
      <>
        <DiagnosticRegulatoryKitsServices/>
        <hr className="Divider" />
        <DiagnostickitsManufactureServices/>
        <Footer/>
      </>
    );
}

export default DiagnosticKitsServices ;