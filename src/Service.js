import React from "react";
import $ from "jquery";
import Carousel from 'react-bootstrap/Carousel';

export default class Service extends React.Component {

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
                {/* <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="#">
                    <img src="urban.svg" alt="" />
                  </a>

                  <div className="service_address">
                    <p>Main City Name</p>
                    <p>Specific Address</p>
                  </div>

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
                    className="service_page_nav collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <a className="nav-link" href="/">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Bookings
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav> */}
              </div>

              {/* <div className="col-md-12 p-0 breadcrumb justify-content-start">
                <ul className="service_page_breadcrumb mt-1">
                  <li>
                    <a href="">Home</a>
                    <span>&#47;</span>
                  </li>
                  <li>
                    <a href="">City</a>
                    <span>&#47;</span>
                  </li>
                  <li>
                    <a href="">Home Painting in City</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>

        <div className="service_page_hero">
          <div className="container px-0">
            <div className="row">
              <div className="col-md-5 service_page_title">
                <a href="" className="d-flex badge align-items-center">
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

              {/* <div className="col-md-12  px-0 hr_service_page">
                <hr />
              </div> */}
            </div>

            {/* <div className="row about_service">
              <div className="col-md-12">
                <h3>About Home Painting</h3>
                <h4>House Painters in Delhi NCR, India</h4>
                <p className="about_service_description">
                  Delhi NCR, India, being the national capital, sees a large
                  population of people come here to study or to work. Most look
                  for a house that is nice and well-maintained and that can make
                  them feel at home. This is one of the factors that makes house
                  painting an essential task. House painting can breathe new
                  life onto the walls of your space, and make your house feel
                  like a home. The same is true for commercial buildings and
                  offices. However, wall painting is not as easy a task as it
                  may seem but requires the expertise and skills of dedicated
                  and experienced house painters in Delhi NCR, India to ensure
                  that the work done is of top quality.
                </p>
                <h4>Advantages of Hiring a Professional House Painter</h4>
                <p>
                  Home wall painting may seem like an easy task but it is
                  something that is best left to a professional painter to
                  handle. Here’s how a professional painting contractor will
                  help you:
                </p>
                <ol>
                  <li>
                    Experience with prep work Painting is more than just
                    splashing paint on your walls. There’s a lot of prior work
                    that goes into painting, like sanding, filling putty,
                    priming and so on. And this is something that a professional
                    house painter in Delhi NCR, India will have expert knowledge
                    about and experience in.
                  </li>
                  <li>
                    Expertise in different paints and finishes Whether we talk
                    about interior house paints or exterior house paints, it is
                    important to remember that a paint that looks like a perfect
                    pick on a rendered computer image can look completely
                    different (and unsuitable) in reality and in different
                    finishes. Professional painters in Delhi NCR, India know a
                    lot about paint finishes and their effect on different
                    surfaces, and will, therefore, be able to guide you best in
                    your selection.
                  </li>
                  <li>
                    Efficient and effective work with no wastage Professional
                    painting services have been doing their job for so long that
                    they’re experts in determining how much paint is required
                    for a project. This ensures that there is no paint wastage,
                    thus, reducing your exterior painting costs as well. In
                    fact, house painters in Delhi NCR, India give you a proper
                    house painting cost estimate beforehand itself.
                  </li>
                  <li>
                    Own equipment and gear Besides just the paints and brushes,
                    other tools required for painting include patching tools,
                    paint trays, ladders, rollers, mechanical sprays and so on.
                    One also requires expensive safety gear, especially while
                    working with outside house paints. Since professional
                    painters in Delhi NCR, India have their own equipment, you
                    don’t need to invest in them.
                  </li>
                  <li>
                    Neatness and cleanliness If you’re getting an interiors
                    paint job done, then there’s a high risk that your floor and
                    furniture can get splattered with paint too. Professional
                    house painters will take all the necessary measures to keep
                    your house safe from spills and marks.
                  </li>
                  <li>
                    Time saving Since professional building painting contractors
                    work many jobs, they stick to the time schedule given to you
                    and deliver results in a quick turnaround time. More
                    importantly, since they do a great job in the first time
                    round itself, you can be sure of saving lots of precious
                    time.
                  </li>
                </ol>

                <h4>What Painting Services Does Urban Company Offer?</h4>

                <ol>
                  <li>
                    Residential Painting 2BHK, 3BHK, 4BHK, 5BHK & more than 5
                    BHK.
                  </li>
                  <li>
                    Commercial Painting Offices, retail spaces, hospitals,
                    hotels, educational spaces, lifestyle spaces and others.
                  </li>
                </ol>

                <h4>Why Hire from Urban Company?</h4>

                <ol>
                  <li>
                    Experienced professionals We take only the most experienced
                    painting contractors on board to ensure high-quality
                    services, such that your satisfaction level is always at
                    100%.
                  </li>
                  <li>
                    Dedicated supervision by project manager At Urban Company, a
                    qualified project manager is assigned to oversee all the
                    tasks to be completed by the house painters. He or she will
                    coordinate activities and schedules and ensure quality.
                  </li>
                  <li>
                    Protection of furniture Our list of top house painters in
                    Delhi NCR, India ensure that the area of work is cleared of
                    items as much as possible and the rest is covered with drop
                    cloths. This ensures that your furniture, electrical points,
                    doors and electronics and masked and remain protected from
                    spills.
                  </li>
                  <li>
                    No hidden charges At Urban Company, the pricing is
                    transparent and quoted upfront according to the amount of
                    work involved, levels of preparation work, types of paints
                    used, etc. You can, therefore, look at costs quoted by
                    different house painters in Delhi NCR, India at Urban
                    Company and choose accordingly.
                  </li>
                  <li>
                    Time suitability When you try to place a request, you will
                    find that there are multiple time slots available in a day
                    during the week, especially if you book a few days in
                    advance. Therefore, you can choose according to your
                    convenience.
                  </li>
                  <li>
                    On-time completion With the help of a day-to-day plan and
                    through constant tracking of progress, our painters ensure
                    that the project is completed on time.
                  </li>
                  <li>
                    100% genuine products Our painters use original paints from
                    the top brands and ensure that the products are opened right
                    in front of you to ensure credibility. They use vacuum
                    sanding machines to eliminate dust and rollers to ensure
                    perfect finish.
                  </li>
                  <li>
                    Hassle-free experience From quality painting to post-service
                    clean-up, our house painters ensure that your experience is
                    smooth and trouble-free, making Urban Company a one-stop
                    solution for all your painting needs.
                  </li>
                </ol>

                <h4>What is Involved in the Process of Painting?</h4>

                <ol>
                  <li>
                    Fresh painting (recommended on walls never painted or
                    severely damaged) Your walls would require sanding with the
                    help of electronic vacuum sanding machines; 2 coats of putty
                    base to cover cracks and holes; 2 coats of primer to ensure
                    uniform application and longer lifespan of paints; and
                    finally 2-3 coats of paint. The last coat is applied with
                    roller so that there are no brush marks.
                  </li>
                  <li>
                    Repainting (recommended for regular painting purposes) This
                    would require detailed wall putty repair, followed by just 1
                    coat of primer and then 2-3 coats of paint.
                  </li>

                  <li>
                    Whitewash (ideal for rented places) This would entail just
                    basic wall putty repair and then 2-3 coats of paint.
                  </li>
                </ol>

                <h4>Ideas for Paints According to the Room</h4>

                <p>
                  Here are our recommendations for the type of paint to use for
                  each kind of room. The colours and shades are, of course, your
                  choice.
                </p>

                <ol>
                  <li>
                    Living Room/Drawing Room/Hall The H in a BHK is usually the
                    largest room in an urban home. It is also where you will be
                    entertaining guests. This room establishes the identity of
                    your home and how visitors perceive your entire house.
                    Hence, you should choose a paint that is 100% acrylic,
                    preferably latex acrylic. As far as finishes are concerned,
                    most work well, though people usually choose eggshell while
                    satin brings out the best in the colour. Try to avoid gloss
                    finishes.
                  </li>
                  <li>
                    Kitchens Indian cooking generates a lot of oily vapour that
                    no exhaust fan can truly eliminate. There are also bound to
                    be frequent spills, which the walls around may feel the
                    brunt of. To make your kitchen walls easy to clean, pick
                    latex enamel. Having said that, latex acrylic paints are
                    designed to be washed and could provide more options.
                    Semi-gloss or gloss finishes are the best choice as they are
                    easily washable.
                  </li>
                  <li>
                    Bathrooms Most people choose to use tiles but some do love a
                    good paint in the bathroom. In any case, your walls need to
                    be water-resistant and durable. So, the paint should be
                    latex enamel or washable acrylic. Semi-gloss or gloss finish
                    work well. You could also try satin though it may be more
                    expensive.
                  </li>
                  <li>
                    Bedrooms Bedrooms generally see less traffic than the rest
                    of the home. Moreover, you want walls without any glare,
                    whether to you like to read, watch television, or work on
                    your laptop while in bed. These are the same characteristics
                    you want in a guestroom too. So, pick a paint that is 100%
                    acrylic latex with matte emulsions for trims. Flat, matte,
                    eggshell or satin are the best choices.
                  </li>
                  <li>
                    Children’s Rooms For older children, you could use the same
                    paint as your bedroom or guest room. However, young children
                    tend to draw on walls, spill food, and generally treat the
                    walls like a blackboard. So, try and look for low emission
                    paints. The term to look for is Low-VOC, where VOC stands
                    for Volatile Organic Compounds. With all that in mind, pick
                    a paint that is 100% washable acrylic latex or even latex
                    enamel and low-VOC. Satin or higher sheen paints ensure that
                    it is easily washable.
                  </li>
                  <li>
                    Hallways and Corridors The right choice varies based on the
                    amount of traffic in these places. For high traffic
                    hallways, pick semi-gloss or gloss paints. Low traffic areas
                    can work well with flat and matte. However, in the absence
                    of natural light, satin or eggshell may be better.
                  </li>
                  <li>
                    Ceilings Ceilings generally have several imperfections since
                    they are the hardest to smoothen out. You can hide these
                    imperfections with paint. Ceilings also do not need to be
                    washed. So the ideal ceiling paint is 100% acrylic or
                    water-based distemper. Flat or matte finish is best, but if
                    you really want the ceiling to reflect light, you can try
                    eggshell. The latter will highlight imperfections though.
                  </li>
                </ol>

                <h4>Ideas for Paints According to the Room</h4>

                <ol>
                  <li>House painters in Bangalore</li>
                  <li>House painters in Mumbai</li>
                  <li>House painters in Ahmedabad</li>
                  <li>House painters in Hyderabad</li>
                  <li>House painters in Kolkata</li>
                  <li>House painters in Pune</li>
                  <li>House painters in Chennai</li>
                  <li>House painters in Gurgaon</li>
                  <li>House painters in Noida</li>
                </ol>
              </div>
            </div> */}
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
