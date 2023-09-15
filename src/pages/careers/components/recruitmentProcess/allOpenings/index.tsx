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
      <div className="md:container md:mx-auto flex justify-center items-center flex-col">
        <div className="flex flex-col items-center justify-center mb-14">
          <h1 className="text-primary-white md:text-[40px] text-3xl text-center font-semibold md:mt-[49px] mt-[52px] ">
            All Openings
          </h1>
          <div className="flex justify-center items-center">
            <LineAnimation width='178px' height='7px' backgroundColor='#FFFFFF' marginTop="22px" />
          </div>
        </div>
        <div className=" md:w-[95%] lg:w-[71%] xl:w-[87%] 2xl:w-[73%]  md:mb-[39px] md:px-0 ">
          <div className="flex  bg-white ">
            <img className="  pointer-events-none" src={searchImg} />
            <input
              className="p-4 text-sm text-black outline-none rounded-lg dark:bg-primary-white  dark:placeholder-primary dark:placeholder:text-xl dark:placeholder:font-medium"
              placeholder="Search jobs"
            />
          </div>
        </div>
        <div className="flex md:flex-row md:my-0 mt-[25px] flex-wrap flex-col md:mb-[60px] mb-[58px] justify-center ">
          <div className="mx-[9px] my-[25px]">
            <DropDown
              buttonTitle="Department"
              data={Department}
              className="min-w-[268px] sm:w-[362px] h-[75px] "
            />
          </div>
          <div className="mx-[9px] my-[25px]">
            <DropDown
              buttonTitle="Experience Level"
              data={ExperienceLevel}
              className="min-w-[268px] sm:w-[362px] h-[75px] "
            />
          </div>
          <div className="mx-[9px] my-[25px]">
            <DropDown
              buttonTitle="Job Type"
              data={JobType}
              className="min-w-[268px] sm:w-[362px] h-[75px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-3 md:mb-[60px] mb-[53px] gap-y-[35px] xl:gap-x-[71px] xl:gap-y-[36px] gap-x-3 md:min-w-[680px] lg:min-w-[980px] xl:min-w-[1120px]">
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
        <div className="flex justify-center items-center ">
          <button
            onClick={loadMoreCards}
            className=" px-[34px] md:mb-[88px] mb-14 text-xl max-w-[180px] h-[56px] font-semibold group flex items-center justify-center rounded-[5px] bg-primary-white text-primary hover:scale-x-125 transform origin-left transition-transform duration-300 ease-in-out"
          >
            View more
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
