import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Navbar";
import SmallFooter from "../../../components/smallFooter";
import Footer from "../../../components/footerSection";
import Hero from "../component/HeroDetails";
import PortfolioDetailBody from "../component/portfolioDetailBody";
import { db } from "../../../utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { PulseLoader } from "react-spinners";
import { useLocation } from "@reach/router";
import { ToggleBar } from "../../../components/bar";

export default function index(pageContext) {
  const [detail, setDetail] = useState({});
  const [loader, setLoader] = useState(false);

  const { slug } = pageContext.params;


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
        </div>
      )}
      <div className="mb-[70px]">
        <SmallFooter />
      </div>
      <Footer />
    </div>
  );
}
