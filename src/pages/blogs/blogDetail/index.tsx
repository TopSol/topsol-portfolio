import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footerSection";
import Hero from "./components/Hero";
import CommentSection from "./components/CommentSection";
import { db } from "../../../utils/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { PortfolioItem } from "../../../types/interfaceTypes";



export default function Index() {
  const [detail, setDetail] = useState<PortfolioItem | null>(null);

  const url = window.location.href;

  const urlObj = new URL(url);

  const id = urlObj.searchParams.get("id");

  const fetchPortfolioItem = async () => {
    try {
      if (id) {
        const portfolioItemRef = doc(collection(db, "blogs"), id);
        const portfolioItemDoc = await getDoc(portfolioItemRef);

        if (portfolioItemDoc.exists()) {
          setDetail(portfolioItemDoc.data() as PortfolioItem);
        } else {
          console.error("Portfolio item not found.");
        }
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
      {detail && <Hero detail={detail} />}
      {detail && (
        <div dangerouslySetInnerHTML={{ __html: detail.htmlCode || "" }} />
      )}
      <CommentSection />
      <Footer />
    </div>
  );
}
