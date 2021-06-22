import React from 'react';
import Sectiontitle from './Sectiontitle';
import Singlecounter from './Singlecounter';
import Counterdata from './Counterdata';
const Counterup = () => {
     return (
          <>
               <div className="counter-area section-top pb-90">
                    <div className="container">
                         <Sectiontitle sectiontitle="fun facts" />
                         <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 ">
                              {
                                   Counterdata.map( (val, ind) => {
                                        return (
                                             <Singlecounter key={ind} icon={val.icon} counter={val.counter} title={val.title} />
                                        )
                                   })
                              }
                              
                         </div>
                    </div>
               </div>
          </>
     )
}
export default Counterup;