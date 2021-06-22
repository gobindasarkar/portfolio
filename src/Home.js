import React from 'react';
import Herobanner from './component/Herobanner';
import Aboutarea from './component/Aboutarea';
import Service from './component/Service';
import Counterup from './component/Counterup';
import Portfolio from './component/Portfolio';
import Contactarea from './component/Contactarea';
const Home = () => {
     return(
          <>
               <Herobanner subtitle="Hi There! I am"  authorname="gobinda sarkar" authorprofesion="Professional Web Developer & Freelancer" authorimage="images/gobinda.jpg" />
               <Aboutarea />
               <Service />
               <Counterup />
               <Portfolio />
               <Contactarea />
          </>
     );
}
export default Home;