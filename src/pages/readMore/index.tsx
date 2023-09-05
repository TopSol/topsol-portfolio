import React from 'react'
import Navbar from '../../components/Navbar'
import PrimaryBtn from '../../components/PrimaryBtn';
import line from '../../images/Frame 74.png'
import Footer from '../../components/footerSection';
import commentImage from '../../images/commentImage.png'
import dataSciences from '../../images/dataScience.png'
import DataScience from './DataScience';
import CommentSection from './CommentSection';
export default function index() {
  return (
    <div>
      <Navbar />
      <div className=' pb-[176px] md:pt-[112px] bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo'>

        <div className='md:w-[80%] md:container md:mx-auto md:flex-row flex flex-col  justify-center'>
          <div className='w-full mt-[70px] md:container md:mx-auto md:mt-0  flex flex-col justify-center text-center md:text-left '>
            <h1 className="text-[36px] md:text-[70px] xl:text-[90px]  text-white font-[600]">
              What is <br />
              <span className="md:inline xl:w-[100%] text-primary">data </span>
              <span className="inline md:block text-primary md:text-white">Science</span>
            </h1>
          </div>
          <div className='w-[100%] mt-[56px] md:container justify-center items-center flex flex-col'>
            <img className='items-center md:w-[471px] '
              src={dataSciences} alt="#" />
          </div>
        </div>
      </div>
      <div className='md:w-[80%] md:justify-center md:mx-auto'>
        <div className=' mt-[50px] mx-[37px] md:container md:mx-auto  flex flex-col  justify-center  '>
          <h1 className='text-[22px] md:text-[30px] justify-center  text-center md:text-left text-black  font-[600px] '>Unraveling the Power of Data Science</h1>
          <div className=" flex justify-center items-center md:justify-start md:items-start">
            <div className="flex justify-center items-center">
              <div
                className="before:content-[''] before:block before:h-[7px] 
    before:bg-[#00B8F1] before:rounded-3xl
    before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
    before:transition before:ease-in-out before:duration-1000
    w-[103px] md:w-[307px] mt-[21px] md:mt-[25px] md:ml-[125px] "
              ></div>
            </div>
          </div>
          <p className='text-[16px] md:text-[22px] text-center md:text-left text-black  font-[500px] mt-[37px] '> In the vast landscape of modern technology, data has emerged as the new gold. From the intricate
            patterns of consumer behavior to the deep insights hidden withinbusiness operations, data holds
            the key to unlocking unprecedented opportunities. This is where the realm of Data Science steps in,
            transforming raw information into actionable intelligence</p>
          <div className='w-[100%] mt-[37px] md:mt-[50px] md:container md:mx-auto justify-center items-center flex flex-col'>
            <img
              className='items-center w-[100%]'
              src="https://res.cloudinary.com/asifsaythe/image/upload/v1693305603/new_portfolio/businesswoman-networking-using-digital-devices_tibomc.png"
              alt="#"
            />
          </div>
        </div>
        <div className='mt-[40px] md:mt-[50px] mx-[37px] md:container md:mx-auto  flex flex-col  justify-center  '>
          <DataScience showFlex={true} />
          <DataScience showFlex={true} />
          <DataScience showFlex={false} />
          <div className='mt-[57px]  md:mt-10  md:container md:mx-auto  flex flex-col md:flex-row md:justify-between items-center'>
            <div className='w-[100%] '>
              <img
                className='mt-[37px] md:w-[95%] w-[100%]'
                src="https://res.cloudinary.com/asifsaythe/image/upload/v1693305708/new_portfolio/standard-quality-control-concept-m_xmlsh0.png"
                alt="#"
              />
            </div>
            <div className='w-[100%] '>
              <img
                className='mt-[37px]  md:w-[95%] w-[100%]'
                src="https://res.cloudinary.com/asifsaythe/image/upload/v1693305678/new_portfolio/html-css-collage-concept-with-person_mkcttq.png"
                alt="#"
              />
            </div>
          </div>
        </div>
        <DataScience showFlex={false} />
      </div>
      <CommentSection />
      <Footer />
    </div>

  )
}
