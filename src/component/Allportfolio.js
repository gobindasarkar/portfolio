import React from 'react';
import Sectiontitle from './Sectiontitle';
import Singleportfolio from './Singleportfolio';
import Portfoliodata from './Portfoliodata';
const Allportfolio = () => {
     return (
          <>
               <section className="portfolio-area section bg-one">
                    <div className="container">
                         <Sectiontitle sectiontitle="portfolio" />
                         <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 ">
                              {
                                   Portfoliodata.map( (val, ind) => {
                                        return (
                                             <Singleportfolio key={ind} portfolioimg={val.portfolioimg} viewicon={val.viewicon} portfolioname={val.portfolioname} portfoliolink={val.portfoliolink} />
                                        )
                                   })
                              }
                         </div>
                    </div>
               </section>
          </>
     );
}
export default Allportfolio;