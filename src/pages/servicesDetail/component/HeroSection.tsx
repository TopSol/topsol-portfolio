import React from "react";
import ServicesDet from "../../../images/ServicesDet.png";
import { Link } from "gatsby";
import PrimaryBtn from "../../../components/PrimaryBtn";
import heroImage from '../../../images/heroImage.png'
import imafee from '../../../images/Icons/servicesHeader/custom-software.png'
interface propTypes {
  servicedata?: any;
  imageHead: string
}

export default function HeroSection({ servicedata, imageHead }: propTypes) {
  const splitTitle = servicedata?.heading?.split(" ");
  const firstName = splitTitle[0];
  const lastName = splitTitle.slice(1).join(" ");
  console.log(imageHead, 'imageHead');


  return (
    // <div>
    //   <div className=" bg-cover h-[100vh]"
    //     style={{
    //       backgroundImage: `url(${heroImage})`,
    //     }}
    //   >
    //     <div className="md:w-[80%] container md:mx-auto md:flex-row flex flex-col  justify-center">
    //       <div className=" mt-[70px] md:container md:mx-auto md:mt-0  flex flex-col justify-center text-center md:text-left ">
    //         <p className="text-[36px] md:text-[30px] lg:text-[40px] xl:text-[60px] leading-normal   text-white font-[600]">
    //           <span className="">{firstName}</span>{" "}
    //           <span className="text-primary">{lastName}</span>
    //         </p>
    //         <div className="xl:my-12 lg:my-8 my-4 md:container md:mx-auto mx-[24px]">
    //           <p className="text-primary-white font-medium text-[16px] lg:text-[22px]  hero-text-sideLine ">
    //             {servicedata?.desc}
    //           </p>
    //         </div>
    //         <Link to="/contactUs">
    //           <div className="">
    //             <PrimaryBtn
    //               text="Get Started"
    //               icon={true}
    //               additionalClasses="text-primary flex items-center font-figtree py-[20px] sm:px-[88px] px-[26px] bg-none text-[18px] mt-[68px] text-white rounded-[6px] "
    //             />
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" ">
      <div className="flex items-center  bg-cover h-[70vh]"
        style={{
          backgroundImage: `url(${imageHead})`,
        }}
      >
        <section className="   flex flex-col  md:container mx-auto ">
          <div className="     md:mx-auto md:w-[90%] ">
            <div className="  ">
              <h1 className="text-4xl  text-center md:text-start md:text-[54px] font-bold font-montserrat">
                <span className={`text-white `}>{firstName}</span>{" "}
                <span className="text-primary">{lastName}</span>
              </h1>
              <h3 className={`text-center md:text-start md:text-[28px]  font-figtree font-light text-white  hero-text-sideLine   lg:w-[75%] mt-[56px]`} >
                {servicedata?.desc}
              </h3>
              <Link to="/contactUs">
                <div className="flex  justify-center md:justify-start">
                  <PrimaryBtn
                    text="Get Started"
                    icon={true}
                    additionalClasses="text-primary flex items-center font-figtree py-[15px] md:py-[20px] sm:px-[88px] px-[35px] bg-none text-[18px] mt-[68px] text-white rounded-[6px] "
                  />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
