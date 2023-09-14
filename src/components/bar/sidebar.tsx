import React, { useState } from "react";
import { Header, Nav, LinkTag, SvgBox } from "./style";
import Logo from "../../images/main-logo.png";
import Logo2 from "../../images/main-logo2.png";
import NavbarMenu2 from "../../images/navbarMenu2.png";
import NavbarMenue from "../../images/navbarMenu.png";
import Close from "../../images/close.png";
import { Link } from "gatsby";
function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);


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
        staggerChildren: 0.1,
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
    <div className="App relative">
      <Header className={` ${isOpen ? 'bg-primary-navbarBg' : hovered ? 'bg-white' : ' bg-primary-navbarBg'} `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex justify-between px-5 md:px-[105px] items-center">
          <Link to="/">
            <img
              src={isOpen ? Logo : hovered ? Logo2 : Logo}
              alt=""
            />
          </Link>
          <div className=" z-[300] "
            onClick={() => { setIsOpen(!isOpen); setIsClicked(!isClicked) }}
          >
            <div
              className=" mr-4"
              variants={iconVariants}
              animate={isOpen ? "opened" : "closed"}
              whileHover={{ scale: 1.4 }}

            >
              {isOpen ? <img
                src={isOpen ? Close : hovered ? NavbarMenu2 : NavbarMenue}
                alt=""
                className="w-[24px] h-[24px] cursor-pointer"
              /> :
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" viewBox="0 0 28 24" fill="none">
                  <rect width="28" height="4" rx="2" fill={hovered ? '#0B234C' : 'white'} />
                  <rect y="10" width="14" height="4" rx="2" fill={hovered ? '#0B234C' : 'white'} />
                  <rect y="20" width="22" height="4" rx="2" fill={hovered ? '#0B234C' : 'white'} />
                </svg>}
            </div>
            <div className={`absolute top-4 right-32 z-[-10] ${isClicked ? 'clickedImage' : 'hoverImages'}`}>
              {<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 96 96" fill="none">
              </svg>}

            </div>
            <div className={` flex flex-row justify-center  `}>

              <Nav
                initial={false}
                variants={menuVariants}
                animate={isOpen ? "opened" : "closed"}
              >
                <Link to="/services"><LinkTag variants={linkVariants}>SERVICES</LinkTag></Link>
                <Link to="/portfolio"> <LinkTag variants={linkVariants}>PORTFOLIO</LinkTag></Link>
                <Link to="/aboutUs"><LinkTag variants={linkVariants}>ABOUT US</LinkTag></Link>
                <Link to="/careers"> <LinkTag variants={linkVariants}>CAREER</LinkTag></Link>
                <Link to="/contactUs"><LinkTag variants={linkVariants}>CONTACT US</LinkTag></Link>
                <Link to="/blogs"><LinkTag variants={linkVariants}>BLOG</LinkTag></Link>
              </Nav>
            </div>
          </div >
        </div >
      </Header >

    </div >
  );
}

export default SideBar;
