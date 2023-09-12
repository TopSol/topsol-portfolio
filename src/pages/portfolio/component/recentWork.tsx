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
} from "firebase/firestore";
import PrimaryBtn from "../../../components/PrimaryBtn";
import PortfolioCard from "../../../components/portfolioCard";
import { Link } from "gatsby";

export default function RecentWork() {
  const [selectWorkers, setSetWorkers] = useState("All");
  const [portFolios, setPortFolios] = useState([]);
  const [lastDocument, setLastDocument] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const [totalItems, setTotalItems] = useState(0);

  const fetchPortFolios = async () => {
    const portfolioCollection = collection(db, "portFolio");
    let portfolioQuery = query(
      portfolioCollection,
      orderBy("createdAt"),
      limit(itemsPerPage)
    );

    if (lastDocument && currentPage > 1) {
      portfolioQuery = query(
        portfolioCollection,
        orderBy("createdAt"),
        startAfter(lastDocument),
        limit(itemsPerPage)
      );
    }

    const portfolioSnapshot = await getDocs(portfolioQuery);
    const portfolioData = portfolioSnapshot.docs.map((doc) => doc.data());

    if (portfolioData.length > 0) {
      setLastDocument(portfolioSnapshot.docs[portfolioData.length - 1]);
    }

    setPortFolios(portfolioData);
  };

  const fetchTotalItems = async () => {
    const portfolioCollection = collection(db, "portFolio");
    const totalItemsSnapshot = await getDocs(portfolioCollection);
    setTotalItems(totalItemsSnapshot.size);
  };

  useEffect(() => {
    fetchPortFolios();
    fetchTotalItems();
  }, [currentPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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

      <div className="flex justify-center mt-4">
        <ul className="flex space-x-4">
          {Array.from({ length: Math.ceil(totalItems / itemsPerPage) }).map(
            (_, index) => (
              <li key={index}>
                <button
                  className={`${
                    currentPage === index + 1
                      ? "bg-primary text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  } px-3 py-2 rounded-md font-medium`}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </>
  );
}
