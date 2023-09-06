import React from 'react'

export default function DataScience({showFlex}) {
  return (
    <div className='md:w-[80%] md:justify-center md:mx-auto'>
         <div className={`mt-[40px] mx-[37px] md:mt-[50px]  md:container md:mx-auto  md:flex flex-col  justify-center ${
          showFlex ? 'flex' : 'hidden'
        }`}>
          <h1 className='text-[20px] md:text-[30px] justify-center  text-center md:text-left text-black  font-[600px] '>The Art of Data Science</h1>
          <div className=" flex justify-center items-center md:justify-start md:items-start">

            <div className="flex justify-center items-center">
              <div
                className="before:content-[''] before:block before:h-[7px] 
    before:bg-[#00B8F1] before:rounded-3xl
    before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
    before:transition before:ease-in-out before:duration-1000
    w-[103px] md:w-[172px] mt-[21px] md:mt-[25px] md:ml-[80px] "
              ></div>
            </div>
          </div>
          <p className='text-[16px] md:text-[22px] text-center md:text-left text-black  font-[500px] mt-[35px] '> In the vast landscape of modern technology, data has emerged as the new gold. From the intricate
            patterns of consumer behavior to the deep insights hidden withinbusiness operations, data holds
            the key to unlocking unprecedented opportunities. This is where the realm of Data Science steps in,
            transforming raw information into actionable intelligence</p>
        </div>
    </div>
  )
}
