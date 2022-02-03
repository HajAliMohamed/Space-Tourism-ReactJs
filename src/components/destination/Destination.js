import React, { useState} from 'react';
import "./destination.css"
import Header from "../header/Header"
import Planet from "./planets/Planet"
import { Link, Route, Routes} from "react-router-dom"
import MobileNav from '../header/MobileNav';
import destinations from "src/destinations"
function Destination() {

const [items,setItems] = useState([])

  setItems(destinations)

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

            {
              items.map((i)=>{ 
                return (
                <Route path={`${i.name}`} element={<Planet key={i.name} img={i.images.png} name={i.name} desc={i.description} distance={i.distance} time={i.travel}/>} />

                )
                
              })
            }

          </Routes>
        </div>


    
  </div>;
}

export default Destination;




