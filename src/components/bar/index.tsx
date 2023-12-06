import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuItem";
import { Navigation } from "./Navigation";
import "./style.css";
import Logo from "../../images/TOPSOL LOGO-01-01 2.svg";
import { Link, navigate } from "gatsby";

const sidebar = {
  open: (width = 1000) => ({
    clipPath: `circle(${width * 2 + 200}px at 85% 40px)`,
    transition: {
      type: "spring",
      stiffness: 10,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 85% 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

export const ToggleBar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      toggleOpen(0);
    });
  });
  return (
    <div className={` ${"bg-white"} flex lg:hidden`}>
      <Link to="/">
        <div className=" w-[100%] pb-4 pl-2 ">
          <img src={Logo} alt="" className=" W-[100%]" />
        </div>
      </Link>
      <motion.nav
        className={`navbar ${isOpen && ""
          } transition-bg duration-500 ease-in-out`}
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className="background sm:top-[18px] top-[10px] relative"
          variants={sidebar}
        />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </div>
  );
};
