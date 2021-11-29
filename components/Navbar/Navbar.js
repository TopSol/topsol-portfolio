import React, { useState } from "react";
import Image from "next/dist/client/image";
import logo from "../../assets/images/logo.png";
import styles from "../../styles/Layout.module.css";
import styles2 from "../../styles/Home.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles2.header}>
      <nav className={styles.navbar}>
        <a href="#home" className={styles.navlogo}>
          <Image src={logo} alt="logo_img" />
        </a>
        <ul
          className={
            isOpen === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <li className={styles.navitem}>
            <a
              href="/#home"
              className={
                isOpen === false
                  ? styles.navlink
                  : styles.navlink + " " + styles.active
              }
              onClick={openMenu}
            >
              Home
            </a>
          </li>
          <li className={styles.navitem}>
            <a
              href="#service"
              className={
                isOpen === false
                  ? styles.navlink
                  : styles.navlink + " " + styles.active
              }
              onClick={openMenu}
            >
              Service
            </a>
          </li>
          <li className={styles.navitem}>
            <a
              href="#portfolio"
              className={
                isOpen === false
                  ? styles.navlink
                  : styles.navlink + " " + styles.active
              }
              onClick={openMenu}
            >
              Works
            </a>
          </li>
          <li className={styles.navitem}>
            <a
              href="#testimonial"
              className={
                isOpen === false
                  ? styles.navlink
                  : styles.navlink + " " + styles.active
              }
              onClick={openMenu}
            >
              Testimonial
            </a>
          </li>
          <li className={styles.navitem}>
            <a
              href="#contact"
              className={
                isOpen === false
                  ? styles.navlink
                  : styles.navlink + " " + styles.active
              }
              onClick={openMenu}
            >
              Contact
            </a>
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
