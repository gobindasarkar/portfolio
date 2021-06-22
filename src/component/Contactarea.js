import React from 'react';
import Sectiontitle from './Sectiontitle';
import Contactform from './Contactform';
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Contactarea = () => {
     return(
          <>
               <section className="contact-area section">
                    <div className="container">
                         <Sectiontitle sectiontitle="contact me" />
                         <div className="row row-cols-1 row-cols-lg-2 ">
                              <div className="col">
                                   <Contactform />
                              </div>
                              <div className="col">
                                   <div className="cont-info">
                                        <div className="cont-info-single">
                                             <FaMapMarkerAlt className="info-icon" />
                                             <h3> Address:</h3>
                                             <p>Satkhira Khunla Bangladesh</p>
                                        </div>
                                        <div className="cont-info-single">
                                             <FaRegEnvelope className="info-icon" />
                                             <h3> Email:</h3>
                                             <p>gobindasarkar909@gmail.com</p>
                                        </div>
                                        <div className="cont-info-single">
                                             <FaPhoneAlt className="info-icon" />
                                             <h3> Whatsapp Number:</h3>
                                             <p>+91 6290459905</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
          </>
     );
}
export default Contactarea;