
import React from "react";
import lifeMib from '../images/lifemib.png'
import logo from '../images/Group.png'
import tecnology from '../images/image 138.png'
export default function PortfolioCard({
  data,
}: any) {
  return (
    <>
      {/* <div
        className={`flex flex-col md:mt-[102px] mt-[30px]  md:container md:mx-auto gap-x-[122px] xl:px-0 md:px-4 justify-center  items-center ${index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
          }`}
      >
        <div
          className={` sm:px-0  px-4 my-10 md:my-0 ${index % 2 == 0 ? "justify-end " : "justify-end "
            }`}
        >
          {" "}
          <img
            src={data?.imageUrl}
            alt="#"
            className="w-[446px] object-cover bg-cover min-w-[246px] min-h-[201px] max-h-[501px]"
          />
        </div>
        <div
          className={` flex flex-col md:w-[40%]  mx-5 md:mx-0 ${index % 2 == 0 ? "justify-start " : "justify-start "
            }`}
        >
          <div className="flex ">
            <div className="flex justify-center mt-3">
              <div
                className={`before:content-[''] before:block 
                     before:hover:scale-x-50 before:scale-x-100 before:origin-top-left
                     before:transition before:ease-in-out before:duration-1000

                     w-[49px] h-[7px]  mr-[8px] mt-0 rounded-2xl ${lineColor}`}
              // style={{ backgroundColor: "#FFFFFF" }}
              ></div>
            </div>
            <h1
              className={`text-[18px] lg:text-[20px]  xl:text-[25px] font-semibold   ${subTitleColor}`}
            >
              {data?.subTitle}
            </h1>
          </div>
          <h3
            className={`text-[25px] lg:text-[30px] xl:text-[40px] leading-normal font-semibold my-[16px] xl:my-[37px] ${textColor}`}
          >
            {data?.title}
          </h3>
          <div
            className={`font-medium text-[20px]  ${textColor}`}
            dangerouslySetInnerHTML={{
              __html: `<p style=margin-top: 20px; font-size: 1.25rem; line-height: 1.75rem margin-left: 1.5rem; margin-right: 1.5rem;  font-family: Montserrat, sans-serif; ">${data?.description}</p>`,
            }}
          />
        </div>
      </div> */}
      <div className=" flex justify-center ">
        <div className=" py-7 flex px-2 bg-cover  md:w-[80vw] w-[100vw]  hover:scale-[1.02] "
          style={{
            backgroundImage: `url(${data.bg})`,
            transition: "all .50s ease "

          }}
        >
          <div className="  md:ml-[50px] ml-2 ">
            <div>
              <img src={data.logo} alt="" className=" mt-4" />
              <h3 className="text-[#697484] md:text-[18px] text-[15px] font-figtree font-light mt-[25px]">Website / Admin Panel</h3>
              <h1 className="text-[#132238] md:text-[32px] text-[20px] font-urbanist mt-3 font-semibold leading-[32px]">{data.title}</h1>
              <p className="mt-3 md:text-[20px] text-[15px] text-[#556070] font-figtree font-light md:w-[45%] ">{data.description}</p>
              <button className="flex flex-row mt-4 text-primary md:text-[16px] text-[15px] leading-[24px] font-semibold">
                View Case Study
                <div className="m-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path d="M1.37848 15.1549L0 13.566L9.45242 2.67094H0.984627V0.401123H12.8002V14.02H10.8309V4.2598L1.37848 15.1549Z" fill="#00B8F1" />
                  </svg>
                </div>
              </button>
              <div className="mt-[25px]">
                <img src={data.technology} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
