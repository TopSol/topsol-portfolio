import React, { useEffect, useState } from "react";
import AboutUs from "../components/details/AboutUs";
import Designer from "../components/productDesigner/Designer";
import Logo from "../../../images/favicon-01.png";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/footerSection";
import metaImage from "../../../images/main-logo2.png";
import { ToggleBar } from "../../../components/bar";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { PulseLoader } from "react-spinners";

function JobDetail(pageContext) {
  const [portFolios, setPortFolios] = useState([]);
  const [loader, setLoader] = useState(false);
  const { slug } = pageContext.params;

  const fetchPortFolios = async () => {
    try {
      setLoader(true);

      const portfolioCollection = collection(db, "jobPosts");
      let portfolioQuery = query(portfolioCollection, orderBy("postedAt"));
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
          <Designer jobDetails={portFolios[0]} />
          <AboutUs jobDetails={portFolios[0]} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default JobDetail;

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
