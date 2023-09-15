import React, { useEffect, useRef, useState } from "react";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import { reviews } from "./data";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import MouseFollower from "mouse-follower";
import { AnimatePresence } from "framer-motion";

type CardSectionProps = {
  setBg: any;
  openModal: (value: boolean) => void;
};

gsap.registerPlugin(ScrollTrigger);
MouseFollower.registerGSAP(gsap);
export default function CardSection({ setBg, openModal }: CardSectionProps) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  const [selectedId, setSelectedId] = useState("");

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

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const map = mapRef.current;

  //   if (window.innerWidth >= 1024) {
  //     const pinTrigger = ScrollTrigger.create({
  //       trigger: container,
  //       pin: true,
  //       scrub: 0.5,
  //       markers: false,
  //       start: "top top",
  //       end: () => `+=1500`,
  //     });

  //     ScrollTrigger.create({
  //       trigger: map,
  //       start: "top top",
  //       end: "bottom bottom",
  //       onToggle: (self) => {
  //         if (self.isActive) {
  //           pinTrigger.disable();
  //         } else {
  //           pinTrigger.enable();
  //         }
  //       },
  //     });
  //   }

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => {
  //       trigger.kill();
  //     });
  //   };
  // }, []);

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

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setBg("#0B234C");
    } else {
      if (isInView) {
        setBg("#0B234C");
      } else {
        setBg("#fff");
      }
    }
  }, [isInView]);

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
            <h1 className="mb-10 text-[30px] md:text-[50px] font-semibold mt-16  text-white">
              Build Smarter <br /> Not From Scratch
            </h1>
            <div className="w-[150px]">
              <AnimateHr bgColor={"white"} />
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
            {reviews?.map((v, index) => {
              return (
                <>
                  <div
                    layoutId={v.id}
                    onClick={() => handleClick(v.id)}
                    className="  lg:mr-12 hover:scale-105 mt-5 hover:duration-300 transition ease-in-out delay-100     md:w-[465px]  flex flex-col items-center "
                  >
                    <img
                      key={index}
                      src={v.avatar}
                      alt="Avatar"
                      className=" "
                    />
                    <h1 className="text-[22px]  font-semibold text-white mt-[46px] ">
                      Ready-To-Use Set Of Modules
                    </h1>
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
