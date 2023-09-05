import React, { useEffect, useRef } from "react";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import { reviews } from "./data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function CardSection({ scrollY }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  const [viewRef, isInView] = useInView();

  useEffect(() => {
    const container = containerRef.current;
    const map = mapRef.current;

    const pinTrigger = ScrollTrigger.create({
      trigger: container,
      pin: true,
      scrub: 0.5,
      markers: false,
      start: "top top",
      end: () => `+=2000`,
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });
    };
  }, []);

  console.log(isInView, "scroll", scrollY);

  return (
    <motion.div
      ref={containerRef}
      initial={{ background: "#fff" }}
      animate={{
        background: isInView ? "#0B234C" : "#fff",
      }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div
        className={`h-screen flex justify-center items-center py-4 overflow-hidden`}
        ref={viewRef}
      >
        <div className="flex flex-row">
          {/* Upper Section */}
          <div
            className="p-2 flex items-center justify-center flex-col mb-8 mr-8 transform w-[50vw]"
            style={{
              transform:
                scrollY <= 1080
                  ? `translateY(0%)`
                  : scrollY >= 1560
                  ? `translateY(-${480}px)`
                  : `translateY(-${scrollY - 1080}px)`,
            }}
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
            className="flex flex-row transform w-[50vw]"
            style={{
              transform:
                scrollY <= 1000
                  ? `translateX(0%)`
                  : scrollY >= 3000
                  ? `translateX(-2000px)`
                  : `translateX(-${scrollY - 1000}px)`,
            }}
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
    </motion.div>
  );
}
