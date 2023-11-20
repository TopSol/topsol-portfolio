
import React from "react";
export default function PortfolioCard({
  data,
}: any) {
  return (
    <>
      <div className=" flex justify-center ">
        <div className=" py-7 flex px-2 bg-cover rounded-[20px]  md:w-[80vw] w-[100vw]  hover:scale-[1.02] "
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
