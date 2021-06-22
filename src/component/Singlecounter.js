import React from 'react';
import CountUp from 'react-countup';
const Singlecounter = (props) => {
     return (
          <>
               <div className="col">
                    <div className="single-counter">
                         <div className="counter-icon">{props.icon}</div>
                         <CountUp className="counter" end={props.counter} duration={2} />
                         <h3 className="counter-name">{props.title}</h3>
                    </div>
               </div>
          </>
     )
}
export default Singlecounter;