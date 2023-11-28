import React from "react";


export default function WorkFlow(servicedata) {
    return (
        <div className=" mt-8 py-[92px]    px-2  bg-gradient-to-b from-secondary to-primary">
            <div className=" flex flex-col md:w-[75%] w-[100%] mx-auto justify-center md:justify-start ">
                {/* <div className=" flex flex-col md:justify-start justify-center  items-center md:items-start ">
                    <h1 className="font-bold text-white leading-[120%] uppercase font-urbanist text-[26px] md:text-[34px] lg:text-[48px] text-center md:text-left">
                        OUR <span className="text-primary">WORKFLOW</span>
                    </h1>
                    <LineAnimation
                        width="178px"
                        height="7px"
                        backgroundColor="#FFFFFF"
                        marginTop="22px"
                    />
                    <p className="text-white font-figtree text-[24px] font-medium leading-[120%] text-center md:text-left mt-8">
                        Efficiently guiding projects from conception to successful delivery
                    </p>
                </div> */}
                <div className="grid mt-[36px] md:mt-[95px] gap-x-[30px] gap-y-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
                    {servicedata?.servicedata?.details?.paragraphs?.map((item, index) => (
                        <div className="px-[25px] shadow-md arrowhide  mx-5 md:mx-0 p-2 bg-white  hover:border-primary hover:border-2 border-2 border-white rounded-xl  py-6 hover:scale-[1.02] "
                            style={{ transition: "all .50s ease " }}
                        >
                            <div className="bg-white w-[70px] justify-center flex items-center rounded-full  ">
                                <img src={item.img} className="  " alt="" />
                            </div>
                            <h1 className="font-normal text-[20px] font-figtree text-primary   mt-5 ">
                                {item.heading}
                            </h1>
                            <p className="text-[18px] my-2 font-figtree leading-[125%] font-light">{item?.text}</p>
                        </div>

                    ))}

                </div>
            </div>
        </div>
        // </div>
        // </div>
        // </div>
    );
}
