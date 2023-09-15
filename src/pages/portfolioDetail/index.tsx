import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import SmallFooter from "../../components/smallFooter";
import Footer from "../../components/footerSection";
import Hero from "./component/Hero";
import PortfolioDetailBody from "./component/portfolioDetailBody";
import { db } from "../../utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";

export default function index() {
  const [detail, setDetail] = useState({});

  const url = window.location.href;

  const urlObj = new URL(url);

  const id = urlObj.searchParams.get("id");

  const fetchPortfolioItem = async () => {
    try {
      const portfolioItemRef = doc(collection(db, "portFolio"), id);
      const portfolioItemDoc = await getDoc(portfolioItemRef);

      if (portfolioItemDoc.exists()) {
        setDetail(portfolioItemDoc.data());
      } else {
        console.error("Portfolio item not found.");
      }
    } catch (error) {
      console.error("Error fetching portfolio item:", error);
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
      <Hero data={detail} />
      <PortfolioDetailBody data={detail} />
      <SmallFooter />
      <Footer />
    </div>
  );
}
