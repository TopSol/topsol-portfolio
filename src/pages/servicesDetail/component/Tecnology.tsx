import React, { useEffect, useState } from 'react'
import LineAnimation from '../../../components/LineAnimation'
import bgImage from '../../../images/bgImage.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Tecnology(servicedata) {
    const [slider, setSlider] = useState<any | null>(null);

    const next = () => {
        if (slider) {
            slider.slickNext();
        }
    };

    const previous = () => {
        if (slider) {
            slider.slickPrev();
        }
    };

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };
    return (
        <div>
            <div className="md:py-[50px] mt-16 md:mt-0 flex px-2 bg-cover items-center"
                style={{
                    backgroundImage: `url(${bgImage})`
                }}
            >
                <div className=' flex flex-col md:w-[80%] w-[100%] mx-auto justify-center md:justify-start '>
                    <div className=" flex flex-col md:justify-start justify-center  items-center md:items-start  ">
                        <h1 className="font-bold text-textColors  uppercase font-urbanist text-[26px] md:text-[34px] lg:text-4xl text-center md:text-left">
                            TECHNOLOGIES <span className="text-primary">WE USE</span>
                        </h1>
                        <LineAnimation
                            width="178px"
                            height="7px"
                            backgroundColor="#00B8F1"
                            marginTop="22px"
                        />
                        <p className='text-textColors font-figtree text-[24px] font-medium leading-[120%] mt-8 text-center md:text-left'>Empowering Business with Cutting-Edge Custom Software Solutions</p>
                    </div>
                    <div className="mt-[36px] md:mt-[95px] md:w-[80vw] w-[97vw] ">
                        <Slider {...settings} ref={setSlider}>
                            {servicedata?.servicedata?.details?.tecnology?.map((item, index) => (
                                <div className='flex flex-col   items-center justify-center '>
                                    <div className='border-[4px] border-white rounded-[8px] w-[136px] h-[136px] justify-center flex items-center flex-col'>
                                        <img src={item?.avatar} alt="" className='' />
                                        <h1 className='text-textColors mt-5 font-urbanist text-[18px] leading-[120%] font-semibold'>{item?.title}</h1>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="flex mt-10 justify-center">
                        <button className="button arrowAwards bg-white hover:bg-primary p-2 rounded-full" onClick={previous}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M20.25 12.1564H3.75" stroke="#121314" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.5 5.40637L3.75 12.1564L10.5 18.9064" stroke="#121314" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button className="button arrowAwards bg-white p-2 hover:bg-primary rounded-full ml-6" onClick={next}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M3.75 12.1564H20.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.5 5.40637L20.25 12.1564L13.5 18.9064" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
