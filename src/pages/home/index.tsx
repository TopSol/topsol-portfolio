import React, { useState } from "react";
import CardSection from "./cardSection";
import ServicesOffers from "./servisesOffers";
import TopSolExperts from "./topSolExpert";
import OurPortfolio from "./ourPortfolio";
import RatingSection from "./ratingSection";
import Awards from "./awards";
import GetInTouch from "./getInTouch";
import Hero from "./hero";
import Footer from "../../components/footerSection";
import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import Modal from "./components/model/Modal";
import reviews from "../../staticData/cardSectionData";
import { reviewTypes } from "../../types/interfaceTypes";

function Home() {
  const [bg, setBg] = useState("#fff");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState<reviewTypes>();

  const openModal = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <Navbar />
      <Hero />
      <motion.div
        initial={{ background: "#fff" }}
        animate={{
          background: bg,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <CardSection
          setBg={setBg}
          openModal={openModal}
          reviews={reviews}
          setSelectedId={setSelectedId}
        />
        <ServicesOffers />
      </motion.div>
      <TopSolExperts />
      <OurPortfolio />
      <RatingSection />
      <Awards />
      <div className="mb-[116px]">
        <GetInTouch />
      </div>
      <Footer />
      {isModalOpen && (
        <Modal
          setShowModal={closeModal}
          isLoader={isLoading}
          selectedId={selectedId}
        />
      )}
    </div>
  );
}

export default Home;
