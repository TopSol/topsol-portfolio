import React from 'react';

const Header = ({ title, subtitle, content, subContent, buttonLabel, imageUrl }) => {


  return (
    <div className=' pb-[130px] bg-gradient-to-b from-secondary to-primary'>
    <div className='md:container md:mx-auto md:flex-row flex flex-col  justify-center items-center'>
      <div className='w-full md:container md:mx-auto  md:w-1/2 flex flex-col justify-center p-4 md:p-8 text-center md:text-left '>
        <div className='flex justify-center mt-[86px] md: container md:mx-auto md:justify-start md:flex-col'>
          {title && <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-[70px]  text-white font-[600]'>{title}</h1>}
          {subtitle && <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-[70px]  text-primary ml-[10px] md:ml-0 md:mt-[2px] mt-0 font-[600]'>{subtitle}</h1>}
          </div>
       {content && <p className='text-base md:text-lg lg:text-xl xl:text-[24px]  mt-4 text-white font-[600]'>{content}</p>}
       {subContent && <p className='hidden md:block text-sm md:text-base lg:text-lg xl:text-[18px]  mt-4 text-white '>{subContent}</p>}
      {buttonLabel &&  <button className='text-base md:text-lg lg:text-xl xl:text-[18px]  bg-primary text-white px-4 py-2 mt-4'>
          {buttonLabel}
        </button>}
      </div>
      {/* Image */}
      <div className='w-full md:container md:mx-auto  md:mb-0 md:w-1/2 flex'>
     {imageUrl &&   <img className='w-full items-center md:w-[471.22px] h-[456.94px] md:h-auto px-[34px] pt-[35px] md:my-auto' src={imageUrl} alt="#" />}
      </div>
      </div>
    </div>
  );
};

export default Header;
