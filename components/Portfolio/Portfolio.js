import React from "react";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio lightbg">
      <div className="container">
        <div className="row">
          <div className="main_portfolio sections">
            <div className="col-sm-4">
              <div className="head_title">
                <h3>LATEST PROJECT</h3>
                <div className="separator"></div>
              </div>
            </div>
            <div className="col-sm-6 col-sm-offset-2 tab">
              <div id="filters" className="toolbar mb2 mt2">
                <button
                  className="btn-md fil-cat filter active"
                  href=""
                  data-filter="all"
                >
                  SHOW ALL
                </button>
                <button
                  className="btn-md fil-cat filter"
                  data-rel="web"
                  data-filter=".web"
                >
                  PHOTOGRAPHY
                </button>
                <button
                  className="btn-md fil-cat filter"
                  data-rel="flyers"
                  data-filter=".flyers"
                >
                  BRANDING
                </button>
                <button
                  className="btn-md fil-cat filter"
                  data-rel="bcards"
                  data-filter=".bcards"
                >
                  GRAPHIC DESIGN
                </button>
                <div className="separator2"></div>
              </div>
            </div>
            {/* <img src="pf9.jpg" alt="" /> */}

            <div style={{ clear: "both" }}></div>
            <div id="portfoliowork">
              <div className="single_portfolio tile scale-anm web grid-item-width2">
                <img src="pf1.jpg" alt="" />
                <div className="grid_item_overlay g_overlay_1">
                  <a href="assets/images/pf1.jpg" className="portfolio-img">
                    {" "}
                    <i className="fa fa-link"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="single_portfolio tile scale-anm bcards">
                <img src="pf2.jpg" alt="" />
                <div className="grid_item_overlay">
                  <a href="assets/images/pf2.jpg" className="portfolio-img">
                    {" "}
                    <i className="fa fa-link"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="single_portfolio tile scale-anm web ">
                <img src="pf3.jpg" alt="" />
                <div className="grid_item_overlay">
                  <a href="assets/images/pf3.jpg" className="portfolio-img">
                    {" "}
                    <i className="fa fa-link"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="single_portfolio tile scale-anm web">
                <img src="pf4.jpg" alt="" />
                <div className="grid_item_overlay">
                  <a href="assets/images/pf4.jpg" className="portfolio-img">
                    {" "}
                    <i className="fa fa-link"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="single_portfolio tile scale-anm bcards">
                <img src="pf8.jpg" alt="" />
                <div className="grid_item_overlay">
                  <a href="assets/images/pf8.jpg" className="portfolio-img">
                    {" "}
                    <i className="fa fa-link"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="single_portfolio tile scale-anm web">
                <img src="pf9.jpg" alt="" />
                <div className="grid_item_overlay">
                  <a href="assets/images/pf9.jpg" className="portfolio-img">
                    <i className="fa fa-link"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="single_portfolio tile scale-anm flyers">
                <img src="pf5.jpg" alt="" />
                <div className="grid_item_overlay g_overlay_2">
                  <a href="assets/images/pf5.jpg" className="portfolio-img">
                    {" "}
                    <i className="fa fa-link"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="single_portfolio tile scale-anm flyers">
                <img src="pf6.jpg" alt="" />
                <div className="grid_item_overlay g_overlay_1">
                  <a href="assets/images/pf6.jpg" className="portfolio-img">
                    {" "}
                    <i className="fa fa-link"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>

              <div className="single_portfolio tile scale-anm bcards">
                <img src="pf7.jpg" alt="" />
                <div className="grid_item_overlay">
                  <a href="assets/images/pf7.jpg" className="portfolio-img">
                    {" "}
                    <i className="fa fa-link"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
              <div className="single_portfolio tile scale-anm flyers">
                <img src="pf6.jpg" alt="" />
                <div className="grid_item_overlay g_overlay_1">
                  <a href="assets/images/pf6.jpg" className="portfolio-img">
                    {" "}
                    <i className="fa fa-link"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>

              <div className="single_portfolio tile scale-anm bcards">
                <img src="pf7.jpg" alt="" />
                <div className="grid_item_overlay">
                  <a href="assets/images/pf7.jpg" className="portfolio-img">
                    {" "}
                    <i className="fa fa-link"></i>
                  </a>
                  <a href="#">
                    {" "}
                    <i className="fa fa-search"></i>
                  </a>
                </div>
              </div>
            </div>

            <div style={{ clear: "both" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
