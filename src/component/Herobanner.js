import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Herobanner = (props) => {
     return(
          <>
               <div className="hero-banner-area">
                    <div className="container">
                         <div className="row align-items-center">
                              <div className="col-md-7 order-last order-md-first">
                                   <div className="hero-banner-info">
                                        <h2>{props.subtitle}</h2>
                                        <h1>{props.authorname}</h1>
                                        <h3>{props.authorprofesion}</h3>
                                        <ul className="social-media">
                                             <li><a target="_blank" href="https://www.facebook.com/gobindasarkar909"><FaFacebookF /></a></li>
                                             <li><a target="_blank" href="https://twitter.com/gobinda11079775"><FaTwitter /></a></li>
                                             <li><a target="_blank" href="https://www.linkedin.com/in/gobinda-sarkar-909"><FaLinkedinIn /></a></li>
                                             <li><a target="_blank" href="https://www.instagram.com/gobindasarkar909/"><FaInstagram /></a></li>
                                        </ul>
                                   </div>
                              </div>
                              <div className="col-md-5 order-first order-md-last">
                                   <div className="profile-image">
                                        <img src={props.authorimage} alt="gobinda" />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
}
export default Herobanner;