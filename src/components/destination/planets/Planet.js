import React from 'react';
import "./planet.css"
function Planet(props) {
  return <div className='planet' data-aos="fade-up">
            <img src={require(props.img)} alt='planet'/>

            <div className='card'>

                <p className='name'>{props.name}</p>
                <p className='desc'>{props.desc}</p>

                <hr/>

                <div>
                    <div>
                        <p>avg. distance</p>
                        <p>{props.distance}</p>
                    </div>
                    <div>
                        <p>est. travel time</p>
                        <p>{props.time}</p>
                    </div>
                </div>
            </div>
  </div>;
}

export default Planet;
