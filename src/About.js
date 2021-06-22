import React from 'react';
import Aboutarea from './component/Aboutarea';
import Counterup from './component/Counterup';
const About = () => {
     return(
          <>
               <div className="about-page">
                    <Aboutarea />
                    <Counterup />
               </div>
          </>
     );
}
export default About;