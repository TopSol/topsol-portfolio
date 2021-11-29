import React from "react";

function ContactUs() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="contact_contant sections">
                <div className="col-sm-6">
                  <div className="main_contact_info">
                    <div className="head_title">
                      <h3>CONTACT INFO</h3>
                      <div className="separator"></div>
                    </div>
                    <div className="row">
                      <div className="contact_info_content">
                        <div className="col-sm-12">
                          <div className="single_contact_info">
                            <div className="single_info_icon">
                              <i className="fa fa-home"></i>
                            </div>
                            <div className="single_info_text">
                              <h3>VISIT US</h3>
                              <p>
                                20, 2 Elizabeth ST, Melbourne, Victoria 3000
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single_contact_info">
                            <div className="single_info_icon">
                              <i className="fa fa-envelope-o"></i>
                            </div>
                            <div className="single_info_text">
                              <h3>MAIL US</h3>
                              <p>support@yourmail.com</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single_contact_info">
                            <div className="single_info_icon">
                              <i className="fa fa-mobile"></i>
                            </div>
                            <div className="single_info_text">
                              <h3>CALL US</h3>
                              <p>+(100) 123 4567 890</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="single_contact_info">
                            <div className="single_info_icon">
                              <i className="fa fa-clock-o"></i>
                            </div>
                            <div className="single_info_text">
                              <h3>WORK HOUR</h3>
                              <p>Mon - Sat: 08 Am - 17 Pm</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="head_title">
                    <h3>LEAVE MESSAGE</h3>
                    <div className="separator"></div>
                  </div>
                  <div className="single_contant_left">
                    <form action="#" id="formid">
                      {/* <div className="col-lg-8 col-md-8 col-sm-10 col-lg-offset-2 col-md-offset-2 col-sm-offset-1"> */}
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="First Name"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Last Name"
                              required=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              required=""
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                              required=""
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          rows="8"
                          placeholder="Message"
                        ></textarea>
                      </div>

                      <div className="">
                        <input
                          type="submit"
                          value="Submit"
                          className="btn btn-primary"
                        />
                      </div>
                      {/* </div> */}
                    </form>
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

export default ContactUs;
