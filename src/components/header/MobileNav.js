import React, { useState } from 'react';
import {Link} from "react-router-dom"
import "./mobileNav.css"
import close from "./icon-close.svg"
function MobileNav() {

    const[clicked,setClick] = useState(false)


    function handleClick(){
        setClick(true)
    }

    if(clicked){
        document.querySelector(".mobile__navbar").classList.remove("open")
    }
  return <div className='mobile__navbar' data-aos="flip-up">

        <img  onClick={handleClick}  className='humb' src={close} alt='humburger'/>

        <ul className='mobile__navbar__lists'>
          <li><span>00</span><Link to='/'>Home</Link></li>
          <li><span>01</span><Link to='/destination/Moon'>Destination</Link></li>
          <li><span>02</span><Link to='/crew/DouglasHurley'>Crew</Link></li>
          <li><span>03</span><Link to='/technology/LaunchVehicle'>Technology</Link></li>
        </ul>

  </div>;
}

export default MobileNav;
