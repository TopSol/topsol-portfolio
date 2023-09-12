import React, { useEffect, useRef, useState } from "react";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import { reviews } from "./data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";

gsap.registerPlugin(ScrollTrigger);

export default function CardSection({ setBg }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  const [scrollY, setScrollY] = useState(0);
  const [viewRef, isInView] = useInView();

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
  }, []);

  useEffect(() => {
    if (isInView) {
      setBg("#0B234C");
    } else {
      setBg("#fff");
    }
  }, [isInView]);

  console.log(isInView, "scroll", scrollY);

  return (
    <div ref={containerRef}>
      <div className={`h-screen flex   items-center py-4 overflow-hidden`}>
        <div className="flex flex-col md:flex-row">
          <div
            ref={viewRef}
            className="p-2 flex items-center flex-col mb-8  transform justify-start  w-[50vw] "
            style={{
              transform:
                scrollY <= 1080
                  ? `translateY(0%)`
                  : scrollY >= 1560
                  ? `translateY(-${480}px)`
                  : `translateY(-${scrollY - 1080}px)`,
            }}
          >
            <h1 className="mb-10 text-[50px] font-semibold mt-16  text-white">
              Build Smarter <br /> Not From Scratch
            </h1>
            <div className="w-[150px]">
              <AnimateHr bgColor={"white"} />
            </div>
          </div>

          <div
            ref={mapRef}
            className={`flex  md:flex-row transform  `}
            style={{
              transform:
                scrollY <= 1000
                  ? `translateX(0%)`
                  : scrollY >= 2500
                  ? `translateX(-1500px)`
                  : `translateX(-${scrollY - 1000}px)`,
            }}
          >
            {reviews?.map((v, i) => {
              return (
                <div className=" mr-12 w-[465px] h-[660px] flex flex-col items-center ">
                  <img key={i} src={v.avatar} alt="Avatar" className=" " />
                  <h1 className="text-[22px] font-semibold text-white mt-[46px] ">
                    Ready-To-Use Set Of Modules
                  </h1>
                  <p className="text-center text-[15px] mx-6  mt-[46px] text-white ">
                    Faster development process by leveraging the extensive
                    collectionof thousands of modules of ruseable code available
                    in our library
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
