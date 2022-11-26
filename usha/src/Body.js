
// import './Style.css';
import React from "react";
import $ from "jquery";
import Footer from "./common/Footer.js";


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class Body extends  React.Component{

  service_appliance_repair = [
    {
      'link' : "/Service/Airconditioner",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_ef2b79d0.png",
      'title' : "Air Conditioner"
    },
    {
      'link' : "/Service/LaptopRepair",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1650860279596-353c58.jpeg",
      'title' : "Laptop Repair (at home)"
    },
    {
      'link' : "/Service/Microwave",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_c008bfc0.png",
      'title' : "Microwave"
    },
    {
      'link' : "/Service/Refrigerator",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_bf5acc80.png",
      'title' : "Refrigerator"
    },
    {
      'link' : "/Service/WashingMachine",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_b78221c0.png",
      'title' : "Washing Machine"
    },
    {
      'link' : "/Service/Water_Purifier",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_bbb8c690.png",
      'title' : "Water Purifier"
    },
    {
      'link' : "/Service/Chimney",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_c1082e60.png",
      'title' : "Chimney"
    },
    {
      'link' : "/Service/Geyser",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_c0667020.png",
      'title' : "Geyser"
    },
    {
      'link' : "/Service/Television",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_b8652ec0.png",
      'title' : "Television"
    },
    {
      'link' : "/Service/Air_Purifier",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1635829954373-d05590.jpeg",
      'title' : "Air purifier"
    }
  ];

  clean_pest_control = [
    {
      'link' : "/Service/Bathroom_and_kitchen_cleaning",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_ef2b79d0.png",
      'title' : "Bathroom and Kitchen Cleaning"
    },
    {
      'link' : "/Service/Cockroach_Ant_General_Pest_Control",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_ef2b79d0.png",
      'title' : "Cockroach, Ant & General Pest Control"
    },
    {
      'link' : "/Service/Full_Home_Cleaning",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/images/growth/home-screen/1650860279596-353c58.jpeg",
      'title' : "Full Home Cleaning"
    },
    {
      'link' : "/Service/Sofa_Carpet_Cleaning",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_c008bfc0.png",
      'title' : "Sofa & Carpet Cleaning"
    },
    {
      'link' : "/Service/Disinfection_Services",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_bf5acc80.png",
      'title' : "Disinfection Services"
    },
    {
      'link' : "/Service/Bed_Bugs_Control",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_b78221c0.png",
      'title' : "Bed Bugs Control"
    },
    {
      'link' : "/Service/Termite_Control",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_bbb8c690.png",
      'title' : "Termite Control"
    }
  ];

  home_repair_start = [
    {
      'link' : "/Service/Pepperfry_Installation",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_b58359a0.jpeg",
      'title' : "Pepperfry Installation"
    },
    {
      'link' : "/Service/Electricians",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_c008bfc0.png",
      'title' : "Electricians"
    },
    {
      'link' : "/Service/Plumber",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_c008bfc0.png",
      'title' : "Plumber"
    },
    {
      'link' : "/Service/Carpenters",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_c008bfc0.png",
      'title' : "Carpenters"
    },
    {
      'link' : "/Service/Laptop_repair_Athome",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_b78221c0.png",
      'title' : "Laptop Repair (at home)"
    },
    {
      'link' : "/Service/Furniture_making",
      'img_src' : "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep/t_medium_res_category/categories/category_v2/category_bbb8c690.png",
      'title' : "Furniture Making, Upholstery & Polish"
    }

  ];

  constructor() {
      super()
      this.state={
          sar: this.service_appliance_repair,
          loading: false,
          cpc: this.clean_pest_control,
          hrs:this.home_repair_start
      }

  }

  componentDidMount() {
    
    document.querySelector(".appliances_repair").addEventListener("click", function(){
    
        document.querySelector(".appliance_repair_right_sidebar").style.width= "25vw";
        document.querySelector(".appliance_repair_overlay").style.width= "100vw";

    });

    document.querySelector(".appliance_repair_overlay").addEventListener("click", function(){

      document.querySelector(".appliance_repair_right_sidebar").style.width= "0vw";
      document.querySelector(".appliance_repair_overlay").style.width= "0vw";

    });


    document.querySelector(".cleaning_pest").addEventListener("click", function(){
      
        document.querySelector(".cleaning_pest_right_sidebar").style.width= "25vw";
        document.querySelector(".cleaning_pest_overlay").style.width= "100vw";

    });

    document.querySelector(".cleaning_pest_overlay").addEventListener("click", function(){
        document.querySelector(".cleaning_pest_right_sidebar").style.width= "0vw";
        document.querySelector(".cleaning_pest_overlay").style.width= "0vw";
    });

    document.querySelector(".home_repair").addEventListener("click", function(){
      
        document.querySelector(".home_repair_right_sidebar").style.width= "25vw";
        document.querySelector(".home_repair_overlay").style.width= "100vw";

    });

    document.querySelector(".home_repair_overlay").addEventListener("click", function(){
        document.querySelector(".home_repair_right_sidebar").style.width= "0vw";
        document.querySelector(".home_repair_overlay").style.width= "0vw";
    });

    

    document.querySelector(".search-location").addEventListener("click", function(){
        // console.log('search location');
        $(".location_info,.point").toggle();
    });

    document.querySelector(".services").addEventListener("click", function(){
        console.log(this.getAttribute("redirectpage"));
    }); 

    // console.log('asdad');
    
    var arr = ['kandivali','borivali'];
    

    document.querySelector(".search_for_place").addEventListener("keyup", function(){
      // console.log('keyup working for place');
      let text = "";
      var b = [];
      for (let i=0; i<arr.length; i++){
          if (arr[i].match($(this).val())) {
              // alert(arr[i]);
              b.push(arr[i]);
          } 
      }

      b.forEach(location_display);
      
      function location_display(item, index) {
          text += '<div className="oninput_loc_res_child"><p>'+item+'</p><span>mumbai</span></div>'; 
          // console.log(text);
      }

      $('.oninput_loc_res').html(text);


      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  }); 

  }

  render() {

    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (

      <>

      <div className="site_hero">
        <div className="site_hero_overlay">
          <div className="container-fluid w-1200 px-0">
            <div className="row">
              <div className="col-md-12 px-0">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="#">
                    <img src="uclogo.png" alt="" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="/Service">
                          Service
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/blog">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link reg_prof px-0" href="#">
                          Register As a Professional
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Login/Sign up
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="container-fluid hero_content w-1200">
            <div className="row">
              <div className="col-md-12 mb-4">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item" aria-current="page">
                      Home
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Delhi-Ncr
                    </li>
                  </ol>
                </nav>

                <h1 className="text-center ">Home services, on demand.</h1>
              </div>

              <div className="col-md-2"></div>

              <div className="col-md-2">
                <div className="search-location d-flex justify-content-center">
                  <div className="row">
                    <div className="col-md-2 d-flex align-items-center">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div className="col-md-9 d-flex align-items-center">
                      <span className="choose_location">Choose </span>
                      <i className="fa-solid fa-chevron-down ml-2"></i>
                    </div>
                  </div>
                </div>

                <div className="point"></div>
                <div className="location_info">
                  <div className="heading_location_info">
                    <div className="row my-2">
                      <div className="loc_text col-md-6 d-flex align-items-center">
                        {/* <i className="fa-solid fa-location-dot"></i> */}
                        <span>Current Location</span>
                      </div>
                      <div className="col-md-6 d-flex align-items-center">
                        <span>
                          Detect Using GPS{" "}
                          <i className="fa-solid fa-chevron-right"></i>
                        </span>
                      </div>
                    </div>


                  </div>
                  <hr />

                  <div className="location_search">
                    <div className="row">
                      <div className="col-md-2 d-flex align-items-center ml-2">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </div>
                      <div className="col-md-8 pl-0">
                        <input
                          className="search_for_place"
                          type="text"
                          placeholder="Search For Soc/Apt"
                        />
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="location_search_result">
                    <div className="row">
                      <div className="col-md-1">
                        <i className="fa-solid fa-location-dot"></i>
                      </div>
                      <div className="col-md-11 oninput_loc_res">
                        <div className="oninput_loc_res_child">
                          <p>Kandivali</p>
                          <span>mumbai</span>
                        </div>

                        <div className="oninput_loc_res_child">
                          <p>Kandivali</p>
                          <span>mumbai</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="search-services d-flex ">
                  <div className="row w-100">
                    <div className="col-md-1 d-flex align-items-center">

                      <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className="col-md-10 d-flex align-items-center">

                      <input type="text" placeholder="Services" />
                    </div>
                  </div>

                </div>

                <div className="service_suggestion">
                  <a href="">Men's Therapies,</a>
                  <a href="">Home Painting,</a>
                  <a href="">Electricians</a> etc
                </div>
              </div>

              <div className="col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="all_services mb-5">
        <div className="container">

          <div className="row service_row d-flex justify-content-center text-center align-items-center">
            <div className="col-md-2 services appliances_repair">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png"
                alt=""
              />
              <p>Appliance Repair</p>
            </div>

            <div className="col-md-2 services">
              <a href="/Service/Homepaint">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png"
                alt=""
              />
              <p>Home Painting</p>
              </a>
            </div>

            <div className="col-md-2 services cleaning_pest">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png"
                alt=""
              />
              <p>Cleaning & Pest</p>
            </div>
            <div className="col-md-2 services">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png"
                alt=""
              />
              <p>Disinfection</p>
            </div>
            <div className="col-md-2 services home_repair">
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png"
                alt=""
              />
              <p>Home Repairs</p>
            </div>



            {/* appliance repair start */}

            <div className="appliance_repair_overlay"></div>

            <div className="appliance_repair_right_sidebar text-left">
              <div className="row  appliance_repair align-items-center">
                <div className="col-md-2 text-center">
                  <i className="fa-solid fa-arrow-right close_drawer"></i>
                </div>
                <div className="col-md-8">
                  <h3 className="head_appliance_repair m-auto">
                    Appliance Repair
                  </h3>
                </div>
              </div>

              <hr />

              <div className="row m-0 align-items-center services_list">

                {this.state.sar.map((element)=>{
                  return <a href={element.link}>

                          <div className="col-md-12 d-flex align-items-center">
                            <div className="col-md-2 appliance_image">
                              <img
                                src={element.img_src}
                                alt=""
                              />
                            </div>
                            <div className="col-md-8 appliance_title">
                              {element.title}
                            </div>
                          </div>

                        </a>
                })}

              </div>

            </div>

            {/* appliance repair end */}


            {/* cleaning pest start */}

            <div className="cleaning_pest_overlay"></div>

            <div className="cleaning_pest_right_sidebar text-left">
              <div className="row cleaning_pest align-items-center">
                <div className="col-md-2 text-center">
                  <i className="fa-solid fa-arrow-right close_drawer"></i>
                </div>
                <div className="col-md-8">
                  <h3 className="head_cleaning_pest m-auto">
                    Professional Cleaning Services
                  </h3>
                </div>
              </div>

              <hr />

              <div className="row m-0 align-items-center services_list">
              
              {this.state.cpc.map((element)=>{
                  return <a href={element.link}>

                        <div className="col-md-12 list_data d-flex align-items-center">
                          <div className="col-md-2 appliance_image">
                            <img
                              src={element.img_src}
                              alt=""
                            />
                          </div>
                          <div className="col-md-8 appliance_title">
                            {element.title}
                          </div>
                        </div>

                        </a>
                })}

              </div>
            </div>

            {/* cleaning pest end */}



            {/* home repair start */}

            <div className="home_repair_overlay"></div>

            <div className="home_repair_right_sidebar text-left">
              <div className="home_repair row align-items-center">
                <div className="col-md-2 text-center">
                  <i className="fa-solid fa-arrow-right close_drawer"></i>
                </div>
                <div className="col-md-8">
                  <h3 className="head_home_repair m-auto">
                    Please Select
                  </h3>
                </div>
              </div>

              <hr />

              <div className="row m-0 align-items-center services_list">


              {this.state.hrs.map((element)=>{
                  return <a href={element.link}>

                          <div className="col-md-12 list_data d-flex align-items-center">
                            <div className="col-md-2 appliance_image">
                              <img
                                src={element.img_src}
                                alt=""
                              />
                            </div>
                            <div className="col-md-8 appliance_title">
                            {element.title}
                            </div>
                          </div>

                        </a>
                })}

              </div>
            </div>

            {/* home repair end */}

          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <p className="carousel_main_title">Cleaning & Pest Control </p>
            </div>

            <div className="col-md-12">

              <Carousel responsive={responsive}>
                  <div className="carousel_slides">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg" />
                    <p className="carousel_card_title">Sofa & Carpet Cleaning</p>
                  </div>

                  <div className="carousel_slides">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg" />
                    <p className="carousel_card_title">Full Home Cleaning</p>
                  </div>

                  <div className="carousel_slides">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg" />
                    <p className="carousel_card_title">Sofa & Carpet Cleaning</p>
                  </div>

                  <div className="carousel_slides">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg" />
                    <p className="carousel_card_title">Cockroach, Ant & General Pest Control</p>
                  </div>

                  <div className="carousel_slides">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632490257439-ef28d2.jpeg" />
                    <p className="carousel_card_title">Bed Bugs Control</p>
                  </div>

                  <div className="carousel_slides">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632474326407-0aae21.jpeg" />
                    <p className="carousel_card_title">Termite Control</p>
                  </div>


                  
              </Carousel>


            </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <p className="carousel_main_title">Home Repairs</p>
            </div>

            <div className="col-md-12">

              <Carousel responsive={responsive}>

                  <div className="carousel_slides">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg" />
                    <p className="carousel_card_title">Furniture Making, Upholstery & Polish</p>
                  </div>

                  <div className="carousel_slides">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg" />
                    <p className="carousel_card_title">Carpenters</p>
                  </div>

                  <div className="carousel_slides">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg" />
                    <p className="carousel_card_title">Electricians</p>
                  </div>

                  <div className="carousel_slides">
                    <img src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg" />
                    <p className="carousel_card_title">Plumbers</p>
                  </div>
                  
              </Carousel>


            </div>
        </div>
      </div>


      <Footer />

      </>

    )}

};


