import React,{useState} from 'react'
import PrimaryBtn from '../../components/PrimaryBtn';
import { btnData, allData } from "./data";
export default function Card() {
    const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div>
        <div className=" grid grid-col gap-3 items-center mt-[42px] md:mt-[76px] md:grid-cols-2 lg:grid-cols-4  md:container md:mx-auto ">
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
                additionalClasses="bg-primary  px-4 text-[20px] w-full 
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
              <div className=' md:w-[100%] mx-0 md:mx-[50px]'>
                <img
                  src={"https://res.cloudinary.com/asifsaythe/image/upload/v1693296182/new_portfolio/man-using-tablet-work-connect-with-others_lhxghw.png"} alt="" />
              </div>
              <div className='mt-[14px] md:container mx-0 md:mx-[50px]' >
                <div className='flex items-center'>

                  <div className="flex justify-center items-center">
                    <div
                      className="before:content-[''] before:block before:h-[5px] 
                       before:bg-[#00B8F1] before:rounded-3xl
                      before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
                      before:transition before:ease-in-out before:duration-1000
                       w-[49px]   pr-[8px] "
                    ></div>
                  </div>
                  <h1 className=' md:text-[18px]  font-semibold lg:text-[35px] text-primary' >{item.title}</h1>
                </div>
                <p className='w-[100%] md:w-[100%] my-[14px] lg:text-[20px] xl:text-[22px] text-gray-400' >{item.description}</p>
                <PrimaryBtn text='Reade Mores'
                  additionalClasses="bg-primary text-[16px] lg:text-[26px] xl:mt-[14px] font-semibold hover:bg-primary text-white "
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
