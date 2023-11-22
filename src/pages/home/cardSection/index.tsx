import React, { useEffect, useRef, useState } from "react";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import reviews from "../../../staticData/cardSectionData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import MouseFollower from "mouse-follower";
import { reviewTypes } from "../../../types/interfaceTypes";
import arrowup from "../../../images/Icons/arrowup.svg";
import { Link } from "gatsby";

type CardSectionProps = {
  openModal: (value: boolean) => void;
  reviews: reviewTypes[];
  setSelectedId: (id: string) => void;
};

gsap.registerPlugin(ScrollTrigger);
MouseFollower.registerGSAP(gsap);
export default function CardSection({
  openModal,
  reviews,
  setSelectedId,
}: CardSectionProps) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  const [scrollY, setScrollY] = useState(0);
  const [isWorking, setIsWorking] = useState(true);
  const [viewRef, isInView] = useInView();
  // const cursor = new MouseFollower();

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Function to check screen width and set the state accordingly
    const checkScreenWidth = () => {
      if (window.innerWidth < 1024) {
        setIsWorking(false);
      } else {
        setIsWorking(true);
      }
    };

    // Initial check when the component mounts
    checkScreenWidth();

    // Add a resize event listener to update the state when the screen size changes
    window.addEventListener("resize", checkScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (isWorking) {
      const container = containerRef.current;
      const map = mapRef.current;

      if (window.innerWidth >= 1024) {
        const pinTrigger = ScrollTrigger.create({
          trigger: container,
          pin: true,
          scrub: 0.5,
          markers: false,
          start: "top top",
          end: () => `+=1500`,
        });

        ScrollTrigger.create({
          trigger: map,
          start: "top top",
          end: "bottom bottom",
          onToggle: (self) => {
            if (self.isActive) {
              pinTrigger.disable();
            } else {
              pinTrigger.enable();
            }
          },
        });
      }

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => {
          trigger.kill();
        });
      };
    }
  }, [isWorking]);

  const handleClick = (id: string) => {
    setSelectedId(id);
    openModal(true);
  };

  return (
    <div ref={containerRef}>
      <div
        className={`  lg:h-screen flex justify-center lg:justify-normal    items-center py-4 overflow-hidden`}
      >
        <div className="flex flex-col lg:flex-row">
          <div
            ref={viewRef}
            className="p-2  flex items-center flex-col mb-8  transform justify-start  lg:w-[50vw] "
            style={{
              transform: isWorking
                ? scrollY <= 1080
                  ? "translateY(0%)"
                  : scrollY >= 1560
                    ? "translateY(-480px)"
                    : `translateY(-${scrollY - 1080}px)`
                : "none", // If isWorking is false, set transform to 'none' or any other desired default value
            }}
          >
            <div className="relative">
              <h1 className="mb-10 text-[30px] md:text-[48px] font-semibold mt-16 font-urbanist uppercase ">
                Build <span className="text-primary">Smarter</span> <br /> Not
                From <span className="text-primary">Scratch</span>
              </h1>
              <div className="absolute w-[259px] h-[4px] bg-primary"></div>
            </div>
          </div>

          <div
            ref={mapRef}
            className={`flex flex-col lg:flex-row transform  `}
            style={{
              transform: isWorking
                ? scrollY <= 1000
                  ? `translateX(0%)`
                  : scrollY >= 2500
                    ? `translateX(-1500px)`
                    : `translateX(-${scrollY - 1000}px)`
                : "none",
            }}
          >
            {reviews?.map((item: any, index: any) => {
              return (
                <>
                  <div
                    id={item.id}
                    onClick={() => handleClick(item.id)}
                    className="mx-4 cursor-pointer lg:mx-0  lg:mr-12 hover:scale-105 mt-5 hover:duration-300 transition ease-in-out delay-100     md:w-[465px]  flex flex-col "
                  >
                    <img
                      key={index}
                      src={item.avatar}
                      alt="Avatar"
                      className=" "
                    />
                    <h1 className="text-[22px] px-2 font-medium mt-[46px] capitalize tracking-wide font-figtree ">
                      {item?.heading}
                    </h1>
                    <h1 className="text-[22px] px-2 font-medium capitalize  font-figtree ">
                      {item?.subheading}
                    </h1>
                    <p className="text-[18px] px-2 mr-4 font-figtree font-light mt-[20px]">
                      {item?.desc.slice(0, 130)}...
                    </p>
                    <div className="flex gap-2 mt-5 px-2 font-figtree font-semibold text-primary">
                      <h2>VIEW MORE</h2>
                      <img
                        src={arrowup}
                        style={{
                          filter:
                            "invert(53%) sepia(74%) saturate(2900%) hue-rotate(159deg) brightness(103%) contrast(102%)",
                        }}
                        width={12}
                        height={12}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
