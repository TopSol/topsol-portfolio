import React, { useState } from "react";
import { Header, Nav, LinkTag, SvgBox } from "./style";
import Logo from "../../images/main-logo.png";
import Logo2 from "../../images/main-logo2.png";
import NavbarMenu2 from "../../images/navbarMenu2.png";
import NavbarMenue from "../../images/navbarMenu.png";
import Close from "../../images/close.png";
function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const iconVariants = {
    opened: {
      rotate: 135,
    },
    closed: {
      rotate: 0,
    },
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    closed: {
      top: "-90vh",
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50,
    },
    closed: {
      opacity: 0,
      y: 0,
    },
  };
 

  return (
    <div className="App">
      <Header className= {`hover:bg-white `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}  
        >
        <div className="flex justify-between px-5 md:px-[105px] items-center">
        <img
        src={hovered ? Logo2 : Logo}
        alt=""
      />

          <div
            className="z-50 "
            variants={iconVariants}
            animate={isOpen ? "opened" : "closed"}
            whileHover={{ scale: 1.4 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
        src={hovered ? NavbarMenu2 : NavbarMenue}
        alt=""
      />
          </div>
        </div>
      </Header>

      <Nav
        initial={false}
        variants={menuVariants}
        animate={isOpen ? "opened" : "closed"}
      >
        <LinkTag variants={linkVariants}>SERVICES</LinkTag>
        <LinkTag variants={linkVariants}>PORTFOLIO</LinkTag>
        <LinkTag variants={linkVariants}>ABOUT US</LinkTag>
        <LinkTag variants={linkVariants}>CAREER</LinkTag>
        <LinkTag variants={linkVariants}>CONTACT US</LinkTag>
        <LinkTag variants={linkVariants}>BLOG</LinkTag>
      </Nav>
    </div>
  );
}

export default SideBar;
