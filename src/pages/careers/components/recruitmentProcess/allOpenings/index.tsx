import React, { useState, useEffect } from "react";
// @ts-ignore
import { db } from "../../../../../utils/firebase";
import DropDownCards from "../../cards/DropDownCards";
// @ts-ignore
import searchImg from "../../../../../images/search.png";
import { collection, getDocs } from "firebase/firestore";
import { Department, ExperienceLevel, JobType } from "./Data";
import DropDown from "../../../../../components/dropDown/DropDown";
import AnimateHr from "../../../../../components/animatedLine/AnimateHr";
import LineAnimation from "../../../../../components/LineAnimation";
function AllOpenings() {
  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setSetLoading] = useState(false);
  const [visibleCards, setVisibleCards] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSetLoading(true);
        // @ts-ignore
        const data = [];
        const querySnapshot = await getDocs(collection(db, "jobPosts"));
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        // @ts-ignore
        setJobPosts(data);
        setSetLoading(false);
      } catch (error) {
        console.error("Error fetching job posts: ", error);
        setSetLoading(false);
      }
    };
    fetchData();
  }, []);

  const loadMoreCards = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 3);
  };

  return (
    <div className="bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo">
      <div className="md:container md:mx-auto sm:mx-0 mx-[14px] flex justify-center items-center flex-col">
        <div className="flex flex-col items-center justify-center mb-14">
          <h1 className="text-primary-white md:text-[40px] text-3xl text-center font-semibold md:mt-[49px] mt-[52px] ">
            All Openings
          </h1>
          <div className="flex justify-center items-center">
            <LineAnimation
              width="178px"
              height="7px"
              backgroundColor="#FFFFFF"
              marginTop="22px"
            />
          </div>
        </div>
        <div className="w-[95%]  md:mb-[39px]  ">
          <div className="flex  bg-white rounded-lg py-[20px] px-[20px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
            >
              <path
                d="M15.5833 8.5C19.4953 8.5 22.6667 11.6713 22.6667 15.5833M23.6 23.5944L29.75 29.75M26.9167 15.5833C26.9167 21.8426 21.8426 26.9167 15.5833 26.9167C9.3241 26.9167 4.25 21.8426 4.25 15.5833C4.25 9.3241 9.3241 4.25 15.5833 4.25C21.8426 4.25 26.9167 9.3241 26.9167 15.5833Z"
                stroke="#00B8F1"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input
              className=" pl-[24px] mt-1 items-center text-sm text-black outline-none rounded-lg dark:bg-primary-white  dark:placeholder-primary dark:placeholder:text-xl dark:placeholder:font-medium"
              placeholder="Search jobs"
            />
          </div>
        </div>
        <div className="flex md:flex-row md:my-0 mt-[25px] w-[95%] md:mx-auto gap-4 lg:gap-10 flex-col md:mb-[60px] mb-[58px] justify-between ">
          <div className="w-[100%] my-[25px]">
            <DropDown
              buttonTitle="Department"
              data={Department}
              className="w-[100%] h-[75px] "
            />
          </div>
          <div className="w-[100%] my-[25px]">
            <DropDown
              buttonTitle="Experience Level"
              data={ExperienceLevel}
              className=" w-[100%] h-[75px]  "
            />
          </div>
          <div className="w-[100%] my-[25px]">
            <DropDown
              buttonTitle="Job Type"
              data={JobType}
              className="w-[100%] h-[75px]"
            />
          </div>
        </div>
        <div className="w-[95%]">
          <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 md:mb-[60px]  gap-y-[35px] xl:gap-x-[60px] xl:gap-y-[36px] gap-x-3 ">
            {loading ? (
              <p>Loading...</p>
            ) : jobPosts.length ? (
              jobPosts?.slice(0, visibleCards).map((item: any, index) => {
                return <DropDownCards item={item} className="w-[100%] " />;
              })
            ) : (
              <p>No Openings Yet</p>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <button
            onClick={loadMoreCards}
            className=" w-[180px] py-[15px] mt-[50px] px-[34px] mb-[88px] text-[20px] font-semibold group flex text-center 
            items-center justify-center rounded bg-white text-primary hover:scale-x-125 hover:pl-4 m hover:duration-500
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
        </div>
      </div>
    </div>
  );
}

export default AllOpenings;
