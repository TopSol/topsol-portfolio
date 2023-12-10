import React, { useEffect, useState } from "react";
import ServicesCards from "../servisesCards/ServicesCards";
import cards, { imgCards } from "../../../staticData/servisesOffersData";
import { Link } from "gatsby";
import LineAnimation from "../../../components/LineAnimation";
import PrimaryBtn from "../../../components/PrimaryBtn";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { useLocation } from "@reach/router";

function ServicesOffers({ page, showPrimaryBtn }) {
  const [portFolios, setPortFolios] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const location = useLocation();

  const id = new URLSearchParams(location.search).get("name");

  const fetchPortFolios = async () => {
    try {
      setLoader(true);

      const portfolioCollection = collection(db, "services");
      let portfolioQuery = query(portfolioCollection, orderBy("createdAt"));
      const portfolioSnapshot = await getDocs(portfolioQuery);
      const portfolioData = portfolioSnapshot.docs.map((doc) => doc.data());

      setPortFolios(portfolioData);
      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.error("Error fetching portfolios:", error);
    }
  };

  useEffect(() => {
    fetchPortFolios();
  }, [selectedCategory]);


  return (
    <div className={`   ${page === 'services' ? "py-0" : "py-[50px]"}  relative flex flex-col justify-center items-center px-2`}
      style={{
        background: page === 'services' ? "none" : "linear-gradient(#0B234C, #00B8F1)"
      }}
    >
      <div className=" flex flex-col md:justify-start justify-center items-center  ">
        <h1 className="font-extrabold text-white  uppercase font-urbanist text-[26px] md:text-[34px] lg:text-4xl text-center md:text-left">
          Explore our <span className="text-primary font-extrabold   font-urbanist ">services</span>
        </h1>
        <LineAnimation
          width="178px"
          height="7px"
          backgroundColor="#FFFFFF"
          marginTop="22px"
        />
      </div>

      <div className="grid mt-[36px] md:mt-[85px] gap-x-[27px] gap-y-[48px]  sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        {portFolios?.map((item, index) => (
          <div key={index}>
            <Link to={`/services/${item.name}`} key={item.name}>
              <ServicesCards serviceData={item} index={item.id} />
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-16">
        {showPrimaryBtn && (
          <Link to="/services">
            <PrimaryBtn
              text="All Services"
              icon={true}
              additionalClasses="text-primary flex items-center font-figtree py-[10px] sm:px-[88px] px-[26px] bg-none text-[18px] border-2 border-white text-white rounded-[6px] "
            />
          </Link>
        )}
      </div>
    </div>
  );
}

export default ServicesOffers;
