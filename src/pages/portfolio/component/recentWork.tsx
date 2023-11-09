// @ts-nocheck
import React, { useEffect, useState } from "react";
import { db } from "../../../utils/firebase";
import data from "../../../staticData/portfolioData";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from "firebase/firestore";
import PortfolioCard from "../../../components/portfolioCard";
import PrimaryBtn from "../../../components/PrimaryBtn";
import { Link } from "gatsby";
import LineAnimation from "../../../components/LineAnimation";
import { PulseLoader } from "react-spinners";

export default function RecentWork() {
  const [portFolios, setPortFolios] = useState([]);
  const [loader, setLoader] = useState(false);
  const [startAfterDoc, setStartAfterDoc] = useState(null);
  const [isNextPage, setIsNextPage] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 15;

  const hasNextPage = currentIndex + itemsPerPage < portFolios.length;
  const hasPreviousPage = currentIndex > 0;

  const fetchPortFolios = async (start) => {
    try {
      setLoader(true);
      const portfolioCollection = collection(db, "portFolio");
      let portfolioQuery = query(
        portfolioCollection,
        orderBy("createdAt"),
        limit(itemsPerPage)
      );

      if (start) {
        portfolioQuery = query(
          portfolioCollection,
          orderBy("createdAt"),
          startAfter(start),
          limit(itemsPerPage)
        );
      }

      const portfolioSnapshot = await getDocs(portfolioQuery);
      const portfolioData = portfolioSnapshot.docs.map((doc) => doc.data());

      if (portfolioData?.length) {
        if (start) {
          setPortFolios((prevData) => [...prevData, ...portfolioData]);
          setStartAfterDoc(portfolioData[portfolioData.length - 1].createdAt);
          setCurrentIndex(currentIndex + itemsPerPage);
        } else {
          setPortFolios(portfolioData);
          setStartAfterDoc(portfolioData[portfolioData.length - 1].createdAt);
        }
      }

      if (portfolioSnapshot.size < itemsPerPage) {
        setIsNextPage(false);
      }

      setLoader(false);
    } catch (error) {
      setLoader(false);
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchPortFolios(null);
  }, [selectedCategory]);

  const scrollToTop = () => {
    // if ("scrollBehavior" in document.documentElement.style) {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    // } else {
    //   document.documentElement.scrollTop = 0;
    //   document.body.scrollTop = 0;
    // }
  };

  const handleNextPage = () => {
    scrollToTop();
    if (hasNextPage) {
      setCurrentIndex(currentIndex + itemsPerPage);
    } else {
      fetchPortFolios(startAfterDoc);
    }
  };

  const handlePreviousPage = () => {
    scrollToTop();
    if (hasPreviousPage) {
      setCurrentIndex(currentIndex - itemsPerPage);
      setIsNextPage(true);
    }
  };

  return (
    <>
      <div className="flex mt-10 md:mt-[120px] flex-col md:flex-row  md:w-[80%] md:mx-auto md:justify-between items-center justify-center">
        <div className="flex  flex-col items-center md:items-start ">
          <div className="">
            <h1 className="font-extrabold text-textColors text-center md:text-left uppercase font-urbanist text-3xl md:text-3xl lg:text-4xl  ">
              LATEST <span className="text-primary">PROJECTS</span>
            </h1>
          </div>
          <LineAnimation
            width="178px"
            height="7px"
            backgroundColor="#00B8F1"
            marginTop="18px"
          />
        </div>
        <div className=" mt-6 mx-1 md:mt-0 flex flex-row lg:space-x-4 space-x-0">
          {data.map((item, index) => (
            <div
              className="    "
              key={index}
              onClick={() => {
                setSelectedCategory(item.value);
              }}
            >
              <PrimaryBtn
                text={item.name}
                additionalClasses={` mt-4 md:mt-0 uppercase   lg:text-[18px] text-[10px] rounded-[8px] px-[10px]   md:px-[26px] py-0 
              md:mx-0 font-semibold hover:bg-[#F5F6F7] font-montserrat ${selectedCategory === item.value
                    ? "bg-[#F5F6F7] text-black"
                    : "bg-transparent text-[#7B848B]"
                  }`}
              />
            </div>
          ))}
        </div>
      </div>
      {loader ? (
        <div className="flex justify-center h-[500px] items-center">
          <PulseLoader color="#8E8E8E" size={18} />
        </div>
      ) : (
        portFolios
          .filter((item) =>
            selectedCategory === "All"
              ? true
              : item.category === selectedCategory
          )
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((item, index) => (
            <Link to={`/portfolioDetail?id=${item.id}`} key={index}>
              <div className=" mt-10 md:mt-[100px]">
                <PortfolioCard
                  data={item}
                  index={index}
                />
              </div>
            </Link>
          ))
      )}

      <div className="flex justify-center mt-16">
        <div
          className={`font-figtree font-light  mr-5 justify-center items-center  rounded-[5px] flex flex-row ${!hasPreviousPage
            ? "opacity-50 cursor-pointer"
            : "cursor-pointer hover:opacity-50"
            }`}
          onClick={handlePreviousPage}
          disabled={!hasPreviousPage}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
            <path d="M33 26C33.5523 26 34 25.5523 34 25C34 24.4477 33.5523 24 33 24V26ZM15.2929 24.2929C14.9024 24.6834 14.9024 25.3166 15.2929 25.7071L21.6569 32.0711C22.0474 32.4616 22.6805 32.4616 23.0711 32.0711C23.4616 31.6805 23.4616 31.0474 23.0711 30.6569L17.4142 25L23.0711 19.3431C23.4616 18.9526 23.4616 18.3195 23.0711 17.9289C22.6805 17.5384 22.0474 17.5384 21.6569 17.9289L15.2929 24.2929ZM33 24H16V26H33V24Z" fill="#00B8F1" />
            <rect x="0.5" y="0.5" width="49" height="49" rx="4.5" stroke="#00B8F1" />
          </svg>
        </div>
        <div
          className={`bg-primary w-[190px] font-figtree font-light justify-center items-center  rounded-[5px] flex flex-row ${!startAfterDoc || !isNextPage
            ? "opacity-50 cursor-pointer"
            : "cursor-pointer hover:opacity-50"
            }`}
          onClick={handleNextPage}
          disabled={!startAfterDoc || !isNextPage}
        >
          <p className="text-white text-[18px] font-figtree font-medium mr-2">Next page</p>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
            <path d="M2.45207 11.6698L8.66528 4.92997L8.67333 10.3977C8.67422 11.0461 9.20069 11.571 9.84914 11.57C10.1733 11.5695 10.4667 11.4377 10.6789 11.2249C10.891 11.0121 11.022 10.7183 11.0215 10.3941L11.0092 2.09199C11.0083 1.44359 10.4819 0.918674 9.83341 0.919629L1.53126 0.931851C0.882914 0.932806 0.357996 1.45927 0.358895 2.10767C0.359794 2.75607 0.886261 3.28099 1.53471 3.28003L7.0024 3.27198L0.789192 10.0119C0.331366 10.471 0.332461 11.2145 0.791637 11.6723C1.25081 12.1301 1.99424 12.129 2.45207 11.6698Z" fill="white" />
          </svg>
        </div>
      </div>
    </>
  );
}
