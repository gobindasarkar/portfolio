import React from 'react';
import SingleExperience from './SingleExperience';
import Experiencedata from './Experiencedata';
const Experience = () => {
     return(
          <>
               <div className="experience-list">
                    {
                         Experiencedata.map((val, ind) => {
                              return (
                                   <SingleExperience  key={ind} experiencename={val.experiencename} experienceinfo={val.experienceinfo} experiencedate={val.experiencedate} />
                              )
                         })
                    }
               </div>
          </>
     );
}
export default Experience;