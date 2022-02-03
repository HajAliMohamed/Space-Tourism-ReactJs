import React from 'react';
import "./destination.css"
import Header from "../header/Header"
import Planet from "./planets/Planet"
import { Link, Route, Routes} from "react-router-dom"
import MobileNav from '../header/MobileNav';
import destinations from "./destinations"
import moon from "./destinationImages/image-moon.webp"
import mars from "./destinationImages/image-mars.webp"
import titan from "./destinationImages/image-titan.webp"
import europa from "./destinationImages/image-europa.webp"
function Destination() {

  console.log(destinations);

  return <div className='destination' data-aos="zoom-in">
    <MobileNav/>
    <Header/>

    <div className='tab'>
        <p> <span>01</span> Pick your destination</p>
        <ul className='navbar'>
            <li> <Link to="Moon">Moon</Link> </li>
             <li> <Link to="Mars">Mars</Link> </li>
              <li> <Link to="Europa">europa</Link> </li>
              <li> <Link to="Titan">titan</Link> </li>
        </ul>
    </div>




        <div className='hero'>
        
        <Routes>

      
    
        
       <Route path={`${destinations[0].name}`} element={<Planet key={destinations[0].name} img={moon} name={destinations[0].name} desc={destinations[0].description} distance={destinations[0].distance} time={destinations[0].travel}/>} />

       <Route path={`${destinations[0].name}`} element={<Planet key={destinations[1].name} img={mars} name={destinations[1].name} desc={destinations[1].description} distance={destinations[1].distance} time={destinations[1].travel}/>} />

       <Route path={`${destinations[0].name}`} element={<Planet key={destinations[2].name} img={europa} name={destinations[2].name} desc={destinations[2].description} distance={destinations[2].distance} time={destinations[2].travel}/>} />

       <Route path={`${destinations[0].name}`} element={<Planet key={destinations[3].name} img={titan} name={destinations[3].name} desc={destinations[3].description} distance={destinations[3].distance} time={destinations[3].travel}/>} />

          </Routes>
        </div>


    
  </div>;
}

export default Destination;




