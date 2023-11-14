import React, { useState, useEffect } from "react";
// @ts-ignore
import { db } from "../../../../utils/firebase";
// @ts-ignore

import { collection, getDocs } from "firebase/firestore";
import LineAnimation from "../../../../components/LineAnimation";
import DropDownCards from "../cards/DropDownCards";
import DropDown from "../../../../components/dropDown/DropDown";
import { PulseLoader } from 'react-spinners';

function AllOpenings() {
  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setSetLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [expType, setExpType] = useState({ title: "", experience: "", type: "" });
  const [options, setOptions] = useState([])
  const handleSearchChange = (event: any) => {
    const query = event.target.value;
    setSearchQuery(query);
  };
  const handleDropdownChange = (type: any, value: any) => {
    setExpType(prevExpType => ({
      ...prevExpType,
      [type]: value,
    }));

  };

  const jobPostFun = () => {
    let jobTypes = JSON.parse(JSON.stringify(jobPosts));

    jobTypes = jobTypes.filter((item: any) => (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.experience.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase())
    ))
    jobTypes = jobTypes.filter((item: any) => (
      item.title.toLowerCase().includes(expType?.title?.toLowerCase())

    ))
    jobTypes = jobTypes.filter((item: any) => (
      item.experience.toLowerCase().includes(expType?.experience?.toLowerCase())

    ))
    jobTypes = jobTypes.filter((item: any) => (
      item.type.toLowerCase().includes(expType?.type?.toLowerCase())

    ))
    return jobTypes
  };
  useEffect(() => {
    jobPostFun();
  }, [searchQuery, expType?.experience, expType?.title, expType?.type]);
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
        setOptions(data)
        setSetLoading(false);
      } catch (error) {
        console.error("Error fetching job posts: ", error);
        setSetLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div id="opening" className="bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo">
      <div className="md:container md:mx-auto sm:mx-0 mx-[14px] flex justify-center items-center flex-col">
        <div className="flex flex-col items-center justify-center mb-14">
          <h1 className="text-primary-white uppercase font-urbanist md:text-[40px] text-3xl text-center font-bold md:mt-[49px] mt-[52px] ">
            Newest <span className="text-primary">Jobs </span> for You
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
              className=" pl-[24px] mt-1 items-center w-[100%] text-lg text-black outline-none rounded-lg dark:bg-primary-white  dark:placeholder-primary dark:placeholder:text-xl dark:placeholder:font-medium"
              placeholder="Search jobs"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        {loading ? (
          <div className="flex justify-center items-center">
            <PulseLoader color="#FFFFFF" size={18} />
          </div>
        ) : (
          <div className="flex md:flex-row md:my-0 mt-[25px] w-[95%] md:mx-auto gap-4 lg:gap-10 flex-col md:mb-[60px] mb-[58px] justify-between ">
            <div className="w-[100%] my-[25px]">
              <DropDown
                buttonTitle="Department"
                options={options}
                className="w-[100%] h-[75px] "
                setExpType={setExpType}
                type="title"
                handleDropdownChange={handleDropdownChange}
              />
            </div>
            <div className="w-[100%] my-[25px]">
              <DropDown
                buttonTitle="Type"
                options={options}
                className="w-[100%] h-[75px] "
                setExpType={setExpType}
                type="type"
                handleDropdownChange={handleDropdownChange}
              />
            </div>
            <div className="w-[100%] my-[25px]">
              <DropDown
                buttonTitle="Experience"
                options={options}
                className="w-[100%] h-[75px] "
                setExpType={setExpType}
                type="experience"
                handleDropdownChange={handleDropdownChange}
              />
            </div>
          </div>
        )}
        <div className="w-[95%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:mb-[60px] gap-y-[35px] xl:gap-x-[60px] xl:gap-y-[36px] gap-x-3">
            {loading ? (
              <div className="flex justify-center items-center">
                <PulseLoader color="#FFFFFF" size={18} />
              </div>
            ) : jobPostFun().length ? (
              jobPostFun()?.map((item: any, index: any) => {
                return <DropDownCards item={item} className="w-[100%]" key={index} />;
              })
            ) : (
              <div className="text-center text-gray-500">
                No matching job posts found.
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default AllOpenings;
