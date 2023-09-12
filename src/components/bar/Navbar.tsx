import React, { useState } from "react";
import NavbarItems from "./NavbarItems";
import { motion, AnimatePresence } from "framer-motion";
import NavbarMenu from "../../images/navbarMenu2.png";
const Navbar = () => {
  const [isToggled, setToggle] = useState(false);

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="">
        <button className="btn" onClick={() => setToggle(!isToggled)}>
          <img src={NavbarMenu} alt="" />
        </button>
      </div>
      <div className="">
        <AnimatePresence>
          {isToggled && (
            <motion.div
              className="navbar"
              initial="hidden"
              animate={isToggled ? "visible" : "hidden"}
              exit="hidden"
              variants={navContainer}
            >
              <NavbarItems isToggled={isToggled} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
