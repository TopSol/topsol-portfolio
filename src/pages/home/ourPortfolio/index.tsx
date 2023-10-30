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
    <div className=" w-[90%] mx-auto  flex flex-col mt-[50px] ">
      <div className="flex flex-col items-center md:items-start ">
        <div className="">
          <h1 className="font-extrabold text-black font-urbanist uppercase text-[26px] md:text-34[px] lg:text-4xl md:text-left text-center">
            Our <span className="text-primary"> Portfolio </span>
          </h1>
        </div>
        <LineAnimation
          width="178px"
          height="7px"
          backgroundColor="#00B8F1"
          marginTop="18px"
        />
        <p className="mt-[50px] font-figtree text-[20px] font-light md:w-[60%] w-[100%] text-center md:text-left">Explore our digital creations and innovative software solutions that empower businesses worldwide</p>
      </div>
      <div className=" md:mt-[53px]  w-[100%] grid  md:grid-cols-2  xl:grid-cols-4  grid-cols-1  md:gap-x-4 ">
        {portfolioData?.map((item: any, index: any) => (
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
                <p className="text-[#697484] text-[12px] leading-[16px]">UI Design / Brand Identity</p>
                <h1 className="font-bold text-[#132238] leading-[32px] text-[18px] mt-2">{item.title}</h1>
                <p className="text-[#697484] text-[10px] leading-[16px]  mt-2">{item?.doc?.slice(0, 90)}...</p>
                <Link to={`/portfolioDetail?id=${item.id}`} key={index}>
                  <button className="flex flex-row mt-4 text-primary text-[16px] leading-[24px] font-semibold">
                    View Case Study
                    <div className="m-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                        <path d="M1.37848 15.1549L0 13.566L9.45242 2.67094H0.984627V0.401123H12.8002V14.02H10.8309V4.2598L1.37848 15.1549Z" fill="#00B8F1" />
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to={"/portfolio"}>
          <button
            className=" md:w-[300px] w-[250px] py-[15px] mt-[73px] text-[20px] font-semibold group flex text-center 
            items-center justify-center rounded bg-[#00B8F1] text-white hover:scale-x-125 hover:pl-4 m hover:duration-500
             transform origin-left transition-transform duration-500 ease-in-outy"
          >
            <div className="text-[18px] font-figtree mr-2 ">More Projects</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
              <path d="M2.45207 11.6698L8.66528 4.92997L8.67333 10.3977C8.67422 11.0461 9.20069 11.571 9.84914 11.57C10.1733 11.5695 10.4667 11.4377 10.6789 11.2249C10.891 11.0121 11.022 10.7183 11.0215 10.3941L11.0092 2.09199C11.0083 1.44359 10.4819 0.918674 9.83341 0.919629L1.53126 0.931851C0.882914 0.932806 0.357996 1.45927 0.358895 2.10767C0.359794 2.75607 0.886261 3.28099 1.53471 3.28003L7.0024 3.27198L0.789192 10.0119C0.331366 10.471 0.332461 11.2145 0.791637 11.6723C1.25081 12.1301 1.99424 12.129 2.45207 11.6698Z" fill="white" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OurPortfolio;
