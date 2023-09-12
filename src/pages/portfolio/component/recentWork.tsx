// @ts-nocheck
import React, { useEffect, useState } from "react";
import { data } from "../data";
import { db } from "../../../utils/firebase";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
  endBefore,
} from "firebase/firestore";
import PortfolioCard from "../../../components/portfolioCard";
import PrimaryBtn from "../../../components/PrimaryBtn";
import { Link } from "gatsby";

export default function RecentWork() {
  const [portFolios, setPortFolios] = useState([]);
  const [startAfterDoc, setStartAfterDoc] = useState(null);
  const [endBeforeDoc, setEndBeforeDoc] = useState(null);
  const [isNextPage, setIsNextPage] = useState(true);
  const [isPreviousPage, setIsPreviousPage] = useState(false);

  const itemsPerPage = 2;

  const fetchPortFolios = async (start, end) => {
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
    } else if (end) {
      portfolioQuery = query(
        portfolioCollection,
        orderBy("createdAt"),
        endBefore(end),
        limit(itemsPerPage)
      );
    }

    const portfolioSnapshot = await getDocs(portfolioQuery);
    const portfolioData = portfolioSnapshot.docs.map((doc) => doc.data());

    if (portfolioData.length > 0) {
      setPortFolios(portfolioData);
      setStartAfterDoc(portfolioData[portfolioData.length - 1].createdAt);
      setEndBeforeDoc(portfolioData[0].createdAt);
      if (start) {
        setIsPreviousPage(true);
      }
      if (end) {
        setIsNextPage(true);
      }
    } else {
      if (start) {
        setIsNextPage(false);
      }
      if (end) {
        setIsPreviousPage(false);
      }
    }
  };

  useEffect(() => {
    fetchPortFolios(null, null);
  }, []);

  const handleNextPage = () => {
    fetchPortFolios(startAfterDoc, null);
  };

  const handlePreviousPage = () => {
    fetchPortFolios(null, endBeforeDoc);
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
        {data.map((item: any, index) => {
          return (
            <div
              className="mx-5 md:mx-0 flex justify-between   "
              key={index}
              onClick={() => {
                console.log("hello im am hear -----------------");
                setSetWorkers(item.name);
              }}
            >
              <PrimaryBtn
                text={item.name}
                additionalClasses="bg-primary mt-4 md:mt-0 px-4 text-[22px] w-full 
               md:mx-0 font-semibold hover:bg-primary text-white font-montserrat "
              />
            </div>
          );
        })}
      </div>
      {portFolios.map((item, index) => {
        return (
          <Link to={`/portfolioDetail?id=${item.id}`} key={index}>
            <div className="mt-[100px]">
              <PortfolioCard data={item} index={index} />
            </div>
          </Link>
        );
      })}

      <div className="flex justify-around mt-4">
        <button
          className={`bg-primary text-white px-3 py-2 rounded-md font-medium ${
            !endBeforeDoc || !isPreviousPage
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          onClick={handlePreviousPage}
          disabled={!endBeforeDoc || !isPreviousPage}
        >
          Previous
        </button>
        <button
          className={`bg-primary text-white px-3 py-2 rounded-md font-medium ${
            !startAfterDoc || !isNextPage ? "opacity-50 cursor-not-allowed" : ""
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
