// @ts-nocheck
import React, { useEffect, useState } from "react";
import { db } from "../../../utils/firebase";
import { data } from "../data";
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

export default function RecentWork() {
  const [portFolios, setPortFolios] = useState([]);
  const [loader, setLoader] = useState(false);
  const [startAfterDoc, setStartAfterDoc] = useState(null);
  const [isNextPage, setIsNextPage] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

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
  }, []);

  const scrollToTop = () => {
    if ("scrollBehavior" in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
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
      <div className="flex  flex-col justify-center items-center">
        <div className="">
          <h1 className="font-extrabold text-textColors font-montserrat text-3xl md:text-3xl lg:text-4xl mt-[120px] text-center">
            Our Recent work
          </h1>
        </div>
        <div
          className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
          before:bottom-0 before:left-0 before:bg-[#00B8F1] before:rounded-3xl
          before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
          before:transition before:ease-in-out before:duration-1000 mr-44 mt-4"
        ></div>
      </div>
      <div className="grid grid-col gap-3 items-center mt-[100px] md:grid-cols-3 lg:grid-cols-4  md:container md:mx-auto">
        {data.map((item, index) => (
          <div
            className="mx-5 md:mx-0 flex justify-between   "
            key={index}
            onClick={() => {
              console.log("hello im am hear -----------------");
              // setSetWorkers(item.name); // Commented out as it seems unused
            }}
          >
            <PrimaryBtn
              text={item.name}
              additionalClasses="bg-primary mt-4 md:mt-0 px-4 text-[22px] w-full 
              md:mx-0 font-semibold hover:bg-primary text-white font-montserrat "
            />
          </div>
        ))}
      </div>
      {loader ? (
        <div className="text-center">Loading...</div>
      ) : (
        portFolios
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((item, index) => (
            <Link to={`/portfolioDetail?id=${item.id}`} key={index}>
              <div className="mt-[100px]">
                <PortfolioCard data={item} index={index} textColor='text-black' subTitleColor='text-primary' lineColor='bg-primary' />
              </div>
            </Link>
          ))
      )}

      <div className="flex justify-around mt-4">
        <button
          className={`bg-primary text-white px-3 py-2 rounded-md font-medium ${!hasPreviousPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
          onClick={handlePreviousPage}
          disabled={!hasPreviousPage}
        >
          Previous
        </button>
        <button
          className={`bg-primary text-white px-3 py-2 rounded-md font-medium ${!startAfterDoc || !isNextPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
          onClick={handleNextPage}
          disabled={!startAfterDoc || !isNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
