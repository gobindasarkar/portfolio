import React from 'react';
const SingleExperience = (props) => {
     return(
          <>
               <div className="single-experience">
                    <h4 className="experience-name">{props.experiencename}</h4>
                    <p className="experience-info">{props.experienceinfo}</p>
                    <span className="experience-date">{props.experiencedate}</span>
               </div>
          </>
     );
}
export default SingleExperience;