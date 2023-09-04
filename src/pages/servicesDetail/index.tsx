import React from "react";
import Navbar from "../../components/Navbar";
import InfoSection from "../../components/infoSection";
import Footer from "../../components/footerSection";
import { data,data2 } from "./data";
import PrimaryBtn from "../../components/PrimaryBtn";
import HeaderSection from "../../components/headerSection";
import PortfolioCard from "../../components/portfolioCard";
import FileIcon from "../../images/Icons/fileIcon.png";
export default function index() {
    

    const showData = data2.slice(1, 3);
  return (
    <div>
      <Navbar />
      <HeaderSection
        title="Latest"
        subtitle="Blogs"
        content="Explore the Latest Blogs on Trends and Technologies"
        subContent="Welcome to our blog page! Here you will find informative
         and engaging articles on a variety of topics, including Blockchain,
         WEB, Development. Our blog is updated regularly with fresh
         content, so be sure to check back often.We strive to provide
         insights and perspectives on the latest industrytrends and
         developments. Whether you‘re looking for inspiration, tips, or
         simply some interesting reading, our blog has something for
         everyone.Thanks for visiting and happy reading!"
        buttonLabel={false}
        imageUrl="https://res.cloudinary.com/asifsaythe/image/upload/v1693224854/new_portfolio/Frame_1_lv9ucy.png"
      />
      <InfoSection />

      <div className="  mx-5 md:container md:mx-auto my-[100px]">
        <div className="md:w-[75%]" >
        <h1 className=" text-[30px] md:text-[40px] font-montserrat font-bold">
          Ready to Outshine Your Competitors Online?
        </h1>
        <p className="text-2xl mt-[30px]">
          Topsol crafts websites that captivate customers, load swiftly, offer
          effortless maintenance, and adapt seamlessly to your business growth.
        </p>
        </div>
      </div>

      <div className="md:container mx-auto grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ">
        {data.map((item: any, index) => {
          return (
            <div className="px-[25px] mx-5 md:mx-0 border-primary hover:bg-primary hover:text-white border-2 rounded-xl  py-2 ">
              <img src={FileIcon}  className="w-[60px] bg-white rounded-full p-3 h-[60px] " alt="" />
              <h1 className="font-semibold text-[20px] font-montserrat my-3 ">
               {item.heading}
              </h1>
              <p className="text-[11px] font-montserrat">
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-b from-secondary to-primary  py-10 mt-12" >
      <div className="flex flex-col justify-center items-center     ">
          <div className="">
            <h1 className="font-extrabold text-white font-montserrat text-3xl md:text-3xl lg:text-4xl mt-6 text-center">
            Our Web Projects
            </h1>
          </div>
          <div
            className="relative before:content-[''] before:absolute before:block before:w-[178px] before:h-[7px] 
              before:bottom-0 before:left-0 before:bg-[#ffff] before:rounded-3xl
              before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
              before:transition before:ease-in-out before:duration-1000 mr-44 mt-4"
          ></div>
        </div>
        <div>
            {
                showData.map((item:any,index)=>{
                    return <PortfolioCard direction={item.side} textColor={"text-white"} heading={item.heading} discription={item.detail} />
                })
            }      
        </div>
        <div className="flex flex-col justify-center  mx-auto w-[250px]" >
        <PrimaryBtn text="View More" additionalClasses="bg-white text-primary" />  
        </div>
      </div>
      <Footer />
    </div>
  );
}
