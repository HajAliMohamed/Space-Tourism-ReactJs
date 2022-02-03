import React from 'react';
import "./technology.css"
import Header from "../header/Header"
import {Link , Route ,Routes} from "react-router-dom"
import Rocket from './rocket/Rocket';
import MobileNav from '../header/MobileNav';
import technologys from "./technologys"
import LaunchVehicle from "./technologyImages/image-launch-vehicle-portrait.jpg"
import SpacePort from "./technologyImages/image-spaceport-portrait.jpg"
import SpaceCapsule from "./technologyImages/image-space-capsule-portrait.jpg"
function Technology() {


  return <div className='technology' data-aos="zoom-in">
    <MobileNav/>
    <Header/>


   <p> <span>03</span>meet launch 101</p>



    <div className='hero'>

    <ul className='navbar'>
            <li> <Link to="LaunchVehicle">1</Link> </li>
             <li> <Link to="SpacePort">2</Link> </li>
              <li> <Link to="SpaceCapsule">3</Link> </li>
        </ul>

<Routes>


   <Route path={`${technologys[0].id}`} element={<Rocket key={technologys[0].id} name={technologys[0].name} desc={technologys[0].description} img={LaunchVehicle}/>}/>

   <Route path={`${technologys[1].id}`} element={<Rocket key={technologys[1].id} name={technologys[1].name} desc={technologys[1].description} img={SpacePort}/>}/>

   <Route path={`${technologys[2].id}`} element={<Rocket key={technologys[2].id} name={technologys[2].name} desc={technologys[2].description} img={SpaceCapsule}/>}/>


</Routes>
</div>

    


  </div>;
}

export default Technology;
