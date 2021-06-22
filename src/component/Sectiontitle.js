import React from 'react';
const Sectiontitle = (props) => {
     return(
          <>
               <div className="section-title">
                    <h2 className="title">{props.sectiontitle}</h2>
               </div>
          </>
     );
}
export default Sectiontitle;