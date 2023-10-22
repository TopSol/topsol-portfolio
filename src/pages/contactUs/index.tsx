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
        name="Cotact us to know more about TOPSOL"
        content="TOPSOL | Contect Us "
      />
      <link rel="icon" href="/topsol-favicon.png" type="image/png"></link>
    </>
  );
}
