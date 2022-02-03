import React from 'react';
import "./technology.css"
import Header from "../header/Header"
import {Link , Route ,Routes} from "react-router-dom"
import Rocket from './rocket/Rocket';
import MobileNav from '../header/MobileNav';
import technologys from "./technologys"
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
{
  technologys.map((i)=>{
      return (<Route path={`${i.id}`} element={<Rocket key={i.id} name={i.name} desc={i.description} img={i.images.portrait}/>}/>)
    })
  }
</Routes>
</div>

    


  </div>;
}

export default Technology;
