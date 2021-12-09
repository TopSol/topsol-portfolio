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
                    {services.map((services, index) => (
                      <li key={index} role="presentation" className="active">
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

                  {/* <!-- Tab panes -->  */}
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
