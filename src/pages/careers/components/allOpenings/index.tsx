import React, { useState, useEffect } from "react";
// @ts-ignore
import { db } from "../../../../utils/firebase";
// @ts-ignore

import { collection, getDocs } from "firebase/firestore";
import LineAnimation from "../../../../components/LineAnimation";
import DropDownCards from "../cards/DropDownCards";
import DropDown from "../../../../components/dropDown/DropDown";
import { PulseLoader } from 'react-spinners';
import { data } from "../../../../staticData/jobDetailsData";
import PrimaryBtn from "../../../../components/PrimaryBtn";

function AllOpenings() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setSetLoading] = useState(false);


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
  }, [selectedCategory]);

  return (
    <div id="opening" className="bg-gradient-to-b from-primary-gradientOne to-primary pb-7">
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
        <div className=" grid grid-cols-3 sm:grid-cols-2 md:grid-cols-5 mb-8 md:mb-[60px] gap-y-[35px] xl:gap-x-[10px] xl:gap-y-[36px] gap-x-3">
          {data.map((item, index) => (
            <div
              className="    "
              key={index}
              onClick={() => {
                setSelectedCategory(item.value);
              }}
            >
              <div className={`${selectedCategory === item.value
                ? " text-white border-b-4 border-primary "
                : " text-[#9B9B9B]"
                } mt-4 md:mt-0 uppercase bg-transparent px-0 cursor-pointer text-center lg:text-[18px] text-[10px] rounded-0  py-1 
                  font-semibold hover:text-white font-montserrat` }>{item.name}</div>
            </div>
          ))}
        </div>

        <div className="w-[95%] flex flex-col items-center justify-center mx-auto  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:mb-[60px] gap-y-[35px] xl:gap-x-[60px] xl:gap-y-[36px] gap-x-3">
            {loading ? (
              <div className="flex justify-center items-center">
                <PulseLoader color="#FFFFFF" size={18} />
              </div>
            ) : (
              jobPosts
                .filter((item) => (selectedCategory === "All" ? true : item.category === selectedCategory))
                .map((item: any, index: any) => (
                  <DropDownCards item={item} className="w-[100%]" key={index} />
                ))
            )}

          </div>
          {!loading && jobPosts.length > 0 && jobPosts.filter((item) => (selectedCategory === "All" ? true : item.category === selectedCategory)).length === 0 && (
            <div className="text-center text-[20px] my-10 text-gray-500 ">
              No matching job posts found for the selected category.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default AllOpenings;
