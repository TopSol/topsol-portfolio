import React from "react";
import Image from "next/image";
import featureslid from "../../assets/images/featureslid1.jpg";

function Feature() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="main_features_area sections">
              <div className="head_title">
                <h3>FEATURED WORK</h3>
                <div className="separator"></div>
              </div>
              <div className="row">
                <div className="main_features_content">
                  <div className="col-sm-6">
                    <div className="single_features_slide">
                      <div className="single_ft_s_item">
                        <Image src={featureslid} alt="featureslid_img" />
                      </div>
                      {/* <div className="single_ft_s_item">
                        <Image src={featureslid} alt="featureslid_img" />
                      </div>
                      <div className="single_ft_s_item">
                        <Image src={featureslid} alt="stab1_img" />
                      </div> */}
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="single_features_text">
                      <h4>HAND WITH A WATCH</h4>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled{" "}
                      </p>

                      <ul>
                        <li>
                          <span>Client:</span> Dadit Lorm
                        </li>
                        <li>
                          <span>Deivered:</span> Sunday, 15 August, 2015
                        </li>
                        <li>
                          <span>Tags:</span> Hand, Watch, Black, Tree
                        </li>
                      </ul>

                      <a href="" className="btn">
                        LAUNCH NOW
                      </a>
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

export default Feature;
