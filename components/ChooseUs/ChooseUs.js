import React from "react";
import Image from "next/image";
import choose from "../../assets/images/choose.png";

import chooseus from "../../assets/data/chooseUs/ChooseUs";

function ChooseUs() {
  return (
    <section id="choose" className="choose ">
      <div className="container">
        <div className="row">
          <div className="main_choose sections">
            <div className="col-sm-6">
              <div className="head_title">
                <h3>WHY CHOOSE US</h3>
                <div className="separator"></div>
              </div>
              <div className="single_choose">
                <div className="single_choose_acording">
                  <div
                    className="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    {chooseus.map((choose) => (
                      <div className="panel panel-default">
                        <div
                          className="panel-heading"
                          role="tab"
                          id="headingOne"
                        >
                          <h4 className="panel-title">
                            <a
                              role="button"
                              data-toggle="collapse"
                              data-parent="#accordion"
                              href="#collapseOne"
                              aria-expanded="false"
                              aria-controls="collapseOne"
                              className="collapsed"
                            >
                              <i className={choose.icon}></i>
                              {choose.name}
                            </a>
                          </h4>
                        </div>
                        <div
                          id="collapseOne"
                          className="panel-collapse collapse in"
                          role="tabpanel"
                          aria-labelledby="headingOne"
                          aria-expanded="false"
                          style={{ height: "auto" }}
                        >
                          <div className="panel-body">{choose.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="single_choose">
                <div className="single_choose_img">
                  <Image src={choose} alt="choose_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
