import React from "react";
import portfolio from "../../assets/data/portfolio/portfolio";

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio lightbg">
      <div className="container">
        <div className="row">
          <div className="main_portfolio sections">
            <div className="col-sm-4">
              <div className="head_title">
                <h3 style={{fontWeight: "bold"}}>LATEST PROJECT</h3>
                <div className="separator"></div>
              </div>
            </div>
            <div className="col-sm-6 col-sm-offset-2 tab">
              <div id="filters" className="toolbar mb2 mt2">
                <button
                  className="btn-md fil-cat filter active"
                  href="show-all"
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
            <div style={{ clear: "both" }}></div>
            <div id="portfoliowork">
              {portfolio.map((portfolio) => (
                <div className="single_portfolio tile" id="show-all">
                  <img src={portfolio.img} alt="" />
                  <div className="grid_item_overlay g_overlay_1">
                    <a href="assets/images/pf1.jpg" className="portfolio-img">
                      {" "}
                      <i className={portfolio.icon}></i>
                    </a>
                    <a href="#">
                      {" "}
                      <i className={portfolio.icon1}></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ clear: "both" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
