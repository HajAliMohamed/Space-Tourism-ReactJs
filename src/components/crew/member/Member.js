import React from 'react';
import "./member.css"
function Member(props) {
  return <div className='member' data-aos="zoom-out">
      <div>
          <p>{props.role}</p>
          <p>{props.name}</p>
          <p>{props.bio}</p>
          
      </div>

      <img src={props.img} alt='crew'/>
  </div>;
}

export default Member;
