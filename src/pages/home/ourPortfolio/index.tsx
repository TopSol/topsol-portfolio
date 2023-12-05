import React, { useEffect, useState } from "react";
import dot1 from "../../../images/dot1.png";
import { Link } from "gatsby";
import LineAnimation from "../../../components/LineAnimation";
import "./style.css";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../utils/firebase";
import portfolioData from "../../../staticData/outPortfolioData";
import PrimaryBtn from "../../../components/PrimaryBtn";

function OurPortfolio() {
  const [visibleCards, setVisibleCards] = useState<any>([]);

  const fetchPortFolios = async () => {
    try {
      const docRef = doc(collection(db, "settings"), "appSettings");
      const settings = (await getDoc(docRef)).data();
      const getIds = settings?.homePagePortfolios;

      const citiesRef = collection(db, "portFolio");
      console.log("cities", citiesRef);
      const q = query(citiesRef);
      // , where("id", "in", getIds)
      const querySnapshot = await getDocs(q);

      const fetchedDocuments = querySnapshot.docs.map((doc) => doc.data());
      const cardData = fetchedDocuments.splice(0, 4);
      setVisibleCards(cardData);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchPortFolios();
  }, []);
  return (
    <div className=" w-[80%] mx-auto  flex flex-col mt-[50px] ">
      <div className="flex flex-col items-center  ">
        <div className="flex items-start justify-start">
          <h1 className="font-extrabold text-black font-urbanist uppercase text-[26px] md:text-[34px] lg:text-4xl  text-center">
            Our <span className="text-primary font-urbanist font-extrabold"> Portfolio </span>
          </h1>
        </div>
        <LineAnimation
          width="178px"
          height="7px"
          backgroundColor="#00B8F1"
          marginTop="18px"
        />
        <p className="mt-[50px] font-figtree text-[20px] font-light md:w-[60%] w-[100%] text-center ">Explore our digital creations and innovative software solutions that empower businesses worldwide</p>
      </div>
      <div className=" md:mt-[53px]   w-[100%] grid  md:grid-cols-2  xl:grid-cols-4  grid-cols-1  md:gap-x-4 ">
        {portfolioData?.map((item: any, index: any) => (
          <Link to={`/portfolio/${item.name}`} key={item.name}>
            <div
              key={index}
              className={`rounded-[16px] mt-[28px]  
              overflow-hidden hover:scale-[1.02]`}
              style={{ background: item.bg, transition: "all .50s ease " }}
            >
              <div className="  ">
                <div className="flex flex-col items-center bg-white m-[15px] md:m-[21px]  overflow-hidden rounded-[19px] ">
                  <img
                    src={item.image}
                    className="  my-[20px] 
                    md:w-[172px] md:h-[148px] w-[172px] h-[148px] "
                    alt={`Portfolio ${index}`}
                  />
                </div>
                <div
                  className=" md:mx-[21px] mx-[15px]  pb-[28px]">
                  <p className="text-[#697484] text-[12px] font-figtree font-light  leading-[16px]">{item.category}</p>
                  <h1 className="font-bold text-[#132238] leading-[32px] text-[18px] mt-2">{item.title}</h1>
                  <p className="text-[#697484] text-[12px] font-figtree font-light leading-[16px]  mt-2">{item?.doc?.slice(0, 90)}...</p>
                  <button className="flex flex-row mt-4 text-primary text-[16px] leading-[24px] font-semibold">
                    View Case Study
                    <div className="m-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                        <path d="M1.37848 15.1549L0 13.566L9.45242 2.67094H0.984627V0.401123H12.8002V14.02H10.8309V4.2598L1.37848 15.1549Z" fill="#00B8F1" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex  justify-center ">
        <Link to={"/portfolio"}>
          <PrimaryBtn
            text="More Projects"
            icon={true}
            additionalClasses="text-primary flex items-center font-figtree py-[16px] sm:px-[68px] px-[68px] bg-none text-[18px] mt-[68px] text-white rounded-[6px] "
          />
        </Link>
      </div>
    </div>
  );
}

export default OurPortfolio;
