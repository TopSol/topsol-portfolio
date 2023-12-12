import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/headerSection";
import Heading from "./Heading";
import Footer from "../../components/footerSection";
import Card from "./Card";
import metaImage from "../../images/main-logo2.png";
import Logo from "../../images/favicon-01.png";
import { ToggleBar } from "../../components/bar";
export default function index() {
  return (
    <div>
      <div>
        <Navbar />
        <ToggleBar />
      </div>
      <Header />
      <Heading />
      <Card />
      <div className="mt-[100px] md:mt-[139px]">
        <Footer />
      </div>
    </div>
  );
}

export function Head() {
  return (
    <>
      <title>TOPSOL Innovative Solution</title>
      <meta
        name="description"
        content="TOPSOL Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://topsol.org/" />
      <meta property="og:title" content="TOPSOL Innovative Solution" />
      <meta
        property="og:description"
        content="TOPSOL Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />
      <meta property="og:image" content={metaImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://topsol.org/" />
      <meta property="twitter:title" content="TOPSOL Innovative Solution" />
      <meta
        property="twitter:description"
        content="TOPSOL Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />
      <meta property="twitter:image" content={metaImage} />
      <link rel="icon" href={Logo} type="image/png"></link>
    </>
  );
}
