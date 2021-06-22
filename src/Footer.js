import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
     return(
          <>
               <footer className="footer-area">
                    <div className="container">
                         <div className="row align-items-center">
                              <div className="col-md-6 text-center text-md-start">
                                   <div className="copyright-area">
                                        <p>&copy; 2021 by <NavLink to="/">Gobinda Sarkar</NavLink>. All rights reserved.</p>
                                   </div>
                              </div>
                              <div className="col-md-6 text-center text-md-end">
                                   <div className="social-meida-area">
                                        <ul>
                                             <li><a href="https://www.facebook.com/gobindasarkarbabu"><FaFacebookF /></a></li>
                                             <li><a href="https://twitter.com/gobinda11079775"><FaTwitter /></a></li>
                                             <li><a href="https://www.linkedin.com/in/gobinda-sarkar-941219123"><FaLinkedinIn /></a></li>
                                             <li><a href="https://www.instagram.com/gobindasarkar909/"><FaInstagram /></a></li>
                                        </ul>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
          </>
     );
}
export default Footer;