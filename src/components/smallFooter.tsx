import React from 'react'
import PrimaryBtn from './PrimaryBtn'

export default function smallFooter() {
  return (
    <div className="bg-gradient-to-b mt-[100px]  from-secondary to-primary py-[100px] ">
        <div className="md:container mx-auto flex flex-col md:flex-row  justify-between items-center    " >
        <div className=" md:w-[60%]">
          <h1 className="font-bold text-[40px]  md:text-[40px] lg:text-[50px] xl:text-[70px]  text-white mx-5  " >Ready to discuss your project</h1>
        </div>
        <div className="md:mt-6 mt-[123px]" >
          <PrimaryBtn text="Start your project" additionalClasses=" mx-[24px] text-[15px] px-[56px] md:px-[24px] lg:px-[24px] lg:text-[26px] font-semibold bg-transparent   border-white border-2 text-white hover:bg-primary hover:border-primary " />
        </div>
        </div>
      </div>
  )
}
