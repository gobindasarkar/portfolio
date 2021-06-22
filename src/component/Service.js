import React from 'react';
import {NavLink} from 'react-router-dom';
import Sectiontitle from './Sectiontitle';
import Singleservice from './Singleservice';
import Servicedata from './Servicedata';
const Service = () => {
     return (
          <>
               <section className="service-area section bg-one">
                    <div className="container">
                         <Sectiontitle sectiontitle="services" />
                         <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 ">
                              {
                                   /* Servicedata.slice(0, 3).map( (val, ind) => {
                                        return (
                                             <Singleservice key={ind} serviceicon={val.serviceicon} servicename={val.servicename} serviceinfo={val.serviceinfo} />
                                        )
                                   }) */
                                   Servicedata.map( (val, ind) => {
                                        return (
                                             ind <= 2 && <Singleservice key={ind} serviceicon={val.serviceicon} servicename={val.servicename} serviceinfo={val.serviceinfo} />
                                        )
                                   })
                              }
                         </div>
                         <div className="view-btn text-center">
                              <NavLink className="primary-btn" exact to="/service">see all</NavLink>
                         </div>
                    </div>
               </section>
          </>
     );
}
export default Service;