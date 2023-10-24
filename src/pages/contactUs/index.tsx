import React from "react";
import Navbar from "../../components/Navbar";
import AddressSection from "../../components/addressSection";
import SmallFooter from "../../components/smallFooter";
import Footer from "../../components/footerSection";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
export default function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Contact />
      <AddressSection />
      <SmallFooter />
      <Footer />
    </div>
  );
}
export function Head() {
  return (
    <>
      <title>TOPSOL Innovative Solution</title>
      <meta
        name="description"
        content="Topsol Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://topsol.org/" />
      <meta property="og:title" content="TOPSOL Innovative Solution" />
      <meta
        property="og:description"
        content="Topsol Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />
      <meta property="og:image" content="/icons/logo.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://topsol.org/" />
      <meta property="twitter:title" content="TOPSOL Innovative Solution" />
      <meta
        property="twitter:description"
        content="Topsol Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />
      <meta property="twitter:image" content="/icons/logo.png" />
      <link rel="icon" href="/icons/icon.png" type="image/png"></link>
    </>
  );
}
