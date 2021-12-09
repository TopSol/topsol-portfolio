import React from "react";
import Image from "next/image";
import ProgressBar from 'react-bootstrap/ProgressBar'
import abright from "../../assets/images/abright.png";

import about from "../../assets/data/about/about";

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row">
          <div className="main_about_area sections">
            <div className="col-sm-12">
              <div className="main_about_content">
                <div className="row">
                  <div
                    className="col-sm-7 wow fadeInRight"
                    data-wow-duration="700ms"
                  >
                    <div className="single_about_right_content">
                      <div className="head_title">
                        <h3 style={{fontWeight: "bold"}}>ABOUT LOGIC</h3>
                        <div className="separator"></div>
                      </div>
                      {about.map((about, index) => (
                        <div className="single_about" key={index}>
                          <div className="single_ab_icon">
                            <div className="ab_border_right"></div>
                            <i className="fa fa-coffee"></i>
                          </div>
                          <div className="single_ab_text">
                            <h3>{about.name}</h3>
                            <p>{about.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-sm-5">
                    <div
                      className="single_about_left_img margin-top-40 text-center wow fadeInLeft"
                      data-wow-duration=".6s"
                    >
                      <Image src={abright} alt="abright_img" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="about_skill_area">
                    <div className="col-sm-6">
                      <div className="about_tabe">
                        {/* <!-- Nav tabs --> */}
                        <ul className="about_tabe_menu" role="tablist">
                          <li role="presentation" className="active">
                            <a
                              href="#mission"
                              aria-controls="mission"
                              role="tab"
                              data-toggle="tab"
                            >
                              OUR MISSION
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#goal"
                              aria-controls="goal"
                              role="tab"
                              data-toggle="tab"
                            >
                              OUR GOAL
                            </a>
                          </li>
                          <li role="presentation">
                            <a
                              href="#achivements"
                              aria-controls="achivements"
                              role="tab"
                              data-toggle="tab"
                            >
                              ACHIVEMENTS
                            </a>
                          </li>
                        </ul>

                        {/* <!-- Tab panes --> */}
                        <div className="tab-content">
                          <div
                            // role="tabpanel"
                            className="tab-pane active"
                            id="mission"
                          >
                            <div className="single_about_tab">
                              <p style={{ color: "black" }}>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                type a scrambled it to make a type specimen
                                book. It has survived not only five centuries,
                              </p>

                              <div className="row">
                                <div className="col-sm-6">
                                  <ul className="single_ab_mision">
                                    <li>
                                      <i className="fa fa-check-square"></i> We
                                      just want to love our client
                                    </li>
                                    <li>
                                      <i className="fa fa-check-square"></i> We
                                      just want to love our client
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm-6">
                                  <ul className="single_ab_mision">
                                    <li>
                                      <i className="fa fa-check-square"></i> We
                                      just want to love our client
                                    </li>
                                    <li>
                                      <i className="fa fa-check-square"></i> We
                                      just want to love our client
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div role="tabpanel" className="tab-pane" id="goal">
                            <div className="single_about_tab">
                              <p style={{ color: "black" }}>
                                222Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley type a scrambled it to make a type
                                specimen book. It has survived not only five
                                centuries,
                              </p>

                              <div className="row">
                                <div className="col-sm-6">
                                  <ul className="single_ab_mision">
                                    <li>
                                      <i className="fa fa-check-square"></i> We
                                      just want to love our client
                                    </li>
                                    <li>
                                      <i className="fa fa-check-square"></i> We
                                      just want to love our client
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm-6">
                                  <ul className="single_ab_mision">
                                    <li>
                                      <i className="fa fa-check-square"></i> We
                                      just want to love our client
                                    </li>
                                    <li>
                                      <i className="fa fa-check-square"></i> We
                                      just want to love our client
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            role="tabpanel"
                            className="tab-pane"
                            id="achivements"
                          >
                            <div className="single_about_tab">
                              <p style={{ color: "black" }}>
                                333Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley type a scrambled it to make a type
                                specimen book. It has survived not only five
                                centuries,
                              </p>

                              <div className="row">
                                <div className="col-sm-6">
                                  <ul className="single_ab_mision">
                                    <li>
                                      <i className="fa fa-check-square"></i> We
                                      just want to love our client
                                    </li>
                                    <li>
                                      <i className="fa fa-check-square"></i> We
                                      just want to love our client
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-sm-6">
                                  <ul className="single_ab_mision">
                                    <li>
                                      <i className="fa fa-check-square"></i> We
                                      just want to love our client
                                    </li>
                                    <li>
                                      <i className="fa fa-check-square"></i> We
                                      just want to love our client
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="about_skill">
                        <div className="skillbar" data-percent="79%">
                          <div className="skillbar-title">
                            <h3 className="blue">PHOTOSHOP</h3>
                            <span className="sm-text">79%</span>
                          </div>
                          <ProgressBar striped variant="warning" now={79} style={{ height: "8px" }} />
                        </div>

                        <div className="skillbar" data-percent="90%">
                          <div className="skillbar-title">
                            <h3 className="blue">HTML/CSS</h3>
                            <span className="sm-text">90%</span>
                          </div>
                          <ProgressBar striped variant="warning" now={90} style={{ height: "8px" }} />
                        </div>

                        <div className="skillbar" data-percent="69%">
                          <div className="skillbar-title">
                            <h3 className="blue">JAVASCRIPT</h3>
                            <span className="sm-text">69%</span>
                          </div>
                          <ProgressBar striped variant="warning" now={69} style={{ height: "8px" }} />
                        </div>

                        <div className="skillbar" data-percent="92%">
                          <div className="skillbar-title">
                            <h3 className="blue">WORDPRESS</h3>
                            <span className="sm-text">92%</span>
                          </div>
                          <ProgressBar striped variant="warning" now={92} style={{ height: "8px" }} />
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
    </section>
  );
}

export default About;
