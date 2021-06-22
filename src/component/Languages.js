import React from 'react';
import Singlelanguages from './Singlelanguages';
import Languagesdata from './Languagesdata';
const Languages = () => {
     return(
          <>
               <ul className="languages-list">
                    {
                         Languagesdata.map((val, ind) => {
                              return (
                                   <Singlelanguages  key={ind} languagesname={val.languagesname} />
                              )
                         })
                    }
               </ul>
          </>
     );
}
export default Languages;