import React from "react";
import services from "../../assets/data/otherServices/OtherServices";

function Services() {
  return (
    <section id="othersservice" className="othersservice">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="main_othersservice_area sections">
              <div className="row">
                <div className="head_title">
                  <h3 className="m-4" style={{fontWeight: "bold"}}>OTHER SERVICES</h3>
                  <div className="separator"></div>
                </div>

                <div className="main_othersservice_content">
                  {services.map((services) => (
                    <div className="col-sm-4">
                      <div className="single_othersservice">
                        <div className="single_othersservice_icon">
                          <h4>
                            <span>
                              <i className={services.icon}></i>
                            </span>{" "}
                            {services.name}
                          </h4>
                        </div>
                        <div className="single_othersservice_content">
                          <p style={{ color: "black" }}>
                            {services.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
