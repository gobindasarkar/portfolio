import React from 'react';
import Sectiontitle from './Sectiontitle';
import Singleservice from './Singleservice';
import Servicedata from './Servicedata';
const Allservice = () => {
     return (
          <>
               <section className="service-area section bg-one">
                    <div className="container">
                         <Sectiontitle sectiontitle="services" />
                         <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 ">
                              {
                                   Servicedata.map( (val, ind) => {
                                        return (
                                             <Singleservice key={ind} serviceicon={val.serviceicon} servicename={val.servicename} serviceinfo={val.serviceinfo} />
                                        )
                                   })
                              }
                         </div>
                    </div>
               </section>
          </>
     );
}
export default Allservice;