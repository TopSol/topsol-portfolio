import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import SmallFooter from "../../../components/smallFooter";
import Footer from "../../../components/footerSection";
import Hero from "../component/HeroDetails";
import PortfolioDetailBody from "../component/portfolioDetailBody";
import { db } from "../../../utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { PulseLoader } from "react-spinners";
import { ToggleBar } from "../../../components/bar";
import metaImage from "../../../images/main-logo2.png";
import Logo from "../../../images/favicon-01.png";

export default function index(pageContext) {
  const [detail, setDetail] = useState({});
  const [loader, setLoader] = useState(false);

  const { slug } = pageContext?.params;

  const fetchPortfolioItems = async () => {
    try {
      setLoader(true);
      const portfolioItemsRef = collection(db, "portFolio");
      const portfolioItemsSnapshot = await getDocs(portfolioItemsRef);

      const items = [];
      portfolioItemsSnapshot.forEach((doc) => {
        if (doc.exists()) {
          items.push(doc.data());
        } else {
          console.error("Portfolio item not found.");
        }
      });
      const filteredItems = items.filter((item) => item.name === slug);
      setDetail(filteredItems);
    } catch (error) {
      console.error("Error fetching portfolio items:", error);
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    fetchPortfolioItems();
  }, [slug]);

  console.log("slug==============", slug);

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
          <Hero data={detail[0]} />
          <PortfolioDetailBody data={detail[0]} />
          <div className="mb-[70px]">
            <SmallFooter />
          </div>
        </div>
      )}

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
