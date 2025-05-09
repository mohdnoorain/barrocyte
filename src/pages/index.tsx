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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
