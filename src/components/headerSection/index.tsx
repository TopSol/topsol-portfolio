import React from 'react';

interface Iprops {
  title?: string;
  subtitle?: string;
  content?: string;
  subContent?: string;
  imageUrl?: string;
}
const Header = ({ title, subtitle, content, subContent, imageUrl }: Iprops) => {

  return (
    <div className='    bg-gradient-to-b from-primary-gradientOne to-primary-gradientTwo'>
      <div className=' md:container min-h-[100vh] md:mx-auto md:flex-row flex flex-col  justify-center items-center'>
        <div className=' md:w-[55%] md:mx-auto   flex flex-col justify-center md:justify-start p-4  text-center md:text-left '>
          <div className='flex justify-center  md: container md:mx-auto md:justify-start md:flex-col'>
            <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-[70px] mb-0 md:mb-[21px]  text-white font-semibold'>{title}</h1>
            <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-[70px]  text-primary ml-[10px] md:ml-0 md:mt-[2px] mt-0 font-semibold'>{subtitle}</h1>
          </div>
          <p className='text-[20px] md:text-lg lg:text-xl xl:text-[24px] mt-[59px]  md:mt-[26px] text-white font-semibold '>{content}</p>
          <p className='hidden md:block text-sm  lg:text-lg xl:text-[18px]   md:mt-[37px] text-white '>{subContent}</p>
        </div>
        <div className=' md:w-[45%] w-[90%]  items-center justify-center flex'>
          <img className='   w-[100%] ' src={imageUrl} alt="#" />
        </div>
      </div>
    </div>
  );
};

export default Header;
