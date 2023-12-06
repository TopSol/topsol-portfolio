import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import InfoSection from "../../../components/infoSection";
import Footer from "../../../components/footerSection";
import HeroSection from "../component/HeroSection";
import { ToggleBar } from "../../../components/bar";
import WorkFlow from "../component/WorkFlow";
import Tecnology from "../component/Tecnology";
import SmallFooter from "../../../components/smallFooter";
import { collection, doc, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { PulseLoader } from "react-spinners";

export default function ServiceDetails(pageContext) {
  const [portFolios, setPortFolios] = useState([]);
  const [loader, setLoader] = useState(false);
  const { slug } = pageContext.params;

  const fetchPortFolios = async () => {
    try {
      setLoader(true);

      const portfolioCollection = collection(db, "services");
      let portfolioQuery = query(portfolioCollection, orderBy("createdAt"));
      const portfolioSnapshot = await getDocs(portfolioQuery);
      const portfolioData = portfolioSnapshot.docs.map((doc) => doc.data());
      const filteredPortfolios = slug
        ? portfolioData.filter((portfolio) => portfolio.name === slug)
        : portfolioData;
      setPortFolios(filteredPortfolios);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.error("Error fetching portfolios:", error);
    }
  };

  useEffect(() => {
    fetchPortFolios();
  }, [slug]);

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
            servicedata={portFolios[0]}
          />
          <InfoSection
            heading={portFolios[0]?.heading}
            mainHeading={portFolios[0]?.infoHeading}
            initialText={portFolios[0]?.infoDesc}
            image={portFolios[0]?.infoImage}
          />
          <WorkFlow workFlowData={portFolios[0]?.paragraph} />
          <Tecnology servicedata={portFolios[0]?.tecnology} />
          <div className="mb-[69px]">
            <SmallFooter />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
