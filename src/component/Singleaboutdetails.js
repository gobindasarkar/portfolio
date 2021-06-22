import React from 'react';
const Singleaboutdetails = (props) => {
     return(
          <>
               <li><strong>{props.name}</strong><span>:</span>{props.content}</li>
          </>
     );
}
export default Singleaboutdetails;