import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import SmallFooter from "../../components/smallFooter";
import Footer from "../../components/footerSection";
import PrimaryBtn from "../../components/PrimaryBtn";
import check1 from "../../images/check1.png";
import Hero from "./component/Hero";
import PortfolioDetailBody from "./component/portfolioDetailBody";
import { dataList } from "./data";
import { db } from "../../utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useParams } from "@reach/router";

export default function index() {
  const [detail, setDetail] = useState({});

  const params = useParams();

  const fetchPortfolioItem = async () => {
    try {
      const portfolioItemRef = doc(
        collection(db, "portFolio"),
        "I3fJPL3xbGZn07cAMcIg"
      );
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

  console.log(detail, "asdasdasdasd");

  useEffect(() => {
    // if (id) {
    fetchPortfolioItem();
    // }
  }, []);
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
