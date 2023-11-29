import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import InfoSection from "../../../components/infoSection";
import Footer from "../../../components/footerSection";
import HeroSection from "../component/HeroSection";
import { ToggleBar } from "../../../components/bar";
import WorkFlow from "../component/WorkFlow";
import Tecnology from "../component/Tecnology";
import RatingSection from "../../home/ratingSection/index";
import SmallFooter from "../../../components/smallFooter";
import { useLocation } from "@reach/router";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { PulseLoader } from "react-spinners";

export default function ServiceDetails() {

  const [detail, setDetail] = useState({});
  const [loader, setLoader] = useState(false);

  const location = useLocation();

  const id = new URLSearchParams(location.search).get("id");

  const fetchPortfolioItem = async () => {
    try {
      setLoader(true);
      const portfolioItemRef = doc(collection(db, "services"), id);
      const portfolioItemDoc = await getDoc(portfolioItemRef);

      if (portfolioItemDoc.exists()) {
        setDetail(portfolioItemDoc.data());
      } else {
        console.error("Portfolio item not found.");
      }
      setLoader(false);
    } catch (error) {
      console.error("Error fetching portfolio item:", error);
      setLoader(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPortfolioItem();
    }
  }, [id]);
  return (
    <div>
      <div>
        <Navbar />
        <ToggleBar />
      </div>
      {loader ? (
        <div className="flex justify-center h-[500px] items-center">
          <PulseLoader color="#8E8E8E" size={18} />
        </div>
      ) : (
        <div>

          <HeroSection
            servicedata={detail}
          />
        </div>
      )}
      {/* <InfoSection
        heading={state?.service?.heading}
        mainHeading={state?.service?.details?.mainHeading}
        initialText={state?.service?.details?.initialText}
        image={state?.service?.details?.image}
      />
      <WorkFlow servicedata={state?.service} />
      <Tecnology servicedata={state?.service} /> */}
      {/* <RatingSection /> */}
      <div className="mb-[69px]">
        <SmallFooter />
      </div>
      {/* <ReadyToOutshine servicedata={state?.service} />
      {state?.service?.showProjects && <ProjectSection />} */}
      <Footer />
    </div>
  );
}
