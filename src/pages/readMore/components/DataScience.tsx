import React from 'react'
import LineAnimation from '../../../components/LineAnimation'
interface Iprops {
  showFlex: boolean
}
export default function DataScience({ showFlex }: Iprops) {
  return (
    <div className='md:w-[80%] md:justify-center md:mx-auto'>
      <div className={`mt-[40px] mx-[37px] md:mt-[50px]  md:container md:mx-auto  md:flex flex-col  justify-center ${showFlex ? 'flex' : 'hidden'
        }`}>
        <h1 className='text-[20px] md:text-[30px] justify-center  text-center md:text-left text-black font-semibold '>The Art of Data Science</h1>
        <div className=" flex justify-center items-center md:justify-start md:items-start">

          <div className="flex justify-center items-center">
            <div className=' md:ml-[103px] ml-0'>
              <LineAnimation width='178px' height='7px' backgroundColor='#00B8F1' marginTop="22px" />
            </div>
          </div>
        </div>
        <p className='text-[16px] md:text-[22px] text-center md:text-left text-black font-medium mt-[35px] '> In the vast landscape of modern technology, data has emerged as the new gold. From the intricate
          patterns of consumer behavior to the deep insights hidden withinbusiness operations, data holds
          the key to unlocking unprecedented opportunities. This is where the realm of Data Science steps in,
          transforming raw information into actionable intelligence</p>
      </div>
    </div>
  )
}
