// import React, { useState } from "react";
// import Image from "next/dist/client/image";
// import logo from "../../assets/images/logo.png";
// import styles from "../../styles/Layout.module.css";
// import styles2 from "../../styles/Home.module.css";

// import { Link } from "react-scroll";
// import { animateScroll as scroll } from "react-scroll";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const openMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className={styles2.header}>
//       <nav className={styles.navbar}>
//         <Link
//           href="#home"
//           className={styles.navlogo}
//           to="home"
//           smooth={true}
//           duration={1000}
//           onClick={() => scroll.scrollToTop()}
//         >
//           <Image src={logo} alt="logo_img" style={{width: "100%"}} />
//         </Link>
//         <ul
//           className={
//             isOpen === false
//               ? styles.navmenu
//               : styles.navmenu + " " + styles.active
//           }
//         >
//           <li className={styles.navitem}>
//             <Link
//               href="#home"
//               className={
//                 isOpen === false
//                   ? styles.navlink
//                   : styles.navlink + " " + styles.active
//               }
//               onClick={openMenu}
//               to="home"
//               smooth={true}
//               duration={1000}
//             >
//               Home
//             </Link>
//           </li>
//           <li className={styles.navitem}>
//             <Link
//               href="#service"
//               className={
//                 isOpen === false
//                   ? styles.navlink
//                   : styles.navlink + " " + styles.active
//               }
//               onClick={openMenu}
//               to="service"
//               smooth={true}
//               duration={1000}
//             >
//               Service
//             </Link>
//           </li>
//           <li className={styles.navitem}>
//             <Link
//               href="#portfolio"
//               className={
//                 isOpen === false
//                   ? styles.navlink
//                   : styles.navlink + " " + styles.active
//               }
//               onClick={openMenu}
//               to="portfolio"
//               smooth={true}
//               duration={1000}
//             >
//               Works
//             </Link>
//           </li>
//           <li className={styles.navitem}>
//             <Link
//               href="#testimonial"
//               className={
//                 isOpen === false
//                   ? styles.navlink
//                   : styles.navlink + " " + styles.active
//               }
//               onClick={openMenu}
//               to="testimonial"
//               smooth={true}
//               duration={1000}
//             >
//               Testimonial
//             </Link>
//           </li>
//           <li className={styles.navitem}>
//             <Link
//               href="#contact"
//               className={
//                 isOpen === false
//                   ? styles.navlink
//                   : styles.navlink + " " + styles.active
//               }
//               onClick={openMenu}
//               to="contact"
//               smooth={true}
//               duration={1000}
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//         <button
//           className={
//             isOpen === false
//               ? styles.hamburger
//               : styles.hamburger + " " + styles.active
//           }
//           onClick={openMenu}
//         >
//           <span className={styles.bar}></span>
//           <span className={styles.bar}></span>
//           <span className={styles.bar}></span>
//         </button>
//       </nav>
//     </header>
//   );
// }

// export default Navbar;

















import React, { useState } from "react";
import Image from "next/dist/client/image";
import logo from "../../assets/images/logo.png";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div className="body">
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            CodeBucks
            <i className="fa fa-code"></i>
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default Navbar;
