import React from 'react';
import Allservice from './component/Allservice';
import Counterup from './component/Counterup';
const Service = () => {
     return(
          <>
               <div className="service-page">
                    <Allservice />
                    <Counterup />
               </div>
          </>
     );
}
export default Service;