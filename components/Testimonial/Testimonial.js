import React from "react";

function Testimonial() {
  return (
    <div id="testimonial" className="body">
      <div className="container my-5 justify-content-center">
        <div className="head_title my-0">
          <h3 className="">What People Say</h3>
          <div className="separator"></div>
        </div>
        <div className=" row justify-content-center ">
          <div className="col-lg-6 col-12 mt-5 ">
            <div className="card mt-3 ">
              <div className="layer"></div>
              <div className="content">
                <div className="card-header text-center border-0">
                  <div className="row justify-content-center my-4">
                    <div className="col">
                      <div className="d-flex flex-lg-row flex-column-reverse no-gutters justify-content-center">
                        <div className="col-3 text-right">
                          <img
                            className="img-fluid"
                            id="quotes"
                            src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png"
                            width="110"
                            height="110"
                          />
                        </div>
                        <div className="col pr-lg-5">
                          <img
                            className=" img-1 mr-lg-5 "
                            src="https://i.imgur.com/nUNhspp.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center pb-3 ">
                  <div className="row justify-content-center">
                    <div className="col text-center justify-content-center ">
                      <p className="bold text-center px-md-3">
                        {" "}
                        Growth of data is exponential and our ability to get
                        true insight that matter was challenging with
                        classNameic, traditional Bi tools. Vertix allow us to
                        unserstand what is driving exceptions so we can take
                        action Growth of data our ability to get true insight
                        that matter was challenging with classNameic.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="mt-auto mb-4" />
                <div className="card-footer text-center border-0 mt-0 pt-0 mb-3">
                  <div className="row text-center name mt-auto ">
                    <div className="col">
                      <h4 className="mb-0 Elizabeth">Sophia Smith</h4>{" "}
                      <small className="mt-0 text-white">Hair Specialist</small>
                      <p>
                        <span className="fa fa-star text-warning mr-1"></span>
                        <span className="fa fa-star text-warning mr-1"></span>
                        <span className="fa fa-star text-warning mr-1"></span>
                        <span className="fa fa-star-half-o text-warning mr-1"></span>
                        <span className="fa fa-star-o text-warning mr-1"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 mt-5 ">
            <div className="card mt-3 ">
              <div className="layer"></div>
              <div className="content">
                <div className="card-header text-center border-0">
                  <div className="row justify-content-center my-4">
                    <div className="col">
                      <div className="d-flex flex-lg-row flex-column-reverse no-gutters justify-content-center">
                        <div className="col-3 text-right">
                          <img
                            className="img-fluid"
                            id="quotes"
                            src="https://img.icons8.com/ultraviolet/40/000000/quote-left.png"
                            width="110"
                            height="110"
                          />
                        </div>
                        <div className="col pr-lg-5">
                          <img
                            className=" img-1 mr-lg-5 "
                            src="https://i.imgur.com/HjKTNkG.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body text-center pb-3 ">
                  <div className="row justify-content-center">
                    <div className="col text-center justify-content-center ">
                      <p className="bold text-center px-md-3">
                        {" "}
                        Growth of data is exponential and our ability to get
                        true insight that matter was challenging with
                        classNameic, traditional Bi tools. Vertix allow us to
                        unserstand what is driving exceptions so we can take
                        action Growth of data our ability to get true insight
                        that matter was challenging with classNameic.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="mt-auto mb-4" />
                <div className="card-footer text-center border-0 mt-0 pt-0 mb-3">
                  <div className="row text-center name mt-auto ">
                    <div className="col">
                      <h4 className="mb-0 Elizabeth">SMike Housin</h4>{" "}
                      <small className="mt-0 text-white">
                        Director of Marketing
                      </small>
                      <p>
                        <span className="fa fa-star text-warning mr-1"></span>
                        <span className="fa fa-star text-warning mr-1"></span>
                        <span className="fa fa-star-o text-warning mr-1"></span>
                        <span className="fa fa-star-o text-warning mr-1"></span>
                        <span className="fa fa-star-o text-warning mr-1"></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
