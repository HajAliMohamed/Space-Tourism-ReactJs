import React from 'react';
import "./rocket.css"
function Rocket(props) {
  return <div className='rocket' data-aos="fade-up">

      <div>
          <p>the technology ...</p>
          <p>{props.name}</p>
          <p>{props.desc}</p>
      </div> 

      <img src={props.img} alt="technology"/>
  </div>;
}

export default Rocket;
