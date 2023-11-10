import React, { useEffect, useState } from "react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footerSection";
import Hero from "./components/Hero";
import CommentSection from "./components/CommentSection";
import { db } from "../../../utils/firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { useLocation } from "@reach/router";
import { ToggleBar } from "../../../components/bar";

export default function index() {
  const [detail, setDetail] = useState({});
  const location = useLocation();

  const id = new URLSearchParams(location.search).get("id");

  // let url;

  // useEffect(() => {
  //   url = window.location.href;
  // }, []);

  // const urlObj = new URL(url);

  // const id = urlObj.searchParams.get("id");

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
      <ToggleBar />
      <Hero data={detail} />
      {/* <div className=" md:container md:mx-auto flex"> */}
      <div dangerouslySetInnerHTML={{ __html: detail?.htmlCode || "" }} />
      {/* </div> */}
      <CommentSection />
      <Footer />
    </div>
  );
}
