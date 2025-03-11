
import Head from "next/head";
import "./styles.css";
import "./../styles/globals.css";

import Header from './../sections/header/Header';
import Main from "@/sections/main/Main";

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
      <Header></Header>
      <Main></Main>
    </>
  );
}
