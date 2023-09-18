import React from 'react';

const Header = ({ title, subtitle, content, subContent, buttonLabel, imageUrl }) => {


  return (
    <div className='    bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo'>
      <div className=' md:container h-[100vh] md:mx-auto md:flex-row flex flex-col  justify-center items-center'>
        <div className=' md:w-[55%] md:mx-auto   flex flex-col justify-center md:justify-start p-4  text-center md:text-left '>
          <div className='flex justify-center  md: container md:mx-auto md:justify-start md:flex-col'>
            {title && <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-[70px] mb-0 md:mb-[21px]  text-white font-semibold'>{title}</h1>}
            {subtitle && <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-[70px]  text-primary ml-[10px] md:ml-0 md:mt-[2px] mt-0 font-semibold'>{subtitle}</h1>}
          </div>
          {content && <p className='text-[20px] md:text-lg lg:text-xl xl:text-[24px] mt-[59px]  md:mt-[26px] text-white font-semibold '>{content}</p>}
          {subContent && <p className='hidden md:block text-sm  lg:text-lg xl:text-[18px]   md:mt-[37px] text-white '>{subContent}</p>}
          {buttonLabel && <button className='text-base md:text-lg lg:text-xl xl:text-[18px]  bg-primary text-white px-4 py-2 mt-4'>
            {buttonLabel}
          </button>}
        </div>
        {/* Image */}
        <div className=' md:w-[45%] w-[90%]  items-center justify-center flex'>
          {imageUrl && <img className='   w-[100%] ' src={imageUrl} alt="#" />}
        </div>
      </div>
    </div>
  );
};

export default Header;
