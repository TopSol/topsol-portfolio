import React from "react";
import Home from "../Home/Home";

const Header = () => {
  return (
    <div id="home">
      <div
        className="carousel slide"
        data-bs-ride="carousel"
        id="carouselExampleIndicators"
      >
        <div className="carousel-indicators">
          <button
            aria-label="Slide 1"
            className="active"
            data-bs-slide-to="0"
            data-bs-target="#carouselExampleIndicators"
            type="button"
          ></button>{" "}
          <button
            aria-label="Slide 2"
            data-bs-slide-to="1"
            data-bs-target="#carouselExampleIndicators"
            type="button"
          ></button>{" "}
          <button
            aria-label="Slide 3"
            data-bs-slide-to="2"
            data-bs-target="#carouselExampleIndicators"
            type="button"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              alt="..."
              className="d-block w-100"
              src="https://i.postimg.cc/LsTXqTNZ/1.jpg"
            />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ color: "white" }}>
                Web Design
              </h5>
              <p className="animated bounceInLeft d-none d-md-block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
              <p className="animated bounceInRight">
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="..."
              className="d-block w-100"
              src="https://i.postimg.cc/C1rx7Kyh/2.jpg"
            />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ color: "white" }}>
                Graphics Design
              </h5>
              <p className="animated bounceInLeft d-none d-md-block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
              <p className="animated bounceInRight">
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              alt="..."
              className="d-block w-100"
              src="https://i.postimg.cc/c4nL7ZFW/3.jpg"
            />
            <div className="carousel-caption">
              <h5 className="animated bounceInRight" style={{ color: "white" }}>
                Photography
              </h5>
              <p className="animated bounceInLeft d-none d-md-block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, nulla, tempore. Deserunt excepturi quas vero.
              </p>
              <p className="animated bounceInRight">
                <a href="#">Learn More</a>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          data-bs-slide="prev"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
          ></span>{" "}
          <span className="visually-hidden">Previous</span>
        </button>{" "}
        <button
          className="carousel-control-next"
          data-bs-slide="next"
          data-bs-target="#carouselExampleIndicators"
          type="button"
        >
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
          ></span>{" "}
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Home />
    </div>
  );
};

export default Header;
