import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MenuItem = ({ itemName }) => {
  return (
    <motion.li
      className="linkLi"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={itemName.link} className="flex">
        {itemName.name}
      </Link>
    </motion.li>
  );
};

export const Navigation = () => {
  const itemNames = [
    { name: "SERVICES", link: "/services" },
    { name: "PORTFOLIO", link: "/portfolio" },
    { name: "ABOUT US", link: "/aboutUs" },
    { name: "CAREER", link: "/careers" },
    { name: "CONTACT US", link: "/contactUs" },
    { name: "BLOG", link: "/blogs" },
  ]; // Replace with your item names

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.ul variants={variants} className="linkUi">
      {itemNames.map((itemName, index) => (
        <MenuItem itemName={itemName} key={index} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
