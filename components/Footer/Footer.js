import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <>
      <div id="footer" className="footer_widget">
        <div className="video_overlay">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="main_widget">
                    <div className="col-sm-3 col-xs-12">
                      <div
                        className="single_widget wow fadeIn"
                        data-wow-duration="800ms"
                      >
                        <div className="footer_logo">
                          <Image src={logo} alt="logo_img" />
                        </div>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.{" "}
                        </p>
                      </div>
                    </div>

                    <div className="col-sm-3  col-xs-12">
                      <div
                        className="single_widget wow fadeIn"
                        data-wow-duration="800ms"
                      >
                        <div className="footer_title">
                          <h4>SITEMAP</h4>
                          <div className="separator"></div>
                        </div>
                        <ul>
                          <li>
                            <a href="">Services</a>
                          </li>
                          <li>
                            <a href="">About Us</a>
                          </li>
                          <li>
                            <a href="">Our Team</a>
                          </li>
                          <li>
                            <a href="">Portfolio</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-sm-3  col-xs-12">
                      <div
                        className="single_widget wow fadeIn"
                        data-wow-duration="800ms"
                      >
                        <div className="footer_title">
                          <h4>ACHIVES</h4>
                          <div className="separator"></div>
                        </div>
                        <ul>
                          <li>
                            <a href="">January 2015</a>
                          </li>
                          <li>
                            <a href="">February 2015</a>
                          </li>
                          <li>
                            <a href="">March 2015</a>
                          </li>
                          <li>
                            <a href="">April 2015</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-sm-3 col-xs-12">
                      <div
                        className="single_widget wow fadeIn"
                        data-wow-duration="800ms"
                      >
                        <div className="footer_title">
                          <h4>NEWSLETTER</h4>
                          <div className="separator"></div>
                        </div>

                        <div className="footer_subcribs_area">
                          <p>
                            Sign up for our mailing list to get latest updates
                            and offers.
                          </p>
                          <form
                            className="navbar-form navbar-left"
                            role="search"
                          >
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                              />
                              <button
                                type="submit"
                                className="submit_btn"
                              ></button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main_footer">
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <div className="copyright_text">
                      <p className=" wow fadeInRight" data-wow-duration="1s">
                        Made with <i className="fa fa-heart"></i> by{" "}
                        <a target="_blank" href="http://www.topsol.org/">
                          Topsol
                        </a>
                        2022. All Rights Reserved
                      </p>
                    </div>
                  </div>

                  <div className="col-sm-6 col-xs-12">
                    <div className="flowus">
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-youtube"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link className="scrollup">
        <Link
          href="home"
          smooth={true}
          duration={1000}
          onClick={() => scroll.scrollToTop()}
        >
          <i className="fa fa-chevron-up"></i>
        </Link>
      </Link>
    </>
  );
}

export default Footer;
