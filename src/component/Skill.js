import React from 'react';
import Singleskill from './Singleskill';
import Skilldata from './Skilldata';
const Skill = () => {
     return(
          <>
               <ul className="skill-list">
                    {
                         Skilldata.map((val, ind) => {
                              return (
                                   <Singleskill key={ind} skillname={val.skillname} />
                              )
                         })
                    }
               </ul>
          </>
     );
}
export default Skill;