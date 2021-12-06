import React from "react";

const Header = () => {
  return (
    <div id="home">
      <div
        className="carousel slide"
        data-bs-ride="carousel"
        id="carouselExampleIndicators"
      >
        <div className="carousel-indicators" style={{ bottom: "50px" }}>
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
      </div>
    </div>
  );
};

export default Header;
