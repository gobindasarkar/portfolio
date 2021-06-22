import React from 'react';
import AboutdetailsData from './AboutdetailsData';
import Singleaboutdetails from './Singleaboutdetails';
const Aboutdetails = () => {
     return(
          <>
               <div className="about-details">
                    <ul>
                         {
                              AboutdetailsData.map((val , ind) => {
                                   return (
                                        <Singleaboutdetails  key={ind} name={val.name} content={val.content}  />
                                   )
                              })
                         }
                    </ul>
               </div>
          </>
     );
}
export default Aboutdetails;