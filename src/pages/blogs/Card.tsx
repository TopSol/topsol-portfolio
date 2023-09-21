import React, { useEffect, useState } from "react";
import PrimaryBtn from "../../components/PrimaryBtn";
import { btnData } from "./data";
import { Link } from "gatsby";
import { PulseLoader } from 'react-spinners';
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  startAfter,
} from "firebase/firestore";
import { db } from "../../utils/firebase";

export default function Card() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogs, setBlogs] = useState([]);
  const [loader, setLoader] = useState(false);
  const [startAfterDoc, setStartAfterDoc] = useState(null);
  const [isNextPage, setIsNextPage] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5;

  const hasNextPage = currentIndex + itemsPerPage < blogs.length;
  const hasPreviousPage = currentIndex > 0;

  const fetchPortFolios = async (start: any) => {
    try {
      setLoader(true);
      const blogCollection = collection(db, "blogs");
      let portfolioQuery = query(
        blogCollection,
        orderBy("createdAt"),
        limit(itemsPerPage)
      );

      if (start) {
        portfolioQuery = query(
          blogCollection,
          orderBy("createdAt"),
          startAfter(start),
          limit(itemsPerPage)
        );
      }

      const blogSnapshot = await getDocs(portfolioQuery);
      const blogData = blogSnapshot.docs.map((doc) => doc.data());

      if (blogData?.length) {
        if (start) {
          setBlogs((prevData) => [...prevData, ...blogData]);
          setStartAfterDoc(blogData[blogData.length - 1].createdAt);
          setCurrentIndex(currentIndex + itemsPerPage);
        } else {
          setBlogs(blogData);
          setStartAfterDoc(blogData[blogData.length - 1].createdAt);
        }
      }

      if (blogSnapshot.size < itemsPerPage) {
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
    <div>
      <div className=" lg:container  justify-center mx-auto">
        <div className=" md:container grid grid-col gap-3 items-center mt-[42px] md:mt-[76px] md:grid-cols-2 lg:grid-cols-4   md:mx-auto ">
          {btnData.map((item: any, index) => {
            return (
              <div
                className={`mx-5 md:mx-5 flex rounded justify-around ${selectedCategory === item.name ? "bg-primary" : ""
                  }`}
                key={index}
                onClick={() => {
                  console.log("hello im am hear -----------------");
                  setSelectedCategory(item.name);
                }}
              >
                <PrimaryBtn
                  text={item.name}
                  additionalClasses="bg-primary  px-4 text-[20px] w-full 
                   md:mx-0 hover:bg-primary-lighter text-white font-semibold rounded"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="md:mt-[99px] md:container md:mx-auto   mt-[42px] space-y-[39px] md:space-y-[123px]">
        {loader ? (
          <div className="flex justify-center h-[500px] items-center">
            <PulseLoader color="#8E8E8E" size={18} />
          </div>
        ) : (
          blogs.map((item, index) => (
            <div
              className={` ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
                } px-5   lg:container  md:mx-auto  flex flex-col md:flex-row justify-center `}
            >
              <div
                className={` md:w-[50%] xl:w-[55%] w-[100%] flex ${index % 2 == 0
                  ? "justify-start md:mr-[50px] xl:mr-0"
                  : "justify-end  md:ml-[50px] xl:ml-0"
                  }   `}
              >

                <img className="w-[600px] h-[232px] md:h-[509px]  object-cover rounded-lg" src={item.image} alt="" />

              </div>
              <div className="md:w-[50%] xl:w-[48%] w-[100%] mt-[14px] md:mt-0  ">
                <div className="flex ">
                  <div className="flex justify-center items-center">
                    <div
                      className="before:content-[''] before:block before:h-[5px] 
                       before:bg-[#00B8F1] before:rounded-3xl
                      before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
                      before:transition before:ease-in-out before:duration-1000
                       w-[49px] pr-[8px] "
                    ></div>
                  </div>
                  <h1 className=" md:text-[18px]   font-semibold lg:text-[25px] xl:text-[35px]  text-primary">
                    {item.heading}
                  </h1>
                </div>

                <p className=" break-words text-justify mt-[14px] lg:text-[20px] font-medium xl:text-[22px] text-light_Black ">
                  {item.description}
                </p>

                <Link to={`/blogs/blogDetail?id=${item.id}`}>
                  <PrimaryBtn
                    text="Read More"
                    additionalClasses="bg-primary mt-[14px] text-[16px] md:px-[79px] px-10 lg:text-[26px] xl:mt-[14px] font-semibold hover:bg-primary-lighter text-white "
                  />
                </Link>
              </div>
            </div>
          )))}
      </div>
      <div className="flex justify-around mt-8">
        <button
          className={`bg-primary text-white  py-2 rounded-md text-[16px]  w-[120px]  font-semibold ${!hasPreviousPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
          onClick={handlePreviousPage}
          disabled={!hasPreviousPage}
        >
          Previous
        </button>
        <button
          className={`bg-primary text-white py-2  rounded-md text-center text-[16px] w-[120px]   font-semibold   ${!startAfterDoc || !isNextPage ? "opacity-50 cursor-not-allowed" : ""
            }`}
          onClick={handleNextPage}
          disabled={!startAfterDoc || !isNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
