import React from 'react';
import {NavLink} from 'react-router-dom';
import Sectiontitle from './Sectiontitle';
import Singleportfolio from './Singleportfolio';
import Portfoliodata from './Portfoliodata';
const Portfolio = () => {
     return (
          <>
               <section className="portfolio-area section bg-one">
                    <div className="container">
                         <Sectiontitle sectiontitle="portfolio" />
                         <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 ">
                              {
                                   Portfoliodata.map( (val, ind) => {
                                        return (
                                             ind <= 2 && <Singleportfolio key={ind} portfolioimg={val.portfolioimg} viewicon={val.viewicon} portfolioname={val.portfolioname} portfoliolink={val.portfoliolink} />
                                        )
                                   })
                              }
                         </div>
                         <div className="view-btn text-center">
                              <NavLink className="primary-btn" exact to="/portfolio">see all</NavLink>
                         </div>
                    </div>
               </section>
          </>
     );
}
export default Portfolio;