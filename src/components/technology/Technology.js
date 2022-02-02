import React, { useEffect, useState } from 'react';
import "./technology.css"
import Header from "../header/Header"
import {Link , Route ,Routes} from "react-router-dom"
import Rocket from './rocket/Rocket';
import MobileNav from '../header/MobileNav';
function Technology() {

  const[items,setItems] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3001/technology")
    .then(res => res.json())
    .then(data => {
      setItems(data)
    } )
  },[])

  return <div className='technology'>
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
    items.map((i)=>{
      return (<Route path={`${i.id}`} element={<Rocket key={i.id} name={i.name} desc={i.description} img={i.images.portrait}/>}/>)
    })
  }
</Routes>
</div>

    


  </div>;
}

export default Technology;
