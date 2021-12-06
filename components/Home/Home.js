import React from "react";
import Image from "next/image";
import stab1 from "../../assets/images/stab1.png";
import services from "../../assets/data/services/services";

function Home() {
  return (
    <section id="service" className="service">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="main_service_area">
              <div className="main_service_content">
                <div className="service_tabe">
                  {/* <!-- Nav tabs --> */}
                  <ul className="service_tabe_menu nav nav-tabs" role="tablist">
                    {services.map((services) => (
                      <li role="presentation" className="active">
                        <a
                          href="#webdesign"
                          aria-controls="webdesign"
                          role="tab"
                          data-toggle="tab"
                        >
                          <i className="fa fa-map-marker"></i> <br />
                          {services.name}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* <!-- Tab panes --> */}
                  {/* <div className="tab-content">
                    <div
                      role="tabpanel"
                      className="tab-pane active"
                      id="webdesign"
                    >
                      <div className="single_service_tab">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="single_tab_content">
                              <div className="head_title">
                                <h3>WEB DESIGN One</h3>
                                <div className="separator"></div>
                              </div>
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using
                                'Content here, content here', making it look
                                like readable English. Many desktop publishing
                                packages and web page editors now use Lorem
                                Ipsum as their default model text, and a search
                                for 'lorem ipsum'{" "}
                              </p>

                              <a href="" className="btn btn-primary">
                                LEARN MORE
                              </a>
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="single_tab_img">
                              <Image src={stab1} alt="stab1_img" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
