import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footerSection";
import { db } from "../../../utils/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useLocation, } from "@reach/router";
import { ToggleBar } from "../../../components/bar";


export default function index() {
  const [detail, setDetail] = useState<any>({});
  const location = useLocation();

  const name = new URLSearchParams(location.search).get("name");
  const id = detail[name];


  const fetchPortfolioItem = async () => {
    try {
      const portfolioItemRef = doc(collection(db, "blogs"), id);
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
      <div>
        <ToggleBar />
        <Navbar />
      </div>
      <div dangerouslySetInnerHTML={{ __html: detail?.htmlCode || "" }} />
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
}
