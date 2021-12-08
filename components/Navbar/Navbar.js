import React, { useState } from "react";
import Image from "next/dist/client/image";
import logo from "../../assets/images/logo.png";
import styles from "../../styles/Layout.module.css";
import styles2 from "../../styles/Home.module.css";

import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles2.header}>
      <nav className={styles.navbar}>
        <Link
          href="#home"
          className={styles.navlogo}
          to="home"
          smooth={true}
          duration={1000}
          onClick={() => scroll.scrollToTop()}
        >
          <Image src={logo} alt="logo_img" style={{width: "100%"}} />
        </Link>
        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <li className={styles.navitem}>
            <Link
              href="#home"
              className={
                isOpen === false
                  ? styles.navlink
                  : styles.navlink + " " + styles.active
              }
              onClick={openMenu}
              to="home"
              smooth={true}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link
              href="#service"
              className={
                isOpen === false
                  ? styles.navlink
                  : styles.navlink + " " + styles.active
              }
              onClick={openMenu}
              to="service"
              smooth={true}
              duration={1000}
            >
              Service
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link
              href="#portfolio"
              className={
                isOpen === false
                  ? styles.navlink
                  : styles.navlink + " " + styles.active
              }
              onClick={openMenu}
              to="portfolio"
              smooth={true}
              duration={1000}
            >
              Works
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link
              href="#testimonial"
              className={
                isOpen === false
                  ? styles.navlink
                  : styles.navlink + " " + styles.active
              }
              onClick={openMenu}
              to="testimonial"
              smooth={true}
              duration={1000}
            >
              Testimonial
            </Link>
          </li>
          <li className={styles.navitem}>
            <Link
              href="#contact"
              className={
                isOpen === false
                  ? styles.navlink
                  : styles.navlink + " " + styles.active
              }
              onClick={openMenu}
              to="contact"
              smooth={true}
              duration={1000}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
