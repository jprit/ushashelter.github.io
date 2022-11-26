import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export default class Homepaint extends React.Component {

    componentDidMount() {

        document.querySelector(".service_detail_view").addEventListener("click", function(){
            // add service_detail_active in service_detail 
            // add service_detail_popup_ovelay_active in service_detail_popup_ovelay
            // add d-none in poppup_close

            document.querySelector('.service_detail').classList.add("service_detail_active");
            document.querySelector('.service_detail_popup_ovelay').classList.add("service_detail_popup_ovelay_active");
            document.querySelector('.poppup_close').classList.toggle("d-none");

        });
        
        document.querySelector(".poppup_close").addEventListener("click", function(){

            document.querySelector('.service_detail').classList.remove("service_detail_active");
            document.querySelector('.service_detail_popup_ovelay').classList.remove("service_detail_popup_ovelay_active");
            document.querySelector('.poppup_close').classList.toggle("d-none");
            
        });

    }

  render() {
    return (
      <>

        <div className="service_page_header mt-5">
          <div className="container-fluid w-1200 px-0">
            <div className="row">
              <div className="col-md-12 px-0">

              </div>


            </div>
          </div>
        </div>

        <div className="service_page_hero">
          <div className="container px-0">
            <div className="row">
              <div className="col-md-5 service_page_title">
                <a href="" className="">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill=""
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 .97l9 2.25V12a7 7 0 01-2.8 5.6L12 22.25 5.8 17.6A7 7 0 013 12V3.22l9-2.25zm4.36 6.262L11 11.698 8.64 9.732l-1.28 1.536 3 2.5a1 1 0 001.28 0l6-5-1.28-1.536z"
                      fill="#0F0F0F"
                    ></path>
                  </svg>
                  <span> UC Safe</span>
                </a>
                <span>Home Painting</span>
              </div>

              <div className="col-md-7">

                    <Carousel>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://thumbs.dreamstime.com/b/colorful-abstract-acrylic-painting-natural-dynamic-mixture-colors-flow-background-30555980.jpg"
                          alt="First slide"
                        />
                        <Carousel.Caption>
                          <h3>First slide label</h3>
                          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                      </Carousel.Item>
                      <Carousel.Item>
                        <img
                          className="d-block w-100"
                          src="https://discountartncraftwarehouse.com.au/dac/assets/media/pros-cons-acrylic-paint.jpg"
                          alt="Second slide"
                        />

                        <Carousel.Caption>
                          <h3>Second slide label</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                      </Carousel.Item>

                    </Carousel>
              </div>
            </div>

            <div className="col-md-12  px-0 hr_service_page">
              <hr />
            </div>
          </div>
        </div>

        <div className="service_providers">
          <div className="container  px-0">
            <div className="row service_providers_inner">
              <div className="col-md-12 ">
                <h2>Home Painting</h2>
              </div>
            </div>

            <div className="row my-5">
              <div className="col-md-4 service_provide_detail">
                <p className="service_provider_title">Painting & Waterproofing</p>
                <p className="service_rating">
                  <span className="">
                    <i className="fa-solid fa-star"></i>
                  </span>{" "}
                  4.80 (2.6k)
                </p>
                <p className="service_rate">Starts at &#8377;99</p>
                <hr />
                <ul className="service_provider_points">
                  <li>
                    Consultation followed by quick & cost-effective painting
                    service
                  </li>
                  <li>
                    Best for painting your rental property during move-in /
                    move-out
                  </li>
                </ul>
                <span className="service_detail_view" href="">
                  View Detail
                </span>
              </div>

              <div className="col-md-1">
                <img
                  src="https://www.bergerpaints.com/blog/wp-content/uploads/2019/05/house_wall_painting.png"
                  alt=""
                />
              </div>
              <div className="col-md-1"></div>

              <div className="col-md-4 service_provide_detail">
                <p className="service_provider_title">Painting & Waterproofing</p>
                <p className="service_rating">
                  <span className="">
                    <i className="fa-solid fa-star"></i>
                  </span>{" "}
                  4.80 (2.6k)
                </p>
                <p className="service_rate">Starts at &#8377;99</p>
                <hr />
                <ul className="service_provider_points">
                  <li>
                    Consultation followed by quick & cost-effective painting
                    service
                  </li>
                  <li>
                    Best for painting your rental property during move-in /
                    move-out
                  </li>
                </ul>
                <span className="service_detail_view" href="">
                  View Detail
                </span>
              </div>

              <div className="col-md-1">
                <img
                  src="https://www.bergerpaints.com/blog/wp-content/uploads/2019/05/house_wall_painting.png"
                  alt=""
                />
              </div>
              <div className="col-md-1"></div>


            </div>


          </div>
        </div>

        <div className="service_detail_popup">
          <button className="poppup_close d-none">&#9587;</button>
          <div className="service_detail_popup_ovelay">
            <div className="service_detail">
            
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://thumbs.dreamstime.com/b/colorful-abstract-acrylic-painting-natural-dynamic-mixture-colors-flow-background-30555980.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://discountartncraftwarehouse.com.au/dac/assets/media/pros-cons-acrylic-paint.jpg"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>

              </Carousel>

              <div className="service_info_popup">
                <div className="service_info_popup_inner1">
                  <h3>Painting & Waterproofing</h3>
                  <p className="service_rating">
                    <span className="">
                      <i className="fa-solid fa-star"></i>
                    </span>{" "}
                    4.80 (2.6k)
                  </p>
                </div>

                <div className="col-md-12  px-0">
                  <hr />
                </div>

                <div className="service_info_popup_inner2">
                  <h4 className="service_inner_title">Expert Consultation</h4>
                  <p className="service_rating m-0">
                    <span className="">
                      <i className="fa-solid fa-star"></i>
                    </span>{" "}
                    4.80 (2.6k)
                  </p>
                  <p className="service_rate">
                    {" "}
                    &#8377;99 <i className="dot fa-solid fa-circle"></i> 60 min
                  </p>
                  <div className="col-md-12  px-0">
                    <hr />
                  </div>
                  <p className="service_inner_more">
                    Customised plan & quote for all needs: Waterproofing,
                    repair, painting etc
                  </p>
                </div>
              </div>

              <div className="col-md-12  px-0 hr_service_page">
                <hr />
              </div>

              <img
                className="w-100"
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1660928405418-92d485.jpeg"
                alt=""
              />

              <div className="col-md-12  px-0 hr_service_page">
                <hr />
              </div>

              <img
                className="w-100"
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1661520136199-b6a96e.jpeg"
                alt=""
              />

              <div className="col-md-12  px-0 hr_service_page">
                <hr />
              </div>

              <img
                className="w-100"
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1663915161439-e6610b.jpeg"
                alt=""
              />

              <div className="col-md-12  px-0 hr_service_page">
                <hr />
              </div>

              <img
                className="w-100"
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1659853299612-ee5e02.png"
                alt=""
              />

              <div className="col-md-12  px-0 hr_service_page">
                <hr />
              </div>

              <img
                className="w-100"
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1659853607058-c53031.png"
                alt=""
              />

              <div className="col-md-12  px-0 hr_service_page">
                <hr />
              </div>

              <img
                className="w-100"
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1659853308103-48ccb5.png"
                alt=""
              />

              <div className="col-md-12  px-0 hr_service_page">
                <hr />
              </div>

              <img
                className="w-100"
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1659853301817-4b9124.png"
                alt=""
              />

              <div className="col-md-12  px-0 hr_service_page">
                <hr />
              </div>

              <img
                className="w-100"
                src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_600,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1649316130556-938fe5.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>



      </>
    );
  }
}
