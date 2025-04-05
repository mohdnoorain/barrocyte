import Head from "next/head";

import Main from "@/sections/main/Main";
import SanitaryImportPermitService from "@/sections/sanitaryImportPermitService/SanitaryImportPermitService";
import RegulatorySolutions from "@/sections/regulatorySolutions/RegulatorySolutions";
import Header from "@/components/header/Header";
import BloodBankServive from "@/sections/bloodBankService/BloodBankServive";
import DrugsLicenseServices from "@/sections/drugsLicenseServices/DrugsLicenseServices";
import Footer from "@/sections/footer/Footer";
import TestimonialSlider from "@/sections/testimonials/TestimonialSlider";
import CustomClearanceServices from "@/sections/customClearanceServices/CustomClearanceServices";

export default function Home() {
  return (
    <>
      <Head>
        <title>Barrocyte</title>
        <meta name="Barrocyte" content="Medical consultancy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Header />
      <Main></Main>
      <RegulatorySolutions />
      <DrugsLicenseServices />
      <BloodBankServive />
      <SanitaryImportPermitService />
      <CustomClearanceServices />
      <TestimonialSlider />
      <Footer />
    </>
  );
}
