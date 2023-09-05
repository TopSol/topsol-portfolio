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
  const [restrict, setRestrict] = useState(false);

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
      setRestrict(true);
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
    } else {
      setRestrict(false);
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
      <div
        className={`h-screen flex justify-center items-center py-4 overflow-hidden`}
      >
        <div className="flex flex-row">
          {/* Upper Section */}
          <div
            ref={viewRef}
            className="p-2 flex items-center justify-center flex-col mb-8 mr-8 transform w-[50vw]"
            style={
              restrict
                ? {
                    transform:
                      scrollY <= 1080
                        ? `translateY(0%)`
                        : scrollY >= 1560
                        ? `translateY(-${480}px)`
                        : `translateY(-${scrollY - 1080}px)`,
                  }
                : {}
            }
          >
            <h1 className="mb-10 text-4xl font-bold mt-16 max-w-[300px] text-white">
              Build Smarter Not From Scratch
            </h1>
            <div className="w-[150px]">
              <AnimateHr bgColor={"white"} />
            </div>
          </div>

          {/* Lower Section (Horizontal Scroll - Reviews) */}
          <div
            ref={mapRef}
            className={`flex flex-row ${
              restrict ? "transform" : "overflow-scroll"
            } w-[50vw]`}
            style={
              restrict
                ? {
                    transform:
                      scrollY <= 1000
                        ? `translateX(0%)`
                        : scrollY >= 2500
                        ? `translateX(-1500px)`
                        : `translateX(-${scrollY - 1000}px)`,
                  }
                : {}
            }
          >
            {reviews?.map((v, i) => {
              return (
                <img
                  key={i}
                  src={
                    "https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  }
                  height={700}
                  width={500}
                  alt="Avatar"
                  className="ml-8"
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
