import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimateHr from "../../../components/animatedLine/AnimateHr";
import { reviews } from "./data";

export default function CardSection() {
  const [ref, inView] = useInView();
  const [scrollDirection, setScrollDirection] = useState("down");
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > scrollY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div
      className="h-screen flex justify-center items-center bg-gradient-to-b from-[#0B234C] to-[#00B8F1] py-4"
      ref={ref}
    >
      <div className="flex flex-row">
        {/* Upper Section */}
        <div
          className="p-2 flex items-center justify-center flex-col mb-8 mr-8"
          style={{
            transform:
              scrollDirection === "up"
                ? `translateY(-${scrollY}px)`
                : `translateY(${scrollY}px)`,
          }}
        >
          <h1 className="mb-10 text-4xl font-bold mt-16 max-w-[300px] text-white">
            Build Smarter Not From Scratch
          </h1>
          <div className="w-[150px]">
            <AnimateHr bgColor={"white"} />
          </div>
        </div>

        {/* Lower Section (Horizontal Scroll) */}
        <div
          className="flex flex-row overflow-hidden"
          style={{
            transform:
              scrollDirection === "up"
                ? `translateX(-${scrollY}px)`
                : `translateX(${scrollY}px)`,
          }}
        >
          {[...reviews, ...reviews, ...reviews, ...reviews, ...reviews]?.map(
            (review, index) => {
              return (
                <img
                  key={index}
                  src="https://images.unsplash.com/photo-1653953893860-b8f756596132?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  height={700}
                  width={500}
                  className={`ml-8`}
                  alt="Avatar"
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
