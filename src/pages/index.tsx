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
import ContactForm from "@/components/contactForm/ContactForm";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <Main></Main>
      <RegulatorySolutions />
      <DrugsLicenseServices />
      <div id="blood-bank-section">
        <BloodBankServive />
      </div>
      <div id="sanitoryImportpermit">
        <SanitaryImportPermitService />
      </div>
      <div id="customClearance">
        <CustomClearanceServices />
      </div>

      <TestimonialSlider />
      <div id="contactForm">
        <ContactForm />
      </div>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}
