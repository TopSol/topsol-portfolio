import React, { useEffect, useState } from 'react'
import Navbar from "../../components/Navbar";
import Header from '../../components/headerSection';
import PrimaryBtn from '../../components/PrimaryBtn';
import dot from '../../images/dot.png'
import line from '../../images/Frame 74.png'
import { btnData, allData } from "./data";

export default function index() {
  const [selectWorkers, setSetWorkers] = useState("All")
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <div>
      <Navbar />
      <Header
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
      <div className='flex flex-col justify-center items-center '>
        <p className='text-4xl md:text-5xl lg:text-6xl  text-black mt-8 md:mt-16 xl:mt-32'>
          Top Niches
        </p>
        <img
          src={line}
          className="w-32 md:w-52 h-2 md:h-4 mt-2 md:mt-4"
          alt=""
        />
      </div>

      <div className=" grid grid-col gap-3 items-center mt-[100px] md:grid-cols-2 lg:grid-cols-4  md:container md:mx-auto ">
        {btnData.map((item: any, index) => {
          return (
            <div
            className={`mx-5 md:mx-5 flex justify-around ${selectedCategory === item.name ? 'bg-primary' : ''}`}
            key={index}
              onClick={() => {
                console.log("hello im am hear -----------------");
                setSelectedCategory(item.name);
              }}
            >
              <PrimaryBtn
                text={item.name}
                additionalClasses="bg-primary md:mt-0 px-4 text-[20px] w-full 
                   md:mx-0  hover:bg-primary text-white  "
              />
            </div>
          );
        })}
      </div>
      <div>
      {allData
    .filter(item => selectedCategory === 'All' || item.catagery === selectedCategory)
    .map((item, index) => (
          <div className={` ${item.flexDirection} mt-10 mx-[35px] md:container md:mx-auto  flex flex-col md:flex-row justify-around items-center `} >
            <div className='md:w-[48%]'>
              
              <img 
              
              src={"https://res.cloudinary.com/asifsaythe/image/upload/v1693296182/new_portfolio/man-using-tablet-work-connect-with-others_lhxghw.png"} alt="" />
              </div>
            <div className='mt-[14px]  md:w-[48%] ' >
            <div className='flex items-center'>
                <img
                  src={line}
                  className="w-[49px] h-[5px] pr-[8px] "
                  alt=""
                />
              <h1 className=' text-[18px]  font-semibold md:text-[35px] text-primary' >{item.title}</h1>
              </div>
              <p className=' my-[14px]  text-gray-400' >{item.description}</p>
              <PrimaryBtn text='Reade Mores'
               additionalClasses="bg-primary mt-[24px] font-semibold hover:bg-primary text-white "
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
