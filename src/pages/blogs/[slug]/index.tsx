import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footerSection";
import { db } from "../../../utils/firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useLocation, } from "@reach/router";
import { ToggleBar } from "../../../components/bar";


export default function index(pageContext) {
  const [detail, setDetail] = useState<any>({});
  const [loader, setLoader] = useState(false);

  const { slug } = pageContext.params;


  const fetchPortfolioItems = async () => {
    try {
      setLoader(true);
      const portfolioItemsRef = collection(db, "blogs");
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
        <ToggleBar />
        <Navbar />
      </div>
      <div dangerouslySetInnerHTML={{ __html: detail[0]?.htmlCode || "" }} />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
