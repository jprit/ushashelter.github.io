// import './Style.css';
import React from 'react';


export default class Footer extends  React.Component {


  
  render() {
    return (
      <>
        <footer>
            <div className="main_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul>
                                <li>
                                    <a href="">About us</a>
                                </li>
                                <li>
                                    <a href="">Terms & Condition</a>
                                </li>
                                <li>
                                    <a href="">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="">Blog</a>
                                </li>
                                <li>
                                    <a href="">Near Me</a>
                                </li>
                                <li>
                                    <a href="">Contact Us</a>
                                </li>
                            </ul>

                            <hr />

                            <p className="service_title">Service in</p>

                            <ul className="country_lists">
                                <li>
                                    <span>IND</span>

                                    <ul>
                                        <li>
                                            <a href="">Mumbai</a>
                                        </li>
                                        <li>
                                            <a href="">Kolkata</a>
                                        </li>
                                    </ul>

                                </li>

                            </ul>

                            <hr />

                        </div>

                        <div className="col-md-12  footer_last_row d-flex align-items-center">

                            <a href=""><img src={process.env.PUBLIC_URL + "vendor/img/uclogo.png"} alt="" /></a>

                            <span>© 2014-22 UrbanClap Technologies India Pvt. Ltd.</span>

                            <ul className="social_media_account ">
                                <li>
                                    <i className="fa-brands fa-twitter"></i>
                                </li>

                                <li>
                                    <i className="fa-brands fa-facebook"></i>
                                </li>

                                <li>
                                    <i className="fa-brands fa-instagram"></i>
                                </li>

                                <li>
                                    <i className="fa-brands fa-youtube"></i>
                                </li>

                                <li>
                                    <i className="fa-brands fa-linkedin"></i>
                                </li>

                                <li>
                                    <i className="fa-brands fa-pinterest"></i>
                                </li>
                                
                                
                            </ul>

                            <a href=""><img src={process.env.PUBLIC_URL + "vendor/img/gplay_store.png"} alt="" /></a>

                            <a href=""><img src={process.env.PUBLIC_URL + "vendor/img/aplay_store.png"} alt="" /></a>

                        </div>

                    </div>



                </div>
            </div>
        </footer>
      </>
    );
  }
}




