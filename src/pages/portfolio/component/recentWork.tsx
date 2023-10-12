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
          <h1 className="font-extrabold text-textColors font-montserrat text-3xl md:text-3xl lg:text-4xl mt-10 md:mt-[120px] text-center">
            Our Recent work
          </h1>
        </div>
        <LineAnimation
          width="178px"
          height="7px"
          backgroundColor="#00B8F1"
          marginTop="18px"
        />
      </div>
      <div className="grid grid-col gap-3 items-center mt-10 md:mt-[100px] md:grid-cols-3 lg:grid-cols-4  md:container md:mx-auto">
        {data.map((item, index) => (
          <div
            className="mx-5 md:mx-0 flex justify-between   "
            key={index}
            onClick={() => {
              setSelectedCategory(item.value);
            }}
          >
            <PrimaryBtn
              text={item.name}
              additionalClasses={`bg-primary-light mt-4 md:mt-0 px-4 text-[22px] w-full 
              md:mx-0 font-semibold hover:bg-primary text-white font-montserrat ${
                selectedCategory === item.value
                  ? "active-category"
                  : "bg-primary-light"
              }`}
            />
          </div>
        ))}
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
                  textColor="text-black"
                  subTitleColor="text-primary"
                  lineColor="bg-primary"
                />
              </div>
            </Link>
          ))
      )}

      <div className="flex justify-around mt-16">
        <div
          className={`bg-primary  w-[120px] justify-center items-center py-2 rounded-sm flex flex-row ${
            !hasPreviousPage
              ? "opacity-50 cursor-pointer"
              : "cursor-pointer hover:opacity-50"
          }`}
          onClick={handlePreviousPage}
          disabled={!hasPreviousPage}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5.52183 11.018L10.1417 6.39807C10.404 6.13575 10.7528 5.99133 11.1237 5.99133C11.4946 5.99133 11.8434 6.1358 12.1057 6.39816C12.6471 6.93961 12.6471 7.82058 12.1057 8.36204L8.46769 12L12.1057 15.638C12.6471 16.1795 12.6471 17.0604 12.1056 17.6019C11.8433 17.8642 11.4946 18.0086 11.1237 18.0086C10.7527 18.0086 10.404 17.8641 10.1417 17.6019L5.52183 12.9819C4.98038 12.4405 4.98038 11.5594 5.52183 11.018ZM6.19801 12.3058L10.8179 16.9257C10.8996 17.0074 11.0081 17.0524 11.1237 17.0524C11.2392 17.0524 11.3478 17.0074 11.4295 16.9258C11.5981 16.7571 11.5981 16.4827 11.4295 16.3141L7.45346 12.338C7.26676 12.1513 7.26676 11.8486 7.45346 11.6618L11.4295 7.68586C11.5981 7.51721 11.5981 7.24275 11.4295 7.07415C11.3452 6.98982 11.2344 6.94763 11.1237 6.94763C11.0129 6.94763 10.9022 6.98982 10.8179 7.07415L6.19801 11.6941C6.02935 11.8628 6.02935 12.1372 6.19801 12.3058Z"
              fill="white"
            />
            <path
              d="M10.6038 11.018L15.2238 6.39807C15.4861 6.13575 15.8348 5.99133 16.2057 5.99133C16.5767 5.99133 16.9254 6.1358 17.1877 6.39807C17.7291 6.93952 17.7291 7.82058 17.1877 8.36199L13.5497 12L17.1877 15.6379C17.7291 16.1794 17.7291 17.0604 17.1877 17.6018C16.9254 17.8641 16.5766 18.0085 16.2057 18.0085C15.8348 18.0085 15.4861 17.8641 15.2238 17.6018L10.6038 12.9818C10.0625 12.4405 10.0625 11.5594 10.6038 11.018ZM11.28 12.3057L15.9 16.9256C15.9816 17.0073 16.0902 17.0523 16.2057 17.0523C16.3213 17.0523 16.4298 17.0073 16.5115 16.9256C16.6801 16.757 16.6801 16.4826 16.5115 16.314L12.5355 12.3379C12.3488 12.1512 12.3488 11.8485 12.5355 11.6618L16.5115 7.68572C16.5932 7.60402 16.6382 7.49546 16.6382 7.37991C16.6382 7.26441 16.5932 7.15585 16.5115 7.0741C16.4298 6.99244 16.3212 6.94744 16.2057 6.94744C16.0902 6.94744 15.9817 6.99249 15.9 7.0741L11.28 11.694C11.1114 11.8627 11.1114 12.1371 11.28 12.3057Z"
              fill="white"
            />
          </svg>
          <p className="text-white font-semibold">Previous</p>
        </div>
        <div
          className={`bg-primary w-[120px] justify-center items-center py-2 rounded-sm flex flex-row ${
            !startAfterDoc || !isNextPage
              ? "opacity-50 cursor-pointer"
              : "cursor-pointer hover:opacity-50"
          }`}
          onClick={handleNextPage}
          disabled={!startAfterDoc || !isNextPage}
        >
          <p className="text-white font-semibold">Next</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.4782 11.018L13.8583 6.39807C13.596 6.13575 13.2472 5.99133 12.8763 5.99133C12.5054 5.99133 12.1566 6.1358 11.8943 6.39816C11.3529 6.93961 11.3529 7.82058 11.8943 8.36204L15.5323 12L11.8943 15.638C11.3529 16.1795 11.3529 17.0604 11.8944 17.6019C12.1567 17.8642 12.5054 18.0086 12.8763 18.0086C13.2473 18.0086 13.596 17.8641 13.8583 17.6019L18.4782 12.9819C19.0196 12.4405 19.0196 11.5594 18.4782 11.018ZM17.802 12.3058L13.1821 16.9257C13.1004 17.0074 12.9919 17.0524 12.8763 17.0524C12.7608 17.0524 12.6522 17.0074 12.5705 16.9258C12.4019 16.7571 12.4019 16.4827 12.5705 16.3141L16.5465 12.338C16.7332 12.1513 16.7332 11.8486 16.5465 11.6618L12.5705 7.68586C12.4019 7.51721 12.4019 7.24275 12.5705 7.07415C12.6548 6.98982 12.7656 6.94763 12.8763 6.94763C12.9871 6.94763 13.0978 6.98982 13.1821 7.07415L17.802 11.6941C17.9706 11.8628 17.9706 12.1372 17.802 12.3058Z"
              fill="white"
            />
            <path
              d="M13.3962 11.018L8.77621 6.39807C8.51395 6.13575 8.16515 5.99133 7.79428 5.99133C7.42331 5.99133 7.07456 6.1358 6.81234 6.39807C6.27089 6.93952 6.27089 7.82058 6.81234 8.36199L10.4503 12L6.81234 15.6379C6.27089 16.1794 6.27089 17.0604 6.81234 17.6018C7.07461 17.8641 7.42336 18.0085 7.79428 18.0085C8.16525 18.0085 8.51395 17.8641 8.77621 17.6018L13.3962 12.9818C13.9375 12.4405 13.9375 11.5594 13.3962 11.018ZM12.72 12.3057L8.10004 16.9256C8.01839 17.0073 7.90982 17.0523 7.79428 17.0523C7.67873 17.0523 7.57017 17.0073 7.48851 16.9256C7.3199 16.757 7.3199 16.4826 7.48851 16.314L11.4645 12.3379C11.6512 12.1512 11.6512 11.8485 11.4645 11.6618L7.48851 7.68572C7.40681 7.60402 7.36181 7.49546 7.36181 7.37991C7.36181 7.26441 7.40681 7.15585 7.48851 7.0741C7.57017 6.99244 7.67878 6.94744 7.79428 6.94744C7.90978 6.94744 8.01834 6.99249 8.10004 7.0741L12.72 11.694C12.8886 11.8627 12.8886 12.1371 12.72 12.3057Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
