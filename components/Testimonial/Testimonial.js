import React from "react";

function Testimonial() {
  return (
    // <section id="testimonial" class="testimonial">
    //   <div class="video_overlay">
    //     <div class="container">
    //       <div class="row">
    //         <div class="main_testimonial sections text-center">
    //           <div class="col-md-12" data-wow-delay="0.2s">
    //             <div class="main_teastimonial_slider text-center">
    //               <div class="single_testimonial">
    //                 <div class="row">
    //                   <div class="col-sm-8 col-sm-offset-2">
    // <i class="fa fa-quote-left"></i>
    // <p>
    //   There are many variations of passages of Lorem Ipsum
    //   available, but the majority have suffered alteration
    //   in some form, by injected humour, or randomised words
    //   which don't look even slightly believable. If you are
    //   going to use a passage of Lorem Ipsum, you need to be
    //   sure there isn't anything embarrassing hidden in the
    //   middle of text. All the Lorem ww
    // </p>
    // <div class="single_test_author">
    //   <h4>
    //     JANE GALADRIEL <span> -- CEO TENGKUREP</span>
    //   </h4>
    // </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               {/* <div class="single_testimonial">
    //                 <div class="row">
    //                   <div class="col-sm-8 col-sm-offset-2">
    //                     <i class="fa fa-quote-left"></i>
    //                     <p>
    //                       There are many variations of passages of Lorem Ipsum
    //                       available, but the majority have suffered alteration
    //                       in some form, by injected humour, or randomised words
    //                       which don't look even slightly believable. If you are
    //                       going to use a passage of Lorem Ipsum, you need to be
    //                       sure there isn't anything embarrassing hidden in the
    //                       middle of text. All the Lorem
    //                     </p>
    //                     <div class="single_test_author">
    //                       <h4>
    //                         JANE GALADRIEL <span> -- CEO TENGKUREP</span>
    //                       </h4>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div> */}
    //               {/* <div class="single_testimonial">
    //                 <div class="row">
    //                   <div class="col-sm-8 col-sm-offset-2">
    //                     <i class="fa fa-quote-left"></i>
    //                     <p>
    //                       There are many variations of passages of Lorem Ipsum
    //                       available, but the majority have suffered alteration
    //                       in some form, by injected humour, or randomised words
    //                       which don't look even slightly believable. If you are
    //                       going to use a passage of Lorem Ipsum, you need to be
    //                       sure there isn't anything embarrassing hidden in the
    //                       middle of text. All the Lorem
    //                     </p>
    //                     <div class="single_test_author">
    //                       <h4>
    //                         JANE GALADRIEL <span> -- CEO TENGKUREP</span>
    //                       </h4>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div> */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <>
      <section class="py-5 text-center">
        <div class="container py-4 text-white">
          <header>
            <h1 class="display-4">Bootstrap carousel quotes</h1>
            <p class="font-italic mb-1">
              Create an elegant quote carousel using default Bootstrap 4
              carousel component.
            </p>
            <p class="font-italic">
              Snippet by
              <a class="text-white" href="https://bootstrapious.com/">
                <u>Bootstrapious</u>
              </a>
            </p>
          </header>
        </div>
      </section>

      <section class="pb-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-xl-8 mx-auto">
              <div class="p-5 bg-white shadow rounded">
                <div
                  class="carousel slide"
                  id="carouselExampleIndicators"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators mb-0">
                    <li
                      class="active"
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div class="carousel-inner px-5 pb-4">
                    <div class="carousel-item active">
                      <div class="media">
                        <img
                          class="rounded-circle img-thumbnail"
                          src="https://bootstrapious.com/i/snippets/sn-slider-quote/avatar-1.jpg"
                          alt=""
                          width="75"
                        />
                        <div class="media-body ml-3">
                          <blockquote class="blockquote border-0 p-0">
                            <p class="font-italic lead">
                              {" "}
                              <i class="fa fa-quote-left mr-3 text-success"></i>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                            <footer class="blockquote-footer">
                              Someone famous in
                              <cite title="Source Title">Source Title</cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="media">
                        <img
                          class="rounded-circle img-thumbnail"
                          src="https://bootstrapious.com/i/snippets/sn-slider-quote/avatar-3.jpg"
                          alt=""
                          width="75"
                        />
                        <div class="media-body ml-3">
                          <blockquote class="blockquote border-0 p-0">
                            <p class="font-italic lead">
                              {" "}
                              <i class="fa fa-quote-left mr-3 text-success"></i>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                            <footer class="blockquote-footer">
                              Someone famous in
                              <cite title="Source Title">Source Title</cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="media">
                        <img
                          class="rounded-circle img-thumbnail"
                          src="https://bootstrapious.com/i/snippets/sn-slider-quote/avatar-2.jpg"
                          alt=""
                          width="75"
                        />
                        <div class="media-body ml-3">
                          <blockquote class="blockquote border-0 p-0">
                            <p class="font-italic lead">
                              {" "}
                              <i class="fa fa-quote-left mr-3 text-success"></i>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                            </p>
                            <footer class="blockquote-footer">
                              Someone famous in
                              <cite title="Source Title">Source Title</cite>
                            </footer>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    class="carousel-control-prev width-auto"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <i class="fa fa-angle-left text-dark text-lg"></i>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next width-auto"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <i class="fa fa-angle-right text-dark text-lg"></i>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonial;
