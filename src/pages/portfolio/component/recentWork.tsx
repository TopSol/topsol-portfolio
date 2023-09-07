import React from "react";
import { data, data2 } from "../data";
import PrimaryBtn from "../../../components/PrimaryBtn";
import PortfolioCard from "../../../components/portfolioCard";
import { Link } from "gatsby";
export default function RecentWork() {
  const [selectWorkers, setSetWorkers] = React.useState("All");
  return (
    <>
      <div className="flex  flex-col justify-center items-center     ">
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
      <div className="  grid grid-col gap-3 items-center mt-[100px] md:grid-cols-3 lg:grid-cols-4  md:container md:mx-auto ">
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

      {data2.map((item: any, index) => {
        return (
          <Link to={"/portfolioDetail"}>
            <div className="mt-[100px]" >
          <PortfolioCard
            heading={item.heading}
            discription={item.discription}
            direction={item.side}
          />
          </div>
          </Link>
        );
      })}
    </>
  );
}