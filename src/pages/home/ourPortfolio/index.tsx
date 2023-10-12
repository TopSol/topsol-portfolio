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
import { portfolioData } from "./data";

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
    <div className="md:px-4 mt-[126px] flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="">
          <h1 className="font-extrabold text-black font-montserrat text-[26px] md:text-34[px] lg:text-4xl text-center">
            Our Portfolio
          </h1>
        </div>
        <LineAnimation
          width="178px"
          height="7px"
          backgroundColor="#00B8F1"
          marginTop="18px"
        />
      </div>
      <div className=" md:mt-[53px]   grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-x-[30px]  ">
        {portfolioData?.map((item: any, index: any) => (
          // <Link to={`/portfolio?id=${item.id}`} key={index}></Link>
          <Link to={"/portfolio"}>
            <div
              key={index}
              className="rounded mt-[28px]  group hover:origin-left hover:scale-x-105 hover:duration-600 hover:border-white
              border overflow-hidden w-[300px]  hover:from-white hover:to-white  group-hover:duration-700  bg-gradient-to-b 
              from-[#00B8F1] to-[#FFFFFF] border-[#00B8F1] "
            >
              <div className="  ">
                <div className="flex flex-col items-center ">
                  <img
                    src={item.image}
                    style={{ transition: "all .50s ease " }}
                    className="  my-[66px] group-hover:transition group-hover:duration-500 group-hover:scale-110
                      group-hover:ease-in-out w-[287px] h-[190px]"
                    alt={`Portfolio ${index}`}
                  />
                </div>
                <div
                  className=" group-hover:bg-[#00B8F1] text-[21px]  bg-white font-bold pt-[24px] pb-[28px]
                 text-center group-hover:duration-700  group-hover:text-white"
                >
                  <h1>{item.title}</h1>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center items-center">
        <Link to={"/portfolio"}>
          <button
            className=" w-[180px] py-[15px] mt-[73px] text-[20px] font-semibold group flex text-center 
            items-center justify-center rounded bg-[#00B8F1] text-white hover:scale-x-125 hover:pl-4 m hover:duration-500
             transform origin-left transition-transform duration-500 ease-in-outy"
          >
            <div className=" group-hover:scale-x-[.8] ">View more</div>

            <svg
              className="w-4 h-4 hidden group-hover:inline"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </Link>
      </div>

      <div className="lg:block ml-auto mr-20  hidden">
        <img src={dot1} alt="Dot" />
      </div>
    </div>
  );
}

export default OurPortfolio;
