import Header from "@/components/header/Header";
import ScrollToTopButton from "@/components/scrollToTopButton/ScrollToTopButton";
import Footer from "@/sections/footer/Footer";
import LegalRegirstrationServices from "@/sections/legalMetrologyRegistrationService/LegalRegirstrationServices";
import Head from "next/head";




import React from "react";
const LegalMetrologyServices = () => {
  return (
    <>
      <Head>
        <title>Barrocyte - Legal metrology</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <LegalRegirstrationServices />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default LegalMetrologyServices;
