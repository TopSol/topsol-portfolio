import React, { useEffect, useState } from "react";
import CardSection from "./cardSection";
import ServicesOffers from "./servisesOffers";
import TopSolExperts from "./topSolExpert";
import OurPortfolio from "./ourPortfolio";
import RatingSection from "./ratingSection";
import Awards from "./awards";
import GetInTouch from "./getInTouch";
import Hero from "./hero";
import Footer from "../../components/footerSection";
// import SideBar from "../../components/bar/sidebar";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./components/model/Modal";
import reviews from "../../staticData/cardSectionData";
import { reviewTypes } from "../../types/interfaceTypes";
import Logo from "../../images/favicon-01.png";
import metaImage from "../../images/main-logo2.png";
import MetaPixel from "../../utils/meta/metaPixel";
import Faqs from "./faqs";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "../../cursor.css";
import { ToggleBar } from "../../components/bar";

MouseFollower.registerGSAP(gsap);
function Home() {
  const cursor = new MouseFollower();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string>();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const cardSection = document.getElementById("follower");
    const body = document.getElementById("unFollow");
    cardSection.addEventListener("mouseenter", () => {
      cursor.setText("View More");
    });
    cardSection.addEventListener("mouseleave", () => {
      cursor.removeText();
    });
  });
  return (
    <div className="">
      <MetaPixel />

      <ToggleBar />
      <Hero />
      <motion.div className="secSectionBg" id="follower">
        <CardSection
          openModal={openModal}
          reviews={reviews}
          setSelectedId={setSelectedId}
        />
      </motion.div>
      <ServicesOffers page={'home'} showPrimaryBtn={true} />
      <TopSolExperts />
      <OurPortfolio />
      <RatingSection />
      <Awards />
      <Faqs />
      <div className="mb-[116px]">
        <GetInTouch />
      </div>
      <Footer />
      <AnimatePresence>
        {isModalOpen && (
          <Modal id={selectedId} closeModal={closeModal} key={"item"} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;

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
      <meta property="og:image" content={metaImage} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://topsol.org/" />
      <meta property="twitter:title" content="TOPSOL Innovative Solution" />
      <meta
        property="twitter:description"
        content="Topsol Innovative Solutions leads the way in cutting-edge technology, offering creative, tailored solutions to address complex challenges, driving progress across diverse industries."
      />
      <meta property="twitter:image" content={metaImage} />

      <link rel="icon" href={Logo} type="image/png"></link>
    </>
  );
}
