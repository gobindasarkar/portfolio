import React from 'react';
const Singleservice = (props) => {
     return(
          <>
               <div className="col">
                    <div className="single-service">
                         <div className="service-icon">{props.serviceicon}</div>
                         <h4 className="service-name">{props.servicename}</h4>
                         <p className="service-info">{props.serviceinfo}</p>
                    </div>
               </div>
          </>
     );
}
export default Singleservice;