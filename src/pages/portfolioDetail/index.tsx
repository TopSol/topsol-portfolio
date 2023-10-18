import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import SmallFooter from "../../components/smallFooter";
import Footer from "../../components/footerSection";
import Hero from "./component/Hero";
import PortfolioDetailBody from "./component/portfolioDetailBody";
import { db } from "../../utils/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { PulseLoader } from "react-spinners";
import { useLocation } from "@reach/router";

export default function index() {
  const [detail, setDetail] = useState({});
  const [loader, setLoader] = useState(false);

  const location = useLocation();

  const id = new URLSearchParams(location.search).get("id");

  const fetchPortfolioItem = async () => {
    try {
      setLoader(true);
      const portfolioItemRef = doc(collection(db, "portFolio"), id);
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
      <Navbar />
      {loader ? (
        <div className="flex justify-center h-[500px] items-center">
          <PulseLoader color="#8E8E8E" size={18} />
        </div>
      ) : (
        <div>
          <Hero data={detail} />
          <PortfolioDetailBody data={detail} />
        </div>
      )}
      <SmallFooter />
      <Footer />
    </div>
  );
}
