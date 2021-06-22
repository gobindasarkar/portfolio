import React from 'react';
const Singleportfolio = (props) => {
     return(
          <>
               <div className="col">
                    <div className="single-portfolio">
                         <div className="portfolio-thumbnail">
                              <img src={props.portfolioimg} alt={props.portfolioname} />
                              <div className="portfolio-overlay">
                                   <a className="view-icon" href={props.portfoliolink} >{props.viewicon}</a>
                              </div>
                         </div>
                         <h4 className="portfolio-name"><a href={props.portfoliolink}>{props.portfolioname}</a></h4>
                    </div>
               </div>
          </>
     );
}
export default Singleportfolio;